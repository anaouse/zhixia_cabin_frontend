import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import ContentBlock from '@/components/ContentBlock.jsx'
import { homeContent } from '@/content/HomeContent.jsx'
import '@/styles/HomePage.css'

export default function HomePage() {
  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <section className="home">
          <h1 className="home__title">徵夏小屋</h1>
        </section>
        <section className="home-content">
          {homeContent.map((block, i) => (
            <ContentBlock key={i} heading={block.heading} body={block.body} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}