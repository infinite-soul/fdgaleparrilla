import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ info }) => {
	return (
		<div className="card mt-3">
			<Link to={`/detalle/${info.id}`}>
				<picture>
					<img className="card-img-top mt-2" src={info.image} alt="" />
				</picture>
				<div className="card-body">
					<h5 className="link-danger">{info.nombre}</h5>
				</div>
			</Link>
		</div>
	);
};

export default Item;
