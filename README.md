# CalEasy

CalEasy is an open-source meeting scheduling application. Users can create
personal booking links, define availability, connect a calendar, and let
others book meetings.

## Features

- Multi-tenant user accounts with personal booking links
- Availability and event-type management
- Timezone-aware scheduling
- Google and GitHub sign-in through NextAuth
- Nylas calendar integration
- UploadThing image uploads
- PostgreSQL persistence through Prisma

## Technology

- Next.js 14 and React 18
- TypeScript and Tailwind CSS
- NextAuth
- Prisma and PostgreSQL
- Nylas
- UploadThing

## Requirements

- Node.js 18.17 or newer
- npm 9 or newer
- A PostgreSQL database
- OAuth credentials for at least one sign-in provider
- Nylas credentials for calendar integration
- UploadThing credentials for image uploads

The external services are not included in this repository. You must create
your own accounts and credentials for local development or deployment.

## Local setup

1. Clone the repository and enter the project:

   ```sh
   git clone https://github.com/fudailzafar/caleasy.git
   cd caleasy
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create your local environment file:

   ```sh
   cp .env.example .env
   ```

4. Fill in `.env`. Never commit `.env` or any credential file. The variables
   are described below.

5. Generate the Prisma client and apply the development migrations:

   ```sh
   npm run db:generate
   npm run db:migrate
   ```

6. Start the development server:

   ```sh
   npm run dev
   ```

   Open http://localhost:3000.

## Environment variables

### Application

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_URL` | Yes | Public base URL used by OAuth and Nylas. Use `http://localhost:3000` locally. |
| `NEXT_PUBLIC_APP_URL` | Recommended | Base URL used for generated metadata and links. |
| `AUTH_SECRET` | Yes | Random secret used by NextAuth. Generate with `openssl rand -base64 32`. |

### OAuth

Configure at least one provider:

| Variable | Description |
| --- | --- |
| `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` | Google OAuth client credentials |
| `AUTH_GITHUB_ID` / `AUTH_GITHUB_SECRET` | GitHub OAuth app credentials |

For local development, configure these callback URLs in the provider:

```text
Google: http://localhost:3000/api/auth/callback/google
GitHub: http://localhost:3000/api/auth/callback/github
```

For production, replace `http://localhost:3000` with your deployed
`NEXT_PUBLIC_URL`. The callback URL must match exactly.

### Database

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string used by Prisma |
| `DIRECT_URL` | Direct PostgreSQL connection string used for migrations |

With Supabase, `DATABASE_URL` can use the pooler connection and `DIRECT_URL`
can use the direct connection. Run `npm run db:migrate` after configuring them.

### Calendar and uploads

| Variable | Description |
| --- | --- |
| `NYLAS_API_SECRET_KEY` | Nylas application secret |
| `NYLAS_API_URI` | Nylas API base URL |
| `NYLAS_CLIENT_ID` | Nylas client ID |
| `UPLOADTHING_TOKEN` | UploadThing app token |

Set the Nylas redirect URI to:

```text
http://localhost:3000/api/oauth/exchange
```

Use the equivalent production URL when deploying.

## Production deployment

1. Deploy the application to a Node-compatible host such as Vercel.
2. Add every required variable from `.env.example` to the host's environment
   settings. Do not copy secrets into source control.
3. Set `NEXT_PUBLIC_URL` to the deployed HTTPS URL.
4. Add the production OAuth callback URLs to Google and/or GitHub.
5. Add the production Nylas redirect URI.
6. Apply migrations in the deployment environment:

   ```sh
   npm run db:deploy
   ```

7. Verify the sign-in flow and a complete booking flow before sharing the
   deployment URL.

If sign-in redirects to `/api/auth/error?error=Configuration`, check
`AUTH_SECRET`, the selected OAuth credentials, the exact callback URL, and the
database connection first.

## Development checks

Run these before opening a pull request:

```sh
npm run typecheck
npm run lint
npm run build
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the development and pull request
workflow. Issues and pull requests are welcome.

## License

CalEasy is available under the [MIT License](./LICENSE).
