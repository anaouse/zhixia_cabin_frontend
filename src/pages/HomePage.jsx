import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import '@/styles/HomePage.css'

const socialLinks = [
  { name: 'BILIBILI', url: 'https://space.bilibili.com/1640255193' },
  { name: '小红书', url: 'https://www.xiaohongshu.com/user/profile/68c04e3f0000000005001821' },
  { name: '抖音', url: 'https://v.douyin.com/hF7motm8i7I/ 5@3.com' },
  { name: 'Github', url: 'https://github.com/anaouse' },
]

export default function HomePage() {
  return (
    <div className="page">
      <Header />

      <main className="page-main">
        <section className="home">
          <h1 className="home__title">徵夏小屋</h1>
        </section>

        <section className="home-content">
          <div className="content-block">
            <h2 className="content-block__heading">关于徵夏小屋</h2>
            <p className="content-block__body">
              你好！可以叫我徵（zhǐ）夏，徵夏小屋用于存放我个人的产品，欢迎在各大自媒体平台了解我发布的内容以及到我的店铺购买我的产品。
            </p>
          </div>

          <div className="content-block">
            <h2 className="content-block__heading">我的社交媒体</h2>
            <p className="content-block__body">  </p>

            <ul className="social-list">
              {socialLinks.map((link) => (
                <li key={link.name} className="social-list__item">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-list__link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}