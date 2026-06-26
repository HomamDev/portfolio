# Homam — Portfolio

Personal portfolio website for **Homam**, a Full-Stack Developer. Built with a glassmorphism aesthetic, animated floating tech icons, and dark/light mode support.

![Portfolio Preview](/public/preview.png)

> **Status:** Work in progress — additional content and improvements are planned.

## Tech Stack

| Category       | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 18, Vite 6                   |
| Language       | TypeScript                          |
| Styling        | Tailwind CSS v4, custom CSS utilities |
| UI Components  | shadcn/ui (Radix UI primitives)    |
| Icons          | Lucide React, developer-icons       |
| Fonts          | Outfit, Inter, JetBrains Mono       |
| Animation      | CSS keyframes, Motion               |

## Features

- Glassmorphism UI with frosted-glass cards, pills, and chips
- Animated floating technology icon badges
- Dark / light mode toggle with system preference detection
- Responsive layout (mobile and desktop)
- Gradient text effects and ambient orb backgrounds
- Subtle grid pattern overlay

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- pnpm

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build

```bash
pnpm build
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Main application component
│   └── components/
│       ├── ui/              # shadcn/ui components
│       └── figma/           # Figma-originated components
├── styles/
│   ├── index.css            # Style entry point
│   ├── fonts.css            # Google Fonts imports
│   ├── tailwind.css         # Tailwind config & animations
│   └── theme.css            # Design tokens, glass utilities, color palette
├── imports/                 # Static assets
└── main.tsx                 # Application entry point
```

## Links

- [X (Twitter)](https://x.com/dev108_homam)
- [YouTube](https://www.youtube.com/@HomamDev)

## Acknowledgements

- UI components from [shadcn/ui](https://ui.shadcn.com/) under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md)
- Tech stack icons from [developer-icons](https://github.com/xandemon/developer-icons) by [xandemon](https://xandemon.github.io/developer-icons) under the [MIT License](https://github.com/xandemon/developer-icons/blob/main/LICENSE)
- Photos from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license)
- Original design from [Figma](https://www.figma.com/design/9vZaet6l5Zcq9CEOQeUROo/Portfolio-Design-Request)

---

Built using AI-assisted development workflows.
