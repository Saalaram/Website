# Source Assets & Resources (`src/assets`)

Assets placed here can be imported directly inside React components using JavaScript module imports:

```jsx
import logo from '../assets/logos/logo.svg';
import heroImg from '../assets/images/hero.jpg';

function Header() {
  return <img src={logo} alt="Saalaram" />;
}
```

## Structure

- `src/assets/logos/` — Logos and emblems for direct ES module import
- `src/assets/images/` — Component-specific images
- `src/assets/icons/` — Custom SVG icon components or files
