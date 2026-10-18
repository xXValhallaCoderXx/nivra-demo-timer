# nivra-demo-timer

A small interval timer built with Expo and React Native. It exists as a **public demonstration fixture for
[Nivra](https://github.com/xXValhallaCoderXx/nivra-orchestrator)**: its conventions deliberately differ from
[valhalla-fitness](https://github.com/xXValhallaCoderXx/valhalla-fitness), so Nivra can show a repository's own
conventions governing over an engineer's general preferences.

## Conventions

- **Component files use kebab-case**, for example `src/components/start-button.tsx`, each exporting one PascalCase
  component (`StartButton`).
- **Tests run with Jest** (the `jest-expo` preset) and live in `__tests__/` at the root, named `<subject>.test.ts(x)`.
- **Styles use React Native's `StyleSheet.create`**, with colours from `src/theme/colors.ts`. There is no Tailwind.
- **Screens are Expo Router routes** in `app/`, also in kebab-case.
- **State stays in hooks** (`src/hooks/`); there is no state library.
- **npm** is the package manager.

More detail is in [docs/conventions.md](docs/conventions.md).

## Running it

```bash
npm install
npm start      # Expo dev server
npm test       # Jest
```

## Licence

MIT. See [LICENSE](LICENSE).
