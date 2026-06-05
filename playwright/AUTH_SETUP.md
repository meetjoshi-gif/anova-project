Playwright auth setup

This file explains how `playwright/.auth/user.json` is created and how to run tests locally and in GitHub Actions.

Local
- Option A: Use existing `data/test-data.json` `adminUser` (already present in repo). Run:

```powershell
npx playwright test
```

- Option B: Provide credentials via environment variables:

PowerShell:
```powershell
$env:PLAYWRIGHT_AUTH_USERNAME='user@example.com'
$env:PLAYWRIGHT_AUTH_PASSWORD='secret'
npx playwright test
```

cmd.exe:
```cmd
set PLAYWRIGHT_AUTH_USERNAME=user@example.com
set PLAYWRIGHT_AUTH_PASSWORD=secret
npx playwright test
```

GitHub Actions
- Add repository secrets `PLAYWRIGHT_AUTH_USERNAME` and `PLAYWRIGHT_AUTH_PASSWORD`.
- In your workflow before running tests, set the env:

```yaml
- name: Playwright tests
  run: npx playwright test
  env:
    PLAYWRIGHT_AUTH_USERNAME: ${{ secrets.PLAYWRIGHT_AUTH_USERNAME }}
    PLAYWRIGHT_AUTH_PASSWORD: ${{ secrets.PLAYWRIGHT_AUTH_PASSWORD }}
```

Notes
- If `playwright/.auth/user.json` already exists, global setup will skip creating it.
- The global setup will not fail tests if credentials are missing; it logs instructions instead.
- The `LoginPage.login` already writes `playwright/.auth/user.json` during manual runs; the global setup uses the same flow.
