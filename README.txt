==========================================
BETTERJOY WEBSITE - README
==========================================

Welcome! This is a professional, modern, responsive multi-page website built with HTML, CSS, and JavaScript.

==========================================
FILE STRUCTURE
==========================================

BetterJoy3/
│
├── index.html          (Home Page - Main landing page with hero section and focus keywords)
├── about.html          (About Page - Mission, vision, and core values)
├── contact.html        (Contact Page - Google Form integration and FAQ)
├── download.html       (Download Page - Download button and installation guide)
├── style.css           (Main stylesheet with modern design)
├── script.js           (JavaScript for interactivity and animations)
└── README.txt          (This file - Setup and customization guide)

==========================================
HOW TO RUN THE SITE LOCALLY
==========================================

1. Simply open any HTML file in your web browser:
   - Double-click on "index.html" to open the home page
   - Or right-click → "Open with" → Choose your preferred browser

2. No server required! All files work locally without any setup.

3. For best experience, use modern browsers:
   - Google Chrome (recommended)
   - Mozilla Firefox
   - Microsoft Edge
   - Safari

==========================================
CUSTOMIZATION GUIDE
==========================================

--------------------
1. CHANGING COLORS
--------------------

Open "style.css" and find the :root section at the top (around line 12):

:root {
    --primary-bg: #F8F8F8;      /* Light gray background */
    --white: #FFFFFF;            /* White color */
    --accent-blue: #558EFF;      /* Primary blue accent */
    --dark-text: #1D2125;        /* Dark text color */
}

Simply replace these hex color codes with your preferred colors.
All colors across the site will update automatically!

--------------------
2. CHANGING LINKS
--------------------

**Google Form Link** (Contact Page):
- Open "contact.html"
- Find line with: href="https://docs.google.com/forms/..."
- Replace with your new Google Form URL

**GitHub Link** (All pages):
- Open any HTML file
- Find: href="https://github.com/kinseypro/BetterJoy"
- Replace with your GitHub repository URL

**Download Link** (Download Page):
- Open "download.html"
- Find: href="https://betterjoy.net/download-for-windows/"
- Replace with your download URL

**Official Site Link** (Home Page):
- Open "index.html"
- Find: href="https://betterjoy.net/"
- Replace with your official website URL

--------------------
3. CHANGING TEXT & CONTENT
--------------------

**Site Name/Logo:**
- Find: <span class="logo-text">BetterJoy</span>
- Replace "BetterJoy" with your brand name

**Hero Section (Home Page):**
- Open "index.html"
- Find the <section class="hero"> section
- Edit the <h1> tag for main title
- Edit <p> tags for descriptions

**About Page Content:**
- Open "about.html"
- Edit mission, vision, and values sections
- Replace story content with your own

**Footer:**
- Find <footer class="footer"> in any HTML file
- Edit copyright year and company name
- Update "Designed & Developed with ❤️" text

--------------------
4. CHANGING FOCUS KEYWORDS
--------------------

Currently integrated keywords:
- "betterjoy android" → https://betterjoy.net/
- "betterjoy for cemu" → https://betterjoy.net/betterjoy-for-cemu/
- "yuzu motion controls" → https://betterjoy.net/betterjoy-with-yuzu/

To update:
- Open "index.html"
- Find: <a href="URL" class="inline-link">KEYWORD</a>
- Replace URL and KEYWORD with your own

Note: Keywords are naturally placed in paragraphs for SEO optimization.

--------------------
5. CHANGING FONTS
--------------------

Current fonts: Inter (body), Poppins (headings)

To change:
1. Visit Google Fonts: https://fonts.google.com/
2. Select your preferred fonts
3. Replace the font import link in the <head> section of each HTML file
4. Update font-family in "style.css":
   - Line 30 for body font
   - Line 44 for heading fonts

--------------------
6. ADDING SOCIAL MEDIA LINKS
--------------------

In the footer section, add new links:

<div class="footer-section">
    <h4>Social</h4>
    <ul class="footer-links">
        <li><a href="YOUR_TWITTER_URL" target="_blank">Twitter</a></li>
        <li><a href="YOUR_FACEBOOK_URL" target="_blank">Facebook</a></li>
        <li><a href="YOUR_LINKEDIN_URL" target="_blank">LinkedIn</a></li>
    </ul>
</div>

--------------------
7. MOBILE RESPONSIVENESS
--------------------

The site is fully responsive! It automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

To test responsiveness:
1. Open site in browser
2. Press F12 (Developer Tools)
3. Click "Toggle Device Toolbar" icon
4. Select different device sizes

