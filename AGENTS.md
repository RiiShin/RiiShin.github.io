# Personal website maintenance

This is Lixin Xiu's personal site, based on al-folio v1.2. It is a user site, not the upstream template repository.

- Production URL: https://riishin.github.io/. The `baseurl` is empty; do not use upstream's `/al-folio` prefix.
- Keep the navigation ordered: About, Publications, Experience, Honors & Service, Misc, unless the user requests changes. CV links belong in Misc; retain the standalone `/cv/` page and PDF downloads.
- Optional official modules are retained in `_optional/al-folio/` and excluded from builds. Do not delete them or publish sample content. Restore only requested modules, replacing their example content first.
- `_data/cv.yml` supplies the Experience, Honors & Service, and CV pages. Never invent new positions or biographical details.
- Preserve `pid-lvlm-iclr26/`, all existing CV download URLs, and legacy homepage links. The project page is independent and should remain unchanged unless explicitly requested.
- Customize configuration, content, and data first. Plugin-owned layouts and runtime remain in pinned gems. Site-specific overrides are permitted when needed; record and audit any overrides.
- Keep `Gemfile` and `_config.yml` plugin lists aligned. JavaScript minification is intentionally disabled to preserve the independent paper site.

## Validation

Use Ruby 3.3 (on this Mac, `/opt/homebrew/opt/ruby@3.3/bin`) and install gems into `vendor/bundle`.

```sh
BUNDLE_PATH=vendor/bundle bundle install
npm ci
npm run lint:prettier
npm run lint:style-contract
BUNDLE_PATH=vendor/bundle bundle exec jekyll build
BUNDLE_PATH=vendor/bundle bundle exec al-folio upgrade audit
BUNDLE_PATH=vendor/bundle bundle exec al-folio upgrade overrides audit
```

Preview on `http://127.0.0.1:4000/`. Verify the six pages, mobile navigation, both color schemes, search, publication interactions, legacy redirects, CV downloads, and the independent project page. Upstream integration and screenshot fixtures under `test/` target the demo site; run those only for relevant runtime changes and adapt their base URL as needed.

Production source is on `master`, deployed through GitHub Pages Actions. The review branch is `redesign/al-folio`. The old source is tagged `backup/pre-al-folio-20261007`. Publishing configuration and rollback details are in `MIGRATION.md`. Follow the user's current instructions about commits, pushes, and deployment.
