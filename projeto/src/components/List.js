import Item from './Item'

function List(){
return (
    <>
        <h1> Minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lacamento={1985}/>
            <Item marca="Fiat" ano_lacamento={1964}/>
            <Item marca="Renault"/>
            <Item/>
            
        </ul>
    </>
)

}
export default List

