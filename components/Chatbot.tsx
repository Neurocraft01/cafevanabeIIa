"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Minimize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! Welcome to VanaBella. How can I assist you today?", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [chatState, setChatState] = useState<'idle' | 'waitingForDate' | 'waitingForGuests'>('idle');
  const [bookingDetails, setBookingDetails] = useState({ date: '', guests: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.toLowerCase();
    setMessages(prev => [...prev, { text: inputValue, isUser: true }]);
    setInputValue("");

    // Enhanced bot responses with comprehensive information
    setTimeout(() => {
      let botResponse = "Thank you for your message! I'm here to help. Ask me about our menu, reservations, hours, location, workshops, coworking space, or celebrations!";
      
      if (chatState === 'waitingForDate') {
        setBookingDetails(prev => ({ ...prev, date: inputValue }));
        botResponse = "Noted. How many guests are you expecting?";
        setChatState('waitingForGuests');
      } else if (chatState === 'waitingForGuests') {
        setBookingDetails(prev => ({ ...prev, guests: inputValue }));
        botResponse = `Perfect! I've noted your interest for a celebration on ${bookingDetails.date} for ${inputValue} guests. Our team will contact you shortly to confirm!`;
        setChatState('idle');
      } else {
        // Menu related
        if (userMessage.includes("menu") || userMessage.includes("food") || userMessage.includes("eat") || userMessage.includes("dish")) {
          botResponse = "Our menu features 100+ vegetarian items! We serve: Soups, Salads, Appetizers, Small Bites, Sandwiches & Burgers, Pizzas (7 varieties), Pasta (5 types), Wraps, Beverages, Coolers, Mocktails, Shakes, and Desserts. Prices range from ₹49 to ₹349. Check our Menu page for details!";
        } 
        // Reservations
        else if (userMessage.includes("book") || userMessage.includes("reservation") || userMessage.includes("table") || userMessage.includes("reserve")) {
          botResponse = "You can make a reservation through our Reservations page! Simply fill out the form with your details, date, time, and number of guests. We'll confirm within 30 minutes. For same-day bookings, contact us via Instagram @cafevanabella.";
        } 
        // Hours
        else if (userMessage.includes("hour") || userMessage.includes("open") || userMessage.includes("close") || userMessage.includes("time") || userMessage.includes("when")) {
          botResponse = "We're open daily from 11:00 AM to 11:00 PM, all 7 days of the week! Perfect for lunch, dinner, coffee, or coworking in our plant-filled garden setting with 200+ plants. ⭐ Rated 4.8/5 with 55+ verified reviews!";
        } 
        // Location
        else if (userMessage.includes("location") || userMessage.includes("where") || userMessage.includes("address") || userMessage.includes("find") || userMessage.includes("direction")) {
          botResponse = "📍 We're located in Pimple Nilakh, Pune (Near Srimal Hospital), Maharashtra, India. We have 200+ plants, garden seating, pet-friendly space, and WiFi! Rated ⭐ 4.8/5 by 55+ guests. Visit our Contact page for map. Follow @cafevanabella on Instagram!";
        } 
        // Workshops
        else if (userMessage.includes("workshop") || userMessage.includes("class") || userMessage.includes("cooking") || userMessage.includes("learn")) {
          botResponse = "We offer hands-on culinary workshops! 🍝 Pasta Making Masterclass (₹1,200), 🧁 Pastry Techniques (₹1,500), and 🌮 Indian Street Food Workshop (₹1,000). Classes are every Saturday, 10 AM - 2 PM. Check our Workshop page for details!";
        } 
        // Coworking
        else if (userMessage.includes("cowork") || userMessage.includes("work") || userMessage.includes("wifi") || userMessage.includes("laptop") || userMessage.includes("study")) {
          botResponse = "Yes! We have a premium coworking space with high-speed WiFi, unlimited coffee & tea, power outlets at every seat, and natural lighting. 💼 Day Pass: ₹299 | Monthly Flex: ₹4,999 | Dedicated Desk: ₹7,999. Visit our Co-working page!";
        } 
        // Celebrations/Events
        else if (userMessage.includes("celebration") || userMessage.includes("party") || userMessage.includes("event") || userMessage.includes("birthday") || userMessage.includes("corporate") || userMessage.includes("private")) {
          botResponse = "We host amazing celebrations! To help you plan, could you please tell me the date of your birthday or event?";
          setChatState('waitingForDate');
        } 
        // Vegetarian/Veg
        else if (userMessage.includes("veg") || userMessage.includes("vegetarian") || userMessage.includes("non-veg") || userMessage.includes("meat")) {
          botResponse = "All our dishes are 100% vegetarian! 🌱 We offer a wide variety of delicious veg options including soups, salads, pizzas, pasta, wraps, and more. Perfect for vegetarian food lovers!";
        } 
        // Pricing
        else if (userMessage.includes("price") || userMessage.includes("cost") || userMessage.includes("expensive") || userMessage.includes("cheap") || userMessage.includes("₹")) {
          botResponse = "Our prices are very reasonable! Small Bites: ₹49-89, Pizzas: ₹189-299, Pasta: ₹189-259, Beverages: ₹49-129, Mocktails: ₹149-199, Desserts: ₹89-189. We offer great value for premium quality!";
        } 
        // Payment
        else if (userMessage.includes("payment") || userMessage.includes("pay") || userMessage.includes("card") || userMessage.includes("cash") || userMessage.includes("upi")) {
          botResponse = "We accept multiple payment methods: Cash, Credit/Debit Cards, UPI (Google Pay, PhonePe, Paytm), and digital wallets. Payment is convenient and secure!";
        } 
        // Parking
        else if (userMessage.includes("park") || userMessage.includes("parking")) {
          botResponse = "Yes, we have ample parking space available for our guests. Both two-wheeler and four-wheeler parking is available on premises.";
        } 
        // Delivery
        else if (userMessage.includes("delivery") || userMessage.includes("takeaway") || userMessage.includes("take away") || userMessage.includes("parcel")) {
          botResponse = "Currently, we offer dine-in and takeaway services. For takeaway orders, please call us via Instagram @cafevanabella. Delivery through food apps coming soon!";
        } 
        // WiFi
        else if (userMessage.includes("internet") || userMessage.includes("password")) {
          botResponse = "Free high-speed WiFi is available for all our guests! Ask our staff for the password when you visit. Our coworking members get priority bandwidth.";
        } 
        // Contact
        else if (userMessage.includes("contact") || userMessage.includes("call") || userMessage.includes("phone") || userMessage.includes("email")) {
          botResponse = "Reach us at: Instagram @cafevanabella | Email: hello@cafevanabella.com. Visit our Contact page for more details. We respond within 1-2 hours!";
        }
        // Special requests
        else if (userMessage.includes("allergy") || userMessage.includes("allergi") || userMessage.includes("dietary") || userMessage.includes("jain") || userMessage.includes("gluten")) {
          botResponse = "We accommodate dietary restrictions and allergies! Please inform our staff about any specific requirements (Jain food, gluten-free, nut allergies, etc.) when ordering. We'll customize dishes for you.";
        }
        // About
        else if (userMessage.includes("about") || userMessage.includes("story") || userMessage.includes("history") || userMessage.includes("who")) {
          botResponse = "VanaBella opened in 2024 as an urban sanctuary blending nature with flavor. Located in Pimple Nilakh, Pune with 200+ plants, we offer 100+ vegetarian dishes, coworking space, culinary workshops, and event hosting. Pet-friendly & WiFi enabled! ⭐ 4.8/5 rating. Visit our About page!";
        }
      }

      setMessages(prev => [...prev, { text: botResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 left-8 z-50 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-black/50 transition-all ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 left-8 z-50 w-[350px] h-[500px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black p-4 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-xs">
                  VB
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-sm">VanaBella Assistant</h3>
                  <p className="text-green-400 text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <Minimize2 size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.isUser 
                        ? 'bg-black text-white rounded-tr-none' 
                        : 'bg-white text-black border border-gray-200 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-black"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
