
import ContadorItem from '../ContadorItem'

const DetallesItem = ({ id, nombre, img, category, description, precioBase, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
            </picture> O
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
                <ContadorItem initial={1} min={0} max={stock} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada')} />
            </footer>
        </article>
    )
}

export default DetallesItem