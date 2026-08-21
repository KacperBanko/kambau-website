import { projects } from "@/content/site";

export function Projects() {
  return (
    <section className="section projects" id="realizacje">
      <div className="wrap">
        <div className="section__head">
          <h2>Realizacje</h2>
          <p>Wybrane prace z placu budowy — precyzja, pomiary i ciężki sprzęt.</p>
        </div>
        <div className="projects__grid">
          {projects.map((item) => (
            <article className="project" key={item.id}>
              <div
                className="project__visual has-image"
                style={{
                  backgroundImage: `linear-gradient(145deg, rgba(18,18,18,0.15), rgba(18,18,18,0.35)), url(${item.image})`,
                }}
                role="img"
                aria-label={item.title}
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
