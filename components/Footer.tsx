import styles from "@/styles/style";
import { logo } from "@/public/assets";
import { footerLinks, socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="MtGoxFUD($MGF)"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          MtGoxFUD ($MGF) - Turning Crypto History into Fun. Join the fun with MtGoxFUD, 
          the meme coin that embraces the legendary chaos of Mt. Gox! Relive the thrilling 
          days of crypto's wild west with a token that's here to make history funny.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  <Link href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2024 MtGoxFUD ($MGF). All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Link href={social.link} key={social.id} target="_blank" rel="noopener noreferrer">
            <Image
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
            />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
