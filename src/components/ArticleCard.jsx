import React from 'react'

import { images } from '../constants'

const ArticleCard = ({className}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] `}
    >
        <img src={images.PostImage} alt='title' className='w-full object-cover object-center h-auto' />
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft '>Future of Work</h2>
        </div>
    </div>
  )
}

export default ArticleCard