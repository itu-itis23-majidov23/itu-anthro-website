# Brand assets / Marka varlıkları

The official İTÜ AnthRo logo is already in place. Files here:
İTÜ AnthRo resmi logosu yerine kondu. Buradaki dosyalar:

| File / Dosya           | Used for / Kullanım                                               |
| ---------------------- | ----------------------------------------------------------------- |
| `logo.png`             | Official logo — header & footer (transparent outside the hexagon) |
| `logo-original.jpg`    | Original full-quality logo (reference / archive)                  |
| `apple-touch-icon.png` | iOS / app icon (180×180)                                          |
| `favicon.svg`          | Browser tab icon (crisp hexagon mark)                             |
| `favicon-32.png`       | PNG favicon fallback (32×32)                                      |
| `logo-mark.svg`        | Simple square hexagon mark (alt mark)                             |

Notes / Notlar:

- `logo.png` was processed from `logo-original.jpg`: the area **outside the
  hexagon** was made transparent (corner flood-fill) so it sits cleanly on both
  the white header and the navy footer. `logo-original.jpg`'ten işlenmiştir.
- To replace the logo later, drop a new file at `logo.png` (transparent
  background recommended) — `src/components/Logo.astro` renders it via
  `assets.logo` in `src/data/site.ts`. Aynı dosya adını koruyun.
- The tiny tab favicon stays as `favicon.svg` (the detailed face logo is not
  legible at 16px); it echoes the logo's hexagon.
