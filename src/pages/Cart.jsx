import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart);

  const handleRemove = (productsId) => {
    dispatch(remove(productsId))
  }
  return (
    <div>
    <h3>Cart</h3>
    <div className='cartWrapper'>
        {
            products.map((products) => {
                return(
                <div className='cartCard'>
                    <img src={products.image} alt='' />
                    <h5>{products.title}</h5>
                    <h5>${products.price}</h5>
                    <button className='btn' onClick={() => handleRemove(products.id)}>Remove</button>
                </div>)
            })
        }
    </div>
    </div>
  )
}

export default Cart