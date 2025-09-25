# CalEasy

CalEasy is a modern meeting scheduling application that offers better functionality than existing tools like Calendly or Cal.com. It simplifies the process of booking meetings, managing availability, and handling multiple tenants with ease.

## Features

- **Multi-Tenant Support** – Users can have unique usernames and custom booking links.
- **Seamless Scheduling** – Easily set up meetings with customizable availability.
- **Timezone Support** – Automatically adjusts meeting times based on user timezones.
- **Integrations** – Connect with Google Calendar, Outlook, and other services.
- **Custom Branding** – Personalize booking pages with user preferences.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, ShadcnUI
- **Backend:** Next.js API Routes, Nylas (Calendar API)
- **Hosting:** Vercel
- **Authentication:** NextAuth.js / OAuth support
- **Database:** Supabase with Prisma ORM
- **File Upload:** UploadThing

## Getting Started

### Prerequisites

- Node.js (v18+)
- Vercel CLI (for deployment)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/fudailzafar/caleasy.git
   cd caleasy
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```env
   AUTH_GITHUB_ID=""
   AUTH_GITHUB_SECRET=""
   AUTH_GOOGLE_ID=""
   AUTH_GOOGLE_SECRET=""
   AUTH_SECRET=""
   DATABASE_URL=""
   DIRECT_URL=""
   NEXT_PUBLIC_URL=""
   NYLAS_API_SECRET_KEY=""
   NYLAS_API_URI=""
   NYLAS_CLIENT_ID=""
   UPLOADTHING_TOKEN=""
   ```

4. Run database migrations:

   ```sh
   npx prisma migrate dev
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Link the project:
   ```sh
   vercel
   ```
3. Deploy:
   ```sh
   vercel --prod
   ```

## Contributing

Pull requests are welcome! Please open an issue first to discuss any changes.

## License

MIT License. See `LICENSE` for details.
