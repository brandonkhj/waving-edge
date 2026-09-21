# Brand source assets

Originals as supplied. Everything served from `public/` is generated from these —
cropped, resized, and (for the icons) given transparent corners. Keep these so the
web assets can be regenerated at other sizes later.

| Source | Generates |
|---|---|
| `logo-primary-source.png` | `public/logo.png` — cropped to real content (the file carries a faint alpha haze across the full canvas, so a naive bounding-box crop comes out square and wrong) |
| `app-icon-source.webp` | `public/favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, and `public/logo-mark-light.png` — the light W mark used on dark surfaces, since the primary logotype's charcoal half disappears against the charcoal footer. The source has no alpha and white corners, which must be cleared or a white box shows around the favicon. |
| `pattern-source.webp` | `public/pattern.webp` — cropped to waves only; the square clusters at either edge read as grey smudges at low opacity |
| `brand-sheet.webp` | Reference only: palette and typography spec |

Palette and type live in `src/index.css`. Note the rule recorded there: Aqua Teal
(`#15d1c1`) is decoration only — it measures 1.84:1 against the off-white canvas
and fails WCAG AA for text. Deep Teal (`#0b7c7a`) is the readable teal at 4.80:1.
