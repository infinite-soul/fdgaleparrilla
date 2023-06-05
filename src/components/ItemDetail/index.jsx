import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount";
import "./itemDetail.css";

export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<article className="CardItem contenido">
			<header className="Header">
				<h4 className="ItemHeader">{data.nombre}</h4>
			</header>
			<picture>
				<img className="ItemImg" src={data.image} alt="" />
			</picture>
			<section className="parrafo">
                <p className="Info">
                    Categoria: {data.category}
                </p>
                <p className="Info">
                    Descripción: {data.descripcion}
                </p>
                <p className="Info">
                    Precio: ${data.price}
                </p>
            </section>
			<footer className='ItemFooter'>
				{goToCart ? (
					<Link className="link-danger" to="/cart"> Ver carrito</Link>
				) : (
					<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
				)}
			</footer>

		</article>
	);
};

export default ItemDetail;