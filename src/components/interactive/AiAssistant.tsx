"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, User, AlertCircle, RefreshCw, MessageSquare } from "lucide-react";

interface Message {
  sender: "user" | "assistant";
  text: string;
  isUnverifiedOrMissing?: boolean;
  groundedTopic?: string;
  timestamp: string;
}

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const SUGGESTED_QUESTIONS = [
  "What is Korama Hostel?",
  "Where is the hostel located?",
  "What facilities are provided?",
  "Who is eligible to apply?",
  "What are the hostel fees?",
  "What courses do current students study?",
];

export function AiAssistant({ isOpen, onClose, onOpen }: AiAssistantProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "assistant",
      text: "Namaskara! I am the official Korama Hostel Trust AI Assistant. I can answer your questions about our hostel, verified facilities, eligible communities (Korama, Koracha, Korava), and admission enquiries. I am strictly grounded on verified Trust records and will never guess unconfirmed policies.",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: Message = {
      sender: "user",
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });

      const data = await res.json();

      if (res.ok) {
        const assistantMsg: Message = {
          sender: "assistant",
          text: data.reply,
          isUnverifiedOrMissing: data.isUnverifiedOrMissing,
          groundedTopic: data.groundedTopic,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } else {
        const errorMsg: Message = {
          sender: "assistant",
          text: data.error || "Unable to reach the assistant service right now. Please try again or visit our Contact page.",
          isUnverifiedOrMissing: true,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } catch {
      const networkErrorMsg: Message = {
        sender: "assistant",
        text: "Network error occurred while fetching information. Please verify your connection.",
        isUnverifiedOrMissing: true,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, networkErrorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: "assistant",
        text: "Namaskara! I am ready to answer any questions about Korama Hostel Trust and our community. What would you like to know?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating launcher button when modal is closed */}
      {!isOpen && (
        <button
          type="button"
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-trust-700 via-trust-800 to-growth-800 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border border-amber-400/40 focus:outline-none focus:ring-4 focus:ring-sky-400/50"
          aria-label="Open Korama Trust AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-amber-300" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
          </div>
          <span className="text-sm font-semibold tracking-wide hidden sm:inline">Ask AI Assistant</span>
        </button>
      )}

      {/* Assistant Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="assistant-title"
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[620px] z-50 flex flex-col bg-slate-900 text-slate-100 rounded-none sm:rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-trust-900 via-trust-800 to-slate-900 p-4 border-b border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-trust-700 flex items-center justify-center text-amber-300 border border-trust-500/40 shadow-inner">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 id="assistant-title" className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Trust AI Assistant</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                    Grounded
                  </span>
                </h2>
                <p className="text-xs text-slate-400">Strictly verified facts • No guessing</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleResetChat}
                className="p-1.5 text-slate-400 hover:text-slate-200 rounded-md hover:bg-slate-800 transition-colors"
                title="Restart conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
                aria-label="Close assistant"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/60">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-trust-800 flex items-center justify-center shrink-0 mt-0.5 text-amber-300 border border-trust-700">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-trust-600 text-white rounded-br-none shadow-sm"
                      : "bg-slate-850 bg-slate-800/90 text-slate-100 rounded-bl-none border border-slate-700/60 shadow"
                  }`}
                >
                  {msg.groundedTopic && msg.sender === "assistant" && (
                    <div className="text-[11px] font-semibold text-amber-300/90 uppercase tracking-wider mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{msg.groundedTopic}</span>
                    </div>
                  )}

                  <p className="whitespace-pre-wrap">{msg.text}</p>

                  {msg.isUnverifiedOrMissing && (
                    <div className="mt-2.5 pt-2 border-t border-amber-500/20 text-xs text-amber-300 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Requires official Trust verification</span>
                    </div>
                  )}

                  <span className="block text-[10px] text-slate-400 text-right mt-1.5">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-slate-700 flex items-center justify-center shrink-0 mt-0.5 text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs">
                <div className="w-7 h-7 rounded-lg bg-trust-800 flex items-center justify-center text-amber-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-slate-800 px-4 py-2.5 rounded-2xl rounded-bl-none border border-slate-700 flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce"></div>
                  </div>
                  <span>Checking verified records...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Questions */}
          {messages.length <= 2 && (
            <div className="p-3 bg-slate-900 border-t border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide block mb-2">
                Frequently Asked:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    className="text-xs bg-slate-800 hover:bg-trust-900 hover:text-amber-300 hover:border-amber-400/40 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700 transition-colors text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about hostel, facilities, eligibility..."
              className="flex-1 bg-slate-950 text-slate-100 placeholder:text-slate-500 text-sm px-3.5 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 disabled:opacity-40 disabled:hover:bg-amber-500 transition-colors"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
