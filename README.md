# Sift

### Spend more time talking to the right candidates.

![Sift: from a pile of inbound to the right fit](public/twitter-banner.png)

Find the right candidates without reading the pile.

Hiring buries you in resumes. Sift reads every one so you do not have to, and hands back a ranked shortlist: the best fits first, each with one plain line on why. Minutes, not an afternoon.

Made by [Re:Work](https://rwhq.io). If you would rather someone just ran your hiring, that is what Re:Work does. This is the same judgment, open and yours to run.

## How it works

1. Tell Sift, in a sentence, who you are looking for.
2. Drop your resumes into a folder (PDF or text).
3. Run it. You get a ranked list, best fit first, each with one line on why.

It ships with a dozen sample resumes, so it works the second you clone it. Clear them out and drop in your own when you are ready.

Built as an agent: the real work lives in plain-language instructions you can read and change. It runs locally with Claude or any agent, so your resumes never leave your machine.

## Quickstart

```bash
npm install
npm run onboard          # creates yours/ and asks who you are looking for
npx eve dev              # then type: run, and open /board
```

`npm run onboard` copies in a sample role and the sample resumes so you can try it immediately. When you want your own, edit `yours/role.md` and replace the files in `yours/inbound/`.

## Your layer

Everything personal lives in `yours/` (git-ignored), scaffolded from `yours.example/`:

- `yours/role.md`: free text, in your own words, on who you are looking for
- `yours/inbound/`: drop your resumes here (PDF, text, or markdown)
- `yours/board.json`: the ranked result, written when you run

Because you only ever edit `yours/`, you can pull updates to Sift without merge conflicts.

## What's next

Once the list is ready, more can build on top of it: keeping every candidate across hiring rounds so a strong "not for this role" resurfaces later, and reaching out in your voice. Those layers live in the repo and switch on as the product grows.

## Deploy

Run it locally with `npx eve dev`, the way a one-person desk runs. You can deploy to Vercel with `npx eve deploy`, but the board at `/board` and `/api/board` are unauthenticated and the data is yours, so gate any deployment behind Vercel Authentication before loading real resumes.

## License

MIT.
