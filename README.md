# IASO CI

Reusable GitHub Actions workflows shared across IASO plugins.

## Workflows

- `wc_config.yml` — parse short SHA, image tags, and ticket slug from PR title/branch.
- `wc_tests.yml` — run backend (Django) and frontend (JS/React) tests, lint, and format checks.
- `wc_docker_build.yml` — build and push the IASO Docker image to Docker Hub.
- `wc_docker_deploy.yml` — deploy a Docker image tag to an Elastic Beanstalk environment.

## Usage

```yaml
jobs:
  tests:
    uses: BLSQ/iaso-ci/.github/workflows/wc_tests.yml@main
    with:
      branch: ${{ github.head_ref }}
```

Pin to a commit SHA or tag for stability.
