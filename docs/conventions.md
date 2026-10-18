# Conventions

| Area | Convention | Example |
|---|---|---|
| Component files | kebab-case, one component per file | `src/components/timer-display.tsx` exports `TimerDisplay` |
| Hooks | kebab-case files starting with `use-` | `src/hooks/use-timer.ts` |
| Tests | Jest with `jest-expo`, in `__tests__/`, named `<subject>.test.ts(x)` | `__tests__/format-duration.test.ts` |
| Styles | `StyleSheet.create`, colours from `src/theme/colors.ts` | `src/components/start-button.tsx` |
| Routes | Expo Router, kebab-case files in `app/` | `app/history.tsx` |

New components follow the same naming: a file called `pause-button.tsx`, never `PauseButton.tsx`.
