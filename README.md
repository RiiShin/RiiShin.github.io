# Lixin Xiu — personal academic website

Based on al-folio v1.2 (upstream commit b95d6d61a1b0663529094b1b5f4fbe8aa41f8a04).

## Local preview

Use Ruby 3.3. On this Mac, prepend `/opt/homebrew/opt/ruby@3.3/bin` to `PATH`.

```sh
bundle config set --local path vendor/bundle
bundle install
npm ci
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

Open http://127.0.0.1:4000/. The personal site uses an empty `baseurl`.

## Editing content

- `_pages/about.md`: introduction and education.
- `_layouts/about.liquid`: acknowledged override for a uniformly bold bilingual name heading; `chinese_name` in the About page supplies the Chinese name without changing publication author metadata.
- `_bibliography/papers.bib`: publications, selected papers, links, and equal-contribution notes.
- `_includes/hook/bib.liquid`: supported bibliography hook for visible co-first-author notes and inline presentation distinctions.
- `_includes/publication_sections.liquid`: shared Selected Publications and Full Publications sections on the homepage and publication page. `selected` marks the two lead-author papers; `sort_priority` resolves same-year ordering without inventing publication dates.
- `_includes/home_sections.liquid`: appends Experience, Honors & Service, and Misc to the homepage, in navigation order. Misc contains the PDF and online CV links; there is no separate homepage CV section. Shared content includes keep the standalone pages synchronized; the full online CV remains available at `/cv/`.
- `_includes/header.liquid`: intentional override of the al-folio header to target the selected-publications anchor and load the mobile section-navigation helper. Its upstream version is tracked in `.al-folio-overrides.yml`.
- `_data/cv.yml`: experience, honors, service, and online CV. Experience and Honors & Service pages use the same data.
- `_data/socials.yml`: email, academic profiles, and CV download.
- `assets/CV_Mar2026.pdf`: existing downloadable CV, kept at its original URL.
- `pid-lvlm-iclr26/`: original independent ICLR 2026 project page, preserved byte for byte.

## Optional template modules

Official pages, example collections, data, assets, and workflows are retained in `_optional/al-folio/` and excluded from publishing. This includes Blog, Projects, Repositories, Teaching, People, Books, News, and Submenus.

To enable a module, copy its page into `_pages/`, replace sample content with real content, then set `nav: true` and a `nav_order`. Restore the module's collection and any required assets from `_optional/al-folio/`; enable its corresponding collection output and feature flags in `_config.yml`. Blog also requires enabling pagination. Keep unrelated example content unpublished.

The live navigation is About, Publications, Experience, Honors & Service, Misc. Navigation links target homepage sections; the standalone page URLs remain available. The navigation helper closes the mobile menu and highlights the visible homepage section.

## Deployment

The workflow builds pull requests for validation and publishes pushes to `master` through GitHub Pages Actions. It can also be run manually on `master`. Pages uses the GitHub Actions publishing source, and no generated-output branch is needed. The `redesign/al-folio` review branch does not deploy the site.

See `MIGRATION.md` for preservation and rollback notes, and `docs/` for upstream documentation.
