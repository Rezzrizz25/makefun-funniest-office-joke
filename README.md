# Offline Buffer

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/Rezzrizz25/makefun-funniest-office-joke/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/leaderboard)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/Rezzrizz25/makefun-funniest-office-joke/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

A one-line joke about office life — and the program that delivers it. The joke turns on a phrase anyone who has worked in an office knows: the manager who ends every discussion with "let's take this offline". The turn takes him literally, and the punchline lands last. `main.ts` (Node 22, no dependencies, no network) writes exactly that one line to `/output/entry.txt`, deterministically, every run — and refuses to write it if it ever breaks the 1–200 character gate.

> My manager says ‘let’s take this offline’ so often that IT finally unplugged him — now he just buffers in the corridor.

## Run it

```sh
node main.ts
```

This writes the 119-character joke to `entry.txt` in `$MAKEFUN_OUTPUT_DIR` (defaults to `/output`).

Made with make.fun — try it yourself: https://make.fun/r/v4m1pbv2
