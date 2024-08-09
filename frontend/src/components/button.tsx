import styles from "./button.module.scss";

const Button: React.FC<{
    children?: React.ReactNode,
    onClick?: () => void
}> = ({ children, onClick }) => {

    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button