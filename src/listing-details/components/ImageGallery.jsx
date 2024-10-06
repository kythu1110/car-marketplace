import React from 'react'

function ImageGallery({carDetail}) {
  return (
    <div>
      {carDetail?.images ?
        <img src={carDetail?.images[0].imageUrl} 
        className='w-full h-[500px] object-cover rounded-xl'/>
      : <div className='w-full h-[500px] bg-slate-200 animate-pulse rounded-xl'></div>
      } 
    </div>
  )
}

export default ImageGallery