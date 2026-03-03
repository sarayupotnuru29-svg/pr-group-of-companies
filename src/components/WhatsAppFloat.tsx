import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleClick = () => {
    const message = encodeURIComponent("Hello PR Group of Companies, I would like to know more about your services.");
    window.open(`https://wa.me/916300381586?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,40%)] px-5 py-3 text-[hsl(0,0%,100%)] font-semibold shadow-lg hover:bg-[hsl(142,70%,35%)] transition-all"
      aria-label="Send a WhatsApp message"
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline">Send a Message</span>
    </button>
  );
};

export default WhatsAppFloat;
