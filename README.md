# Modular Worldclock

A small PHP/JavaScript project for displaying world times in a modern UI.

The project includes:
- **World Clock** with multiple cities (Berlin, London, New York, Tokyo)
- **Digital time and date display** per city
- **Analog clock hands** per city
- **Binary Clock** as a second view

## Preview

- Main page: `index.php` (World Clock)
- Second page: `binary.php` (Binary Clock)

## Tech Stack

- **PHP 8.1 (Apache)**
- **Vanilla JavaScript** (no frameworks)
- **HTML/CSS**
- **Docker Compose** for local setup

## Projektstruktur

```text
.
├── docker-compose.yml
└── html/
    ├── index.php
    ├── binary.php
    ├── header.php
    ├── footer.php
    ├── script.js
    └── style.css
```

## Style Guide

Short version of coding and structure rules:

- `STYLEGUIDE_SHORT.md`

## Quick Start with Docker

### Requirements

- Docker Desktop (with Docker Compose)

### Start

Run in the project directory:

```bash
docker compose up -d
```

Then open in your browser:

- http://localhost:8000

### Stop

```bash
docker compose down
```

## Alternative: Local without Docker

If PHP is installed locally:

```bash
php -S localhost:8000 -t html
```

Then open:

- http://localhost:8000

## Timezone Note

The clocks use `Intl.DateTimeFormat` with `data-timezone` values set on HTML elements.
Example:

- `Etc/GMT-1` → GMT+1
- `UTC` → UTC
- `Etc/GMT+5` → GMT-5
- `Etc/GMT-9` → GMT+9

## Customization

- Change cities/timezones: in `html/index.php`
- Change Binary Clock timezone: in `html/binary.php` (`data-timezone`)
- Adjust styling: `html/style.css`
- Adjust logic: `html/script.js`

## License

This project was created as a school project.
If you use it publicly, add a suitable license here (for example MIT).
