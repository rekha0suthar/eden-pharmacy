import Image from 'next/image';

export function Contact({ image, label, value }) {
  return (
    <span>
      <Image src={image} alt={label} loading="lazy" />
      <div>
        <p>{label}</p>
        <p>{value}</p>
      </div>
    </span>
  );
}
