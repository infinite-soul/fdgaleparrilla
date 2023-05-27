import "./Item.css";
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
    console.log('info')
    console.log(info)
    return (
        <div className="card mt-3">
            <picture>
                <img className="card-img-top mt-2" src={info.img} alt={info.nombre} />
            </picture>
            <div className="card-body">
                <h5 className="card-title">{info.nombre}</h5>
                <p className="card-text">Precio Base: $ {info.precioBase}</p>
                <p className="card-text">Personal Requerido: {info.personalRequerido}</p>
            </div>
            <div>
                <Link to={`/item/${info.id}`} className='DetalleBoton btn btn-primary'>Ver detalle</Link>
            </div>
        </div>
    );
};

export default Item;
