export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <title>{title}</title>
      <p>{description}</p>
    </li>
  );
}
