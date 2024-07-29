import { card } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Button from "./Button";
import Image from "next/image";
const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The Mt. Gox Story: <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Rise: Mt. Gox was once the largest Bitcoin exchange, 
        handling over 70% of all Bitcoin transactions worldwide. 
        It was a pivotal platform for early Bitcoin adopters.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Fall: In 2014, Mt. Gox declared bankruptcy after losing 
        approximately 850,000 BTC, worth around $450 million at that 
        time, due to a massive hack. This event created a wave of fear, 
        uncertainty, and doubt (FUD) in the crypto world.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        The Legacy: The Mt. Gox collapse remains one of the most talked-about 
        events in crypto history, symbolizing both the vulnerabilities and 
        resilience of the cryptocurrency ecosystem.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
