import React from 'react'

const MenuItems = ({img, title, price, desc}) => {
  return (
    <article>
        <img src={img} alt={title} className='img' style={{ height: '300px' }} />
        <div className='item-info'>
            <header>
                <h5>{title}</h5>
                <span className='item-price'>${price}</span>
            </header>
            <p className='item-text'>{desc}</p>
        </div>
    </article>
  )
}

export default MenuItems