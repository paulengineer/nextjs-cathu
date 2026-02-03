"use client";

import { useState } from "react";

export default function ArtTherapyBooking() {
  const [bookingType, setBookingType] = useState("group-session");

  const bookingInfo = {
    "group-session": {
      title: "Group Art Therapy Session",
      description: "Join our collaborative art sessions with DBT skill integration",
      price: "€40",
      duration: "120 minutes",
    },
    "individual-60min": {
      title: "Individual Session (60 min)",
      description: "One-on-one personalized art therapy guidance",
      price: "€60",
      duration: "60 minutes",
    },
    "individual-90min": {
      title: "Individual Session (90 min)",
      description: "Extended one-on-one session for deeper exploration",
      price: "€85",
      duration: "90 minutes",
    },
    "open-studio": {
      title: "Open Studio Time",
      description: "Self-guided creative time with materials available",
      price: "€25",
      duration: "180 minutes",
    },
  };

  const currentBooking = bookingInfo[bookingType as keyof typeof bookingInfo];

  return (
    <div className="space-y-8">
      {/* Session Type Selector */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Select Your Session</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(bookingInfo).map(([key, info]) => (
            <button
              key={key}
              onClick={() => setBookingType(key)}
              className={`p-4 rounded-lg border-2 transition-all text-left group ${
                bookingType === key
                  ? "border-pastel-pink bg-gradient-pink"
                  : "border-pastel-mint hover:border-pastel-pink"
              }`}
            >
              <h3 className="font-bold mb-1">{info.title}</h3>
              <p className="text-sm opacity-70">{info.description}</p>
              <p className="text-sm mt-2 font-medium">{info.price} • {info.duration}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-gradient-to-br from-pastel-blue to-blue-50 dark:from-pastel-blue dark:to-blue-900 p-6 rounded-lg border border-pastel-blue">
        <div className="text-black dark:text-white">
          <h3 className="text-xl font-bold mb-2">{currentBooking.title}</h3>
          <p className="mb-4">{currentBooking.description}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-70">Duration</p>
              <p className="font-bold">{currentBooking.duration}</p>
            </div>
            <div>
              <p className="text-sm opacity-70">Price</p>
              <p className="font-bold text-2xl">{currentBooking.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Embed Placeholder */}
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <p className="text-center text-gray-600 dark:text-gray-400">
          <span className="block font-bold mb-2">📅 Calendar Booking</span>
          To enable online booking, integrate your Cal.com calendar by setting up a paid account at{" "}
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="text-pastel-blue hover:underline">
            cal.com
          </a>
          {" "}and update the booking configuration.
        </p>
      </div>

      {/* What's Included */}
      <div className="bg-gradient-mint p-6 rounded-lg border border-pastel-mint text-black dark:text-white">
        <h3 className="font-bold text-lg mb-3">What&apos;s Included</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-2">
            <span className="text-pastel-pink">✓</span>
            <span>Professional art materials and supplies</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pastel-pink">✓</span>
            <span>Guided art instruction and DBT skill integration</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pastel-pink">✓</span>
            <span>Supportive, judgement-free creative space</span>
          </li>
          <li className="flex gap-2">
            <span className="text-pastel-pink">✓</span>
            <span>Take home your artwork</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
