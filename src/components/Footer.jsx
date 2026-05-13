import "@/components/styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const today = new Date().toISOString().split("T")[0].replace(/-/g, ".");

  return (
    <footer className="footer">
      <p className="footer-text">徵夏小屋 | zhixiacabin.xyz</p>
      <p className="footer-date">2026.04.03 - {today}</p>
    </footer>
  );
}
