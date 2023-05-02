import Item from '../Item'

const ListaItems = ({productos}) => {
    return(
        <div className='GrupoListado'>
            {productos.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ListaItems