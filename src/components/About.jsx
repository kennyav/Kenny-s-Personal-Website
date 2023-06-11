import React from 'react'

const About = React.forwardRef((props, ref) => {
   return (
      <div  className="flex lg:flex-row flex-col lg:items-start items-center">

         {/* description of self */}
         <div className="flex flex-col lg:text-lg md:text-md text-sm lg:w-2/3 w-full gap-6 items-center justify-end">
            <p className='w-3/4'>
               Hey and welcome! My name is Kenny, and I am a recent Cognitive Systems graduate from the University of British Columbia.
               My life has revolved around technology, and I know this is true for every kid in my generation, but I have always been fascinated
               with how they work and the ability to reproduce them. This confirms that I am a nerd at heart, leading to my love for reading books (currently on a world history obsession),
               playing videos games, and having an unhealthy relationship with trying out the newest software releases. Thinking this new framework is going to be the next big thing is a hobby of mine.
               My passion lies in creating value for people that fits seemlessly with their daily lives. Thats why I chose to major in Cognitive Systems because I
               wanted to learn how to build technology that could think and learn. Thats the type of engineer I am.
            </p>
            <p className='w-3/4'>
               I not a person that likes going through tasks inefficiently, and I am not afraid to admit it. But I am also a hard worker that wants to find solutions to problems that makes
               life more valuable to those who interact with it. I wish to use my education to find and create solutions to genuine
               problems in our society. As a recent graduate, I am ready to generate a lasting impact through the union of Computer Science, Psychology, 
               and Philosophy that is Cognitive Systems. Let me know if we can chat.
            </p>
         </div>

         {/* picture of me */}
         <img src="/kennytommy.png" alt="Me, but no there because it didn't load" className="w-1/2 h-full lg:pr-10 lg:mt-0 md:mt-10 mt-4 rounded-sm" />

      </div >
   )
})

export default About
