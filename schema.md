# Output shape

The result of a run is a ranked list of candidates, best fit first.

Each candidate has three fields:

- `name`: the candidate's real name, pulled from the resume (a string).
- `fit`: an honest fit score from 0 to 100 (a whole number).
- `reason`: one plain sentence on why they fit, or what is missing (a string).

The list is sorted by `fit`, highest first. That is the whole contract. Anything that runs
Sift, a coding agent or a hosted app, produces this same shape, so the judgment stays the
single source of truth and the shape stays stable.

## Example

    [
      { "name": "Jordan Reyes", "fit": 86,
        "reason": "Built and ran backend infrastructure at two seed-stage startups, the small-team distributed-systems depth this role asks for." },
      { "name": "Sam Okafor", "fit": 62,
        "reason": "Strong backend engineer, but mostly at larger companies, so the 0-to-1 and ambiguity signal is thinner than the role wants." },
      { "name": "Alex Mercer", "fit": 24,
        "reason": "Primarily a frontend engineer, which is the explicit not-a-fit for this search." }
    ]
