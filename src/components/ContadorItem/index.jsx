
import React, { useState } from "react";
import "../../App.css";

const ContadorItem = ({ inicial, stock, agregar }) => {
    const [cantidad, setCantidad] = useState(inicial);

    const aumentarCantidad = () => {
        cantidad < stock && setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
        <div className="Contador">
            <div className="Controles">
                <button className="Button" onClick={disminuirCantidad}>-</button>
                <h4 className="NumeroArticulos">{cantidad}</h4>
                <button className="Button" onClick={aumentarCantidad}>+</button>
            </div>
            <div>
                <button
                    className="Button"
                    onClick={() => agregar(cantidad)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ContadorItem;
