import propTypes from 'prop-types'

function Item({marca, ano_lacamento}) {
    return (
        <>
            <li>{marca} - {ano_lacamento}</li>
        </>
    )
}
export default Item
Item.propTypes = {
   marca: propTypes.string.isRequired,
   ano_lacamento: propTypes.number,

}
Item.defaultProps = {
marca: 'Faltou a marca',
ano_lacamento: 0,

}