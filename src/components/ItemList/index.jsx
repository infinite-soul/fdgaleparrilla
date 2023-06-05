import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
	return data.map((plato) => <Item key={plato.id} info={plato} />);
};

export default ItemList;