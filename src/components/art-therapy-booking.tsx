"use client";

import { Cal } from "@calcom/embed-react";
import { useState } from "react";

export default function ArtTherapyBooking() {
  const [bookingType, setBookingType] = useState("group-session");

  const eventTypes = {
    "group-session": "your-username/group-session",
    "individual-60min": "your-username/individual-60min",
    "individual-90min": "your-username/individual-90min",
    "open-studio": "your-username/open-studio",
  };

  const bookingInfo = {
    "group-session": {
      title: "Group Art Therapy Session",
      description: "Join our collaborative art sessions with DBT skill integration",
      price: "€40",
      duration: "2 hours",
    },
    "individual-60min": {
      title: "Individual Session - 60 Minutes",
      description: "Personalized one-on-one art therapy experience",
      price: "€70",
      duration: "1 hour",
    },
    "individual-90min": {
      title: "Individual Session - 90 Minutes",
      description: "Extended creative time for deeper exploration",
      price: "€95",
      duration: "1.5 hours",
    },
    "open-studio": {
      title: "Open Studio Time",
      description: "Self-directed creative time with materials and optional guidance",
      price: "€35",
      duration: "3 hours",
    },
  };

  const current = bookingInfo[bookingType as keyof typeof bookingInfo];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Book Your Session</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Choose the session type that best fits your needs
        </p>
      </div>

      {/* Session Type Selector */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(bookingInfo).map(([key, info]) => (
          <button
            key={key}
            onClick={() => setBookingType(key)}
            className={`p-4 border-2 text-left transition-all ${
              bookingType === key
                ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
                : "border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
            }`}
          >
            <h3 className="font-bold mb-2">{info.title}</h3>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm opacity-70">{info.duration}</p>
                <p className="font-bold text-lg">{info.price}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Session Info */}
        <div className="md:col-span-1">
          <div className="border-2 border-black dark:border-white p-8 h-full">
            <h2 className="text-2xl font-bold mb-4">{current.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {current.description}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                <p className="text-xl font-bold">{current.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Price per session</p>
                <p className="text-3xl font-bold">{current.price}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white">✓</span>
                <span>All materials included</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white">✓</span>
                <span>Flexible rescheduling</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white">✓</span>
                <span>Secure online booking</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-black dark:text-white">✓</span>
                <span>Privacy-respecting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="md:col-span-2">
          <div className="border-2 border-black dark:border-white p-4 bg-white dark:bg-black rounded-lg">
            <Cal
              calLink={eventTypes[bookingType as keyof typeof eventTypes]}
              style={{
                width: "100%",
                height: "600px",
              }}
              config={{
                theme: "light",
                hideEventTypeDetails: false,
                layout: "week_view",
              }}
            />
          </div>
        </div>
      </div>

      {/* Trust & Security */}
      <div className="bg-black dark:bg-white text-white dark:text-black p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Your Privacy & Security Matter</h3>
        <p className="mb-4">
          🔒 We use secure online booking with privacy-respecting policies. Your confidentiality 
          and wellbeing are our top priorities. All personal information is handled with care and never 
          shared with third parties.
        </p>
        <p className="text-sm opacity-75">
          Questions? Reach out to us at hello@cothustudio.ie for personalized support in choosing the right session for you.
        </p>
      </div>
    </div>
  );
}
