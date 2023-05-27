import ContadorItem from '../ContadorItem'

import { useState, useEffect } from 'react'


const DetallesItem = ({ id, nombre, img, category, description, precioBase, stock }) => {
    const [cantidad, setCantidad] = useState({});

    const onAdd = (nuevaCantidad) => {
        setCantidad(nuevaCantidad)
    }


    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
            </picture> 
            <img src={img} alt={nombre} className="ItemImg" />
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${precioBase}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ContadorItem inicial={1} min={1} max={stock} stock={stock} onAdd={onAdd} />
            </footer>
        </article>
    )
}

export default DetallesItem