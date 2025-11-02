# 🚀 Lakshmi Deepak Neeli - Portfolio Website

A modern, premium developer portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Features glassmorphism effects, smooth animations, and a fully responsive design.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## ✨ Features

- 🎨 **Modern Design**: Clean, futuristic UI with glassmorphism and gradient effects
- 🎬 **Smooth Animations**: Powered by Framer Motion for delightful user experience
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- 🎯 **Performance Optimized**: Fast loading with Vite's lightning-fast build
- 🌈 **Custom Theming**: Beautiful gradient colors and custom animations
- 🔍 **SEO Friendly**: Semantic HTML and meta tags
- ♿ **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **React Icons** - Icon Library

## 📁 Project Structure

```
MyPorfolio/
├── public/
│   ├── profile.png          # Your profile image (add your image here)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with glassmorphism
│   │   ├── Hero.jsx         # Hero section with profile image
│   │   ├── About.jsx        # About section with timeline
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Skills.jsx       # Skills grid
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   ├── projectsData.js  # Project data
│   │   └── skillsData.js    # Skills data
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Custom scroll animation hook
│   ├── styles/
│   │   └── theme.css        # Custom theme styles
│   ├── utils/
│   │   └── constants.js     # Constants and configuration
│   ├── App.jsx              # Main App component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd MyPorfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Place your profile image as `public/profile.png`
   - Recommended size: 800x800px (square, high quality)
   - Supported formats: PNG, JPG, WebP

4. **Update your information**
   - Edit `src/utils/constants.js` to update social links, email, etc.
   - Edit `src/data/projectsData.js` with your actual projects
   - Edit `src/data/skillsData.js` to customize your skills
   - Update the About section in `src/components/About.jsx`

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 📝 Configuration

### Update Social Links

Edit `src/utils/constants.js`:

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
};

export const resumeLink = "https://your-resume-link.pdf";
```

### Configure Formspree (Contact Form)

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account and a new form
3. Copy your form ID
4. Update `src/utils/constants.js`:

```javascript
export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

### Customize Projects

Edit `src/data/projectsData.js` to add your projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description...",
    image: "path/to/image.jpg",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com",
  },
  // Add more projects...
];
```

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

Preview the production build:

```bash
npm run preview
```

## 🌐 Deployment to Netlify

### Method 1: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

4. **Follow the prompts** to connect to your Netlify account or create one

### Method 2: Netlify Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Go to [Netlify](https://www.netlify.com/)**
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - Click "Deploy site"

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Method 3: Drag & Drop

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Go to [Netlify Drop](https://app.netlify.com/drop)**
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

### Netlify Configuration (Optional)

Create `netlify.toml` in the root directory:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

### Animations

Adjust animation timings and effects in individual components using Framer Motion variants.

### Sections

All sections are modular components. You can:
- Reorder sections in `src/App.jsx`
- Add new sections by creating new components
- Remove sections you don't need

## 🔧 Troubleshooting

### Profile image not showing
- Ensure the image is named `profile.png` in the `public/` folder
- Check file size (recommended < 500KB)
- Try using a different image format (PNG/JPG)

### Form not working
- Verify your Formspree form ID is correct
- Check browser console for errors
- Ensure Formspree form is active

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be v16+)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Lakshmi Deepak Neeli**
- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

---

⭐ Star this repo if you find it helpful!

