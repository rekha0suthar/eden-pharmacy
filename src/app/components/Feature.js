import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export function Feature({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <Image src={icon} alt="icon" loading="lazy" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
