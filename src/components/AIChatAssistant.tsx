"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquare, Send, X, AlertTriangle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

export default function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Welcome to Aura Clinic. I'm your AI assistant. To help you best, may I have your Name, Age, and what brings you here today?" },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    const updatedMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Pass history excluding the initial greeting to keep context clean
      const history = updatedMessages.slice(1, -1).map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history }),
      });

      const data = await response.json();
      const reply = data.text ?? data.error ?? "I'm having trouble connecting right now.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm sorry, I'm unable to reach our systems right now." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{ width: 370, height: 560 }}
            className="mb-6 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/20 bg-white/70 backdrop-blur-md"
          >
            {/* Header */}
            <div
              className="p-5 text-white flex items-center justify-between shadow-sm flex-shrink-0"
              style={{ backgroundColor: "#0284C7" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">Aura Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                    <p className="text-[10px] uppercase tracking-widest text-white/90 font-medium">Online</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform hover:bg-white/10 p-1 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((m, idx) => {
                const isEmergency = m.content.includes("EMERGENCY DETECTED");
                
                return (
                <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      m.role === "user"
                        ? "text-white shadow-md"
                        : isEmergency 
                          ? "bg-red-50 text-red-700 border-2 border-red-500 font-bold" 
                          : "bg-white/90 text-slate-800 shadow-sm border border-slate-100/50"
                    }`}
                    style={m.role === "user" ? { backgroundColor: "#0284C7" } : {}}
                  >
                    {isEmergency && <AlertTriangle className="w-5 h-5 mb-2 inline-block text-red-600 mr-2" />}
                    {m.content}
                  </div>
                </div>
              )})}

              {/* 3-dot typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/90 border border-slate-100/50 shadow-sm px-4 py-3 rounded-2xl flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-2 h-2 rounded-full bg-slate-400 block"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white/80 border-t border-slate-100 flex-shrink-0 backdrop-blur-lg">
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200 focus-within:border-[#0284C7] focus-within:ring-2 focus-within:ring-[#0284C7]/20 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-slate-800 placeholder:text-slate-400 font-medium"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="text-white p-2.5 rounded-lg transition-all disabled:opacity-40 hover:opacity-90 shadow-sm"
                  style={{ backgroundColor: "#0284C7" }}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-center mt-3 text-slate-500 font-medium">
                Aura AI is an assistant, not a doctor. In emergencies, call 102.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 relative border-4 border-white/80"
        style={{ backgroundColor: "#0284C7" }}
      >
        <div className="absolute inset-0 rounded-full animate-ping opacity-30 pointer-events-none" style={{ backgroundColor: "#0284C7" }} />
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>
    </div>
  );
}
