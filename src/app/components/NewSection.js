import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import med1 from '../../../public/Assets/blog1-450x580.jpg.png';
import med2 from '../../../public/Assets/blog2-450x580.jpg.png';

function NewSection() {
  return (
    <section className={styles.news}>
      <h3>OUR BLOG</h3>
      <h2>Latest News</h2>
      <div className={styles.newsGrid}>
        <div>
          <span>
            {' '}
            <Image
              className={styles.img1}
              src={med1}
              alt="News 1"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
          <span>
            {' '}
            <Image
              className={styles.img2}
              src={med2}
              alt="News 2"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
        </div>
        <div>
          <span>
            <Image
              className={styles.img2}
              src={med1}
              alt="News 1"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
          <span>
            {' '}
            <Image
              className={styles.img1}
              src={med2}
              alt="News 2"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
        </div>
        <div>
          <span>
            {' '}
            <Image
              className={styles.img1}
              src={med1}
              alt="News 1"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
          <span>
            <Image
              className={styles.img2}
              src={med2}
              alt="News 2"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
        </div>
        <div>
          <span>
            <Image
              className={styles.img2}
              src={med1}
              alt="News 1"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
          <span>
            {' '}
            <Image
              className={styles.img1}
              src={med2}
              alt="News 2"
              loading="lazy"
            />
            <p>20 APR</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default NewSection;
