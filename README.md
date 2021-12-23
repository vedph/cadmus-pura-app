# Cadmus PURA App

Quick Docker image build:

1. `npm run build-lib`
2. `ng build --configuration production`
3. `docker build . -t vedph2020/cadmus-pura-app:1.1.3 -t vedph2020/cadmus-pura-app:latest` (replace with the current version).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Production (VeDPH)

1. in `env.js`: replace `window.__env.apiUrl = "http://localhost:60849/api/";` with `https://6009.cophilab-cloud.ilc.cnr.it/api/`
2. `docker build . -t vedph2020/cadmus-pura-app:1.1.5-prod`

## History

- 2021-12-22: updated `@myrmidon/cadmus-api` to 1.0.1. Docker image: 1.1.3; production: 1.1.5-prod.
- 2021-12-06: generated Docker image 1.1.2.
- 2021-11-11: upgraded Angular.
- 2021-10-16: updated to use `ms-signatures` from `tgr` rather than from `itinera`.
