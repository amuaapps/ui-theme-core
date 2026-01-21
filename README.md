# @amuaapps/ui-theme-core

Amua Apps UI Theme Core - A foundational design system and theming library providing CSS custom properties (CSS variables) for consistent styling across Amua Apps applications.

## Installation

```bash
npm install @amuaapps/ui-theme-core
```

**Note:** This package is published to GitHub Packages. Ensure your `.npmrc` is configured:

```
@amuaapps:registry=https://npm.pkg.github.com
```

## Usage

### Import the theme

```typescript
import "@amuaapps/ui-theme-core/styles";
```

This imports the CSS file containing all design tokens as CSS custom properties.

### Direct CSS import

If you need to import the CSS file directly:

```css
@import "@amuaapps/ui-theme-core/theme.css";
```

## Design Tokens

All tokens are available as CSS custom properties under `:root` and `.theme-core`:

### Colors

- **Primary:** `--color-primary-50` through `--color-primary-950`
- **Neutral:** `--color-neutral-50` through `--color-neutral-950`
- **Semantic:** Success, Warning, Error, Info variants

### Spacing

- `--spacing-0` through `--spacing-32` (0rem to 8rem)

### Typography

- **Font Families:** `--font-sans`, `--font-mono`
- **Font Sizes:** `--font-size-xs` through `--font-size-5xl`
- **Font Weights:** `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
- **Line Heights:** `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`

### Border Radius

- `--radius-none` through `--radius-full`

### Shadows

- `--shadow-sm` through `--shadow-2xl`

### Z-Index

- `--z-index-dropdown`, `--z-index-modal`, `--z-index-tooltip`, etc.

### Transitions

- `--transition-fast`, `--transition-base`, `--transition-slow`

## Example

```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-base);
  transition: all var(--transition-base);
}
```

## Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Clean build artifacts
npm run clean
```

## Publishing

The package is configured to publish to GitHub Packages:

```bash
npm publish
```

Ensure you have proper authentication configured for GitHub Packages.

## License

MIT
