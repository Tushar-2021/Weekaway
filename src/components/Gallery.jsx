import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1495899556065-23c001d0a1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1509479128982-76a1408e2f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1553649084-3e42773ff0e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1570010268849-9586dfd95025?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' alt='/' />
        </div>
        <div>
            <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1523764803492-30ab66dc6893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80' alt='/' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
