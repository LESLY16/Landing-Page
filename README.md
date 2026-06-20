# PDS Home Page

Website for PinnacleDevStudio — the public homepage and marketing site for pinnacledevstudio.com.

Live demo: https://pinnacledevstudio.com

## Table of contents
- [About](#about)
- [Features](#features)
- [Technologies](#technologies)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Run locally](#run-locally)
- [Development & build](#development--build)
- [Project structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About
PDS Home Page is a static website (HTML, CSS, JavaScript) that serves as the marketing and information site for PinnacleDevStudio. The repository contains the website source files and assets used to build and deploy the live site.

## Features
- Responsive landing/home page
- Mobile-first design and layout
- Information sections for services, portfolio, contact
- Simple, easily editable HTML/CSS/JS codebase
- Ready for GitHub Pages or static hosting

## Technologies
- JavaScript (~61%)
- CSS (~29%)
- HTML (~10%)

(Percentages reflect the repository language composition.)

## Getting started

### Prerequisites
- Git
- A basic static web server to preview the site (many options provided below)

### Run locally (quick)
1. Clone the repository:
   ```bash
   git clone https://github.com/LESLY16/PDS-HOME-PAGE.git
   cd PDS-HOME-PAGE
   ```
2. If the site is purely static (HTML/CSS/JS), you can preview it with a simple server:

   - Python 3:
     ```bash
     python -m http.server 8000
     # then open http://localhost:8000 in your browser
     ```

   - Node.js (serve):
     ```bash
     npm install -g serve
     serve .
     # then open the provided local URL in your browser
     ```

3. If the project includes a package.json (check the repo), run:
   ```bash
   npm install
   npm start    # or `npm run dev` if defined
   ```

## Development & build
- Edit the HTML files in the project root or appropriate subfolders.
- Update styles in the CSS files and scripts in the JS folder.
- If a build tool (Webpack, Vite, etc.) is present, use the scripts defined in package.json:
  ```bash
  npm run build
  npm run preview
  ```
  (Replace with the actual commands from package.json if present.)

## Project structure
A typical structure for this repo might look like:
```
/
├─ index.html
├─ about.html
├─ css/
│  └─ styles.css
├─ js/
│  └─ main.js
├─ images/
└─ README.md
```
(Adjust to match the actual files in the repository.)

## Deployment
This repository is ready to be deployed to any static host:
- GitHub Pages: Enable Pages in repo settings and select the branch (e.g., `main`) and folder (`/` or `/docs`).
- Netlify / Vercel: Connect the repository and configure build settings (if any).
- S3 / CloudFront: Upload the static files to your S3 bucket and configure hosting.

## Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-change`
3. Make changes and commit: `git commit -m "Add feature"`
4. Push branch and open a Pull Request

Please include:
- A clear description of the change
- Screenshots for visual changes
- Any testing instructions

If you have a preferred contribution guideline or code style, add it as CONTRIBUTING.md.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Contact
- Repository: https://github.com/LESLY16/PDS-HOME-PAGE
- Owner: @LESLY16
- Website: https://pinnacledevstudio.com

---

Files added/updated by the project maintainer automation on behalf of LESLY16.
