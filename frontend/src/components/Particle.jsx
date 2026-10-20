import React, { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function Particle() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.floor((width * height) / 10000);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: Math.random() * 0.4 + 0.05,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.7 + 0.2,
        opacitySpeed: (Math.random() * 0.01 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const handleClick = (e) => {
      for (let i = 0; i < 5; i++) {
        particles.push({
          x: e.clientX,
          y: e.clientY,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.2) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: 0.9,
          opacitySpeed: -0.01,
        });
      }
    };

    window.addEventListener("click", handleClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = themeRef.current === "light";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity > 0.9 || p.opacity < 0.1) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        if (isLight) {
          ctx.fillStyle = `rgba(123, 44, 191, ${Math.max(0, Math.min(1, p.opacity * 0.4))})`;
        } else {
          ctx.fillStyle = `rgba(199, 112, 240, ${Math.max(0, Math.min(1, p.opacity))})`;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <canvas
      id="tsparticles"
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default Particle;
