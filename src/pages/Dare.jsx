import React, { useState } from 'react'
import { truth } from '../Questions'

const Dare = () => {

    const [activeIndex, setActiveIndex] = useState(0)


    const handleIndex = (index) => {
        setActiveIndex(index)
    }

    const tabs = [        {
        id : 1,
        question : "Sing a silly song out loud for 30 seconds."
     },

     {
         id : 2,
         question : "Do 10 jumping jacks while making animal noises."
     },

     {
         id : 3,
         question : " Eat a spoonful of a weird food combination (e.g., peanut butter and pickles)."
     },

     {
         id : 4,
         question : "Tell a joke to the group, but with a funny accent."
     },

     {
         id : 5,
         question : "Do a specific dance move (e.g., the floss, the robot) for 30 seconds."
     },

     {
         id: 6,
         question : "Write a funny poem about a group member on the spot."
     },

     {
         id : 7,
         question : "Make animal sounds for 1 minute without stopping."
     },

     {
         id : 8,
         question : "Do a silly task with your non-dominant hand (e.g., tying shoelaces, drawing a picture)."
     },

     {
         id : 9,
         question : "Have a fake conversation with an inanimate object for 30 seconds."
     },

     {
         id : 10,
         question : "Perform a funny skit with a group member."
     },
    
    
     { id: 11, question: "Send a flirty text to someone in your contacts (chosen by the group)." },
     { id: 12, question: "Let someone here write a cute or flirty message on your social media." },
     { id: 13, question: "Whisper something romantic in someone’s ear." },
     { id: 14, question: "Call your crush and try to keep them on the line for one minute." },
     { id: 15, question: "Give someone in the group a compliment that makes them blush." },
     { id: 16, question: "Hold hands with the person to your right for the next two rounds." },
     { id: 17, question: "Stare into someone's eyes for 30 seconds without laughing." },
     { id: 18, question: "Do your best impersonation of a romantic movie scene with someone here." },
     { id: 19, question: "Let the group choose who you give a hug to (or more, if you're daring)." },
     { id: 20, question: "Dance with someone here like you're at a romantic ball." },
     { id: 21, question: "Talk in a fake accent for the next three rounds." },
     { id: 22, question: "Do your best animal impression and keep it up until someone guesses it." },
     { id: 23, question: "Let someone draw a silly mustache on your face with a washable marker." },
     { id: 24, question: "Dance without music for one minute." },
     { id: 25, question: "Eat a spoonful of a condiment (ketchup, mustard, etc.) of the group's choice." },
     { id: 26, question: "Wear socks on your hands for the next three rounds." },
     { id: 27, question: "Sing everything you say for the next five minutes." },
     { id: 28, question: "Act like a chicken and lay an 'egg' (pretend) for the next minute." },
     { id: 29, question: "Let someone text anything they want from your phone to a random contact." },
     { id: 30, question: "Tell an embarrassing story about yourself in opera style." }
    ]

  return (
    <div className='bg-[#1B0033] w-full min-h-screen px-5 py-24'>
      
      

      <div  className='w-full flex  space-x-9 aside'>
     {
        tabs.map((tab, index) => (
            <div onClick={() => handleIndex(index)} key={index} className={`${activeIndex === index ? 'text-white rounded-lg mr-3  cursor-pointer' : 'text-gray-400'}  w-full  text-white`}>
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

export default Dare
