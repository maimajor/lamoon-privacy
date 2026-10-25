# Lamoon multilingual website package

Static GitHub Pages website with localized landing and privacy pages for English, Thai, German, Spanish, French, Japanese, Korean and Simplified Chinese.

## Important before deployment
- The canonical and hreflang URLs currently assume `https://maimajor.github.io/lamoon-privacy/`. Update them if the final Pages URL differs.
- Verify the GitHub repository and release status before publishing links.
- Translations are a strong first draft; native-speaker review is recommended before final publication.
- The hero image is the supplied promotional concept image, not a literal screenshot captured from a live Mac.
- GitHub Pages project sites cannot control host-root crawler rules with a subpath `robots.txt`; custom domain or account root site is needed for host-wide directives.
- Search visibility and AI recommendations cannot be guaranteed.


## Reference-matched landing layout
The landing pages use two image crops taken from the supplied visual reference: `assets/lamoon-macbook-scene.webp` for the upper display scene and `assets/lamoon-ui-cinematic-panel.webp` for the lower angled control-panel composition. The marketing copy, navigation, feature cards, FAQ, About, language metadata and privacy pages remain HTML and are retained per language. The two illustrative UI visuals are promotional artwork, not literal live screenshots.


## Content and SEO review (24 October 2026)
- Landing-page title/description and feature introductions are localized for all eight languages and naturally target user problems (for example, a Mac screen that remains too bright at minimum brightness).
- FAQ sections now answer common product questions about software dimming, physical backlight, presets, color tone, White Point mode, Solar Scheduling and location permissions, privacy, supported macOS versions, and compatibility.
- Privacy policies are localized, scoped to the macOS app, and explain local preferences, approximate location, deletion, and third-party website hosting.
- `sitemap.xml` includes hreflang alternates for each localized landing and privacy page. `deployment/robots-root-template.txt` explains how to publish the OAI-SearchBot allowance at the actual host root.
- Google limits FAQ rich-result display for most commercial sites; the visible FAQ is retained because it answers user questions, not as a promise of special search-result treatment.


## Content-completeness pass (24 October 2026)

Added missing user-facing feature descriptions across all eight localized landing pages: menu-bar dimming, launch at login, remembering settings, app language selection (eight languages plus System), manual scheduling, pause/resume, inline help, and True-tone behavior. The existing visual design and shared assets were retained. See `LANGUAGE-QA-REPORT.md` for checks.


## SEO content expansion (24 October 2026)
- Added 12 localized feature cards, a three-step visible getting-started guide, Film vs Display Gamma explanations, use-case cards, and a cautious product-comparison table with official references.
- Expanded each landing-page FAQ from 15 to 30 entries; FAQ structured data is generated from the visible localized FAQ copy. HowTo and BreadcrumbList structured data were added without fabricated prices or ratings.
- Added a localized troubleshooting/support page for each of the eight languages and linked them from landing-page navigation and footers. Support pages are included in sitemap.xml and have reciprocal hreflang tags.
- Fixed duplicate DOCTYPE declarations in localized landing pages.
- Content statements are qualified where compatibility depends on a display or published build. GitHub release status and price are not assumed; the Mac App Store is not claimed.
- The comparison table includes official documentation links for Apple Night Shift, f.lux and MonitorControl. It is an overview, not an exhaustive feature inventory; competing products and their functionality can change.
- Translation quality is an editorial first draft and has not been certified by native-speaker reviewers.

## Multilingual SEO content expansion pass (25 October 2026)

The English landing page includes 46 FAQs, practical tips and preset starting points, an illustrative display compatibility matrix, and a collapsible 11-term glossary. Three use cases were added, and each language's Support page now includes an external-display troubleshooting entry. The seven localized pages have received corresponding translations of the new sections and FAQ entries, with FAQPage structured data synchronized to the visible content.

This is an editorial localization pass rather than native-speaker certification. Compatibility notes are cautious and setup-dependent. No controlled performance/battery benchmark, App Store availability, pricing, or competitor rating is claimed.
