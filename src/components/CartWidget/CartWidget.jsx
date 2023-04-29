import './CartWidget.css'

const CartWidget = () => {
    

  return (
   

    <div>
       <img className='imgCarrito' src={process.env.PUBLIC_URL+'/assets/carrito.png'} alt = "Carrito" />
       <p>10</p>
    </div>
  )
}

export default CartWidget
