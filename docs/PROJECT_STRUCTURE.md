# Cothú Studio - File Structure Reference

## 📦 Complete Project File Tree

```
cothú-studio/
│
├── 📄 Configuration Files
│   ├── package.json                 # Project dependencies + scripts
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tailwind.config.ts           # Tailwind CSS config
│   ├── postcss.config.js            # PostCSS/Autoprefixer config
│   ├── next.config.js               # Next.js configuration
│   └── .eslintrc.json               # ESLint rules
│
├── 📚 Documentation (START HERE!)
│   ├── README.md                    # Overview & quick start ⭐
│   ├── PROJECT_SUMMARY.md           # Complete project summary ⭐
│   ├── CAL_COM_SETUP.md             # Cal.com configuration guide ⭐
│   ├── IMPLEMENTATION_CHECKLIST.md  # Step-by-step checklist ⭐
│   └── PROJECT_STRUCTURE.md         # This file
│
├── 🚀 Setup Scripts
│   ├── setup.sh                     # Linux/Mac setup script
│   └── setup.bat                    # Windows setup script
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── page.tsx                 # Home page (hero + programs + gallery)
│   │   ├── layout.tsx               # Root layout with nav + footer
│   │   ├── globals.css              # Global styles & dark mode
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx             # About page
│   │   │
│   │   ├── sessions/
│   │   │   └── page.tsx             # Group sessions page
│   │   │
│   │   ├── individual/
│   │   │   └── page.tsx             # Individual sessions page
│   │   │
│   │   ├── gallery/
│   │   │   └── page.tsx             # Gallery showcase
│   │   │
│   │   ├── irish-mythology/
│   │   │   └── page.tsx             # Mythology content
│   │   │
│   │   └── booking/
│   │       └── page.tsx             # Advanced booking interface
│   │
│   └── components/                  # Reusable React components
│       ├── navigation.tsx           # Top navbar with Book button ⭐
│       ├── footer.tsx               # Footer with hours/contact ⭐
│       ├── art-therapy-booking.tsx  # Cal.com booking component ⭐
│       ├── fade-in-on-scroll.tsx    # Scroll animation effect
│       ├── theme-provider.tsx       # Dark mode provider
│       └── icons.tsx                # SVG icons (Sun, Moon, Arrow)
│
└── 📁 Generated (ignore)
    ├── .next/                       # Next.js build output
    ├── node_modules/                # Dependencies
    ├── .git/                        # Git repository
    └── pnpm-lock.yaml               # Lockfile (if using pnpm)
```

## 🎯 Key Files to Modify

### 1️⃣ Add Your Cal.com Username
**Priority: CRITICAL - Do this first!**

#### File: `src/components/art-therapy-booking.tsx`
```typescript
// Line ~12-17
const eventTypes = {
  "group-session": "YOUR_USERNAME/group-session",
  "individual-60min": "YOUR_USERNAME/individual-60min",
  "individual-90min": "YOUR_USERNAME/individual-90min",
  "open-studio": "YOUR_USERNAME/open-studio",
};
```

#### File: `src/components/navigation.tsx`
```typescript
// Line ~70
<Link
  href="https://YOUR_USERNAME.cal.com"  // ← Update here
  target="_blank"
  ...
/>
```

### 2️⃣ Update Contact Information
**File: `src/components/footer.tsx`**

Find and update:
- Email: `hello@cothustudio.ie`
- Phone: (add if needed)
- Location: `Waterford, Ireland`
- Opening hours (if different)

### 3️⃣ Replace Images
**File: `src/app/page.tsx`**

Gallery images (lines ~100-130):
```jsx
// Replace URLs like:
src="https://images.unsplash.com/photo-XXXXXXXXX?..."
// With your own:
src="/images/studio-1.jpg"
```

### 4️⃣ Customize Content Pages
Edit these files to match your studio:
- `src/app/about/page.tsx` - Your story
- `src/app/sessions/page.tsx` - Session details
- `src/app/individual/page.tsx` - Individual pricing
- `src/app/gallery/page.tsx` - Gallery description
- `src/app/irish-mythology/page.tsx` - Mythology integration

## 🎨 Component Structure

### Navigation (`src/components/navigation.tsx`)
- Fixed top navbar
- Logo/brand name
- Navigation links (desktop + mobile menu)
- Dark mode toggle (Sun/Moon icons)
- Book Now button

### Footer (`src/components/footer.tsx`)
- About section
- Opening hours (varies by season)
- Contact info & location
- Quick navigation links
- Privacy/terms links
- Copyright

### Art Therapy Booking (`src/components/art-therapy-booking.tsx`)
- Session type selector (4 buttons)
- Session details panel
- Cal.com embed (responsive)
- Trust & security messaging
- Pricing display

### Fade In On Scroll (`src/components/fade-in-on-scroll.tsx`)
- Intersection Observer API
- Smooth 1s fade-in animation
- Reusable wrapper component

