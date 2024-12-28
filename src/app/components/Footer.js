import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import logo from '../../../public/Assets/logo.png';
import phone from '../../../public/Assets/phone.png';
import email from '../../../public/Assets/email.png';
import address from '../../../public/Assets/address.png';
import { Contact } from './Contact';

const contacts = [
  {
    image: phone,
    label: 'Phone NUmber',
    value: '+973 3118 1843',
  },
  {
    image: email,
    label: 'Email Address',
    value: 'Elbrithcqhr@gmail.com',
  },
  {
    image: address,
    label: 'Address',
    value: 'Ambassador Street, Zone 61',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        {contacts.map((contact) => (
          <Contact
            key={contact.label}
            image={contact.image}
            label={contact.label}
            value={contact.value}
          />
        ))}
      </div>
      <div className={styles.footerDiv}>
        <Image src={logo} alt="Logo" loading="lazy" />
        <p className={styles.msg}>
          Your health, physical and emotional well being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <p className={styles.footerText}>
        Elbrit Life Sciences Private Limited, C20, BKC, G Block, Mumbai 400051
      </p>
    </footer>
  );
}

export default Footer;
