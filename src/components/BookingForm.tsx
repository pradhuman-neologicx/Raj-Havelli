"use client";

import { useState, useEffect } from "react";
import { Calendar, Users, BedDouble, Loader2, CheckCircle2 } from "lucide-react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState("");

  const [today, setToday] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [minCheckOutDate, setMinCheckOutDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const formattedToday = `${year}-${month}-${day}`;
    setToday(formattedToday);
    setMinCheckOutDate(formattedToday);
  }, []);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setCheckInDate(selectedDate);

    if (selectedDate) {
      const checkIn = new Date(selectedDate);

      const year = checkIn.getFullYear();
      const month = String(checkIn.getMonth() + 1).padStart(2, '0');
      const day = String(checkIn.getDate()).padStart(2, '0');
      setMinCheckOutDate(`${year}-${month}-${day}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "booking",
      checkIn: formData.get("checkIn"),
      checkOut: formData.get("checkOut"),
      guests: formData.get("guests"),
      roomType: formData.get("roomType"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      specialRequests: formData.get("specialRequests"),
    };

    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        throw new Error("Form configuration is missing. Please contact support.");
      }

      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(data),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || "Failed to send booking enquiry. Please try again later.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="p-10 md:p-16 flex flex-col items-center justify-center text-center space-y-6 h-full min-h-[500px]">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h3 className="text-3xl font-serif text-primary">Enquiry Sent Successfully!</h3>
        <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
          Thank you for reaching out. Your booking enquiry has been securely sent to our administration team. We will review your request and get back to you shortly to confirm your reservation.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-6 px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm mx-8 mt-8">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
        {/* Dates & Guests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Check-in Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                name="checkIn"
                min={today}
                value={checkInDate}
                onChange={handleCheckInChange}
                className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Check-out Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="date"
                name="checkOut"
                min={minCheckOutDate}
                className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <select name="guests" defaultValue="1" className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none" required>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
          </div>
        </div>

        {/* Room Type */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground">Select Room Type</label>
          <div className="relative">
            <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select name="roomType" defaultValue="" className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none" required>
              <option value="" disabled>Choose your room...</option>
              <option value="superior">Super Deluxe Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="twin">Twin Deluxe Room</option>
              <option value="suite">Luxury Suite</option>
            </select>
          </div>
        </div>

        <hr className="border-border" />

        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Full Name</label>
            <input type="text" name="fullName" placeholder="John Doe" className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Email Address</label>
            <input type="email" name="email" placeholder="john@example.com" className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Phone Number</label>
            <input type="tel" name="phone" placeholder="+91 98765 43210" className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-foreground">Special Requests (Optional)</label>
            <textarea name="specialRequests" rows={4} placeholder="Any dietary requirements, arrival time, or special occasions..." className="w-full px-4 py-3 bg-muted/30 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"></textarea>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending Enquiry...
            </>
          ) : (
            "Submit Booking Enquiry"
          )}
        </button>
        <p className="text-xs text-center text-muted-foreground mt-4">
          This is an enquiry form. No payment will be deducted right now.
        </p>
      </form>
    </div>
  );
}
