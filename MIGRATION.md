# Migration review

- Source repository: RiiShin/RiiShin.github.io.
- Migration review branch: redesign/al-folio.
- Original version: backup/pre-al-folio-20261007.
- Template: al-folio v1.2, commit b95d6d61a1b0663529094b1b5f4fbe8aa41f8a04.
- Previous Pages configuration: legacy build, master branch, repository root, no custom domain.
- Production source: master; the workflow builds with Ruby 3.3 and deploys the generated artifact using GitHub Pages Actions.
- The user authorized publishing the website on 2026-10-19. The release tag `release/al-folio-20261019` identifies the migration's production source. Pushing only the review branch does not deploy the site.

## Content and compatibility

The five navigation entries are About, Publications, Experience, Honors & Service, and Misc. CV links are consolidated in Misc, while the standalone CV page remains available. Optional al-folio modules and their examples are retained under `_optional/`, excluded from the generated site. Template metadata, external feeds, sample resume loading, and citation counters are disabled or personalized.

All existing top-level personal assets and the PDF files in `_pages/` are retained. The complete `pid-lvlm-iclr26/` directory is unchanged. The old About URLs redirect home; old homepage section fragments redirect to the corresponding new pages.

The current experience and awards include the user-provided Tencent research internship and JSPS DC2 selection. Updates to `_data/cv.yml` appear in the homepage, Experience, Honors & Service, and online CV. The existing PDF is not regenerated.

## Rollback

The previous source commit is `f4a1dc3e88149fa87705975ab528dae324bf93a4`, also available at `backup/pre-al-folio-20261007`. The previous Pages settings were `build_type: legacy`, source branch `master`, path `/`, HTTPS enabled, and no custom domain. The new publishing method is `build_type: workflow`. To roll back, restore the backup source on a recovery branch, merge it into `master`, and restore the previous Pages publishing settings; do not rewrite repository history.

## Current review

The draft includes Selected Publications above Full Publications, reverse chronological ordering with the EMNLP 2026 Main Conference paper first among the two concurrent papers, bold self-author names, visible co-first-author and Oral distinctions, the Semantic Scholar profile, and the full-time research job search description. The intentional header override supports the publication anchor and mobile navigation; its acknowledgement is recorded in `.al-folio-overrides.yml` and passes the override audit.

## First-draft verification

- Jekyll build and formatting/style checks passed.
- al-folio upgrade audit: zero blocking or non-blocking findings; no local overrides shadow plugin files.
- Six pages and 24 local linked resources returned HTTP 200.
- Six legacy redirects, mobile navigation, search, bibliography expansion, and dark mode passed browser checks.
- No horizontal overflow at a 390px mobile viewport on any of the six pages; no browser script errors.
- All 33 preserved personal/project files match the old source by SHA-256. The generated independent project site also matches its source byte for byte.
- Optional template modules are retained in source and absent from the generated site.
- Browser screenshots and the detailed check result are in the ignored `output/playwright/` directory.
