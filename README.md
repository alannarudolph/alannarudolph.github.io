# alannarudolph.github.io

## Project galleries

Put project photos directly in `images/<project-folder>/`, then run
`powershell -ExecutionPolicy Bypass -File scripts/generate-galleries.ps1` before committing or deploying. It regenerates
`gallery-manifest.js`, so every supported image in each folder is included in that
project's gallery. Files are naturally sorted (`01.jpeg`, `02.jpeg`, `10.jpeg`).
