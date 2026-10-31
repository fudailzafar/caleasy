# Contributing to CalEasy

Thanks for contributing. Please keep changes focused, documented, and easy to
review.

## Before you start

1. Fork the repository and create a feature branch.
2. Follow the setup instructions in [README.md](./README.md).
3. Copy `.env.example` to `.env` and use your own service credentials.
4. Do not commit secrets, local environment files, generated build output, or
   unrelated formatting changes.

## Pull requests

Before opening a pull request, run:

```sh
npm run typecheck
npm run lint
npm run build
```

Include a concise description of the problem, the solution, and how you
verified it. If the change affects setup, environment variables, migrations,
or deployment, update the README as part of the same pull request.

## Database changes

Update `prisma/schema.prisma` and create a development migration with:

```sh
npm run db:migrate
```

Commit the generated migration files. Do not edit an already-applied migration;
create a new migration instead.

## Security

Do not report credentials or vulnerabilities in a public issue. Please
coordinate responsibly with the repository maintainers before disclosing
security-sensitive information.
