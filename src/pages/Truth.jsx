import React, { useState } from "react";
import { truth } from "../Questions";

const Truth = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  const tabs = [
    {
      id: 1,
      question: "What's the craziest thing you've ever done on a dare",
    },

    {
      id: 2,
      question: "What's one secret you've never shared with anyone?",
    },

    {
      id: 3,
      question:
        "What's the biggest risk you've ever taken, and was it worth it?",
    },

    {
      id: 4,
      question:
        "What's one thing you're proud of accomplishing, but nobody knows about?",
    },

    {
      id: 5,
      question:
        "If you could go back in time and give advice to your younger self, what would it be?",
    },

    {
      id: 6,
      question: "What's the most spontaneous thing you've ever done?",
    },

    {
      id: 7,
      question: " What's one thing you're afraid to try, but want to?",
    },

    {
      id: 8,
      question:
        "What's the biggest lesson you've learned from a past relationship?",
    },

    {
      id: 9,
      question:
        "What's one thing you wish you could tell your parents, but haven't?",
    },

    {
      id: 10,
      question:
        "If you could switch lives with someone for a day, who would it be and why?",
    },

    {
      id: 11,
      question: "What's the most romantic thing you've ever done for someone?",
    },
    { id: 12, question: "Have you ever had a crush on someone in this room?" },
    {
      id: 13,
      question: "What's the boldest pick-up line you've used or received?",
    },
    {
      id: 14,
      question:
        "If you could go on a date with anyone here, who would it be and why?",
    },
    { id: 15, question: "What's your biggest turn-on?" },
    {
      id: 16,
      question: "What's the most daring thing you've done for love or a crush?",
    },
    { id: 17, question: "What's your idea of a perfect date?" },
    { id: 18, question: "Who was your first kiss, and how was it?" },
    {
      id: 19,
      question: "If you could kiss anyone right now, who would it be?",
    },
    { id: 20, question: "What's your most embarrassing romantic moment?" },
    {
      id: 21,
      question:
        "What's the most embarrassing thing you've ever done in public?",
    },
    {
      id: 22,
      question:
        "What's the weirdest thing you've ever eaten and secretly enjoyed?",
    },
    {
      id: 23,
      question:
        "If you had to wear one outfit for the rest of your life, what would it be?",
    },
    {
      id: 24,
      question: "What's the strangest thing you've done when you were alone?",
    },
    {
      id: 25,
      question:
        "Have you ever walked into something because you were distracted?",
    },
    {
      id: 26,
      question: "What’s the most ridiculous nickname you've ever been given?",
    },
    { id: 27, question: "What's your most irrational fear or phobia?" },
    {
      id: 28,
      question:
        "If you had to swap lives with a famous person for a day, who would it be and why?",
    },
    { id: 29, question: "What's the longest you've gone without a shower?" },
    {
      id: 30,
      question: "What's the worst lie you ever told that someone believed?",
    },
    {
      id: 31,
      question: "What's the most romantic thing you've ever done for someone?",
    },
    { id: 32, question: "Have you ever had a crush on someone in this room?" },
    {
      id: 33,
      question: "What's the boldest pick-up line you've used or received?",
    },
    {
      id: 34,
      question:
        "If you could go on a date with anyone here, who would it be and why?",
    },
    { id: 35, question: "What's your biggest turn-on?" },
    {
      id: 36,
      question: "What's the most daring thing you've done for love or a crush?",
    },
    { id: 37, question: "What's your idea of a perfect date?" },
    { id: 38, question: "Who was your first kiss, and how was it?" },
    {
      id: 39,
      question: "If you could kiss anyone right now, who would it be?",
    },
    { id: 40, question: "What's your most embarrassing romantic moment?" },
    {
      id: 41,
      question: "Have you ever fantasized about someone in this room?",
    },
    {
      id: 42,
      question:
        "What's the most romantic or seductive thing you've done for someone?",
    },
    {
      id: 43,
      question: "If you could kiss anyone here, who would it be and why?",
    },
    { id: 44, question: "What's your favorite spot to be kissed?" },
    {
      id: 45,
      question: "What's the most intimate thing you've ever done in public?",
    },
    {
      id: 46,
      question: "What’s the craziest place you’ve ever made out with someone?",
    },
    { id: 47, question: "What's your ultimate romantic fantasy?" },
    {
      id: 48,
      question:
        "Have you ever sent a flirtatious text to the wrong person? What happened?",
    },
    {
      id: 49,
      question:
        "What's the most romantic compliment you've received, and who gave it?",
    },
    {
      id: 50,
      question:
        "If you were to set the mood for a perfect night, what would it involve?",
    },
    {
      id: 51,
      question:
        "What’s the most flirtatious thing you’ve done to get someone’s attention?",
    },
    {
      id: 52,
      question:
        "Have you ever had a dream about someone here? If yes, spill the details.",
    },
    {
      id: 53,
      question:
        "What’s one thing that instantly makes someone attractive to you?",
    },
    { id: 54, question: "Who here do you think has the most kissable lips?" },
    {
      id: 55,
      question:
        "Have you ever practiced your kissing skills on an object or in a mirror?",
    },
    {
      id: 56,
      question:
        "What’s the naughtiest text message you’ve ever sent or received?",
    },
    {
      id: 57,
      question:
        "If you were to write a love letter, who would it be for, and what would it say?",
    },
    { id: 58, question: "What's your favorite romantic or sensual memory?" },
    {
      id: 59,
      question:
        "What’s the most daring thing you’ve done for love or attraction?",
    },
    {
      id: 60,
      question:
        "If you could take someone here on a romantic getaway, who would it be and where?",
    },
    {
      id: 61,
      question: "What’s the wildest thing you’ve ever done on a date?",
    },
    {
      id: 62,
      question: "Do you prefer slow, romantic kisses or playful, teasing ones?",
    },
    {
      id: 63,
      question:
        "If you could swap lives with anyone in a romantic movie, who would it be?",
    },
    {
      id: 64,
      question: "What’s the one thing that makes you feel irresistible?",
    },
    {
      id: 65,
      question: "Have you ever fallen for someone you weren’t supposed to?",
    },
    { id: 66, question: "Who in this room do you find most attractive?" },
    {
      id: 67,
      question: "What’s the most romantic thing someone has ever done for you?",
    },
    { id: 68, question: "Have you ever had a crush on someone in this group?" },
    { id: 69, question: "What’s your go-to move when flirting?" },
    {
      id: 70,
      question: "What’s the most daring thing you’ve done to impress someone?",
    },
    { id: 71, question: "Describe your ideal date night." },
    { id: 72, question: "What’s your biggest turn-on?" },
    { id: 73, question: "Do you believe in love at first sight?" },
    { id: 74, question: "Have you ever fallen for a friend?" },
    { id: 75, question: "What’s the sexiest compliment you’ve ever received?" },
    {
      id: 76,
      question: "If you could kiss anyone in this room, who would it be?",
    },
    { id: 77, question: "What’s a secret fantasy you’ve never told anyone?" },
    { id: 78, question: "Have you ever had a crush on a teacher or coworker?" },
    { id: 79, question: "What’s the most romantic gesture you’ve ever made?" },
    { id: 80, question: "What’s your biggest dating dealbreaker?" },
    {
      id: 81,
      question: "Have you ever sent someone a flirty text by mistake?",
    },
    {
      id: 82,
      question: "What’s the most spontaneous thing you’ve ever done for love?",
    },
    { id: 83, question: "What’s your favorite feature on yourself?" },
    { id: 84, question: "Who was your first kiss, and how was it?" },
    { id: 85, question: "Have you ever been in love?" },
    {
      id: 86,
      question:
        "What’s the most daring thing you’ve ever done for someone you liked?",
    },
    { id: 87, question: "Have you ever fantasized about someone here?" },
    { id: 88, question: "What’s your favorite part of flirting?" },
    {
      id: 89,
      question: "If you could plan the perfect date, what would it look like?",
    },
    {
      id: 90,
      question: "What’s the most romantic compliment you’ve given someone?",
    },
  ];

  return (
    <div className="bg-[#1B0033] w-full min-h-screen px-5 py-4">
      <div className="w-full flex space-x-9 aside">
        {tabs.map((tab, index) => (
          <div
            onClick={() => handleIndex(index)}
            key={index}
            className={`${
              activeIndex === index
                ? "text-white rounded-md  cursor-pointer"
                : "text-gray-400"
            }  w-full`}
          >
            <p>{tab.id}</p>
          </div>
        ))}
      </div>

      <div className="text-white mt-[220px] text-xl">
        <p>{tabs[activeIndex].question}</p>
      </div>
    </div>
  );
};

export default Truth;
