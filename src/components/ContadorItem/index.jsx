import React, { useState } from "react";
import "../../App.css";

const ContadorItem = ({ inicial, stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const aumentarCantidad = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    const agregarAlCarrito = () => {
        onAdd(cantidad);
    };

    return (
        <div className="ContadorItem">
            <button className="BtnContador" onClick={disminuirCantidad}>
                -
            </button>
            <p className="Cantidad">{cantidad}</p>
            <button className="BtnContador" onClick={aumentarCantidad}>
                +
            </button>
            <button className="BtnAgregar" onClick={agregarAlCarrito}>
                Agregar al carrito
            </button>
        </div>
    );
};

export default ContadorItem;