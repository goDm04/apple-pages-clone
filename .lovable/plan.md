

## Plan: Redesign "O nas" section to match site design language

### Current state
The About section uses a gray `bg-muted` rounded card with a simple 2-column grid (text left, memoji image right). It feels flat and disconnected from the rest of the site, which uses bolder typography, clean spacing, and more visual hierarchy.

### Design approach
Match the style of ServicesSection (the strongest visual section on the site) -- large rounded `bg-muted` card with bold headings, clean layout, and the memoji image integrated more naturally.

### Changes to `src/components/AboutSection.tsx`

1. **Remove the nested muted wrapper** -- use a single clean `bg-muted rounded-3xl` card like ServicesSection
2. **Bigger, bolder heading** -- match `text-2xl md:text-5xl` style used elsewhere
3. **Better spacing and padding** -- use `p-8 md:p-12` like service cards
4. **Style the bullet points** as subtle feature chips or cleaner list with better visual weight
5. **Image placement** -- make the memoji image larger and positioned more like the service card images (right-aligned, partially overflowing or filling the space)
6. **Add more vertical breathing room** -- `py-20` to match other sections

### Technical details
- Single file change: `src/components/AboutSection.tsx`
- Reuse existing Tailwind classes from ServicesSection pattern (`rounded-3xl`, `p-8 md:p-12`, `min-h-[500px]`)
- Keep all existing translation keys and accessibility attributes
- Keep intersection observer animation

