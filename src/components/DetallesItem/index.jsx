
import ContadorItem from '../ContadorItem'
const DetallesItem = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
            </picture> O
            <img src={img} alt={name} className="ItemImg" />
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ContadorItem initial={1} stock={stock} onAdd={(cantidad) => console.log('Cantidad agregada')} />
            </footer>
        </article>
    )
}

export default DetallesItem