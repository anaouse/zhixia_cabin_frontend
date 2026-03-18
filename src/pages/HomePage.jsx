import { useEffect, useState } from 'react'
import '@/styles/HomePage.css'

// Helpers
function formatMonthDay(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short' })
}

function isToday(dateStr) {
  return new Date().toISOString().slice(0, 10) === dateStr
}

function isPastDay(dateStr) {
  return dateStr < new Date().toISOString().slice(0, 10)
}

// Sub-components
function DayColumn({ day }) {
  const dateNum = new Date(day.date + 'T00:00:00').getDate()
  const month   = formatMonthDay(day.date)
  const today   = isToday(day.date)
  const past    = isPastDay(day.date)

  return (
    <div className="day-column">
      <div className={`day-header${past ? ' day-header--past' : ''}${today ? ' day-header--today' : ''}`}>
        <div className="day-name">{day.day.slice(0, 3)}</div>
        <div className={`day-date${today ? ' today' : ''}`}>{dateNum}</div>
        <div className="day-month">{month}</div>
      </div>
      <div className="slots-container">
        {day.interval.length === 0 ? (
          <span className="no-slots">—</span>
        ) : (
          day.interval.map((slot) => (
            <div
              key={slot.interval_hours}
              className={`slot ${slot.free ? 'free' : 'booked'}${past ? ' past' : ''}`}
              title={slot.free ? `Available ${slot.interval_hours}:00` : 'Unavailable'}
            >
              {slot.interval_hours}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

// Main Component
export default function HomePage() {
  const [schedule, setSchedule] = useState([])
  const [status, setStatus]     = useState('loading') // loading | ok | error

  useEffect(() => {
    fetch('/schedule.json')
      .then(r => { if (!r.ok) throw new Error(r.statusText); return r.json() })
      .then(data => { setSchedule(data); setStatus('ok') })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="homepage">

      <nav className="nav">
        <span className="nav-logo">徵夏小屋</span>
      </nav>

      <section className="section intro-section">
        <h1 className="hero-title">
          正在努力成为可以解答<span className="green-word">万物</span>的人......
        </h1>
        <p className="intro-body">
          你好！你可以叫我徵（Zhi）夏，我没什么特别的，现在二十多岁，是一位普通人，小学到初中生活在乡镇，高中生活在小城市，大学生活在大城市，就读数据科学与大数据技术专业
        </p>
        <p className="intro-body">
          欢迎找我咨询任何我可能了解的东西，或者和我聊天？？？
        </p>
        <p className="intro-body">
          想使用AI编程？Vibe Coding？我可以手把手带你了解最基本的方法和原理
        </p>
        <p className="intro-body">
          点击下方我的社交媒体链接，看看我分享了什么内容，如果有任何你想进一步了解的东西都可以询问我
        </p>
        <div className="social-links">
          <a href="https://space.bilibili.com/1640255193" className="social-link" target="_blank" rel="noopener noreferrer">Bilibili</a>
          <span className="social-sep">·</span>
          <a href="https://www.xiaohongshu.com/user/profile/68c04e3f0000000005001821" className="social-link" target="_blank" rel="noopener noreferrer">XiaoHongShu</a>
          <span className="social-sep">·</span>
          <a href="https://v.douyin.com/lEqayVJDMRY/ 1@0.com" className="social-link" target="_blank" rel="noopener noreferrer">DOUYIN</a>
          <span className="social-sep">·</span>
          <a href="https://github.com/anaouse" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>

      <section className="section schedule-section">
        <div className="schedule-header">
          <h2 className="schedule-title">
            我的日程表 (UTC+8)
          </h2>
        </div>

        <div className="legend">
          <div className="legend-item">
            <div className="legend-dot free" />
            空闲
          </div>
          <div className="legend-item">
            <div className="legend-dot booked" />
            已被预约或我有自己的事
          </div>
        </div>

        {status === 'loading' && (
          <div className="schedule-loading">Loading schedule…</div>
        )}

        {status === 'error' && (
          <div className="schedule-error">
            Could not load schedule. Please try again later.
          </div>
        )}

        {status === 'ok' && (
          <div className="calendar-grid">
            {schedule.map(day => (
              <DayColumn key={day.date} day={day} />
            ))}
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-logo">ZhiXia Cabin</div>
        <div className="footer-text">
          © 2026.03.18 - {new Date().toLocaleDateString('en-CA').replace(/-/g, '.')}
        </div>
      </footer>

    </div>
  )
}

