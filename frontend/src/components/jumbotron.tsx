import styles from "./jumbotron.module.scss";

const Jumbotron: React.FC<{
    completed?: boolean
}> = ({
    completed
}) => {
  return (
    <section className={styles.container}>
    <div className="box">
       {completed ? (
            <h2 className="copy--large">Thank you for your payment!</h2>
       ) : (<>
        <h2 className="copy--large">Hi, Taylor</h2>
        <p>
            You have 6 medical bills ready from ABC Health System. You can pay your
            bills here or verify your identity to view full bill details.
        </p>
        </>
       )}
    </div>
    </section>
  );
};

export default Jumbotron;
