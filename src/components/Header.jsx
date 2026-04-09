import { Link, useLocation } from 'react-router-dom'
import '@/styles/Header.css'

const navItems = [
  { label: '首页', path: '/' },
  { label: '咨询服务', path: '/consult' },
  { label: '20-内容目录', path: '/contents' },

  // { label: '个人看板', path: '/zhixia-terminal' },
  { label: '我的店铺', path: '/shop' },
]

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className="header">
      <div className="header-brand">
        <Link to="/" className="brand-link">
          <img src="/logo.png" alt="徵夏小屋" className="brand-logo" />
          <span className="brand-name">徵夏小屋</span>
        </Link>
      </div>
      <nav className="header-nav">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${pathname === item.path ? 'nav-link--active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}