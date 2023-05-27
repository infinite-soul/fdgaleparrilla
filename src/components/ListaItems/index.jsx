import Item from '../Item'



const ListaItems = ({productos=[]}) => {
    
    return(
        <div className='GrupoListado'>
            {productos.length > 0 && productos.map(prod => <Item key={prod.id} info={prod} {...prod}/>)}
        </div>
    )
}

export default ListaItems
