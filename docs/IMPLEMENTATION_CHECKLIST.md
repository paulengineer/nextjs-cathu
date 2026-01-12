# Implementation Checklist

Complete these steps to launch Cothú Studio:

## 1. Cal.com Setup (REQUIRED)

- [ ] Sign up at [app.cal.com/signup](https://app.cal.com/signup)
- [ ] Verify your email
- [ ] Connect your calendar (Google, Outlook, etc.)
- [ ] Create 4 booking events:
  - [ ] `group-session` - 120 min (€40)
  - [ ] `individual-60min` - 60 min (€70)
  - [ ] `individual-90min` - 90 min (€95)
  - [ ] `open-studio` - 180 min (€35)
- [ ] Note your Cal.com username (e.g., "yourname")
- [ ] Set 15-30 minute buffer times between sessions

## 2. Update Code with Your Cal.com Username

Find and replace `your-username` with your actual Cal.com username in these files:

### `src/components/art-therapy-booking.tsx`
```typescript
const eventTypes = {
  "group-session": "YOUR_USERNAME/group-session",      // ← Update here
  "individual-60min": "YOUR_USERNAME/individual-60min",
  "individual-90min": "YOUR_USERNAME/individual-90min",
  "open-studio": "YOUR_USERNAME/open-studio",
};
```

### `src/components/navigation.tsx`
```typescript
{/* Book Now button */}
<Link
  href="https://YOUR_USERNAME.cal.com"  {/* ← Update here */}
  target="_blank"
  className="bg-black dark:bg-white..."
>
  Book Now
</Link>
```

## 3. Update Contact Information

### `src/components/footer.tsx`
- [ ] Update email: `hello@cothustudio.ie` → your email
- [ ] Update phone/contact (add if needed)
- [ ] Verify location: "Galway, Ireland"
- [ ] Update opening hours if different

## 4. Replace Placeholder Images

### `src/app/page.tsx`
- [ ] Replace Unsplash image URLs with your own studio photos
- [ ] Update image alt texts

Gallery placeholder images use this pattern:
```jsx
<Image
  src="https://images.unsplash.com/photo-XXXXXXXXX?w=400&h=400&fit=crop"
  alt="Studio moment"
  fill
  className="object-cover"
  unoptimized
/>
```

Replace with your images:
```jsx
<Image
  src="/images/studio-1.jpg"
  alt="Group art therapy session"
  fill
  className="object-cover"
/>
```

## 5. Test Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:3000

# Test booking page
# http://localhost:3000/booking
```

- [ ] Click through all pages
- [ ] Test dark mode toggle
- [ ] Test booking system
- [ ] Verify scroll animations
- [ ] Test on mobile

## 6. Deploy to Production

### Option A: Vercel (Recommended)

1. [ ] Push code to GitHub
2. [ ] Go to [vercel.com](https://vercel.com)
3. [ ] Click "New Project"
4. [ ] Select your repository
5. [ ] Deploy!

### Option B: Other Platforms

- [ ] Build locally: `npm run build`
- [ ] Upload to Railway, Netlify, or DigitalOcean
- [ ] Update domain DNS if needed

## 7. Post-Launch Configuration

### Payment Setup (Optional but Recommended)
- [ ] Connect Stripe in Cal.com
- [ ] Enable payment collection for bookings
- [ ] Set cancellation policy

### Reminders & Notifications
- [ ] Enable email reminders (24h before)
- [ ] Optionally enable SMS reminders
- [ ] Test with a test booking

### Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Add tracking to bookings

## 8. Content Updates (Optional)

- [ ] Update "About" page with your bio
- [ ] Add staff bios if applicable
- [ ] Update testimonials in relevant sections
- [ ] Add real gallery images
- [ ] Customize Irish Mythology content

## 9. SEO & Meta Tags (Optional)

Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Cothú Studio | Art Therapy & DBT Skills in Galway",
  description: "Professional art therapy studio...",
};
```

## 10. Go Live Checklist

Before announcing:
- [ ] All Cal.com links updated
- [ ] Contact information correct
- [ ] Images replaced with real photos
- [ ] Tested booking flow end-to-end
- [ ] Mobile responsive checked
- [ ] Dark mode tested
- [ ] Scroll animations smooth
- [ ] Footer displays correctly
- [ ] Email works
- [ ] No broken links

## 11. Social Media & Promotion

- [ ] Create Instagram account
- [ ] Set up email list
- [ ] Add booking link to social profiles
- [ ] Create launch announcement

## 12. Ongoing Maintenance

- [ ] Monitor booking form submissions
- [ ] Update content quarterly
- [ ] Check for broken links monthly
- [ ] Keep Next.js and dependencies updated

---

## Quick Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## File Locations Reference

| What | File |
|------|------|
| Cal.com booking component | `src/components/art-therapy-booking.tsx` |
| Navigation with Book button | `src/components/navigation.tsx` |
| Footer with contact info | `src/components/footer.tsx` |
| Home page | `src/app/page.tsx` |
| Booking page | `src/app/booking/page.tsx` |
| Global styles | `src/app/globals.css` |
| Layout & metadata | `src/app/layout.tsx` |

## Troubleshooting

**Cal.com not loading?**
- Verify username is correct (case-sensitive)
- Check Cal.com is accessible (not blocked by firewall)
- Try incognito browser mode

**Images not showing?**
- Verify image URLs are accessible
- Check file paths if using local images
- Ensure `unoptimized` prop for external URLs

**Dark mode not working?**
- Check `next-themes` package installed
- Verify layout has `suppressHydrationWarning`
- Clear browser cache

**Styling issues?**
- Rebuild Tailwind: `npm run dev`
- Clear `.next` folder: `rm -rf .next`
- Restart development server

---

**Questions?** Check [CAL_COM_SETUP.md](./CAL_COM_SETUP.md) for detailed Cal.com guide.

**Ready to launch?** You're just 3 steps away:
1. Sign up on Cal.com
2. Update your username in 2 files
3. Deploy!

Good luck! 🚀
