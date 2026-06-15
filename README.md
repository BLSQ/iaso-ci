# IASO CI Github Actions

This repository contains a series of actions that can be reused across all IASO plugins.

## Get started

Install rollup

```bash
npm install --global rollup
```

## Inputs

### `branch`

**Required** The branch to test. Default develop

## Outputs

### `time`

The time it took to test

## Example usage

```yaml
uses: actions/iaso-ci@<git_sha>
with:
    branch: IA-123
```



