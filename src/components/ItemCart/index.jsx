import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="CardItem contenido">
            <header className="Header">
                <h4 className="ItemHeader">Nombre: {product.nombre}</h4>
            </header>
            <img className="ItemImg" src={product.image} alt={product.nombre} />
            <section className="parrafo">
                <p className="Info">Cantidad: {product.quantity}</p>
                <p className="Info">Precio base: {product.price}</p>
                <p className="Info">Subtotal: ${product.quantity * product.price}</p>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button>
            </section>
        </div>
    )
}

export default ItemCart