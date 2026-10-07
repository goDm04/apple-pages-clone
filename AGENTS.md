# Project Architecture Rules
- Consecutive dark homepage sections use a continuous-gradient parent with transparent direct children so animations and background boundaries remain seamless.
- Temporary testimonials live in a localized standalone section with explicit fictional disclosure, keeping sample content distinct from verified customer endorsements.

- Homepage and `/emco` case study presentation share semantic tokens and surface treatments, while campaign artwork retains its original branding to keep the portfolio consistent without changing client assets.
- Navigation accepts a dark appearance independently of homepage routing so case studies can share the homepage header without breaking cross-page anchors.
- Website measurements call the public website-test Cloud function, which keeps the Google credential server-side and returns only normalized scores; missing configuration must show an unavailable state instead of fabricated results.