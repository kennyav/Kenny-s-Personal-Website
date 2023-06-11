import React from 'react'

export default function Title(prop) {
   return (
      <div id={prop.id} className="flex w-full h-auto justify-center">
         <h1 className='lg:text-4xl text-3xl font-bold text-gray-600'>{prop.title}</h1>
      </div>
   )
}
