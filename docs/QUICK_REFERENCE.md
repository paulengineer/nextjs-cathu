# 🎨 Cothú Studio - Quick Reference Card

## 🚀 Launch in 3 Steps

```bash
# 1. Install
npm install

# 2. Dev server
npm run dev

# 3. Add Cal.com username in:
# - src/components/art-therapy-booking.tsx
# - src/components/navigation.tsx
```

## 📍 Key Files to Edit

| What | Where | Find |
|------|-------|------|
| **Cal.com events** | art-therapy-booking.tsx | Line 12-17 (eventTypes) |
| **Book button link** | navigation.tsx | Line 70 (href) |
| **Email & hours** | footer.tsx | Line 20-60 |
| **Home content** | page.tsx | Line 1-100 |
| **Images** | page.tsx | Line 100-130 (unsplash URLs) |

## 🎯 10 Must-Do Tasks

1. ☐ [Create Cal.com account](https://app.cal.com/signup)
2. ☐ Create 4 booking events (group, ind-60, ind-90, open-studio)
3. ☐ Get your Cal.com username
4. ☐ Update username in art-therapy-booking.tsx (line 12)
5. ☐ Update username in navigation.tsx (line 70)
6. ☐ Update footer email in footer.tsx (line 38)
7. ☐ Replace images in page.tsx
8. ☐ Run `npm install` then `npm run dev`
9. ☐ Test booking at http://localhost:3000/booking
10. ☐ Deploy to Vercel/Railway

## 📱 All Routes

```
/                    Home page
/about               About studio
/sessions            Group sessions
/individual          Individual therapy
/gallery             Art gallery
/irish-mythology     Mythology content
/booking             Booking interface (MAIN)
```

## 🎨 Key Components

```
Navigation     Top bar, logo, menu, dark toggle, book button
Footer         Hours, contact, location, quick links
Booking        Session selector, Cal.com embed, privacy
Scroll FX      Fade-in animation on scroll
```

## 💶 Pricing

```
Group:         €35-€45 (2-2.5 hrs)
Individual:    €70 (60m) / €95 (90m)
Packages:      €140, €260, €350, €360
```

## 🌓 Dark Mode

- Toggle: Top-right corner (Sun/Moon icon)
- Automatic detection of system preference
- Persistent between sessions

## 📸 Image Locations

```
Home gallery:  src/app/page.tsx (lines 100-130)
About:         src/app/about/page.tsx
Gallery:       src/app/gallery/page.tsx
```

## 🔗 External Links

- Cal.com: https://app.cal.com/signup
- Vercel: https://vercel.com
- Railway: https://railway.app
- Node.js: https://nodejs.org

## ⚡ Dev Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Check code quality
```

## 🆘 Quick Fixes

**Cal.com won't load?**
- Check username is correct (case-sensitive)
- Refresh the page
- Clear browser cache

**Images missing?**
- Check URL is accessible
- Use `/images/file.jpg` for local files
- Add `unoptimized` prop for external URLs

**Styling broken?**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear `.next` folder

**Dark mode issues?**
- Refresh browser
- Check `next-themes` is installed
- Verify HTML has `suppressHydrationWarning`

## 📚 Documentation Files

- **README.md** - Project overview
- **PROJECT_SUMMARY.md** - Complete guide
- **IMPLEMENTATION_CHECKLIST.md** - Step-by-step
- **CAL_COM_SETUP.md** - Cal.com details
- **PROJECT_STRUCTURE.md** - File reference

## 🎯 Deployment Steps

1. Build: `npm run build`
2. Test: `npm start`
3. Deploy to Vercel (recommended):
   - Push to GitHub
   - Go to vercel.com
   - Import your repo
   - Deploy! ✅

## 🔑 Critical Values to Replace

```
REPLACE ALL INSTANCES OF:
"your-username"       → Your Cal.com username
"hello@cothustudio.ie" → Your email
"Waterford, Ireland"     → Your location
https://images.unsplash.com/... → Your images
```

## 📞 Support

- **Cal.com Help**: help.cal.com
- **Next.js Docs**: nextjs.org/docs
- **Tailwind CSS**: tailwindcss.com
- **Node.js**: nodejs.org/docs

## ✅ Pre-Launch Verification

- [ ] Cal.com account created
- [ ] 4 events configured
- [ ] Username updated in code (2 files)
- [ ] Footer info updated
- [ ] Images replaced
- [ ] Dev server works: `npm run dev`
- [ ] All pages load
- [ ] Booking system works
- [ ] Dark mode works
- [ ] Mobile looks good
- [ ] Production build works: `npm run build`

## 🎉 Success Indicators

✅ You're ready if:
- Cal.com account is set up
- Website loads at localhost:3000
- Booking page shows Cal.com embed
- Dark mode toggle works
- All navigation links work
- Images display properly
- Mobile layout is responsive
- Footer shows correct info

## 🚀 Quick Deployment

```bash
# 1. Build locally
npm run build

# 2. Test locally
npm start

# 3. Push to GitHub (if using Vercel)
git add .
git commit -m "Ready for production"
git push

# 4. Deploy on Vercel
# vercel.com → New Project → Select repo → Deploy!
```

## 💡 Pro Tips

✅ Test booking with test email before going live
✅ Enable Stripe for deposits (reduces no-shows)
✅ Set 15-30 min buffer between sessions
✅ Enable email reminders in Cal.com
✅ Create intake form in Cal.com
✅ Use small, professional photos
✅ Keep dark mode background pure black (#000)
✅ Keep light mode background pure white (#fff)

---

**Need more help?** Read PROJECT_SUMMARY.md or IMPLEMENTATION_CHECKLIST.md

**Ready to go?** Run `npm install && npm run dev` 🎨✨
