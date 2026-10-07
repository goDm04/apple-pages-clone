# Project Architecture Rules
- Consecutive dark homepage sections use a continuous-gradient parent with transparent direct children so animations and background boundaries remain seamless.
- Temporary testimonials live in a localized standalone section with explicit fictional disclosure, keeping sample content distinct from verified customer endorsements.

- Homepage visual styling uses semantic tokens, while the `/emco` microsite keeps its independent campaign styling; this prevents homepage redesigns from leaking into client case studies.
- Website measurements call the public website-test Cloud function, which keeps the Google credential server-side and returns only normalized scores; missing configuration must show an unavailable state instead of fabricated results.