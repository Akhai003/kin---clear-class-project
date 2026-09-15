# Kin & Clear — Real Image Repair

This build replaces the SVG product/editorial placeholders in rendered sections with curated real photography.

## Product imagery
All 16 products have distinct Pexels photographs mapped in `src/data/products.ts`.
Product cards use `object-cover` so the photograph fills the card, plus a remote fallback in `ProductCard.tsx`.

## Editorial imagery
Real photography is used in Home, Standards, Ingredients, Learn, Blog/article data.
The subjects were selected by context: baby bath/care, neutral skincare packaging, cream/jar/tube imagery, wipes, routines, and parent/baby moments.

## Deployment
- Vite base remains `/kin---clear-class-project/`
- React Router uses `basename={import.meta.env.BASE_URL}`
- Existing GitHub Pages workflow retained.

## Source
Photography is linked from Pexels free-stock image CDN. The site should therefore be online to display the images.
