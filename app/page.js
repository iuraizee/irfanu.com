import data from '../data/data.json'
import projects from '../data/projects.json'
import Card from '../components/Card.js'
import SocialLinks from '../components/SocialLinks.js'

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="visually-hidden">Irfan Uraizee</h1>

        {data.intro.map((element, i) => {
          return (
            <p key={i} dangerouslySetInnerHTML={{ __html: element.value }} />
          )
        })}
        <SocialLinks />
      </header>

      <section>
        <h2>Selected works</h2>

        <div className="card-grid">
          {projects.map((el, i) => {
            return (
              <Card
                key={i}
                url={el.url}
                headline={el.headline}
                image={el.image}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}
