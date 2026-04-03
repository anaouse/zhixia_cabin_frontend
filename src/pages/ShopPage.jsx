import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import ShopCard from '@/components/ShopCard.jsx'
import { shopItems } from '@/content/ShopContent.jsx'

export default function ShopPage() {
  const handleTaobao = (token) => {
    navigator.clipboard.writeText(token).then(() => {
      alert('淘口令已复制，请打开淘宝 App 粘贴即可进入小店 🛖')
    }).catch(() => {
      prompt('请手动复制以下淘口令：', token)
    })
  }

  return (
    <div className="page">
      <Header />
      <main className="page-main">
        {shopItems.map((item, i) => (
          <ShopCard
            key={i}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            buttonLabel={item.buttonLabel}
            onButtonClick={() => handleTaobao(item.taobaoToken)}
          />
        ))}
      </main>
      <Footer />
    </div>
  )
}