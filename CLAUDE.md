# Project Context for Claude

## Project Overview
This is a personal website for Jonathan Pho (jonathanpho.com) that is being converted from a static HTML/CSS/JS site into a React application as a learning project. The project was originally bootstrapped with Create React App and has since been migrated to Vite for improved performance and development experience.

## Tech Stack
- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 6.4.1 (migrated from Create React App)
- **Routing**: React Router DOM 6.26.2
- **Styling**: Bootstrap 5.2.3 + React Bootstrap 2.7.2 + Custom CSS
- **Language**: JavaScript (JSX)
- **Package Manager**: npm

## Project Structure
```
react-website/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── About.jsx
│   │   ├── Elect.jsx
│   │   ├── Footer.jsx
│   │   ├── IssuesList.jsx
│   │   ├── Jumbotron.jsx
│   │   └── Navigation.jsx
│   ├── pages/              # Page-level components
│   │   ├── Home.jsx
│   │   └── Issues.jsx
│   ├── images/             # Static image assets
│   ├── App.jsx             # Main app component with routing
│   ├── App.css             # App-level styles
│   ├── index.jsx           # Entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## Key Files

### [src/App.jsx](src/App.jsx)
Main application component that sets up React Router with routes for:
- `/` - Home page
- `/issues` - Issues page

### [src/pages/Home.jsx](src/pages/Home.jsx)
Home page layout that composes:
- Navigation component
- Jumbotron (hero section)
- Elect component
- Footer component

### [src/components/](src/components/)
Reusable components for different sections of the website:
- **Navigation.jsx**: Site navigation/header
- **Jumbotron.jsx**: Hero section
- **Elect.jsx**: Content section (likely political/election related)
- **Footer.jsx**: Site footer
- **IssuesList.jsx**: List of issues (political platform)
- **About.jsx**: About section

## Development Workflow

### Available Scripts
- `npm start` - Runs development server (Vite) at http://localhost:3000
- `npm run build` - Creates production build
- `npm run server` - Preview production build locally

### Development Notes
- The project is a work in progress conversion from static HTML to React
- Some components may have commented out imports or unused code from the migration
- Bootstrap is used for styling alongside custom CSS
- Images are stored in [src/images/](src/images/) directory

## Current State
- Recently migrated from Create React App to Vite (commit: 1535c1b)
- Git status shows clean working directory
- On master branch
- Homepage deployed at: https://www.jonathanpho.com

## Common Tasks
- **Adding a new page**: Create component in [src/pages/](src/pages/), add route in [App.jsx](src/App.jsx)
- **Adding a new component**: Create .jsx file in [src/components/](src/components/), import where needed
- **Updating styles**: Modify [App.css](src/App.css) or [index.css](src/index.css)
- **Adding images**: Place in [src/images/](src/images/) and import in components

## Important Considerations
- This is a learning project, so code quality may vary
- Maintain existing Bootstrap styling patterns when making changes
- The site appears to have political content (election/issues pages)
- Test routing changes carefully as it uses React Router v6
