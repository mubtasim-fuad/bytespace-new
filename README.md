# ByteSpace New

Responsive frontend implementation of the ByteSpace New assessment design.

## Design

[ByteSpace New Figma copy](https://www.figma.com/design/KzPc2OTQmgbQonz4rPCD81/ByteSpace-New-Check-website--Copy-?node-id=1-1067)

The layout, content, colors, and key interactions follow the supplied Figma design and screen exports. The Figma image asset endpoint was unavailable, so the people and course thumbnails are original generated replacements; the partner wordmarks are typographic approximations.

## Pages

- `/` — full landing page, category filters, search, newsletter feedback
- `/login` and `/register` — bonus auth screens with browser validation and preview feedback
- `/courses` — searchable course catalog
- `/courses/:slug` — course overview, lessons, and reviews tabs
- `/creators` — creator introduction
- Unknown paths show a custom 404 page

The assessment is a frontend prototype. Sign in, registration, social sign in, enrollment, and newsletter subscriptions do not call a backend. Those actions show preview feedback instead of claiming an account or subscription was created.

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

Built with React, TypeScript, Vite, React Router, and Lucide icons. The Vercel SPA rewrite in `vercel.json` makes direct visits to nested routes work.

## Reviewer notes

- The landing page is responsive at desktop, tablet, and mobile widths.
- Course search, filters, navigation, tabs, form validation, and newsletter feedback can be tried without a backend.
- No application tracking ID, phone number, or other personal submission details are stored in the repository.
