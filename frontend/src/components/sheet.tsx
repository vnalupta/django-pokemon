import Link from "next/link";
import Button from "./button";
import styles from "./sheet.module.scss";

// import { useRouter } from 'next/navigation'

const Sheet: React.FC = () => {

//     const router = useRouter()

//   function clickHandler() {
//     router.push('/pay')
//   }

  return (
    <section className={styles.container}>
      <div className="box">
        <div className={styles.flexrow}>
            <p className="label">Total Due:</p>
            <p className="copy--large">$600</p>
        </div>
        <Link href="/pay">
            <Button>Pay Bill</Button>
        </Link>
      </div>
    </section>
  );
};

export default Sheet;
