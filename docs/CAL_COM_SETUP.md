# Cothú Studio - Cal.com Setup Guide

## 🚀 Quick Start: Cal.com Integration

Everything is ready to go! Follow these steps to activate Cal.com bookings.

### Step 1: Fork Cal.com Repository (Optional)

If you want to self-host Cal.com:

```bash
git clone https://github.com/calcom/cal.com
cd cal.com
npm install
npm run dev
```

**Note:** This requires PostgreSQL and ongoing maintenance. We recommend using Cal.com's hosted solution instead.

### Step 2: Sign Up for Cal.com Hosted

1. Go to [app.cal.com/signup](https://app.cal.com/signup)
2. Create your account
3. Set up your calendar (Google Calendar, Outlook, etc.)
4. Configure your booking events

### Step 3: Configure Booking Events

Create these events in your Cal.com dashboard:

#### Event 1: Group Session
- **Event name:** group-session
- **Duration:** 120 minutes (2 hours)
- **Description:** Group Art Therapy Session - €40
- **Buffer time:** 15 minutes

#### Event 2: Individual 60-min
- **Event name:** individual-60min
- **Duration:** 60 minutes
- **Description:** Individual Session (60 min) - €70
- **Buffer time:** 15 minutes

#### Event 3: Individual 90-min
- **Event name:** individual-90min
- **Duration:** 90 minutes
- **Description:** Individual Session (90 min) - €95
- **Buffer time:** 15 minutes

#### Event 4: Open Studio
- **Event name:** open-studio
- **Duration:** 180 minutes (3 hours)
- **Description:** Open Studio Time - €35
- **Buffer time:** 30 minutes

### Step 4: Add Intake Form Fields (Optional)

In Cal.com, add custom fields for intake:
- Emergency contact
- Previous therapy experience
- Preferred communication
- Any specific goals/interests

### Step 5: Update Your Cal.com Links

1. Find your Cal.com username (visible in your profile)
2. Replace `your-username` in the code with your actual username

#### In `src/components/art-therapy-booking.tsx`:
```typescript
const eventTypes = {
  "group-session": "YOUR_USERNAME/group-session",
  "individual-60min": "YOUR_USERNAME/individual-60min",
  "individual-90min": "YOUR_USERNAME/individual-90min",
  "open-studio": "YOUR_USERNAME/open-studio",
};
```

#### In `src/components/navigation.tsx`:
```typescript
// Book Now button link
href="https://YOUR_USERNAME.cal.com"

// Or link directly to a specific event:
href="https://cal.com/YOUR_USERNAME/group-session"
```

#### In `src/app/page.tsx`:
All "Book a Session" and "Explore Sessions" links should point to your booking page:
```typescript
href="/booking" // This page uses the full booking interface
// or
href="https://YOUR_USERNAME.cal.com" // This links directly to Cal.com
```

### Step 6: Connect Payment (Optional but Recommended)

1. In Cal.com dashboard, go to **Integrations**
2. Connect **Stripe**
3. Set required payment for bookings
4. Payment helps reduce no-shows (70% reduction!)

### Step 7: Enable Reminders

In Cal.com:
1. Go to **Settings > Calendar**
2. Enable **Email reminders** (24 hours before)
3. Optionally enable **SMS reminders** (SMS costs extra)

### Step 8: Test Your Booking Flow

1. Start the dev server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000/booking`
3. Select a session type
4. Complete a test booking
5. Check confirmation email

## 🔐 Security & Privacy

Cothú Studio uses Cal.com with GDPR and HIPAA-ready infrastructure:

✅ Secure online booking  
✅ Privacy-respecting policies  
✅ End-to-end encrypted calendar data  
✅ No third-party data sharing  
✅ GDPR compliant  

## 📱 Embedding on Your Website

You can embed Cal.com directly on any page without using our pre-built component:

```jsx
import { Cal } from "@calcom/embed-react";

export default function CustomBooking() {
  return (
    <Cal
      calLink="YOUR_USERNAME/group-session"
      style={{ width: "100%", height: "600px" }}
      config={{
        theme: "light", // or "dark"
        layout: "week_view",
      }}
    />
  );
}
```

## 🎯 Pricing Configuration in Cal.com

To add pricing to your Cal.com events:

1. Go to event settings
2. In **Advanced**, add this to description:
   ```
   €40 per session
   ```
3. Or use Cal.com's built-in pricing feature (Premium tier)

## 🌍 Deployment

Once you're ready to go live:

1. Build the project:
   ```bash
   npm run build
   npm start
   ```

2. Deploy to Vercel, Railway, or your preferred platform

3. Update Cal.com links with your production domain

## 📞 Support

- **Cal.com Help:** [help.cal.com](https://help.cal.com)
- **Studio Email:** hello@cothustudio.ie
- **Need Custom Features?** Contact Cal.com Enterprise

## ✨ Advanced Features

### Multi-Therapist Setup
If adding multiple therapists:
1. Create Cal.com account for each therapist
2. Link their calendars in the main studio account
3. Let clients choose their preferred therapist

### Waitlist Feature
- Enable in Cal.com settings
- Clients can join waitlist if your time slots are full

### Automated Confirmations
- Cal.com sends automatic confirmations
- Customize email templates in settings

### Video Conferencing
- Cal.com supports Zoom, Google Meet, MS Teams
- Automatically adds video link to bookings

---

**You're all set!** Your booking system is ready to go. Just add your Cal.com username and you're live. 🚀
