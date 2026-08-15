# CARA, Copilot Adoption Readiness Assessment

A scored readiness assessment for the question organisations actually ask before starting a
Microsoft 365 Copilot pilot: **what has to be in place before we can start?**

CARA is worked through as a conversation between an adoption coach and the organisation. It
scores six dimensions, produces a go / no-go verdict, and turns every gap into a concrete
**launch condition** with an owner and a deadline relative to the pilot.

## Where CARA sits

Microsoft provides strong instruments for three of the four stages of a Copilot decision. CARA
covers the fourth.

| Stage | Instrument |
|---|---|
| Can we deploy safely? | [Purview and DSPM for AI](https://learn.microsoft.com/en-us/purview/ai-m365-copilot), [Copilot Control System](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-control-system/security-governance) |
| **Can the organisation absorb the change?** | **CARA**, alongside the [adoption planning checklist](https://adoption.microsoft.com/en-us/copilot/essential-guide/plan/) and [Copilot Success Kit](https://adoption.microsoft.com/en-us/copilot/success-kit/) |
| Are people adopting it? | [AI Adoption Score](https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score), [Copilot adoption report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-adoption) |
| Is it producing value? | [Copilot impact report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-impact), [Copilot Business Impact report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/copilot-business-impact) |

CARA is not a technical or data-governance assessment and does not replace one. Run the
Microsoft instruments above alongside it.

## The scoring model

Every question is scored on four levels, and the levels are three different thresholds rather
than one scale of "more".

| Level | Meaning |
|---|---|
| **Not ready** | This will break the pilot, or make its results uninterpretable. Fix before starting. |
| **Emerging** | The pilot can start, with a named condition and an owner against it. |
| **Ready** | The pilot will run cleanly and produce a trustworthy answer. |
| **Scalable** | This would survive org-wide rollout, not just a friendly pilot cohort. Not required to start a pilot. |

Two rules follow from that, and they are what make CARA usable rather than a gate everyone
fails:

- **Only red blocks.** Amber never blocks a pilot, it generates a launch condition.
- **Scalable is not required to start.** It is what you re-score against after the pilot, when
  the question changes from "can we start?" to "can we scale?".

A pilot exists to answer questions. CARA is built so that it never demands the pilot's own
output as the pilot's input.

## Verdicts

```
NO-GO              any dimension is Not ready
GO WITH CONDITIONS no dimension is Not ready, at least one is Emerging
GO                 all dimensions are Ready or better
SCALE-READY        at least 4 dimensions are Scalable, none below Ready
```

The verdict is not an average. Averaging six dimensions hides the single fatal gap, which is
the entire point of a go/no-go instrument.

## The question bank

47 questions across six dimensions. See [content/questions.md](content/questions.md), which is
the human-readable source of truth. The app reads a typed mirror of it.

Full form for a proper engagement, short form (the pilot-critical subset) for a first
conversation.

## Working on it

This project needs Node 22. Your nvm default is intentionally pinned to Node 18 because
`flowise` and `n8n` are installed globally there, and global npm packages live per Node
version under nvm. So do not change the default. Run this in the project directory instead:

```bash
nvm use
```

That reads `.nvmrc` and switches this shell only, leaving everything else on 18.

```bash
npm install
npm run questions:check   # validate the question bank
npm run questions:build   # regenerate content/questions.md from src/data
```

`src/data/` is the source of truth. `content/questions.md` is generated, so do not edit it
by hand.

## Status

In development. Question bank curated at 47 questions, rubric anchors and launch conditions
complete. Application not yet scaffolded.

## House style

No em-dashes, anywhere, in content or code comments.
