# Personal Portfolio Website — Full Stack Course Submission

**Student Name:** Ayush Sharma  
**Course:** Full Stack Web Development  
**Institution:** JK Lakshmipat University, Jaipur  

---

## 🌟 Overview
A modern, responsive personal portfolio web application built with **React** (`.jsx`), **Vite**, and **CSS3**. It showcases projects, technical skills, certifications, and educational achievements with dark-mode glassmorphic styling, interactive particle background, and responsive layouts across all device viewports.

---

## 🚀 Tech Stack
- **Frontend Framework:** React 19 (JSX)
- **Build Tool & Bundler:** Vite
- **UI & Grid System:** React Bootstrap & Bootstrap 5
- **Routing:** React Router DOM (v6)
- **Icons & Graphics:** React Icons (FontAwesome, SimpleIcons, AntDesign, BoxIcons)
- **Interactive Effects:** Typewriter Effect, Custom HTML5 Starry Particle Canvas, Tilt Effect

---

## 📁 Clean Folder Structure

```
frontend/
├── public/                     # Static files served directly (root-level assets)
│   ├── Ayush_Sharma_Resume.pdf # Downloadable resume PDF
│   ├── Ayush_Sharma_Resume.png # High-resolution resume preview
│   ├── favicon.png             # Browser tab favicon
│   └── manifest.json           # Web app manifest
├── src/
│   ├── assets/                 # Component-imported media & vector icons
│   │   ├── Projects/           # Screenshots for featured projects
│   │   ├── TechIcons/          # SVG icons for languages & frameworks
│   │   └── ...                 # Avatars & illustrations
│   ├── components/             # Modular React JSX components
│   │   ├── About/              # AboutCard, Techstack, Toolstack, Github
│   │   ├── Home/               # Home, Home2, Type
│   │   ├── Projects/           # Projects, ProjectCards
│   │   ├── Resume/             # ResumeNew
│   │   ├── Footer.jsx          # Social links & copyright
│   │   ├── Navbar.jsx          # Responsive navigation bar
│   │   ├── Particle.jsx        # Lightweight canvas particle background
│   │   ├── Pre.jsx             # Preloader
│   │   └── ScrollToTop.jsx     # Route change scroll reset
│   ├── App.css                 # Application-level styling
│   ├── App.jsx                 # Main application router
│   ├── index.css               # Global typography & reset styles
│   ├── main.jsx                # React root entry point
│   └── style.css               # Theme tokens, custom animations & utilities
├── index.html                  # HTML entry point with metadata
├── package.json                # Project dependencies & npm scripts
└── vite.config.js              # Vite configuration
```

---

## 💻 How to Run Locally

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build for Production (Optional):**
   ```bash
   npm run build
   ```
