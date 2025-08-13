// src/components/EventBanner.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENT_DATES = [
    { name: "New Year", month: 0, date: 1, emoji: "🎉", message: "Wishing you a prosperous and green year ahead!" },
    { name: "Republic Day", month: 0, date: 26, emoji: "🇮🇳", message: "Celebrating the spirit of our constitution!" },
    { name: "Makar Sankranti", month: 0, date: 14, emoji: "🪁", message: "Fly high with joy and gratitude for the harvest!" },
    
    { name: "World Wildlife Day", month: 2, date: 3, emoji: "🐘", message: "Let's protect our planet's amazing wildlife!" },
    { name: "World Water Day", month: 2, date: 22, emoji: "💧", message: "Every drop counts. Save water, save life!" },
    { name: "Holi", month: 2, date: 25, emoji: "🌈", message: "Splash joy, color, and sustainability!" },
  
    { name: "Earth Day", month: 3, date: 22, emoji: "🌍", message: "Small acts, big impact. Love your Earth!" },
    { name: "Labour Day", month: 4, date: 1, emoji: "👷‍♂️", message: "Celebrating the backbone of our nation!" },
    { name: "Biodiversity Day", month: 4, date: 22, emoji: "🧬", message: "Celebrate the rich life forms of our Earth!" },
  
    { name: "World Environment Day", month: 5, date: 5, emoji: "🌱", message: "One Earth. One future. Act now!" },
    { name: "World Oceans Day", month: 5, date: 8, emoji: "🌊", message: "Protect our blue planet!" },
    { name: "Yoga Day", month: 5, date: 21, emoji: "🧘‍♂️", message: "Healthy mind, healthy planet!" },
    { name: "Independence Day", month: 7, date: 15, emoji: "🇮🇳", message: "Proud to be Indian. Jai Hind!" },
    
    { name: "Gandhi Jayanti", month: 9, date: 2, emoji: "🕊️", message: "Be the change you wish to see in the world!" },
    { name: "Dussehra", month: 9, date: 12, emoji: "🏹", message: "Victory of good over evil!" },
    { name: "Diwali", month: 10, date: 1, emoji: "🪔", message: "Light up lives, not pollution!" },
    { name: "Children's Day", month: 10, date: 14, emoji: "👶", message: "Celebrate the joy of childhood!" },
    
    { name: "Christmas", month: 11, date: 25, emoji: "🎄", message: "Spread love, joy, and peace!" }
  ];
  
const EventBanner = () => {
  const [event, setEvent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const today = new Date();
    const foundEvent = EVENT_DATES.find(
      (ev) =>
        (ev.date === today.getDate() && ev.month === today.getMonth()) ||
        (ev.date === today.getDate() - 1 && ev.month === today.getMonth())
    );
    if (foundEvent) {
      setEvent(foundEvent);
      setShowBanner(window.scrollY === 0);
      document.body.style.paddingTop = "60px";
    }
  }, []);

  useEffect(() => {
    if (!event) return;
    const handleScroll = () => {
      setShowBanner(window.scrollY === 0);
      document.body.style.paddingTop = window.scrollY === 0 ? "60px" : "0px";
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.paddingTop = "0px";
    };
  }, [event]);

  return (
    <AnimatePresence>
      {event && showBanner && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{
            background: "rgb(118, 177, 69)",
            color: "#064420",
            padding: "1rem 1.5rem",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            zIndex: 10000,
            fontWeight: 600,
            boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ fontSize: "1.6rem", marginRight: "0.5rem", lineHeight: 1 }}
            aria-label={`${event.name} emoji`}
            role="img"
          >
            {event.emoji}
          </motion.span>
          <span
            style={{
              fontSize: "1.1rem",
              maxWidth: "90%",
              wordBreak: "break-word",
            }}
          >
            Celebrating <strong>{event.name}</strong> — {event.message}
          </span>

          <style>
            {`
              @media (max-width: 600px) {
                div[style*="position: fixed"] {
                  font-size: 3.2vw !important;
                  padding: 2vw !important;
                  flex-direction: column !important;
                  gap: 1vw !important;
                }

                div[style*="position: fixed"] span {
                  font-size: 3.5vw !important;
                  line-height: 1.3;
                  text-align: center;
                }

                div[style*="position: fixed"] span:first-child {
                  font-size: 5vw !important;
                }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventBanner;
