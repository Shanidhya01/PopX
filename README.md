# PopX

[![License](https://img.shields.io/github/license/Shanidhya01/PopX)](LICENSE) [![Stars](https://img.shields.io/github/stars/Shanidhya01/PopX?style=flat)](https://github.com/Shanidhya01/PopX/stargazers) [![Issues](https://img.shields.io/github/issues/Shanidhya01/PopX)](https://github.com/Shanidhya01/PopX/issues) [![Last Commit](https://img.shields.io/github/last-commit/Shanidhya01/PopX)](https://github.com/Shanidhya01/PopX/commits)

## About

- Repository: https://github.com/Shanidhya01/PopX
- Default branch: `main`
- License: `N/A`

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Languages](#languages)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [Security](#security)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [FAQ](#faq)

## Features

- Production-ready structure
- DX-focused tooling
- Extensible configuration

## Tech Stack

- React
- Vite
- Tailwind CSS
- ESLint

## Languages

- JavaScript: 94.6%
- HTML: 3%
- CSS: 2.4%

## Getting Started

### Prerequisites

- Node.js (recommended LTS)
- NPM (or adjust commands for your package manager)

### Installation

```bash
# Clone the repo
git clone https://github.com/Shanidhya01/PopX.git
cd PopX

# Install dependencies
npm install
```

### Running Locally

```bash
# Start dev server
npm run dev

# Build for production
npm run build
```
## Scripts

| Script | Command | Description |
|---|---|---|
| dev | `vite` | Start development server |
| build | `vite build` | Build production assets |
| lint | `eslint .` | Run linter |
| preview | `vite preview` | Preview production build locally |

### Dependencies

- @heroicons/react ^1.0.6
- @tailwindcss/vite ^4.1.12
- lucide-react ^0.540.0
- react ^19.1.1
- react-dom ^19.1.1
- react-icons ^5.5.0
- react-router-dom ^7.8.1
- tailwindcss ^4.1.12

### Dev Dependencies

- @eslint/js ^9.33.0
- @types/react ^19.1.10
- @types/react-dom ^19.1.7
- @vitejs/plugin-react ^5.0.0
- eslint ^9.33.0
- eslint-plugin-react-hooks ^5.2.0
- eslint-plugin-react-refresh ^0.4.20
- globals ^16.3.0
- vite ^7.1.2

## Configuration

Common variables you may need (examples, edit for your project):

```env
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000
```

## Folder Structure

```text
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── ui
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Heading.jsx
│   │       ├── Input.jsx
│   │       ├── Paragraph.jsx
│   │       └── Radio.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Account.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   └── router.jsx
└── vite.config.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Add more generators
- [ ] Improve prompts and templates
- [ ] Add export formats (PDF/HTML)

## Security

If you discover a vulnerability, please open a private issue or contact the maintainers.
Never commit real secrets. Rotate any exposed credentials immediately.

## License

Distributed under the N/A License. See `LICENSE` for more information.

## Acknowledgements

- GitHub API
- shadcn/ui
- Tailwind CSS
- Supabase Edge Functions

## FAQ

- Why are some sections generic?
  - The generator infers content from repository metadata. Add topics, scripts, and a .env.example to improve results.
- How do I change package manager commands?
  - The generator tries to detect lockfiles. Adjust commands if needed.

---

