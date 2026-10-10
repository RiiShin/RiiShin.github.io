# Migration review

- Source repository: RiiShin/RiiShin.github.io.
- Migration review branch: redesign/al-folio.
- Original version: backup/pre-al-folio-20261007.
- Template: al-folio v1.2, commit b95d6d61a1b0663529094b1b5f4fbe8aa41f8a04.
- Previous Pages configuration: legacy build, master branch, repository root, no custom domain.
- New source remains on master after approval; the build workflow produces gh-pages.
- The user authorized committing and pushing the review branch on 2026-10-11. Production deployment remains a separate step; pushing this branch does not trigger the deployment workflow.

## Content and compatibility

The six requested navigation entries are active. Optional al-folio modules and their examples are retained under `_optional/`, excluded from the generated site. Template metadata, external feeds, sample resume loading, and citation counters are disabled or personalized.

All existing top-level personal assets and the PDF files in `_pages/` are retained. The complete `pid-lvlm-iclr26/` directory is unchanged. The old About URLs redirect home; old homepage section fragments redirect to the corresponding new pages.

The initial experience list uses only information in the original website. New internships can be added to `_data/cv.yml` once details are provided; the Experience page and CV will update together. The existing PDF is not regenerated.

## Rollback

Before production release, record the approved source commit and Pages configuration. The original source remains available at `backup/pre-al-folio-20261007`. To restore it, restore that version on a recovery branch and restore the previous Pages publishing configuration; do not rewrite repository history.

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
