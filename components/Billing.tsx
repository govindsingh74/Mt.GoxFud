import { apple, bill, google } from "@/public/assets";
import styles, { layout } from "@/styles/style";
import Image from "next/image";
const Billing: React.FC = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About $MGF Token<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        MtGoxFUD ($MGF) is a meme coin inspired by the infamous rise and fall of the Mt. 
        Gox exchange. It embodies the spirit of humor, community, and nostalgia for one 
        of the most dramatic episodes in cryptocurrency history. Our mission is to turn 
        the story of one of the biggest crypto catastrophes into a source of fun and 
        engagement for the crypto community.
      </p>
    </div>
  </section>
);

export default Billing;
