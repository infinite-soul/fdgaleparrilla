import React, { useEffect, useState } from "react";
import "./itemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div className="counter">
			<button className="btn btn-secondary btn-lg" disabled={count <= 1} onClick={decrease}>
				-
			</button>
			<span className="paddingnear">{count}</span>
			<button className="btn btn-secondary btn-lg" disabled={count >= stock} onClick={increase}>
				+
			</button>
			<div>
				<button className="btn btn-danger" disabled={stock <= 0} onClick={() => onAdd(count)}>
					Agregar al carrito
				</button>
			</div>
		</div>
	);
};

export default ItemCount;