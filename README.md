# Enchanted Invitation Suite - Nikah Invitation

A beautiful, modern Muslim Nikah invitation website for **Rifha Fathima & Abdul Lihan**.

## Features

- 🎨 Elegant Islamic design with gold calligraphy
- 📖 Book-flipping Bismillah opening page
- 💍 Smooth scroll-based card animations
- ⏰ Live countdown timer to the wedding
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Framer Motion animations throughout
- 🌸 Decorative floral elements

## Event Details

- **Bride**: Rifha Fathima (Daughter of Abdul Rafeeque & Saleena)
- **Groom**: Abdul Lihan (Son of Abdul Nazeer & Vinitha Nazeer)
- **Date**: Saturday, February 15, 2026
- **Venue**: Rozia International Convention Centre, Malappuram, Kerala
- **Timings**:
  - Nikah: 11:30 AM
  - Lunch: 12:30 PM
  - Reception: 5:00 PM

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Amiri for Arabic)
- **Deployment**: Cloudflare Pages

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Cloudflare Pages

### Method 1: Using Wrangler CLI (Recommended)

1. Install Wrangler globally (if not already installed):
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Deploy to Cloudflare Pages:
```bash
npm run pages:deploy
```

### Method 2: Via Cloudflare Dashboard

1. Build the project:
```bash
npm run build
```

2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages → Create a project

3. Choose "Upload assets" and upload the `dist` folder

### Method 3: Connect Git Repository

1. Push your code to GitHub/GitLab
2. Go to Cloudflare Pages → Create a project → Connect to Git
3. Select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `18`

The site will auto-deploy on every push to your main branch.

## Configuration Files

- `wrangler.toml` - Cloudflare Pages/Workers configuration
- `public/_redirects` - SPA routing configuration for Cloudflare Pages
- `.node-version` - Specifies Node.js version for deployment

## Project Structure

```
src/
├── components/
│   └── wedding/
│       ├── BismillahPage.tsx       # Opening Bismillah card
│       ├── HeroSection.tsx         # Main hero with names
│       ├── VenueSection.tsx        # Venue details & map
│       ├── InvitationMessage.tsx   # Family details & invitation
│       ├── CountdownTimer.tsx      # Live countdown
│       ├── InvitationCard.tsx      # Reusable card with flip animation
│       ├── GoldFrame.tsx           # Decorative gold border
│       └── FloralDecoration.tsx    # Floral elements
├── pages/
│   └── Index.tsx                   # Main page layout
└── index.css                       # Global styles & fonts
```

## Customization

To customize the invitation for another event:

1. Update event details in the respective component files:
   - Names: `HeroSection.tsx`, `InvitationMessage.tsx`
   - Venue: `VenueSection.tsx`
   - Date: `HeroSection.tsx`, `CountdownTimer.tsx`

2. Update colors in `tailwind.config.ts` if needed

3. Replace the Google Maps embed URL in `VenueSection.tsx`

## License

Private project for Abdul Lihan & Rifha Fathima's Nikah ceremony.

---

Built with ❤️ for a blessed union
