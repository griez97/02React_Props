import React from 'react';
import './Item.css'

interface ItemProps {
    img: string,
    title: string,
    price: string,
    btn: string
}

const Item: React.FC<ItemProps> = (props) => {
    return ( 
        <div className='itemBox'>
            <img src={props.img} alt="" />
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>{props.btn}</button>
        </div>
    );
}

export default Item;