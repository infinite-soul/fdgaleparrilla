import ContadorItem from '../ContadorItem'
import { useState } from 'react'


const DetallesItem = ({ idProducto, nombre, img, category, description, precioBase, stock }) => {
    const [cantidad, setCantidad] = useState(1)

    const agregarAlCarrito = (nuevaCantidad) => {
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
                <ContadorItem inicial={1} min={0} max={stock} stock={stock} onAdd={agregarAlCarrito} />
            </footer>
        </article>
    )
}

export default DetallesItem