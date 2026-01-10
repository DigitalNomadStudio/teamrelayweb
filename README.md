# TeamRelay Website

Beautiful, modern website for TeamRelay - the real-time translation app for teams.

## 🌟 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: Built with accessibility best practices

## 🚀 Quick Start

Simply open `index.html` in your browser or deploy to any static hosting service.

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/DigitalNomadStudio/teamrelayweb.git
cd teamrelayweb
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## 📁 File Structure

```
teamrelayweb/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # Interactive features
└── README.md       # This file
```

## 🎨 Design Features

- **Color Scheme**: Red (#FF3B30), Yellow (#FFCC00), Blue (#007AFF)
- **Typography**: Inter font family for modern, clean text
- **Animations**: Smooth scroll, fade-in effects, floating elements
- **Sections**:
  - Hero with animated background
  - Features grid with hover effects
  - How It Works with step-by-step guide
  - Supported Languages showcase
  - Use Cases examples
  - Download section with App Store button
  - Footer with links

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select main branch as source
4. Your site will be live at `https://digitalnomadstudio.github.io/teamrelayweb/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel

1. Import your GitHub repository
2. Deploy with zero configuration
3. Automatic HTTPS and CDN

## 🔧 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #FF3B30;
    --secondary: #FFCC00;
    --accent: #007AFF;
    /* ... more variables */
}
```

### Content

Edit `index.html` to update:
- Text content
- Feature descriptions
- Language list
- Links and buttons

### Animations

Modify `script.js` to adjust:
- Scroll effects
- Intersection observers
- Counter animations
- Parallax effects

## 📱 App Store Link

Update the App Store button link in `script.js` when your app is published:

```javascript
// Replace the alert with actual App Store URL
window.location.href = 'https://apps.apple.com/app/teamrelay/YOUR_APP_ID';
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This website is part of the TeamRelay project.

## 🔗 Links

- [TeamRelay iOS App Repository](https://github.com/DigitalNomadStudio/the-Dressing-Room)
- [Website](https://digitalnomadstudio.github.io/teamrelayweb/)

---

Built with ❤️ for TeamRelay
