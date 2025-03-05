import data from '../data/data.json'

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
      </main>
    </div>
  )
}
