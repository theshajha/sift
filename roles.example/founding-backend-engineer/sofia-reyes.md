# Sofia Reyes

Backend engineer. Strong opinions on data modeling. Have shipped to prod with a team of four.

## Experience

**Fern (seed → Series A, grew from 6 to 18)** — Backend Engineer · Sep 2021 – present
- Designed the distributed task-scheduling system (Go + Postgres advisory locks) that coordinates SDK generation jobs; handles 300+ concurrent builds
- Led the database reliability work: connection pooling via PgBouncer, read replicas, query plan regression testing in CI — zero unplanned outages in 18 months
- Built the webhook fan-out service from scratch; supports retry semantics, exponential backoff, and per-tenant delivery SLAs

**Clearbit (acq. by HubSpot)** — Software Engineer II · Jan 2020 – Aug 2021
- Maintained the enrichment pipeline (Ruby/Sidekiq) that processed 8M company lookups per day
- Proposed and shipped a caching layer (Redis) that cut third-party API costs by 38% in Q3 2020
- Wrote the internal RFC that standardized background job observability across five services

**Lime (Scale-up)** — Backend Engineer I · Jul 2018 – Dec 2019
- Contributed to the ride-telemetry ingestion service (Elixir/Phoenix); helped stabilize throughput at 25k messages/sec
- Fixed a data-loss bug in the GPS smoothing algorithm that had been causing incorrect ride pricing; shipped the fix with a retrospective and postmortem

## Skills
Go, Ruby, Elixir, Postgres, Redis, Sidekiq, Kafka, PgBouncer, gRPC, Docker, Kubernetes

## Education
B.S. Computer Science — UC San Diego, 2018

https://github.com/sofiareyes-eng · https://sofiar.dev
