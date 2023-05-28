import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import "./cart.css";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Alejo",
			email: "lordchingzo@gmail.com",
			phone: "3013890138",
			address: "Finca La Martina",
		},
		items: cart.map((product) => ({
			id: product.id,
			nombre: product.nombre,
			precio: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>El carrito está vacío</p>
				<Link to="/">Volver a compras</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<footer>
				<p className="parrafo">Total: {totalPrice()}</p>
				<button className="btn btn-secondary" onClick={handleClick}>Confirmar compra</button>
			</footer>
		</>
	);
};

export default Cart;
