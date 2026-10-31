# Workflows

Connect app commands into shared workflows with declared inputs, step outputs, previews and durable run history.

## Install

Requires a running [Ink OS](https://github.com/siliconjungle/ink-os-platform) instance and its `ink-os` CLI. Use Node.js 24 or later for development.

```sh
git clone https://github.com/siliconjungle/ink-app-workflows.git
cd ink-app-workflows
npm ci
npm test
# Select your Ink instance using its CLI connection profile.
ink-os deploy .
```

The CLI deploys committed source from your checkout. Commit any edits before deploying them. No credentials or personal instance configuration belong in this repository.

## Behaviour and limits

Ink OS owns execution, permissions, cancellation and persistence. Closing this app does not stop a run. Templates use installed app identities; optional apps must be installed before their template can run.

## License

MIT for app code. Bundled third-party components retain their own licenses and notices.
