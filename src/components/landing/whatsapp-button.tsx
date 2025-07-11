"use client";

import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full h-14 w-14 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.91-.4-4.15-1.12l-.3-.18-3.07.81.82-3.02-.2-.31c-.82-1.29-1.25-2.8-1.25-4.38 0-4.54 3.68-8.22 8.22-8.22 2.22 0 4.29.86 5.82 2.39s2.39 3.6 2.39 5.82c-.01 4.54-3.69 8.22-8.23 8.22zm4.32-6.53c-.23-.12-1.36-.67-1.57-.75s-.36-.12-.52.12c-.15.23-.59.75-.73.9s-.27.16-.5.04c-.23-.12-1-.36-1.89-1.16-.7-.63-1.17-1.41-1.31-1.65-.15-.23 0-.36.11-.47.1-.1.23-.27.34-.4.12-.12.15-.23.23-.39.08-.15.04-.27-.02-.39s-.52-1.25-.71-1.71c-.2-.46-.4-.39-.55-.4s-.3-.04-.46-.04c-.15 0-.39.04-.59.23-.2.2-.77.75-.77 1.82s.79 2.11.9 2.26c.12.15 1.55 2.35 3.76 3.32.54.23.97.36 1.3.47.6.18 1.15.15 1.57.09.48-.06 1.36-.55 1.55-1.08.2-.52.2-.97.14-1.08-.06-.11-.2-.17-.42-.29z"></path>
        </svg>
      </Button>
    </a>
  );
}
