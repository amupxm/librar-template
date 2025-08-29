# React Component Library Template 🚀

A modern, production-ready template for creating React component libraries with TypeScript, Vite, and Storybook.

[![npm version](https://img.shields.io/npm/v/your-package-name.svg)](https://www.npmjs.com/package/your-package-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://storybook.js.org/)

## ✨ Features

- ⚡️ **Blazing Fast** - Built with Vite and SWC for lightning-fast builds
- 🔷 **TypeScript First** - Full TypeScript support with proper type definitions
- 📚 **Storybook Ready** - Component documentation and testing out of the box
- 🎨 **CSS Modules** - Scoped styling with CSS Modules support
- 🔧 **Multiple TS Configs** - Separate configs for app, library, and build tools
- 📦 **Tree Shakable** - ESM and UMD builds for optimal bundle size
- 🧪 **Demo App** - Built-in demo app for component testing
- 📖 **Auto Docs** - Automatic documentation generation
- 🚀 **NPM Ready** - Pre-configured for npm publishing

## 🚀 Quick Start

### Use this template

1. **Click "Use this template"** button above ☝️
2. **Clone your new repository**
3. **Install dependencies and start developing!**

```bash
git clone https://github.com/amupxm/librar-template.git
cd your-component-library
npm install # or yarn/pnpm

# Start development
npm run dev          # Demo app at http://localhost:5173
npm run storybook    # Storybook at http://localhost:6006
```

### Or fork and customize

```bash
git clone https://github.com/amupxm/librar-template.git
cd react-component-library-template
npm install
```

## 📁 Project Structure

```
├── src/
│   ├── components/          # Your component library
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.module.css
│   │   │   ├── Button.stories.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── demo/               # Demo application
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.html
│   ├── types/              # Type definitions
│   └── index.ts            # Main library export
├── .storybook/             # Storybook configuration
├── dist/                   # Built library
├── tsconfig.json           # Base TypeScript config
├── tsconfig.lib.json       # Library build config
├── tsconfig.app.json       # Demo app config
├── tsconfig.node.json      # Build tools config
└── vite.config.ts          # Vite configuration
```

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev              # Start demo app (http://localhost:5173)
npm run storybook        # Start Storybook (http://localhost:6006)

# Building
npm run build            # Build library for publishing
npm run build:demo       # Build demo app
npm run build-storybook  # Build Storybook

# Type Checking
npm run type-check       # Check all TypeScript files
npm run type-check:lib   # Check library files only

# Preview
npm run preview          # Preview demo build
npm run preview:demo     # Preview demo build
```

### Creating Components

1. **Create component folder** in `src/components/`
2. **Add your component** with TypeScript interfaces
3. **Create CSS module** for styling (optional)
4. **Add Storybook story** for documentation
5. **Export from index files**

Example structure:
```bash
src/components/MyComponent/
├── MyComponent.tsx       # Component implementation
├── MyComponent.module.css # Styles (optional)
├── MyComponent.stories.ts # Storybook story
└── index.ts              # Exports
```

Example component:
```typescript
// src/components/MyComponent/MyComponent.tsx
import styles from './MyComponent.module.css';

export interface MyComponentProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  variant = 'primary' 
}) => {
  return (
    <div className={`${styles.component} ${styles[variant]}`}>
      {title}
    </div>
  );
};
```

Export your component:
```typescript
// src/components/MyComponent/index.ts
export { MyComponent } from './MyComponent';
export type { MyComponentProps } from './MyComponent';

// src/components/index.ts
export * from './MyComponent';
```

## 📦 Customizing for Your Library

### 1. Update Package Information

Edit `package.json`:
```json
{
  "name": "@amupxm/librar-template",
  "version": "1.0.0",
  "description": "Your amazing component library",
  "author": "Amup Mokarramifar",
  "repository": {
    "type": "git",
    "url": "https://github.com/amupxm/librar-template"
  }
}
```

### 2. Update Library Name in Vite Config

Edit `vite.config.ts`:
```typescript
build: {
  lib: {
    entry: resolve(__dirname, 'src/index.ts'),
    name: 'YourComponentLibrary', // Change this
    formats: ['es', 'umd'],
    fileName: (format) => `your-component-library.${format}.js`, // And this
  }
}
```

### 3. Replace Sample Components

- Remove sample `Button` and `Card` components
- Add your own components following the same structure
- Update exports in `src/components/index.ts`

### 4. Update Documentation

- Modify this README for your library
- Update Storybook stories
- Add component documentation

## 🚀 Publishing

### Prepare for Publishing

1. **Build your library**:
   ```bash
   npm run build
   ```

2. **Test locally**:
   ```bash
   npm link
   # In another project
   npm link your-component-library
   ```

3. **Login to npm**:
   ```bash
   npm login
   ```

4. **Publish**:
   ```bash
   npm publish
   # For scoped packages
   npm publish --access public
   ```

### Automated Publishing with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 🎯 Best Practices

### Component Guidelines

- ✅ Use TypeScript interfaces for all props
- ✅ Provide default values for optional props
- ✅ Use CSS Modules for styling
- ✅ Write Storybook stories for all components
- ✅ Export types alongside components
- ✅ Keep components focused and composable

### File Organization

- ✅ One component per folder
- ✅ Co-locate related files (component, styles, stories, tests)
- ✅ Use index.ts files for clean imports
- ✅ Separate concerns (components vs utilities vs types)

### TypeScript Configuration

- ✅ Strict mode enabled
- ✅ Proper module resolution
- ✅ Separate configs for different build targets
- ✅ Type declarations included in build

## 📚 Built-in Examples

This template includes two example components:

### Button Component
- Multiple variants (primary, secondary, danger)
- Different sizes (small, medium, large)
- Disabled state
- Click handling
- Full TypeScript support

### Card Component
- Optional title
- Configurable shadows
- Variable padding
- Flexible content

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces  
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [Storybook](https://storybook.js.org/) - Tool for building UI components in isolation
- [SWC](https://swc.rs/) - Rust-based platform for the Web

## 💡 Tips

- Use `npm run dev` during development to see your components in action
- Use `npm run storybook` to develop components in isolation
- Run `npm run type-check` before committing to catch TypeScript errors
- Update version in `package.json` before publishing
- Consider semantic versioning for releases

---

**Happy coding!** 🎉 If you found this template helpful, please ⭐ star this repository!