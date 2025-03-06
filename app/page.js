import data from '../data/data.json'
import projects from '../data/projects.json'
import Card from '../components/card.js'

export default function Home() {
  return (
    <div>
      {/* <Head> */}
      {/* <title>Irfan Uraizee</title> */}
      {/* <link rel="canonical" href="https://irfanu.com/" /> */}
      {/* </Head> */}

      <main>
        <header>
          <h1 style={{ display: 'none' }}>Irfan Uraizee</h1>

          {data.intro.map((element, i) => {
            return (
              <p key={i} dangerouslySetInnerHTML={{ __html: element.value }} />
            )
          })}
        </header>

        <section>
          <h2>Selected projects</h2>

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
    </div>
  )
}
