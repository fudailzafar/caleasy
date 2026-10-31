# Architecture

## Overview

CalEasy is a Next.js App Router application. Pages, layouts, server actions,
and route handlers live under `app/`. Shared UI components are in
`app/components/`, shared server/client helpers are in `app/lib/`, and the
Prisma schema is in `prisma/schema.prisma`.

## Request and data flow

1. A page or client component renders the scheduling or dashboard UI.
2. Server actions validate form input with the shared Zod schemas.
3. Authentication is resolved through NextAuth in `app/lib/auth.ts`.
4. Protected operations use the current session and Prisma through
   `app/lib/db.ts`.
5. Calendar authorization is handled by Nylas; image uploads are handled by
   UploadThing.

## Main areas

- **Public booking:** `app/[username]/[eventUrl]`
- **Dashboard:** `app/dashboard`
- **Authentication:** `app/api/auth` and `app/lib/auth.ts`
- **Nylas OAuth:** `app/api/oauth`
- **UploadThing:** `app/api/uploadthing`
- **Database:** `prisma/schema.prisma`
- **Styling and global providers:** `app/globals.css` and `app/layout.tsx`

## Database

Prisma targets PostgreSQL. Users, OAuth accounts, sessions, availability, and
event types are defined in the schema. Schema changes must be made through a
new Prisma migration; do not rewrite migrations that have already been applied.

## External services

OAuth providers authenticate users. Nylas stores the calendar grant needed for
calendar operations. UploadThing handles image storage. Each deployment must
provide its own credentials; the repository does not contain shared service
credentials.

## Making changes

Keep business logic in server actions or focused helpers, reuse existing
validation and authentication utilities, and update the README when setup or
environment behavior changes. Run the checks listed in
[CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.
