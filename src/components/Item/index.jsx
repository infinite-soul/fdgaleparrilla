import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({ idProducto, nombre, precioBase, personalRequerido, img }) => {
    return (
        <div className="card mt-3">
            <picture>
                <img className="card-img-top mt-2" src={img} alt={nombre} />
            </picture>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Precio Base: $ {precioBase}</p>
                <p className="card-text">Personal Requerido: {personalRequerido}</p>
            </div>
            <div>
                <Link to={`/item/${idProducto}`} className='DetalleBoton btn btn-primary'>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;
