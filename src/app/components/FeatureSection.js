import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import icon1 from '../../../public/Assets/icon1.png';
import icon2 from '../../../public/Assets/icon2.png';
import icon3 from '../../../public/Assets/icon3.png';
import icon4 from '../../../public/Assets/icon4.png';
import icon5 from '../../../public/Assets/icon5.png';
import icon6 from '../../../public/Assets/icon6.png';
import { Feature } from './Feature';

const features = [
  {
    icon: icon1,
    title: 'Clinically Studied',
    description:
      'All products that we offer have undergone lab and safety test',
  },
  {
    icon: icon2,
    title: 'Vegetarian Friendly',
    description:
      'We have a wide selections of vegetarian products to meet your needs',
  },
  {
    icon: icon3,
    title: 'Made In India',
    description:
      'Shop local and explore health products made right here in india',
  },
  {
    icon: icon4,
    title: 'Free Shipping',
    description: 'We deliver to your door with no shipping on your orders',
  },
  {
    icon: icon5,
    title: 'No Risk',
    description:
      'We ensure that all products are safe and within their use-by date',
  },
  {
    icon: icon6,
    title: 'GMO Free',
    description:
      'Natural, no modified products and derivatives for those who need it',
  },
];

function FeatureSection() {
  return (
    <section className={styles.features}>
      {features.map((feature) => (
        <Feature
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

export default FeatureSection;
