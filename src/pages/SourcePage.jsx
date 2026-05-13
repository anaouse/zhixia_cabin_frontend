import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import "@/pages/styles/SourcePage.css";

export default function SourcePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/obsidian-plugin.zip";
    link.download = "obsidian-plugin.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page">
      <Header />

      <main className="page-main">
        <section className="source">
          <h1 className="source__title">资源下载</h1>
          <p className="source__intro">这里提供徵夏小屋相关的资源文件下载。</p>

          <div className="source-card">
            <div className="source-card__info">
              <h2 className="source-card__name">Obsidian 插件包</h2>
              <p className="source-card__desc">
                适用于 Obsidian 笔记软件的插件集合包。下载后解压至 Obsidian
                插件目录即可使用。
              </p>
            </div>

            <div className="source-card__meta">
              <span className="source-card__format">ZIP 压缩包</span>
              <button
                className="source-card__download-btn"
                onClick={handleDownload}
              >
                下载文件
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
