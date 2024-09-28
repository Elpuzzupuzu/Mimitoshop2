import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {


  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae soluta magni harum officia dolor voluptate doloribus nulla, quam non hic, ipsum id voluptatem quod reprehenderit suscipit debitis deserunt! Dignissimos, unde.</p>
            <p>
                hola soy un parrafo de prueba
            </p>
        </div>

    </div>
  )
}

export default DescriptionBox;