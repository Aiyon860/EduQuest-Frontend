# EduQuest 🎓

EduQuest is a modern educational web application frontend built with React, TypeScript, and Vite. This project provides a comprehensive platform for educational content and interactive learning experiences.

## ✨ Features

- **Modern React 19** with hooks and functional components
- **TypeScript** for type safety and better development experience
- **Vite** for blazing fast development and build times
- **Tailwind CSS** for responsive and modern UI design
- **Shadcn/ui** components for consistent design system
- **React Router** for client-side navigation
- **Framer Motion** for smooth animations
- **Zustand** for state management
- **React Hook Form** for form handling
- **ESLint** for code quality and consistency

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd EduQuest
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

### Development

1. **Start the development server:**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

2. **Open your browser:**
   Navigate to `http://localhost:5173` to see the application running.

   The page will automatically reload when you make changes to the source code.

## 🛠️ Available Scripts

- **`npm run dev`** - Starts the development server with hot reload
- **`npm run build`** - Creates an optimized production build
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## 📁 Project Structure

```
EduQuest/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Shadcn/ui components
│   ├── pages/            # Page components
│   │   └── LandingPage/  # Landing page components
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── assets/           # Images, icons, etc.
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── components.json       # Shadcn/ui configuration
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first CSS framework
- **Shadcn/ui** for pre-built accessible components
- **CSS Variables** for theme customization

## 🧪 Building for Production

1. **Create a production build:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

   The build artifacts will be stored in the `dist/` directory.

## 🔧 Configuration

### Adding New UI Components

This project uses Shadcn/ui components. To add new components:

```bash
npx shadcn@latest add <component-name>
```

### Environment Variables

Create a `.env` file in the root directory for environment-specific variables:

```env
VITE_API_URL=your_api_url_here
VITE_APP_NAME=EduQuest
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the ESLint configuration provided
- Use TypeScript for type safety
- Follow React best practices and hooks patterns
- Write meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **Port already in use:**
   - The development server runs on port 5173 by default
   - If the port is busy, Vite will automatically use the next available port

2. **Module not found errors:**
   - Make sure all dependencies are installed: `npm install`
   - Clear node_modules and reinstall if needed: `rm -rf node_modules package-lock.json && npm install`

3. **TypeScript errors:**
   - Check your `tsconfig.json` configuration
   - Ensure all imported modules have proper type definitions

## 📞 Support

If you have any questions or need help with setup, please:
- Check the existing issues in the repository
- Create a new issue with detailed information about your problem
- Reach out to the development team

---

**Happy coding! 🚀**
