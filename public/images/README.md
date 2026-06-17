# Images / Görseller

Drop real photos here using these exact file names — the site will pick them up.
Gerçek fotoğrafları bu dosya adlarıyla buraya bırakın; site otomatik kullanacaktır.

## Expected files / Beklenen dosyalar

| Path / Yol                   | Used for / Kullanım                      | Suggested size |
| ---------------------------- | ---------------------------------------- | -------------- |
| `hero/hero-team.jpg`         | Home hero photo / Ana sayfa görseli      | 1920×1080      |
| `teams/kontrol-sistem.jpg`   | Control & Systems coordination           | 1200×800       |
| `teams/mekanik.jpg`          | Mechanical coordination                  | 1200×800       |
| `teams/yapay-zeka.jpg`       | AI coordination                          | 1200×800       |
| `teams/organizasyon.jpg`     | Organization coordination                | 1200×800       |
| `teams/captain-majidov.jpg`  | Team captain portrait / Kaptan portresi  | 600×600        |
| `teams/cocaptain-demir.jpg`  | Co-captain portrait / Eş kaptan portresi | 600×600        |
| `teams/advisor-temeltas.jpg` | Advisor portrait / Danışman portresi     | 600×600        |
| `og/og-default.png`          | Social share card / Sosyal medya kartı   | 1200×630       |

## Notes / Notlar

- Until a real file exists, the UI shows a tasteful placeholder — no broken
  images. Gerçek dosya gelene kadar UI şık bir yer tutucu gösterir.
- Team/coordination card images are declared in `src/data/teams.ts` and person
  images in `src/data/site.ts`. After adding photos, wire them into `TeamCard` /
  `PersonCard` / `Hero` (switch the placeholder for an `<img>`).
- `og/og-default.png` is auto-generated from the logo; replace it with a custom
  1200×630 card anytime (keep the same path, or update `assets.ogDefault`).
- Optimize JPGs (~80% quality) before committing to keep the site fast.
