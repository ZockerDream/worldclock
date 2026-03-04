# Short Style Guide

This style guide defines the key conventions for this project.

## 1) General

- Language for comments and documentation: **English**.
- Keep it simple: avoid unnecessary dependencies or frameworks.
- Keep changes small and focused.

## 2) File Structure

- Pages live in `html/` (`index.php`, `binary.php`).
- Reusable layout parts belong in `header.php` and `footer.php`.
- Core logic stays in `script.js`, core styling in `style.css`.

## 3) HTML/PHP

- Use BEM-like class naming (`block__element--modifier`).
- Use clear, semantic wrappers per component.
- Keep PHP limited to simple template tasks (includes, small loops, dynamic values).

## 4) CSS

- Use design tokens from `:root` (colors, spacing, font).
- Do not add new hardcoded values when a matching CSS variable token exists.
- Keep existing component naming patterns (`app-*`, `clock-*`, `binary-*`).

## 5) JavaScript

- Use `camelCase` for function names.
- Prefer guard clauses and return early when elements are missing.
- Keep DOM selectors and data attributes consistent (`data-timezone`, `data-col`, `data-bit`).

## 6) Time/Timezone Logic

- Use `Intl.DateTimeFormat` for time output.
- Configure timezones only through `data-timezone` attributes in HTML.
- When adding cities, always update both offset labels and `data-timezone`.

## 7) Quality Before Merge

- Run a quick local check: `docker compose up -d` and test in the browser.
- Visually verify both pages: World Clock and Binary Clock.
- Avoid introducing dead classes, unused selectors, or obvious duplicate logic.