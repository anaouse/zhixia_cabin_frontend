import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'
import '@/styles/ContentsPage.css'

export default function ContentsPage() {
  const sections = [
    {
      category: "全部",
      links: [
        { id: "33", text: "目前Obsidian使用方法", url: "https://www.bilibili.com/video/BV1pMDYB9EM9/" },
        { id: "32", text: "体育馆之谜看后想法", url: "https://www.bilibili.com/video/BV1jn9MBJEoq/" },
        { id: "31", text: "打造EPUB阅读器经验分享", url: "https://www.bilibili.com/video/BV19LXzBFEFQ/" },
        { id: "30", text: "独眼少女看后想法", url: "https://www.bilibili.com/video/BV1AMQrBSE9A/" },
        { id: "29", text: "Function Calling 与 MCP 与 Chat-Template", url: "https://www.bilibili.com/video/BV1BPwMzzEg4/" },
        { id: "28", text: "夏与冬的奏鸣曲看后想法", url: "https://www.bilibili.com/video/BV13pcSzyEev/" },
        { id: "27", text: "1周后手机屏幕使用时间", url: "https://www.bilibili.com/video/BV1NjPZzaEp8/" },
        { id: "26", text: "让我深呼吸入睡，Rough and Beautiful Place", url: "https://www.bilibili.com/video/BV1bnPnzPE9m/" },
        { id: "25", text: "降低1周内屏幕使用时长", url: "https://www.bilibili.com/video/BV1t9P5z7ErJ/" },
        { id: "24", text: "使用Sublime Text碎片化写作方法分享", url: "https://www.bilibili.com/video/BV1ezAbzFE4A/" },
        { id: "23", text: "动脑不累，文字上瘾", url: "https://www.bilibili.com/video/BV13JfcBvEUd/" },
        { id: "22", text: "过滤流经身体的文字，之后再做笔记", url: "https://www.bilibili.com/video/BV1DLFUziEzt/" },
        { id: "21", text: "有翼之暗看后想法", url: "https://www.bilibili.com/video/BV1QAffBaEoc/" },
        { id: "20", text: "告别大而全的笔记，开始做具体的事情", url: "https://www.bilibili.com/video/BV16v6iBiE2r/" },
        { id: "18", text: "看完《绝妙舞步》动画想法", url: "https://www.bilibili.com/video/BV13A6uBCE3V/" },
        { id: "17", text: "看完《玻璃塔谜案》", url: "https://www.bilibili.com/video/BV1frzCBDEym/" },
        { id: "16", text: "开始录制视频", url: "https://www.bilibili.com/video/BV189zNBFEhX/" },
        { id: "15", text: "结果为导向才是生活的主体", url: "https://www.bilibili.com/opus/1157647248589324297" },
        { id: "14", text: "我会粗心回家的——没有明天的我们，在昨天相恋", url: "https://www.bilibili.com/opus/1155389753649004551" },
        { id: "13", text: "需要一个可以在脑子里期盼的爱好", url: "https://www.bilibili.com/opus/1154671347349061637" },
        { id: "12", text: "读后感想——工作、消费主义和新穷人", url: "https://www.bilibili.com/opus/1154302602884677641" },
        { id: "11", text: "实践的爽感", url: "https://www.bilibili.com/opus/1153519029059584040" },
        { id: "10", text: "新的一年与生活感受", url: "https://www.bilibili.com/opus/1152755907913842777" },
        { id: "9", text: "为什么打字的时候应该少用方向键", url: "https://www.bilibili.com/opus/1151296791497408547" },
        { id: "8", text: "珍惜随时产生的灵感", url: "https://www.bilibili.com/opus/1150969734062145553" },
        { id: "7", text: "为什么做又为什么不做？以及未来一周的生活实验", url: "https://www.bilibili.com/opus/1150637630022484003" },
        { id: "6", text: "使用AI探索符号", url: "https://www.bilibili.com/opus/1150212449716142101" },
        { id: "5", text: "APP年度总结看起来很奇怪", url: "https://www.bilibili.com/opus/1149079231178735625" },
        { id: "4", text: "目前专注的状态", url: "https://www.bilibili.com/opus/1147935704710381571" },
        { id: "3", text: "越来越警惕的事前判断", url: "https://www.bilibili.com/opus/1147658829670907905" },
        { id: "2", text: "无意中尝试生成艺术", url: "https://www.bilibili.com/opus/1146925232072687641" },
        { id: "1", text: "重新开始", url: "https://www.bilibili.com/opus/1146920692272332820" },
      ]
    },
    {
      category: "读书相关",
      links: [
        { id: "32", text: "体育馆之谜看后想法", url: "https://www.bilibili.com/video/BV1jn9MBJEoq/" },
        { id: "30", text: "独眼少女看后想法", url: "https://www.bilibili.com/video/BV1AMQrBSE9A/" },
        { id: "28", text: "夏与冬的奏鸣曲看后想法", url: "https://www.bilibili.com/video/BV13pcSzyEev/" },
        { id: "21", text: "有翼之暗看后想法", url: "https://www.bilibili.com/video/BV1QAffBaEoc/" },
        { id: "17", text: "看完《玻璃塔谜案》", url: "https://www.bilibili.com/video/BV1frzCBDEym/" },
        { id: "14", text: "我会粗心回家的——没有明天的我们，在昨天相恋", url: "https://www.bilibili.com/opus/1155389753649004551" },
        { id: "12", text: "读后感想——工作、消费主义和新穷人", url: "https://www.bilibili.com/opus/1154302602884677641" },

      ]
    },
    {
      category: "Obsidian",
      links: [
        { id: "33", text: "目前Obsidian使用方法", url: "https://www.bilibili.com/video/BV1pMDYB9EM9/" },
        { id: "22", text: "过滤流经身体的文字，之后再做笔记", url: "https://www.bilibili.com/video/BV1DLFUziEzt/" },
        { id: "20", text: "告别大而全的笔记，开始做具体的事情", url: "https://www.bilibili.com/video/BV16v6iBiE2r/" },
      ]
    },
  ];

  return (
    <div className="page">
      <Header />

      <main className="page-main">
        <section className="home">
          <h1 className="home__title">20-内容目录</h1>
        </section>

        <section className="home-content">
          <div className="content-block">
            <h2 className="content-block__heading">我的自媒体内容目录</h2>
            <p className="content-block__body">
              我在互联网上遇到感兴趣的人的时候，很想看完他的所有内容，但是受限于现在的社交媒体的设置，不能轻易获取一个人的所有内容，在一个人主页中一边往下滑一边看，但是退出后就不能再次轻易回到原来我看的那个地方了。
            </p>
            <p className="content-block__body">
              新内容源源不断产生都消化不完，所以感觉平台只想让观众停留在一个个热点事件当中，忘掉过去。但是有时候觉得一个人的内容就是有意思，看不完真的很难受。只希望社交媒体不要乱改我的内容的网址，要不然修改很麻烦。
            </p>
            <p className="content-block__body">
              所以我的第20篇内容创作就是这样的目录，收录我的内容的所有网络链接。
            </p>
            <p className="content-block__body">
              点击以下分类标题可以打开或隐藏内容目录，然后点击文字可以直接跳转到内容查看
            </p>
          </div>
        </section>

        <div className="url-list">
          {sections.map((section, index) => (
            <details key={index} className="category-item" open={index === 0}> 
              {/* 默认展开第一个分类 */}
              <summary className="category-item__summary">
                {section.category}
              </summary>
              
              <ul className="content-link-list">
                {section.links.map((link) => (
                  <li key={link.id} className="content-link-list__item">
                    <a 
                      href={link.url} 
                      className="content-link-list__link"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {link.id} - {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}