## 📱 Responsive Breakpoints

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

Used via Tailwind: `md:`, `lg:` prefixes

## 🌓 Dark Mode

Theme provider uses `next-themes`:
- Light: White background, black text
- Dark: Black background, white text
- CSS variables in `globals.css`
- Toggle button in navigation

## 🎬 Animations

### Scroll Fade-In (`fade-in-on-scroll.tsx`)
- Triggers at 10% into viewport
- 1000ms duration
- Used on: Programs, Gallery, CTA sections

### Hover Effects
- Navigation links: opacity change
- Buttons: opacity change
- Cards: background color change (dark/light)

## 🗂️ Page Structure

### Home (`/`)
1. Hero Section
2. What We Offer (4 items)
3. Studio Moments Gallery (8 images)
4. Our Programs (2 main programs)
5. Why Choose Cothú (3 benefits)
6. Ready to Begin CTA

### About (`/about`)
- Project overview
- Approach explanation
- 5 key differences
- Link to sessions

### Sessions (`/sessions`)
- 4 group session cards
- Session packages (4/8/12 sessions)
- Pricing in euros

### Individual (`/individual`)
- 2 session duration options
- Session packages
- What to expect list

### Gallery (`/gallery`)
- 12-grid image placeholder
- Gallery description

### Irish Mythology (`/irish-mythology`)
- 6 mythological themes
- Upcoming art adventure themes

### Booking (`/booking`)
- Full-page booking interface
- 4 session type selector
- Cal.com embed
- Security messaging

## 💾 Database / Storage

**This project is static** - no database needed!

- Cal.com handles all booking data
- Email confirmations sent by Cal.com
- Client info stored in Cal.com
- No server-side storage required

## 🔒 Environment Variables

Currently: **None required!**

If you add features later, create `.env.local`:
```
NEXT_PUBLIC_CAL_USERNAME=your-username
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

## 📦 Dependencies

Core (required):
- `react` & `react-dom` - UI framework
- `next` - Next.js framework
- `typescript` - Type safety

Features:
- `next-themes` - Dark mode
- `@calcom/embed-react` - Cal.com booking

Dev:
- `tailwindcss` - Styling
- `autoprefixer` & `postcss` - CSS processing
- `eslint` - Code quality

## 🚀 Build & Deploy

### Development
```bash
npm run dev          # Start dev server
# Open http://localhost:3000
```

### Production Build
```bash
npm run build        # Build for production
npm start            # Start production server
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel               # Deploy!
```

## 📋 Checklist for Going Live

- [ ] Read PROJECT_SUMMARY.md
- [ ] Read IMPLEMENTATION_CHECKLIST.md
- [ ] Set up Cal.com account
- [ ] Update Cal.com username (2 files)
- [ ] Update contact info in footer
- [ ] Replace placeholder images
- [ ] Test locally: `npm run dev`
- [ ] Test all pages
- [ ] Test booking system
- [ ] Test dark mode
- [ ] Test mobile responsive
- [ ] Build production: `npm run build`
- [ ] Deploy to Vercel/Railway/etc
- [ ] Test live website
- [ ] Update DNS/domain (if using custom domain)
- [ ] Announce launch!

## 🆘 Common Issues

| Problem | Solution | File |
|---------|----------|------|
| Cal.com not showing | Update username | `art-therapy-booking.tsx`, `navigation.tsx` |
| Images not loading | Replace URLs | `src/app/page.tsx` |
| Dark mode broken | Clear cache, restart | `navigation.tsx` |
| Scroll animation slow | Change duration | `fade-in-on-scroll.tsx` |
| Style issues | Run `npm run dev` | Terminal |

## 📖 Documentation Order

Read in this order:
1. **PROJECT_SUMMARY.md** ← Start here
2. **README.md** ← Quick overview
3. **IMPLEMENTATION_CHECKLIST.md** ← Step-by-step
4. **CAL_COM_SETUP.md** ← Cal.com details
5. **This file** ← Reference

## ✨ Features Summary

| Feature | Status | File |
|---------|--------|------|
| Monochrome design | ✅ | `globals.css` |
| Dark mode | ✅ | `navigation.tsx`, `theme-provider.tsx` |
| Responsive layout | ✅ | `layout.tsx`, all pages |
| Scroll animations | ✅ | `fade-in-on-scroll.tsx` |
| Cal.com booking | ✅ | `art-therapy-booking.tsx` |
| Footer with hours | ✅ | `footer.tsx` |
| Programs section | ✅ | `page.tsx` |
| Gallery | ✅ | `page.tsx`, `gallery/page.tsx` |
| Pricing in euros | ✅ | All session pages |
| 7 total pages | ✅ | `app/*/page.tsx` |

---

**Ready to launch? Start with PROJECT_SUMMARY.md! 🚀**
