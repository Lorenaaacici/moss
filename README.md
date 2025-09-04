# MOSS – Movies One‑stop Station

A simple static website showcasing movies, trailers, reviews, and basic account/support pages.

## Overview

- Home highlights top movies and a search bar.
- Watch What? shows a featured movie, a trailer, a review form, and dynamically loads movies from an external API.
- Community provides links to news, discussions, reviews, and making friends.
- Support includes FAQ, About, Contact form, and an accessibility dropdown.
- Account offers basic placeholders and a language dropdown.
- Book presents a booking-style layout with filters.

## Pages

- `index.html` – Home
- `watchwhat.html` – Featured movie, trailer, reviews, dynamic movie list
- `community.html` – Community hub
- `support.html` – FAQ, About, Contact
- `account.html` – Account placeholders + language menu
- `book.html` – Booking layout and filters

## Structure

```
.
├── index.html
├── watchwhat.html
├── community.html
├── support.html
├── account.html
├── book.html
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── watchwhat.css
│   │   ├── community.css
│   │   ├── support.css
│   │   ├── account.css
│   │   └── stylebook.css
│   ├── js/
│   │   ├── script.js
│   │   ├── watchwhat.js
│   │   └── book.js
│   └── images/       # Place images/videos here
```

## Local Preview

- Using Python:
  ```bash
  python3 -m http.server 8000
  ```
  Open http://localhost:8000/index.html

- Or any static file server (e.g., `npx serve`, VS Code Live Server, etc.).

## External APIs

`js/watchwhat.js` fetches movie data and posts reviews to a hosted API (no key required at time of writing). Running via a local HTTP server is recommended to avoid CORS and file URL issues.

## Assets

- Place image/video assets under `assets/images/`.
- CSS references use `url('../images/...')` from files inside `assets/css/`; HTML uses `assets/images/...`.

## Notes

- Links are relative and expect this repo’s root to be the site root.
- Font Awesome is loaded via CDN in `book.html`.

## License

No license specified. Add one if needed.
