# Radhe Design Studio — premium portfolio website

Upload the contents of this folder to Hostinger `public_html`. The site is static HTML/CSS/JS with a PHP/MySQL inquiry endpoint and has no build step.

## Experience included

- Cinematic, lazy-hydrated hero slideshow with manual controls and subtle pointer depth.
- Animated orthogonal floor-plan drafting layer and a coordinate-aware AutoCAD-style crosshair cursor on precision pointers.
- Section-aware blueprint canvases animate behind every plain ink or paper block, pause off-screen, and run at a lightweight 30 fps.
- Filterable project collections, horizontal showcases, service accordions, animated metrics, page transitions, and a full-screen mobile menu.
- Native browser scrolling with lightweight requestAnimationFrame and IntersectionObserver enhancements—no scroll-jacking libraries.
- Seven responsive public pages: Home, Studio, Projects, Services, Journal, Project Detail, and Contact.
- Original generated PNG masters plus production WebP derivatives in `assets/images/`: `hero-radhe`, `earth-house`, `sandstone-courtyard`, `noma-studio`, and `material-detail`.
- Reduced-motion support, keyboard-visible focus states, semantic landmarks, and responsive layouts without horizontal overflow.
- A Kuula-inspired `360 Studio` route powered by the bundled panorama-to-depth engine, with inertial drag/swipe, scroll and button zoom, auto-rotation, fullscreen, keyboard navigation, optional gyroscope control, collapsible depth settings, and a multi-scene thumbnail strip when several panorama files are opened together.

## Contact form setup

1. Create a MySQL database and user in Hostinger hPanel.
2. Import `database.sql` with phpMyAdmin.
3. Copy `config.example.php` to `config.php`, then enter the database credentials and destination email.
4. Keep `config.php` private and do not commit it. Test one inquiry after deployment.

The handler validates required fields, uses a honeypot, inserts with PDO prepared statements, and sends an email through PHP `mail()`. For more reliable delivery, replace `mail()` with PHPMailer and Hostinger SMTP.

## Before launch

- Replace the sample phone, email, address, social URLs and project copy.
- Replace the generated concept imagery with licensed final project photography when available, retaining the existing aspect ratios. Convert production images to WebP/AVIF for the smallest payload.
- Update the production domain in `sitemap.xml`, `robots.txt`, and Open Graph metadata.
- Add Analytics/Plausible only after consent requirements are decided.
- Enable SSL and LiteSpeed caching in hPanel.

## Content updates

Edit the HTML pages through File Manager or FTP. The included SQL schema is ready for a future custom CMS; the current public pages remain intentionally file-based for a small-studio workflow.
