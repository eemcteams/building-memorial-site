# The Building Archive — Static Site Template

A simple, fast, and future-proof photo + video memorial website. Edit the files, drop in your media, and publish anywhere (GitHub Pages, Netlify, traditional hosting).

## Folder structure
```
BuildingMemorialSite/
├─ index.html       # Home
├─ gallery.html     # Photo gallery with lightbox
├─ video.html       # Video tour (YouTube embed or MP4)
├─ style.css        # Styles
├─ script.js        # Lightbox + nav
├─ images/          # Put your JPG/PNG here (add hero.jpg if you want a poster)
└─ video/           # Put your MP4 here (building-tour.mp4)
```

## Quick start
1. Place your photos in `/images` and (optional) `hero.jpg` for the video poster.
2. Add your video:
   - YouTube: edit `video.html` and replace `VIDEO_ID` in the iframe URL.
   - Self-hosted: put `building-tour.mp4` in `/video` (H.264/AAC recommended).
3. Open `index.html` in your browser to preview.
4. Deploy (see below).

## Deploy options
### GitHub Pages
1. Create a new public repo named `building-archive` (or any name).
2. Upload the files.
3. In repo **Settings → Pages**, set **Source: Deploy from a branch**, **Branch: main / root**.
4. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

### Netlify (drag-and-drop)
1. Create a free account at Netlify.
2. Click **Add new site → Deploy manually**.
3. Drag the whole `BuildingMemorialSite` folder into the drop zone.
4. Netlify gives you a URL; you can add a custom domain later.

### Traditional hosting
Upload all files/folders via your host’s file manager or FTP to the `public_html` (or `www`) directory.

## Tips for longevity
- Keep multiple backups (cloud + external drive).
- Submit the final URL to the Wayback Machine (archive.org/web).
- Use descriptive `alt` text on images for accessibility and future search.
- Prefer `jpg` for photos, compress to ~200–400 KB each if possible.

## Editing notes
- Replace placeholder image paths in `gallery.html` with your filenames.
- Update text content on `index.html` and `video.html` to reflect your building’s story.
- You can change colors in `style.css` (the `:root` variables).
