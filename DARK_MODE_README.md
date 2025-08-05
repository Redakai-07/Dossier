# Dark Mode Implementation

This project now includes a comprehensive dark mode and light mode feature with the following components:

## Features

### 🌙 Dark Mode / ☀️ Light Mode
- **Theme Toggle**: Beautiful animated toggle button in the navbar
- **Persistent Storage**: Theme preference is saved in localStorage
- **System Preference**: Automatically detects user's system theme preference
- **Smooth Transitions**: All theme changes include smooth CSS transitions
- **Responsive Design**: Theme toggle works on both desktop and mobile

## Implementation Details

### Theme Context (`src/contexts/ThemeContext.tsx`)
- Manages theme state across the entire application
- Provides `useTheme()` hook for components
- Handles localStorage persistence
- Detects system theme preference

### CSS Variables (`src/index.css`)
- Comprehensive CSS custom properties for both themes
- Smooth transitions with `.theme-transition` class
- Theme-aware styling for all components

### Components Updated
- **Navbar**: Added theme toggle button with sun/moon icons
- **Hero**: Updated background and text colors
- **Footer**: Updated background and text colors
- **Layout**: Wrapped with ThemeProvider

### Theme Toggle Button
- Animated toggle switch with sun and moon icons
- Hover effects and smooth transitions
- Accessible with proper ARIA labels
- Works on both desktop and mobile layouts

## Usage

### For Developers
```tsx
import { useTheme } from '../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};
```

### CSS Variables Available
```css
/* Background Colors */
--bg-primary: #0f0f23 (dark) / #ffffff (light)
--bg-secondary: #1a1a2e (dark) / #f8fafc (light)
--bg-tertiary: #16213e (dark) / #f1f5f9 (light)

/* Text Colors */
--text-primary: rgba(255, 255, 255, 0.95) (dark) / #1e293b (light)
--text-secondary: rgba(255, 255, 255, 0.7) (dark) / #475569 (light)
--text-muted: rgba(255, 255, 255, 0.5) (dark) / #64748b (light)

/* Accent Colors */
--accent-primary: #3b82f6
--accent-secondary: #06b6d4
--accent-tertiary: #8b5cf6

/* Borders and Shadows */
--border-primary: rgba(59, 130, 246, 0.3) (dark) / rgba(59, 130, 246, 0.2) (light)
--shadow-primary: rgba(0, 0, 0, 0.3) (dark) / rgba(0, 0, 0, 0.1) (light)
```

## Browser Support
- Modern browsers with CSS custom properties support
- Graceful fallback to dark mode for older browsers
- LocalStorage support for theme persistence

## Accessibility
- High contrast ratios in both themes
- Proper ARIA labels on theme toggle
- Keyboard navigation support
- Screen reader friendly

## Future Enhancements
- Additional theme options (auto, custom)
- Theme-specific animations
- Component-specific theme overrides
- Theme-aware images and icons 