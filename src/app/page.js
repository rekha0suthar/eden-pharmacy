import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('./components/HeroSection'));
const FeatureSection = dynamic(() => import('./components/FeatureSection'));
const IngredientSection = dynamic(() =>
  import('./components/IngredientSection')
);
const NewSection = dynamic(() => import('./components/NewSection'));
const Footer = dynamic(() => import('./components/Footer'));

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* Ingredients Section */}
      <IngredientSection />

      {/* Latest News Section */}
      <NewSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
