import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'

export default function ConsultPage() {
  return (
    <div className="page">
      <Header />

      <main className="page-main">
        <section className="home">
          <h1 className="home__title">咨询服务</h1>
        </section>

        <section className="home-content">
          <div className="content-block">
            <h2 className="content-block__heading">咨询主题</h2>
            <ul className="content-list">
              <li className="content-list__item">单纯想和我聊天，或者想找个人听你说话？我可以和你聊天。</li>
              <li className="content-list__item">想和我深入探讨在自媒体更新的部分内容</li>
              <li className="content-list__item">想尝试AI编程？我可以带你了解最基本的概念，授人以渔</li>
            </ul>

          </div>

          <div className="content-block">
            <h2 className="content-block__heading">购买流程</h2>
            <ul className="content-list">
              <li className="content-list__item">点击右上角“我的店铺”，扫码或复制口令进入我的店铺</li>
              <li className="content-list__item">直接购买对应的咨询商品，付款的时候在备注写上大概要解决的问题或者聊天主题，以及想要聊天的时间</li>
              <li className="content-list__item">如果不确定我能不能解决的话可以先和客服——也就是我交流，再决定是否下单。</li>
              <li className="content-list__item">如果我确认时间没问题的话，我会在客服界面发送通话链接给你，时间到了进入链接就可以愉快聊天了🤤</li>
              <li className="content-list__item">注意😽：我肯定会尽力帮助你1个小时，但是如果时间到了还差一点的话接着聊也没什么</li>

            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}