# CalEasy

CalEasy is a modern meeting scheduling application that offers better functionality than existing tools like Calendly or Cal.com. It simplifies the process of booking meetings, managing availability, and handling multiple tenants with ease.

## Features

- **Multi-Tenant Support** – Users can have unique usernames and custom booking links.
- **Seamless Scheduling** – Easily set up meetings with customizable availability.
- **Timezone Support** – Automatically adjusts meeting times based on user timezones.
- **Integrations** – (Planned) Connect with Google Calendar, Outlook, and other services.
- **Custom Branding** – Personalize booking pages with user preferences.
- **Email & Notification System** – (Planned) Automatic reminders for scheduled meetings.

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, ShadcnUI
- **Backend:** Node.js, Express, Supabase
- **Hosting:** Vercel (Frontend), Vercel (Backend)
- **Authentication:** NextAuth.js / OAuth support
- **Database:** Supabase with Prisma ORM

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
   DATABASE_URL=your_database_url
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
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

## Contact
For questions or feedback, reach out at [fudail.zafar@gmail.com](mailto:fudail.zafar@gmail.com).