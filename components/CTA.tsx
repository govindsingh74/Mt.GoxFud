import styles from "@/styles/style";
import Button from "./Button";
const CTA: React.FC = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h4 className={styles.heading2}>
                Contract Address:- MGFxHCzrfjVoUNJDPpf7dXjhmgvfDMTWfKcy6rGPArv
            </h4>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Total Supply of $MGF Token= 21Bn
            </p>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Total Supply in circulation($MGF) = Going Live Soon..
            </p>
        </div>
    </section>
)

export default CTA;