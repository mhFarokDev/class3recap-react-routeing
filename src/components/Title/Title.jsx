import React from 'react'
import "./Title.scss"
const Title = ({title, desc, design="default"}) => {
  return (
    <>
        <div className={design}>
            <h1 className='text-center'>{title}</h1>
            <p className='text-center text-muted py-3'>{desc}</p>
        </div>
    </>
  )
}

export default Title