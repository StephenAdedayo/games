import React, { useState } from "react";
import { truth } from "../Questions";

const Dare = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndex = (index) => {
    setActiveIndex(index);
  };

  const tabs = [
    {
      id: 1,
      question: "I dare you to pick any girl and fumble her boobies ",
    },

    {
      id: 11,
      question:
        "Send a flirty text to someone in your contacts (chosen by the group).",
    },
    {
      id: 12,
      question:
        "Let someone here write a cute or flirty message on your social media.",
    },
    { id: 13, question: "Whisper something romantic in someone’s ear." },
    {
      id: 14,
      question:
        "Call your crush and try to keep them on the line for one minute.",
    },
    {
      id: 15,
      question: "Give someone in the group a compliment that makes them blush.",
    },
    {
      id: 16,
      question:
        "Hold hands with the person to your right for the next two rounds.",
    },
    {
      id: 17,
      question: "Stare into someone's eyes for 30 seconds without laughing.",
    },
    {
      id: 18,
      question:
        "Do your best impersonation of a romantic movie scene with someone here.",
    },
    {
      id: 19,
      question:
        "Let the group choose who you give a hug to (or more, if you're daring).",
    },

    {
      id: 20,
      question: " pick any boy and give him lap dance for 15secs",
    },

    {
      id: 21,
      question: "Pick any guy and exchange outfit with him",
    },

    {
      id: 22,
      question: "Pick any guy and tell him to put his face inside your top",
    },

    {
      id: 23,
      question: "Pick a guy/girl and kiss for 10 mins",
    },

    {
      id: 24,
      question: "Twerk to a music by ciara 'level up'",
    },

    {
      id: 25,
      question: "pick a guy/girl at random and give him or her a lap dance",
    },

    {
      id: 26,
      question: "take 3 shots of alcohol non stop",
    },

    {
      id: 27,
      question: "perform your sexual fantasy with a guy/girl here",
    },

    {
      id: 28,
      question: "",
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
    { id: 41, question: "Whisper something seductive in someone’s ear." },
    { id: 42, question: "Demonstrate your sexiest dance move." },
    { id: 43, question: "Give someone here a playful or flirty compliment." },
    {
      id: 44,
      question: "Gaze into someone's eyes and say something romantic or bold.",
    },
    {
      id: 45,
      question:
        "Let someone in the group choose a body part for you to lightly trace with your finger.",
    },
    {
      id: 46,
      question:
        "Send a playful flirty text to your crush (or someone of the group’s choice).",
    },
    {
      id: 47,
      question: "Recreate a romantic movie scene with someone in the room.",
    },
    {
      id: 48,
      question:
        "Let someone choose where to give you a kiss (on the cheek, hand, etc.).",
    },
    {
      id: 49,
      question: "Share your most seductive wink or smile with everyone.",
    },
    { id: 50, question: "Act out a cheesy pick-up line with someone here." },
    { id: 51, question: "Seductively eat something in front of the group." },
    { id: 52, question: "Give someone a slow hand massage for one minute." },
    {
      id: 53,
      question: "Trace the outline of someone's hand with your fingers.",
    },
    {
      id: 54,
      question:
        "Play the '5-second stare game' with the person of your choice.",
    },
    {
      id: 55,
      question: "Give someone in the group a playful nickname and explain why.",
    },
    {
      id: 56,
      question: "Share your most seductive dance moves with the group.",
    },
    {
      id: 57,
      question: "Let someone pick a love song and lip-sync it to them.",
    },
    {
      id: 58,
      question:
        "Call or text someone and tell them you’re thinking about them in a flirty way.",
    },
    {
      id: 59,
      question:
        "Act like you’re on a first date with someone in the room for two minutes.",
    },
    {
      id: 60,
      question:
        "Send a heart emoji to the last person you texted without context.",
    },
    {
      id: 61,
      question: "Blow a kiss to three people of your choice in the room.",
    },
    {
      id: 62,
      question:
        "Let someone in the group give you a compliment, but you have to respond flirtatiously.",
    },
    {
      id: 63,
      question:
        "Pretend to propose to someone in the room in a romantic or funny way.",
    },
    {
      id: 64,
      question:
        "Let someone pick a romantic quote, and you have to say it as seductively as possible.",
    },
    {
      id: 65,
      question:
        "Hold someone’s hand for the next two rounds and make it look romantic.",
    },
    { id: 66, question: "Send a flirty text to someone in your contacts." },
    {
      id: 67,
      question:
        "Let someone pick a flirty caption for your next social media post.",
    },
    {
      id: 68,
      question: "Give someone in the room a compliment they’ll never forget.",
    },
    {
      id: 69,
      question: "Whisper something seductive to the person on your left.",
    },
    { id: 70, question: "Let someone write a flirty message on your arm." },
    { id: 71, question: "Hold someone’s hand for the next three rounds." },
    { id: 72, question: "Dance closely with someone for a minute." },
    {
      id: 73,
      question: "Share your best pick-up line and use it on someone here.",
    },
    { id: 74, question: "Wink at a random person until they laugh or blush." },
    {
      id: 75,
      question:
        "Let someone give you a nickname and call you by it for the rest of the game.",
    },
    {
      id: 76,
      question: "Stare into someone’s eyes for 30 seconds without laughing.",
    },
    { id: 77, question: "Hug someone tightly for 20 seconds." },
    {
      id: 78,
      question:
        "Compliment everyone in the group with one seductive line each.",
    },
    {
      id: 79,
      question: "Do a slow, dramatic walk across the room like a model.",
    },
    { id: 80, question: "Let someone fix your hair or adjust your outfit." },
    {
      id: 81,
      question:
        "Allow someone to steal one of your belongings until the end of the game.",
    },
    { id: 82, question: "Share your favorite love song and explain why." },
    {
      id: 83,
      question: "Hold someone’s gaze while talking in a low, flirty voice.",
    },
    { id: 84, question: "Give someone a cheek kiss or an air kiss." },
    {
      id: 85,
      question:
        "Let someone send a flirty emoji from your phone to a mutual friend.",
    },
    {
      id: 86,
      question: "Compliment someone in a whisper, so only they can hear it.",
    },
    {
      id: 87,
      question:
        "Pretend to ask someone on a date in the most dramatic way possible.",
    },
    {
      id: 88,
      question:
        "Stand close to someone and let them guess what you are thinking.",
    },
    { id: 89, question: "Serenade someone in the group with a love song." },
    {
      id: 90,
      question:
        "End the game with a playful 'thank you' handshake or hug everyone.",
    },
  ];

  return (
    <div className="bg-[#1B0033] w-full min-h-screen px-5 py-4">
      <div className="w-full flex  space-x-9 aside">
        {tabs.map((tab, index) => (
          <div
            onClick={() => handleIndex(index)}
            key={index}
            className={`${
              activeIndex === index
                ? "text-white rounded-lg mr-3  cursor-pointer"
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

export default Dare;
