

## Plan: Replace Aenkai card image with uploaded photo

### What
Replace the current Aenkai portfolio card image with the user's uploaded mockup photo, optimized for smaller file size.

### Steps

1. **Copy the uploaded image** to `public/lovable-uploads/aenkai-new.jpg` (overwrite existing)
2. **Resize/compress the image** using a script to reduce file size for faster loading (target ~200-300KB, scale down to ~800px wide since the card is max 384px on desktop)
3. **No code changes needed** — the `src` in the data array already points to `/lovable-uploads/aenkai-new.jpg`

### Technical details
- Card dimensions: 384×640px (desktop), 320×320px (mobile)
- Image will be resized to ~800px wide (2x for retina) and compressed as JPEG
- The `imageScale: 1` setting is already applied for this card

