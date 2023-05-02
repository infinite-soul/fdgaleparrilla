
import { useState, useEffect } from 'react';
import { getProductoPorId } from '../../asyncMock';
import DetallesItem from '../DetallesItem';
import { useParams } from 'react-router-dom';


const ContenedorDetallesItem = () => {
    const [producto, setearProducto] = useState(null)

    const {itemId} = useParams ()

    useEffect(() => {
        getProductoPorId(itemId)
            .then(response => {
                setearProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
        <div className='ContenedorDetallesItem'>
            <DetallesItem {...producto} />
        </div>
    )
}

export default ContenedorDetallesItem