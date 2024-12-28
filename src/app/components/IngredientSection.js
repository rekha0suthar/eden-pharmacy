import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import vitB3 from '../../../public/Assets/bn2-2.jpg.png';
import mag from '../../../public/Assets/bn2-3.jpg.png';
import hyacid from '../../../public/Assets/bn2-4.jpg.png';
import lact from '../../../public/Assets/bn2-5.jpg.png';
import vitC from '../../../public/Assets/h2-b1.jpg.png';
import circle from '../../../public/Assets/circle.png';

const ingredients = [
  {
    name: 'Vitamin C',
    image: vitC,
    description: 'Vitamin C as ascorbic acid',
  },
  {
    name: 'Vitamin B3',
    image: vitB3,
    description: 'Niacin for healthy gut and skin',
  },
  {
    name: 'Magnesium',
    image: mag,
    description: 'Boost energy and support muscle function',
  },
  {
    name: 'Hyaluronic Acid',
    image: hyacid,
    description: 'For smooth, supple and soft skin!',
  },
  {
    name: 'Lactobacillus',
    image: lact,
    description: 'Invigorate your gut microbiome',
  },
];

function IngredientSection() {
  return (
    <section className={styles.ingredients}>
      <div className={styles.ingredientsHeader}>
        <h3>INGREDIENTS</h3>
        <h2>Better Ingredients</h2>
        <p>
          Only the best when you choose products offered on our platform -
          high-quality ingredients for high products!
        </p>
      </div>

      {ingredients.map((ingredient) => (
        <div key={ingredient.name} className={styles.ingredientCard}>
          <h3>{ingredient.name}</h3>
          <p>{ingredient.description}</p>
          <a>SEE MORE</a>
          <Image src={ingredient.image} alt="Ingredient" loading="lazy" />
        </div>
      ))}
      <Image src={circle} alt="circle" />
    </section>
  );
}
export default IngredientSection;
