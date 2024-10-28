import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
      <CoreConcepts {...CORE_CONCEPTS[1]} />
      <CoreConcepts {...CORE_CONCEPTS[2]} />
      <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        {/* <CoreConcepts
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      /> */}
      </ul>
    </section>
  );
}
