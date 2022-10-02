import css from "../styles/Hero.module.css";
import Image from "next/image";
import Cherry from "../assets/Cherry.png";
import HeroImage from '../assets/HeroImage.png'
export default function Hero() {
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.left}>
        <div className={css.cherryDiv}>
          <span>The best Pizza ever</span>
          <Image src={Cherry} alt="" width={40} height={25} />
        </div>

        <div className={css.heroText}>
          <span>Be The Fasterst</span>
          <span>In Delivering</span>
          <span>
            Your{" "}
            <span style={{ color: "var(--themeRed)" }}>Delicious Pizza</span>
          </span>
        </div>
        <span className={css.miniText}>
            Our Mission is to filling your tummy with delicious pizza and with fast delivery
        </span>
        <button className={`btn ${css.btn}`}>
            Get Started
        </button>
      </div>
      {/* right side */}
      <div className={css.right}>
        <div className={css.imageContainer}>
            <Image src={HeroImage} alt=""/>
        </div>

      </div>
    </div>
  );
}
