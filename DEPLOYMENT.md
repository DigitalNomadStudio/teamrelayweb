# Deployment Guide

## GitHub Pages (Recommended)

Your website is ready to be deployed on GitHub Pages!

### Steps:

1. **Go to your repository on GitHub:**
   - Visit: https://github.com/DigitalNomadStudio/teamrelayweb

2. **Enable GitHub Pages:**
   - Click on **Settings** (top right)
   - Scroll down to **Pages** (left sidebar)
   - Under **Source**, select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**

3. **Wait for deployment:**
   - GitHub will build and deploy your site (usually takes 1-2 minutes)
   - You'll see a message: "Your site is live at https://digitalnomadstudio.github.io/teamrelayweb/"

4. **Visit your website:**
   - https://digitalnomadstudio.github.io/teamrelayweb/

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to your repository with your domain name:
   ```
   www.teamrelay.com
   ```

2. Configure DNS settings with your domain provider:
   - Add a CNAME record pointing to: `digitalnomadstudio.github.io`

3. In GitHub Pages settings, enter your custom domain

## Alternative Deployment Options

### Netlify

1. **Sign up at [Netlify](https://www.netlify.com/)**

2. **Connect your GitHub repository:**
   - Click "New site from Git"
   - Choose GitHub
   - Select `teamrelayweb` repository

3. **Deploy settings:**
   - Build command: (leave empty)
   - Publish directory: `/`
   - Click "Deploy site"

4. **Your site will be live at:**
   - `https://your-site-name.netlify.app`
   - You can customize the subdomain or add a custom domain

**Benefits:**
- Automatic deployments on every push
- Free SSL certificate
- Custom domain support
- Form handling
- Serverless functions support

### Vercel

1. **Sign up at [Vercel](https://vercel.com/)**

2. **Import your repository:**
   - Click "New Project"
   - Import from GitHub
   - Select `teamrelayweb`

3. **Deploy:**
   - No configuration needed
   - Click "Deploy"

4. **Your site will be live at:**
   - `https://teamrelayweb.vercel.app`

**Benefits:**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant deployments
- Preview deployments for pull requests

### Cloudflare Pages

1. **Sign up at [Cloudflare Pages](https://pages.cloudflare.com/)**

2. **Connect GitHub:**
   - Click "Create a project"
   - Connect your GitHub account
   - Select `teamrelayweb`

3. **Build settings:**
   - Framework preset: None
   - Build command: (leave empty)
   - Build output directory: `/`

4. **Deploy**

**Benefits:**
- Cloudflare's global network
- Unlimited bandwidth
- Free SSL
- DDoS protection
- Analytics

## Local Testing

Before deploying, test locally:

### Using Python:
```bash
cd teamrelayweb
python -m http.server 8000
# Visit http://localhost:8000
```

### Using Node.js:
```bash
cd teamrelayweb
npx http-server
# Visit http://localhost:8080
```

### Using PHP:
```bash
cd teamrelayweb
php -S localhost:8000
# Visit http://localhost:8000
```

## Performance Optimization

For production, consider:

1. **Minify CSS and JavaScript:**
   ```bash
   # Using online tools or build tools
   ```

2. **Optimize images:**
   - Convert to WebP format
   - Use appropriate sizes
   - Implement lazy loading

3. **Enable caching:**
   - Most hosting providers do this automatically

4. **Add a CDN:**
   - GitHub Pages, Netlify, and Vercel include CDN by default

## SEO Checklist

- ✅ Meta tags added
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Fast loading time
- ⬜ Submit to Google Search Console
- ⬜ Create sitemap.xml
- ⬜ Add robots.txt
- ⬜ Set up Google Analytics (optional)

## Monitoring

After deployment, monitor:

- **Uptime:** Use UptimeRobot or similar
- **Analytics:** Google Analytics, Plausible, or Fathom
- **Performance:** Google PageSpeed Insights
- **SEO:** Google Search Console

## Updating the Website

To update your website:

1. Make changes locally
2. Test in your browser
3. Commit changes:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
4. Your hosting provider will automatically redeploy

## Need Help?

- GitHub Pages: https://docs.github.com/en/pages
- Netlify: https://docs.netlify.com/
- Vercel: https://vercel.com/docs
- Cloudflare Pages: https://developers.cloudflare.com/pages/

---

**Recommended:** Start with GitHub Pages for simplicity, then migrate to Netlify or Vercel if you need advanced features.
