# Ruchitha Thota - Portfolio Website

A stunning, cinematic portfolio website showcasing data analytics expertise with luxury aesthetics, 3D effects, and smooth animations.

## 🌟 Features

- **Cinematic Design**: Glassmorphism, copper-gold accents, and deep charcoal backgrounds
- **3D Effects**: Floating elements, parallax backgrounds, and flip animations
- **Dark/Light Theme**: Seamless theme toggle with smooth transitions
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion, AOS.js scroll reveals, and micro-interactions
- **Interactive Sections**:
  - Hero with typewriter effect and floating 3D elements
  - Animated counters and skill bars
  - Timeline-based experience section
  - Swiper carousel for projects
  - Flip certification cards
  - Contact form with confetti explosion

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, AOS.js
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Carousel**: Swiper.js
- **Scroll**: react-scroll
- **Type Animations**: react-type-animation

## 📂 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── profile.jpg
│   ├── hero-bg.jpg
│   └── project[1-4].jpg
├── components/
│   ├── ui/             # shadcn UI components
│   ├── Preloader.tsx   # Loading animation
│   ├── Header.tsx      # Navigation header
│   ├── ThemeToggle.tsx # Dark/Light mode toggle
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Project showcase
│   ├── Skills.tsx      # Technical skills
│   ├── Certification.tsx # Certifications
│   ├── Education.tsx   # Educational background
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with social links
├── pages/
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
└── index.css           # Global styles & design system
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Charcoal (#1C1C1C)
- **Secondary**: Copper Gold (#C08457)
- **Accent**: Elegant Green (#16A34A)
- **Light**: Clean Ivory (#F5F5F4)
- **Muted**: Neutral Gray (#A3A3A3)
- **Silver**: Shimmer (#D6D3D1)

### Typography
- **Headings**: Poppins ExtraBold
- **Body**: Inter Regular

### Effects
- Glassmorphism with blur
- Copper glow on hover
- Floating animations
- Shimmer effects
- Parallax backgrounds

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Customization Guide

### Replace Profile Image
Replace `src/assets/profile.jpg` with your professional headshot.

### Update Resume PDF
Replace `public/assets/resume.pdf` with your actual resume.

### Modify Project Images
Replace project images in `src/assets/`:
- `project1.jpg` - Customer Churn Prediction
- `project2.jpg` - Healthcare Diabetes Platform
- `project3.jpg` - Student Retention Model
- `project4.jpg` - ETL Pipeline Automation

### Update Personal Information
Edit the following files to update your information:

**Contact Details** (`src/components/Contact.tsx`):
```typescript
const contactInfo = [
  { label: "Location", value: "Your Location" },
  { label: "Email", value: "your.email@example.com" },
  { label: "LinkedIn", value: "linkedin.com/in/yourprofile" },
  // ... etc
];
```

**Experience** (`src/components/Experience.tsx`):
Update the `experiences` array with your work history.

**Projects** (`src/components/Projects.tsx`):
Update the `projects` array with your portfolio projects.

**Skills** (`src/components/Skills.tsx`):
Modify `skillCategories` and `topSkills` arrays.

**Certifications** (`src/components/Certification.tsx`):
Update the `certifications` array.

**Education** (`src/components/Education.tsx`):
Update the `education` array.

### Customize Colors
Edit `src/index.css` and modify CSS variables in the `:root` and `.dark` selectors:

```css
:root {
  --primary: ...;
  --secondary: ...;
  --accent: ...;
}
```

### Adjust Animations
Modify animation settings in `tailwind.config.ts` under the `keyframes` and `animation` sections.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All sections adapt gracefully to different screen sizes.

## ⚡ Performance

- Lazy-loaded images
- Optimized animations (60fps)
- Tree-shaken components
- Minimal bundle size
- Fast initial load with preloader

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

© 2025 Ruchitha Thota - All Rights Reserved

## 🤝 Contact

- **Email**: ruchithathota2906@gmail.com
- **LinkedIn**: [linkedin.com/in/ruchithathota](https://linkedin.com/in/ruchithathota)
- **GitHub**: [github.com/Ruchitha52](https://github.com/Ruchitha52)
- **Portfolio**: [applywizz-ruchithathota.vercel.app](https://applywizz-ruchithathota.vercel.app)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
