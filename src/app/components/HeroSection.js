import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import heroImg from '../../../public/Assets/f2-1.png.png';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Essential Vitamins</h1>

        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <p>Online Medical Supplies</p>
            <h2>Get your Vitamins & Minerals</h2>
            <button className={styles.button}>EXPLORE</button>
          </div>
          <Image
            src={heroImg}
            alt="Essential Vitamins"
            className={styles.heroImage}
            loading="lazy"
          />
          <div className={styles.headerRight}>
            <div>
              <h3>Vitamins</h3>
              <p>Increased Vitamins and minerals in your diet</p>
            </div>
            <div>
              <h3>Weight Loss</h3>
              <p>
                Weight Loss <br /> Find scientifically proven solutions
              </p>
            </div>
            <div>
              <h3>Functional Foods</h3>
              <p>
                Functional Foods <br /> From protein o baby formula
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
