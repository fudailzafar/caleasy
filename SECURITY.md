# Security policy

## Supported versions

Only the latest version on the default branch is actively maintained. Because
CalEasy is self-hosted, deployment operators are responsible for applying
security updates to their own installations.

## Reporting a vulnerability

Please do not report security vulnerabilities in a public issue or discussion.
Use GitHub's private vulnerability reporting or security advisory feature for
this repository when available. If it is unavailable, contact the repository
maintainer privately through their GitHub profile.

Include:

- A clear description of the vulnerability and its impact.
- The affected commit, version, route, or configuration.
- Reproduction steps or a minimal proof of concept.
- Any suggested mitigation.

Do not include real credentials, personal data, or production user data in a
report. The maintainer will acknowledge the report, investigate it, and
coordinate disclosure and a fix.

## Self-hosting security

- Generate a unique `AUTH_SECRET` for every environment.
- Never commit `.env`, OAuth secrets, database URLs, or UploadThing tokens.
- Use HTTPS in production and exact OAuth callback URLs.
- Restrict database credentials and rotate them if exposed.
- Keep dependencies and the deployment platform up to date.
