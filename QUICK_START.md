# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Add Your Profile Image

1. Get a square profile photo (800x800px recommended)
2. Save it as `public/profile.png`
3. If you don't have one, the site will use a placeholder automatically

## Step 3: Update Your Information

### Update Social Links & Resume

Edit `src/utils/constants.js`:

```javascript
export const socialLinks = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "mailto:your.email@example.com",
};

export const resumeLink = "https://your-resume-link.pdf";
```

### Update Projects

Edit `src/data/projectsData.js` with your actual projects.

### Update Skills

Edit `src/data/skillsData.js` if needed (already includes popular tech stack).

### Update About Section

Edit `src/components/About.jsx` to personalize your story.

## Step 4: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Step 5: Configure Contact Form (Optional)

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a form and get your form ID
3. Update `src/utils/constants.js`:

```javascript
export const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID";
```

## Step 6: Build & Deploy

```bash
npm run build
```

Then deploy the `dist/` folder to Netlify (see README.md for detailed instructions).

---

**That's it!** Your portfolio is ready. 🎉

For more details, see the main [README.md](README.md).

