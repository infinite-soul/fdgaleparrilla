import Titulo from "../Titulo";
import { getProductos, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import ListaItems from "../ListaItems";
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {
    const [productos, setearProductos] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const asyncFunc = category ? getProductsByCategory : getProductos;
        asyncFunc(category)
            .then(response => {
                setearProductos(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [category]);

    return (
        <>
            <Titulo bienvenida={props.texto} />
            <ListaItems productos={productos} />
        </>
    );
}

export default ItemListContainer;
