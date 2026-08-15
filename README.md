# CARA, Copilot Adoption Readiness Assessment

**Run the assessment: [jellebelletje.github.io/CARA](https://jellebelletje.github.io/CARA/)**

> Not live yet. The link is the address the assessment will be published to, and it goes live
> with the first deploy of the application. Until then, the question bank is readable at
> [content/questions.md](content/questions.md).

A scored readiness assessment for the question organisations actually ask before starting a
Microsoft 365 Copilot pilot: **what has to be in place before we can start?**

CARA is worked through as a conversation between an adoption coach and the organisation. It
scores six dimensions, produces a go / no-go verdict, and turns every gap into a concrete
**launch condition** with an owner and a deadline relative to the pilot.

## Where CARA sits

A complete Copilot decision needs four stages. Microsoft covers three of them with real,
runnable instruments. For the fourth it publishes checklists and guides but no scored
diagnostic, and that is the gap CARA fills.

CARA is not a technical, security or data-governance assessment and does not replace one. Run
the instruments below alongside it.

### Stage 1. Can we deploy safely?

Assessments to run:

| Instrument | What it assesses | Where you run it |
|---|---|---|
| [Copilot Optimization Assessment](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-enablement-resources) | Data governance maturity and data security controls. Microsoft recommends completing it before deploying Copilot. | M365 admin center, Copilot, Settings, Readiness |
| [Copilot Readiness Report](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/microsoft-365-copilot-readiness) | Technical eligibility, prerequisite licences, update channels, assigned versus available Copilot licences, and recommended preparation actions. | M365 admin center, Reports |
| [Purview DSPM for AI data risk assessments](https://learn.microsoft.com/en-us/purview/data-security-posture-management-oversharing) | Oversharing exposure. Which sites and files Copilot could surface, and which sensitive content is unlabelled. | Purview portal, DSPM, Discover, Data risk assessments |
| [SharePoint Advanced Management content assessment](https://learn.microsoft.com/en-us/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management) | Sites that are overshared, ownerless or inactive, oversized audiences, and broken permission inheritance. Restricted Content Discovery excludes sensitive sites from Copilot. | SharePoint admin center |

Reference reading behind those:

- [Use Microsoft Purview for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/purview/ai-m365-copilot)
- [DSPM for AI overview](https://learn.microsoft.com/en-us/purview/dspm-for-ai)
- [Configure a secure and governed data foundation for Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/configure-secure-governed-data-foundation-microsoft-365-copilot)
- [Copilot Control System, security and governance](https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-control-system/security-governance)

### Stage 2. Can the organisation absorb the change?

**[CARA](https://jellebelletje.github.io/CARA/)**, the assessment in this repository. Microsoft's
own material for this stage is planning support rather than diagnosis:

- [Copilot adoption planning checklist](https://adoption.microsoft.com/en-us/copilot/essential-guide/plan/)
- [Copilot Success Kit](https://adoption.microsoft.com/en-us/copilot/success-kit/)
- [The essential guide to Copilot adoption](https://adoption.microsoft.com/en-us/copilot/essential-guide/)

### Stage 3. Are people adopting it?

- [AI Adoption Score](https://learn.microsoft.com/en-us/microsoft-365/admin/adoption/ai-adoption-score), habit formation against a 12-active-days-in-28 target
- [Copilot adoption report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-adoption), Viva Insights, with the power, habitual and novice user definitions

### Stage 4. Is it producing value?

- [Copilot impact report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/microsoft-365-copilot-impact), assisted hours and before-and-after collaboration patterns
- [Copilot Business Impact report](https://learn.microsoft.com/en-us/viva/insights/advanced/analyst/templates/copilot-business-impact), which joins Copilot telemetry to your own business outcome measures

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

## Using CARA in your own organisation

You are welcome to clone this and run it yourself, for your own organisation or with your own
clients. Attribution is required. See [LICENSE](LICENSE) for the exact terms; the short version
is that the credit line must stay visible wherever CARA is used or published.

```bash
git clone https://github.com/jellebelletje/CARA.git
cd CARA
nvm use          # Node 22, see .nvmrc
npm install
npm run dev
```

To publish your own copy:

1. Fork the repository, or clone it and push to a repository of your own.
2. In your repository settings, enable GitHub Pages with GitHub Actions as the source.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes it.

Everything runs in the browser. There is no server and no database, and nothing an assessment
records leaves the machine it was filled in on unless the person filling it in chooses to share
the link.

### Adapting the questions

The question bank is meant to be adapted to your own practice.

- Edit the files in `src/data/dimensions/`. Each question carries its own text, hint, four
  rubric anchors and two launch conditions, so a change is local to one object.
- Run `npm run questions:check` to validate. It enforces unique ids, complete anchors, both
  launch conditions, 5 to 10 questions per dimension, and the pilot-critical balance.
- Run `npm run questions:build` to regenerate `content/questions.md`.

Keep the attribution in place when you do. Adapting the bank does not make it yours.

## House style

No em-dashes, anywhere, in content or code comments.
