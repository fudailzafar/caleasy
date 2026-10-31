# API and integration reference

CalEasy's primary application operations use Next.js server actions rather than
a versioned public REST API. The following route handlers are available to the
browser and external providers.

## Authentication

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/auth/[...nextauth]` | NextAuth methods | Starts OAuth, handles provider callbacks, and manages sessions. |
| `/api/auth` | `GET` | Starts the Nylas authorization redirect. |

The OAuth callback URLs are:

```text
/api/auth/callback/google
/api/auth/callback/github
```

## Calendar integration

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/oauth/exchange` | `GET` | Exchanges the Nylas authorization code and saves the user's calendar grant. |

The route requires an authenticated user and a `code` query parameter supplied
by Nylas.

## Uploads

| Route | Method | Purpose |
| --- | --- | --- |
| `/api/uploadthing` | UploadThing methods | Creates and completes authenticated image uploads. |

The `imageUploader` route accepts one image up to 4 MB. Uploads require a
signed-in user and a valid `UPLOADTHING_TOKEN`.

## Authentication and errors

Protected operations require a valid NextAuth session. Do not expose provider
secrets or database connection strings in client code. When adding a route,
validate all user input, return an appropriate HTTP status, and document the
route here.

This reference describes the current implementation and is not a stability
guarantee for external clients. Check the source and release notes before
depending on undocumented behavior.
