<div align="center">

  <img src="src/assets/logo.png" alt="GitHub Finder Logo" width="180" height="180" />

  # GitHub Finder

  **A sleek, terminal-inspired GitHub profile explorer & developer lookup engine.**

  [![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Oxlint](https://img.shields.io/badge/Linter-Oxlint-EA580C?style=for-the-badge&logo=rust&logoColor=white)](https://oxc.rs/)
  [![License](https://img.shields.io/badge/License-MIT-4dcd8d?style=for-the-badge)](LICENSE)

  <br />

  <p align="center">
    <a href="#-about-the-project">About</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-project-structure">Project Structure</a> •
    <a href="#-api-integration">API Integration</a> •
    <a href="#-contributing">Contributing</a>
  </p>

</div>

---

## 🌟 About The Project

**GitHub Finder** is a fast, developer-centric web application crafted to search, discover, and inspect public GitHub profiles with ease.

Designed with a cyber-dark terminal aesthetic, it offers an instant and responsive developer search experience powered by **React 19**, **Vite**, and **Tailwind CSS v4**. With live debounced suggestions, deep profile analytics, and interactive fallback states, discovering open-source contributors has never looked cleaner.

---

## ✨ Key Features

- 🔍 **Real-Time Live Search & Suggestions**
  - Instant typeahead search with debounced requests via `react-use` to respect GitHub API rate limits.
  - Interactive suggestion dropdown showing avatar, display name, and username handles.
- 📊 **Rich Developer Profile Insights**
  - Avatar, full name, username handle, biography, location, and direct external link to GitHub.
  - High-visibility stat cards for **Public Repositories**, **Followers**, **Following**, and **Public Gists**.
- ⌨️ **Keyboard-First Usability**
  - Press `Enter` to search immediately.
  - One-click clear button and keyboard-friendly navigation.
- 🛡️ **Interactive Terminal 404 Recovery**
  - Styled terminal output when a profile isn't found (`$ GitHub Lookup "<username>" - Not Found`).
  - Actionable hints and quick "Try again" navigation to search for another user.
- 🎨 **Modern Cyber-Dark Design System**
  - Built with a curated dark canvas (`#0c1116`), card surfaces (`#11181f`), and neon mint accents (`#4dcd8d`).
  - Styled with typography using **Space Mono** for code elements and **Inter** for crisp content readability.
- ⚡ **Next-Gen Tooling**
  - Instant hot module replacement (HMR) powered by **Vite 8**.
  - High-performance code analysis powered by **Oxlint**.

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 19](https://react.dev/) | Component architecture & modern state management |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe development & interfaces |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) | Next-generation frontend tooling and rapid HMR |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS-first `@theme` styling & utility engine |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | Feather, Ionicons, FontAwesome, and Material Design icons |
| **Utilities** | [react-use](https://github.com/streamich/react-use) | Debouncing search queries (`useDebounce`) |
| **Linter** | [Oxlint](https://oxc.rs/) | Rust-powered ultra-fast linting |
| **API** | [GitHub REST API v3](https://docs.github.com/en/rest) | Public user lookup & suggestions data source |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18.0.0 or higher recommended)
- **npm** (v9.0.0 or higher) or **pnpm** / **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/github-finder.git
   cd github-finder
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles TypeScript and builds production-ready bundle |
| `npm run preview` | Locally previews the production build |
| `npm run lint` | Runs Oxlint across files for fast static code analysis |

---

## 📁 Project Structure

```text
github-finder/
├── public/                 # Static public assets
│   └── favicon.svg         # Browser favicon
├── src/
│   ├── assets/             # Media and branding assets
│   │   └── logo.png        # Application logo
│   ├── components/         # Modular React components
│   │   ├── Bar.tsx         # Bottom highlight feature indicators
│   │   ├── Footer.tsx      # Terminal-style footer with open source quotes
│   │   ├── Nav.tsx         # Navbar with branding & external links
│   │   ├── SearchBar.tsx   # Debounced search input with clear & enter triggers
│   │   ├── Suggetions.tsx  # Dynamic suggestion popover list
│   │   ├── UserNotFound.tsx# Styled terminal-inspired 404 error screen
│   │   ├── UserProfile.tsx # Comprehensive user card and stat counters
│   │   └── Wedget.tsx      # Reusable status badges and pills
│   ├── App.css             # Base application styles
│   ├── App.tsx             # Main application state & API coordinator
│   ├── index.css           # Tailwind v4 configuration, theme & custom fonts
│   └── main.tsx            # Application entry point
├── index.html              # HTML template with Google Fonts (Space Mono & Inter)
├── package.json            # Scripts & project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite & Tailwind CSS plugin configuration
```

---

## 🔌 API Integration

GitHub Finder interacts directly with the **GitHub REST API**:

- **Autocomplete Search:**
  ```http
  GET https://api.github.com/search/users?q={query}&per_page=3&page=1
  ```
- **Profile Fetch:**
  ```http
  GET https://api.github.com/users/{username}
  ```

> [!NOTE]
> The GitHub public API allows up to **60 unauthenticated requests per hour** per IP address. If rate limits are reached, requests will temporarily fail until the hourly quota resets.

---

## 🎨 Design System & Aesthetics

- **Color Palette:**
  - `Background`: `#0c1116` (Deep terminal dark)
  - `Card / Surface`: `#11181f` (Subtle elevated dark)
  - `Primary Accent`: `#4dcd8d` (Vibrant neon mint)
  - `Border / Dividers`: `#374151` / `#1f2937`
- **Typography:**
  - **Space Mono**: Used for headings, badges, and terminal-style metrics.
  - **Inter**: Used for clean, legible profile information and bios.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br />

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com">Amal</a> • Open source minds power the world.</sub>
</div>
