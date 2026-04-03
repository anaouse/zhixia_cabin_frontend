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
        <section className="home-hero">
          <h1 className="home-hero__title">徵夏小屋</h1>
          <p className="home-hero__subtitle">一个安静存在于网络角落的地方</p>
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