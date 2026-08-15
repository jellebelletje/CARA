# Status and handover

Read this first if you are picking CARA up in a new session, on another machine, or on a phone.
Last updated at the end of the scoring-engine work.

## START HERE

The next piece of work is **the user interface**. The data and the engine are done and tested.
Nothing is half-finished; the app simply has no screens yet.

Missing files, in build order:

1. `index.html`, `src/main.tsx`, `src/styles/tokens.css`
2. `src/i18n/strings.ts`, so no user-facing string is ever hardcoded in a component (see issue #2)
3. `src/lib/shareState.ts`, answers to and from a compressed URL hash
4. Components: intro, one screen per dimension, results, launch conditions, footer credit
5. `.github/workflows/deploy.yml` and enabling GitHub Pages, which makes the README link real

## What exists and is verified

- **47 questions** across six dimensions, curated one dimension at a time. Counts are 7, 7, 7, 9,
  7, 10. Dimension 4 has nine because nine were kept, not by accident.
- **Every question carries** four rubric anchors, a launch condition for each failing level with
  an owner and a timing, and a Microsoft source where one grounds it.
- **21 questions are pilot-critical**, held to 3 or 4 per dimension so no single dimension can
  monopolise the no-go verdict.
- **Scoring and conditions engines**, 27 tests passing, typecheck clean.

```bash
nvm use              # Node 22, see .nvmrc
npm install
npm test             # 27 tests
npm run questions:check
```

## Decisions that are settled, and why

Re-deriving these wastes time, and reversing them without knowing the reason will break things.

**The four levels are three thresholds, not one scale.** A pilot exists to answer questions, so
CARA must never demand the pilot's own output as its input. Hence: only Not ready blocks;
Emerging always proceeds and raises a condition; Scalable is deliberately not required to start,
and is what you re-score against after the pilot.

**The verdict reads outstanding conditions, not only dimension levels.** A single amber answer
among strong ones does not move its dimension off Ready, so an earlier version returned GO while
the report handed over a page of pre-pilot work. A failing test caught it. GO WITH CONDITIONS now
means exactly what it says, and SCALE-READY requires nothing outstanding at all.

**A non-critical red caps its dimension at Emerging; a pilot-critical red forces Not ready.** The
cap stops six strong answers burying one red. The force is what makes a genuine blocker produce a
no-go.

**`src/data/` is the source of truth; `content/questions.md` is generated.** Two hand-maintained
copies of 47 questions diverge within a week. Edit the TypeScript, run `npm run questions:build`.

**The results view must not be a radar chart.** It was in the original plan and it is wrong: six
ordinal states are a status encoding, not a magnitude one. Use labelled status marks per
dimension, with the level name always visible, never colour alone.

**No em-dashes.** Enforced by `npm run questions:check`, which fails the build on one.

## Open issues

- **#2 Dutch version**, switchable by a flag. Deferred, but the architectural requirement applies
  now: no hardcoded strings, and Dutch arrives as a per-dimension overlay keyed by question id.
  The Dutch must read as flowing colloquial Dutch, not a translation.
- **#3 Emailing results.** Decided: PDF via `window.print()` against a print stylesheet, plus a
  `mailto:` button prefilled with the share link. Both free, both entirely in the browser, so the
  address is never received and the privacy claim stays literally true.

## Known open question

The rubric wording has been reviewed only lightly. It was written in one pass, roughly 190
anchors and 94 launch conditions. It is the thing most likely to need revision once it is said
out loud in a real client session.

## Environment notes

- Node default is 22. Node 18 remains installed but is no longer needed here.
- `flowise` and `n8n` were uninstalled from Node 18 in the course of this work, at the owner's
  request. They are not dependencies of CARA.
