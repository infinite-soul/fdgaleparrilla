import Titulo from "../Titulo";
import { getProductos, getProductsByCategory } from "../../asyncMock";
import { useState, useEffect } from "react";
import ListaItems from "../ListaItems";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setearProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProductos;
        asyncFunc(categoryId)
            .then(response => {
                setearProductos(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);

    return (
        <>
            <Titulo bienvenida='Alejo' />
            <ListaItems productos={productos} />
        </>
    );
}

export default ItemListContainer;
