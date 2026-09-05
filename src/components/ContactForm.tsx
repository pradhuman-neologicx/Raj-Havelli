"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      formType: "contact",
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
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
          "Content-Type": "text/plain", // Required for no-cors to avoid preflight issues
        },
        body: JSON.stringify(data),
      });

      // no-cors always returns an opaque response, we assume success if it doesn't throw
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (err: any) {
      setIsSubmitting(false);
      setError(err.message || "Failed to send message. Please try again later.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border p-8 md:p-10 rounded-xl shadow-lg flex flex-col items-center justify-center text-center space-y-6 h-full min-h-[400px]">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-2 animate-in zoom-in duration-500">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif text-primary">Message Sent Successfully!</h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          Thank you for reaching out to Raj Haveli Heritage. Our team will review your message and get back to you shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border p-8 md:p-10 rounded-xl shadow-lg">
      <h2 className="text-2xl font-serif text-primary mb-6">Send an Inquiry</h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
            placeholder="john@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
          <select
            id="subject"
            name="subject"
            className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          >
            <option value="reservation">Room Reservation</option>
            <option value="events">Private Events & Weddings</option>
            <option value="dining">Dining & Restaurant</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full bg-background border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium py-4 rounded-md shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
