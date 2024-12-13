import React, { useState } from 'react'
import { truth } from '../Questions'

const Truth = () => {

    const [activeIndex, setActiveIndex] = useState(0)


    const handleIndex = (index) => {
        setActiveIndex(index)
    }

    const tabs = [{
        id: 1,
        question : "What's the craziest thing you've ever done on a dare",
    },

    {
    id :2, 
    question: "What's one secret you've never shared with anyone?", 
    },

    {
        id : 3,
        question: "What's the biggest risk you've ever taken, and was it worth it?"
    },

    {
        id : 4,
        question: "What's one thing you're proud of accomplishing, but nobody knows about?",

    },

    {
        id : 5,
        question: "If you could go back in time and give advice to your younger self, what would it be?"

    },

    {
        id : 6,
        question : "What's the most spontaneous thing you've ever done?"
    },

    {
        id : 7,
        question : " What's one thing you're afraid to try, but want to?"
    },

    {
        id: 8,
        question : "What's the biggest lesson you've learned from a past relationship?"
    },

    {
        id : 9,
        question : "What's one thing you wish you could tell your parents, but haven't?"
    },

    {
        id : 10,
        question : "If you could switch lives with someone for a day, who would it be and why?"
    },

    { id: 11, question: "What's the most romantic thing you've ever done for someone?" },
    { id: 12, question: "Have you ever had a crush on someone in this room?" },
    { id: 13, question: "What's the boldest pick-up line you've used or received?" },
    { id: 14, question: "If you could go on a date with anyone here, who would it be and why?" },
    { id: 15, question: "What's your biggest turn-on?" },
    { id: 16, question: "What's the most daring thing you've done for love or a crush?" },
    { id: 17, question: "What's your idea of a perfect date?" },
    { id: 18, question: "Who was your first kiss, and how was it?" },
    { id: 19, question: "If you could kiss anyone right now, who would it be?" },
    { id: 20, question: "What's your most embarrassing romantic moment?" },
    { id: 21, question: "What's the most embarrassing thing you've ever done in public?" },
    { id: 22, question: "What's the weirdest thing you've ever eaten and secretly enjoyed?" },
    { id: 23, question: "If you had to wear one outfit for the rest of your life, what would it be?" },
    { id: 24, question: "What's the strangest thing you've done when you were alone?" },
    { id: 25, question: "Have you ever walked into something because you were distracted?" },
    { id: 26, question: "What’s the most ridiculous nickname you've ever been given?" },
    { id: 27, question: "What's your most irrational fear or phobia?" },
    { id: 28, question: "If you had to swap lives with a famous person for a day, who would it be and why?" },
    { id: 29, question: "What's the longest you've gone without a shower?" },
    { id: 30, question: "What's the worst lie you ever told that someone believed?" }

]

  return (
    <div className='bg-[#1B0033] w-full min-h-screen px-5 py-24'>
      
      

      <div className='w-full flex space-x-9 aside'>
     {
        tabs.map((tab, index) => (
            <div onClick={() => handleIndex(index)} key={index} className={`${activeIndex === index ? 'text-white rounded-md  cursor-pointer' : 'text-gray-400'}  w-full text-white`}>
                <p>{tab.id}</p>
            </div>
        ))
     }




      </div>

     <div className='text-white mt-[220px] text-xl'>
        <p>{tabs[activeIndex].question}</p>
      </div>



    </div>
  )
}

export default Truth