==========================================
FEATURES INCLUDED
==========================================

✓ Fully responsive design (mobile, tablet, desktop)
✓ Modern, professional styling with smooth animations
✓ Mobile navigation menu with hamburger icon
✓ Smooth scroll effects and transitions
✓ Card hover effects with 3D tilt
✓ SEO-friendly semantic HTML
✓ Optimized color palette for readability
✓ Cross-browser compatible
✓ Fast loading times
✓ Accessible navigation
✓ Google Fonts integration
✓ Clean, organized code structure

==========================================
PAGES OVERVIEW
==========================================

**HOME PAGE (index.html):**
- Hero section with call-to-action buttons
- Feature cards showcasing key benefits
- Content sections with focus keywords
- Links to official site and download

**ABOUT PAGE (about.html):**
- Mission and vision statements
- Core values with icon cards
- Brand story section
- Call-to-action for community engagement

**CONTACT PAGE (contact.html):**
- Large "Open Contact Form" button linking to Google Form
- Community support information
- FAQ section with common questions
- Clean, modern layout

**DOWNLOAD PAGE (download.html):**
- Prominent download button
- System requirements
- Quick installation guide (4 steps)
- Alternative download options
- Support section

==========================================
COLOR PALETTE
==========================================

Primary Background: #F8F8F8 (Light Gray)
Secondary Background: #FFFFFF (White)
Accent Color: #558EFF (Blue)
Text Color: #1D2125 (Dark Gray/Black)

These colors create a clean, professional, modern appearance.
Feel free to adjust them in style.css as mentioned above.

==========================================
BROWSER COMPATIBILITY
==========================================

✓ Google Chrome (latest)
✓ Mozilla Firefox (latest)
✓ Microsoft Edge (latest)
✓ Safari (latest)
✓ Opera (latest)

Minimum browser versions:
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

==========================================
OPTIMIZATION TIPS
==========================================

1. **Images:** Add optimized images in WebP format for faster loading
2. **Minification:** Minify CSS and JS for production use
3. **CDN:** Host on a CDN for faster global delivery
4. **Caching:** Enable browser caching in server settings
5. **Compression:** Enable Gzip compression on server

==========================================
HOSTING RECOMMENDATIONS
==========================================

This static site works with any hosting provider:

**Free Options:**
- GitHub Pages (recommended for open-source projects)
- Netlify (automatic deploys from Git)
- Vercel (optimized for static sites)
- GitLab Pages

**Paid Options:**
- AWS S3 + CloudFront
- DigitalOcean Spaces
- Traditional shared hosting

==========================================
DEPLOYMENT STEPS
==========================================

**For GitHub Pages:**
1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select branch and folder
5. Save and get your URL

**For Netlify:**
1. Sign up at netlify.com
2. Drag and drop your folder
3. Get instant deployment URL
4. Optional: Add custom domain

**For Traditional Hosting:**
1. Upload all files via FTP
2. Place files in public_html or www folder
3. Access via your domain name

==========================================
TROUBLESHOOTING
==========================================

**Issue: Styles not loading**
Solution: Ensure style.css is in the same folder as HTML files

**Issue: Mobile menu not working**
Solution: Check that script.js is properly linked in HTML

**Issue: Links not working**
Solution: Verify all href attributes have correct URLs

**Issue: Fonts not displaying**
Solution: Check internet connection (fonts load from Google Fonts CDN)

**Issue: Form button not opening**
Solution: Verify Google Form URL is correct and accessible

==========================================
SUPPORT & UPDATES
==========================================

For questions or issues:
1. Check this README file thoroughly
2. Review the code comments in HTML, CSS, and JS files
3. Use browser Developer Tools (F12) to debug
4. Search online for specific HTML/CSS/JS questions

==========================================
LICENSE & CREDITS
==========================================

This website template is created for BetterJoy project.
Feel free to modify and customize as needed.

Built with:
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Inter, Poppins)

Design Inspiration: https://betterjoy.net/
(Redesigned with modern, professional styling)

==========================================
FINAL NOTES
==========================================

✓ Keep backups of your files before making major changes
✓ Test all changes in multiple browsers
✓ Validate HTML at validator.w3.org
✓ Test mobile responsiveness thoroughly
✓ Update copyright year annually in footer
✓ Keep content fresh and updated regularly

Thank you for using this website template!
If you need further customization, refer to online HTML/CSS/JS tutorials.

==========================================
VERSION HISTORY
==========================================

Version 1.0 (2024)
- Initial release
- 4 pages (Home, About, Contact, Download)
- Fully responsive design
- Modern animations and effects
- SEO optimized with focus keywords

==========================================
