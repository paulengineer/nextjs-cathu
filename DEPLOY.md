# Deploy to Vercel

## Quick Start

Your Cothú Studio website is now ready to deploy! Follow these steps:

### 1. Push to GitHub

```bash
git add .
git commit -m "Ready for deployment with pastel colors"
git push origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up/Sign in with GitHub
3. Click "Add New Project"
4. Import your `First Web Project Cathu` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### 3. Setup Cal.com (Optional)

To enable the booking calendar:

1. Create a free account at [cal.com](https://cal.com)
2. Set up your calendar and create event types
3. Install `@calcom/embed-react` package: `pnpm add @calcom/embed-react`
4. Update `src/components/art-therapy-booking.tsx` with your Cal.com username
5. Import and use the Cal component

## What's Included

✅ **Fully built and optimized** - Production-ready build complete  
✅ **Pastel color theme** - Soft pink, baby blue, and mint green throughout  
✅ **Dark mode support** - Toggle in navigation  
✅ **7 pages** - Home, About, Sessions, Individual, Gallery, Irish Mythology, Booking  
✅ **Responsive design** - Mobile-friendly  
✅ **SEO optimized** - Next.js best practices  
✅ **Fast performance** - Static generation

## Site Information

- **Location**: Galway, Ireland  
- **Email**: hello@cothustudio.ie  
- **Pricing**: In Euros (€)  
- **Theme**: Monochrome with calming pastel accents

## Next Steps After Deployment

1. **Update email**: Replace `hello@cothustudio.ie` with your actual email
2. **Add Cal.com booking**: Follow setup guide in `/docs/CAL_COM_SETUP.md`
3. **Add images**: Replace placeholder images in gallery
4. **Update content**: Customize session descriptions and pricing
5. **Add Irish mythology content**: Expand the mythological themes section

## Build Information

- ✅ Build completed successfully
- ✅ All pages static-generated
- ✅ No build errors
- ⚠️ 1 ESLint warning (non-blocking, in fade-in component)

Enjoy your new art therapy studio website! 🎨
