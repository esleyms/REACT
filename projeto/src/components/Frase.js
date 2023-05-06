import styles from './Frase.module.css'
function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.Content}>Este é um componete com uma frase</p>
        </div>
    )
}
export default Frase
