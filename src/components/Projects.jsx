import React from 'react'

const Projects = React.forwardRef((props, ref) => {
   const projects = props.projects;
   return (
      <div ref={ref} className="flex flex-row w-full h-auto lg:pl-32 lg:pr-32 md:pl-20 md:pr-20 gap-2">
         {
            projects.map((project) => {
               return (
                  <a href={project.url} target="_blank" rel="noreferrer" className="relative flex w-1/2 h-auto rounded-full hover:border hover:border-4 hover:border-gray-600" key={project.title}>
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-full cursor-pointer"
                     />
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-0">
                        <p className="w-full font-md lg:text-8xl md:text-6xl text-4xl bg-gray-600 rounded-full text-white text-center">{project.title}</p>
                     </div>
                  </a>
               )
            })
         }
      </div>
   )
})

export default Projects
