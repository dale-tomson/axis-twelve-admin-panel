# Axis Twelve Admin Panel

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Axis Twelve](https://img.shields.io/badge/Framework-Axis%20Twelve%20v2.0-5fc9f3)](https://github.com/dale-tomson/axis-twelve)
[![HTML5](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive admin dashboard built with the **Axis Twelve CSS Framework v2.0**. This project provides a complete admin panel template with multiple pages, charts, forms, tables, and a clean, professional design.

## 📑 Quick Links

- [Features](#-features)
- [What's Included](#-whats-included)
- [Quick Start](#-quick-start)
- [Pages Overview](#-pages-overview)
- [Customization Guide](#-customization-guide)
- [License](#-license)
- [Attribution](attribution.html)

## 🎨 Features

- **Modern Design** - Clean and professional interface with custom color palette
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Multiple Pages** - Dashboard, Forms, Typography, Tables, Blank Page, and more
- **Interactive Charts** - Beautiful data visualizations using Chart.js
- **Modular Architecture** - Built with Axis Twelve's modular CSS framework
- **Easy Customization** - Well-organized code with CSS custom properties
- **No Copyright Issues** - Original design completely different from existing templates

## 📦 What's Included

```
web-master/
├── index.html              # Main dashboard with charts and stats
├── forms.html              # Comprehensive form examples
├── typography.html         # Typography showcase
├── tables.html             # Table components and variations
├── blank.html              # Blank page template
├── top-menu.html           # Alternative top menu layout
├── attribution.html        # Credits and licenses
├── login.html              # Login page template
├── register.html           # Registration page template
├── assets/
│   ├── css/
│   │   ├── themes.css      # Color palette and theme variables
│   │   └── admin-panel.css # Custom admin panel styles
│   ├── js/
│   │   ├── main.js         # Core JavaScript functionality
│   │   └── dashboard.js    # Chart.js initialization
│   └── images/
│       └── logo.png        # Admin panel logo
└── README.md               # This file
```

## 🚀 Quick Start

### Option 1: Direct Use (No Build Required)

Simply open `index.html` in your web browser. All dependencies are loaded via CDN.

```bash
# Clone or download the project
cd web-master

# Open in browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Option 2: Local Development Server

For a better development experience, use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Color Palette

The admin panel uses a custom color scheme:

```css
--color-primary: #081f37    /* Deep Navy Blue */
--color-secondary: #5fc9f3  /* Bright Cyan */
--color-accent: #2e79ba     /* Medium Blue */
--color-dark: #1e549f       /* Royal Blue */
```

### Customizing Colors

Edit `assets/css/themes.css` to change the color palette:

```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-accent: #your-color;
  --color-dark: #your-color;
}
```

## 📚 Pages Overview

### Dashboard (`index.html`)
- 4 statistics cards with icons
- Revenue line chart (monthly comparison)
- Traffic sources doughnut chart
- Recent orders table

### Forms (`forms.html`)
- Basic form elements (text, email, password, etc.)
- Checkboxes and radio buttons
- Select dropdowns
- File uploads
- Horizontal form layout

### Typography (`typography.html`)
- Headings (H1-H6)
- Text formatting (bold, italic, underline, etc.)
- Text colors
- Lists (ordered and unordered)
- Blockquotes and code blocks

### Tables (`tables.html`)
- Basic table
- Striped table
- Bordered table with hover effects
- Responsive tables

### Blank Page (`blank.html`)
- Template for creating new pages
- Includes sidebar, header, and footer

### Top Menu Layout (`top-menu.html`)
- Alternative layout with horizontal navigation
- Same dashboard content as index.html

### Attribution (`attribution.html`)
- Credits for all third-party libraries
- License information
- Project details

### Login Page (`login.html`)
- Professional login form with gradient background
- Email and password inputs with icons
- Remember me checkbox
- Forgot password link
- Link to registration page

### Registration Page (`register.html`)
- User registration form with validation
- Full name, email, and password fields
- Password strength indicator (weak/medium/strong)
- Confirm password field
- Terms of service checkbox
- Link to login page

## 🛠️ Technologies Used

- **[Axis Twelve v2.0](https://github.com/dale-tomson/axis-twelve)** - CSS Framework (MIT License)
- **[Chart.js](https://www.chartjs.org/)** - Charts and Data Visualization (MIT License)
- **[Font Awesome](https://fontawesome.com/)** - Icons (CC BY 4.0 / SIL OFL 1.1 / MIT)
- **[Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)** - Typography (SIL OFL 1.1)

## 📱 Responsive Breakpoints

The admin panel is fully responsive with the following breakpoints:

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px

On mobile devices:
- Sidebar collapses into a hamburger menu
- Tables become horizontally scrollable
- Search bar is hidden in the header

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Customization Guide

### Adding a New Page

1. Copy `blank.html` as your starting point
2. Update the page title and breadcrumb
3. Add your content in the main content area
4. Update the active navigation link

### Modifying the Sidebar

Edit the sidebar navigation in any HTML file:

```html
<nav>
  <ul class="admin-sidebar__menu">
    <li class="admin-sidebar__item">
      <a href="your-page.html" class="admin-sidebar__link">
        <i class="fas fa-icon admin-sidebar__icon"></i>
        <span class="admin-sidebar__text">Your Page</span>
      </a>
    </li>
  </ul>
</nav>
```

### Adding Charts

Use Chart.js in `assets/js/dashboard.js`:

```javascript
const ctx = document.getElementById('yourChart');
const chart = new Chart(ctx, {
  type: 'line', // or 'bar', 'doughnut', etc.
  data: { /* your data */ },
  options: { /* your options */ }
});
```

## 📄 License

This admin panel template is provided as-is for educational and commercial use. You are free to use, modify, and distribute this template in your projects.

**Important:** All third-party libraries used in this project are subject to their respective licenses. Please review the [Attribution page](attribution.html) for details.

## 🙏 Credits

Created using the [Axis Twelve CSS Framework](https://github.com/dale-tomson/axis-twelve) by Dale Tomson.

For a complete list of credits and attributions, please see the [Attribution page](attribution.html).

## 📞 Support

For issues related to:
- **Axis Twelve Framework**: Visit the [Axis Twelve GitHub repository](https://github.com/dale-tomson/axis-twelve)
- **Chart.js**: Visit the [Chart.js documentation](https://www.chartjs.org/docs/)
- **Font Awesome**: Visit the [Font Awesome documentation](https://fontawesome.com/docs)

## 🔗 Related Links

- [Axis Twelve Framework](https://github.com/dale-tomson/axis-twelve) - The CSS framework powering this admin panel
- [Live Demo](index.html) - See the admin panel in action
- [Attribution Page](attribution.html) - Full credits and licenses
- [MIT License](LICENSE) - Project license

## 🏷️ Tags

`admin-panel` `dashboard` `axis-twelve` `css-framework` `responsive` `template` `html5` `css3` `javascript` `chart-js` `admin-template` `bootstrap-alternative` `modern-ui` `web-dashboard`

---

**Built with ❤️ using Axis Twelve CSS Framework**
