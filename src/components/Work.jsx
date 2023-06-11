import React from 'react'

const Work = React.forwardRef((props, ref) => {
   return (
      <div ref={ref} className="w-full h-auto flex flex-col items-center justify-center">
         <div className="flex flex-col lg:w-3/4 w-4/5 h-auto lg:gap-6 md:gap-4 gap-2 rounded-lg bg-gray-400">

            {/* header */}
            <div className="flex flex-row w-full h-1/3 p-4">
               {/* image */}
               <img src={props.image} alt="Systopia" className="justify-start lg:w-16 lg:h-22 w-16 h-14 rounded-sm" />
               {/* title */}
               <div className="flex flex-col pl-4 lg:text-right md:text-right text-left justify-center items-start w-full h-full">
                  <h1 className="lg:text-2xl md:text-xl text-2xl font-bold">{props.company}</h1>
                  <h2 className="lg:text-lg md:text-md text-sm font-medium text-gray-700">{props.job}</h2>
               </div>
               <div className="flex flex-row w-full h-auto gap-2 pr-2 pt-2 text-gray-700 justify-end">
                  <h3 className="lg:visible lg:text-sm md:visible md:text-sm invisible font-medium">{props.date}</h3>
                  <h3 className="lg:visible lg:text-sm md:visible md:text-sm invisible font-medium">{props.location}</h3>
               </div>
            </div>
            {/* content */}
            <p className="w-full h-2/3 p-4 text-gray-700">
               {props.content}
            </p>
            {/* skills */}
            <div className="w-full h-auto lg:flex lg:flex-row md:grid-cols-4 grid grid-cols-2 grid-flow-row gap-1 p-4">
               {
                  props.skills.map((skill) => {
                     return (
                        <div key={skill}>
                           <h1 className="text-lg bg-blue-500 rounded-md p-1">{skill}</h1>
                        </div>
                     )
                  })
               }
            </div>

         </div>
      </div>
   )
}
)

export default Work
