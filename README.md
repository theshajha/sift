# Sift

### Spend more time talking to the right candidates.

![Sift: from a pile of inbound to the right fit](public/twitter-banner.png)

Hiring buries you in resumes. Sift reads every one so you do not have to, and hands back a
ranked shortlist: the best fits first, each with one plain line on why. Minutes, not an
afternoon.

Sift is not an app. It is the judgment, written down: a small set of plain-language
instructions any agent can follow. You open this folder in your own agent, point it at your
resumes, and it ranks them. Your resumes never leave your machine.

Made by [Re:Work](https://rwhq.io). If you would rather someone just ran your hiring, that is
what Re:Work does. This is the same judgment, open and yours to run.

## How it works

1. Make a folder for the role under `roles/`, and write a sentence or two in its `role.md` on
   who you are looking for.
2. Drop that role's resumes into the same folder (PDF, text, or markdown).
3. Open this folder in your agent and say: rank the founding-backend-engineer folder. You get
   a ranked list, best fit first, each with one line on why.

It ships with a worked example, `roles.example/founding-backend-engineer/`, with a sample role
and a dozen sample resumes, so it works the second you have it. Copy it into `roles/` and make
it yours, or point your agent straight at the example to try it.

## What's in here

- `instructions.md`: how Sift reads a folder and ranks it. Start here.
- `skills/screen/`: the rubric, how a resume is scored from 0 to 100.
- `schema.md`: the shape of the ranked list it hands back.
- `roles.example/`: a worked example you can run today.
- `roles/`: your real searches live here. Never committed.

## Your folder

Everything personal lives in `roles/` (git-ignored). One folder per search:

```
roles/
  founding-backend-engineer/
    role.md         # who you are looking for, in your words
    <resumes>       # the resumes for this search
```

Run as many roles as you like. Each folder is one ranked list. Because you only ever edit
`roles/`, you can pull updates to Sift without merge conflicts.

## After the list

Two optional skills sit alongside the ranking, off by default, for when you want them. They
run in your own agent, with your own connectors:

- `skills/research/`: read the public links a shortlisted candidate gave you.
- `skills/outreach/`: draft outreach to the people worth your time and send it through your
  own email connector. Sift never sends anything itself and never holds your credentials.

## Run it anywhere

Sift assumes no particular agent or model. It is plain markdown. Open it in Claude Code, or
any agent that can read your files, and it works.

## License

MIT.
