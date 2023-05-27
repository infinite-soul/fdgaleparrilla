import React, { useState } from "react";
import "../../App.css";

const ContadorItem = ({ inicial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const aumentarCantidad = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const disminuirCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAddToCart = () => {
        onAdd(cantidad);
    };

    return (
        <div className="ContadorItem">
            <button
                className="BtnContador"
                disabled={cantidad <= 1}
                onClick={disminuirCantidad}
            >
                -
            </button>
            <span className="Cantidad">{cantidad}</span>
            <button
                className="BtnContador"
                disabled={cantidad >= stock}
                onClick={aumentarCantidad}
            >
                +
            </button>
            <button
                className="BtnAgregar"
                disabled={stock <= 0}
                onClick={handleAddToCart}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ContadorItem;
