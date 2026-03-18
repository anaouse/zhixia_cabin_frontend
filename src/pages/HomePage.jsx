import { useEffect, useState } from 'react'
import '@/styles/HomePage.css'

// Service steps data
const SERVICE_STEPS = [
  {
    num: '01',
    title: '选好时段',
    desc: '查看下方日程表，找到你想要的空闲时间，记下日期和时间。',
  },
  {
    num: '02',
    title: '前往我的淘宝店',
    desc: '点击下方链接进入我的淘宝店，如果有明确目的，可以下单前先和我说希望了解什么东西，我认为可以帮助你的话再下单，避免下单后我无能为力只能退款了😭',
  },
  {
    num: '03',
    title: '备注你的需求',
    desc: '下单时在备注栏写明你希望咨询的主题，以及你希望交流的时间段，比如3月18日的10到11点：3月18日10-11（只接受网站上日程表空闲的时候哦）'
  },
  {
    num: '04',
    title: '一对一通话',
    desc: '下单成功后我会在淘宝上发送给你一个视频通话链接地址，到时候点击链接就可以愉快聊天啦，如果是和电脑有关的内容，可以用电脑聊天，方便你投屏我直接指导',
  },
]

// 统一获取 UTC+8 的当前日期字符串 (格式: YYYY-MM-DD)
function getUTC8DateStr() {
  const nowUTC8 = new Date(Date.now() + 8 * 60 * 60 * 1000)
  return nowUTC8.toISOString().slice(0, 10)
}

function formatMonthDay(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short' })
}

function isToday(dateStr) {
  return getUTC8DateStr() === dateStr
}

function isPastDay(dateStr) {
  return dateStr < getUTC8DateStr()
}

function isTooSoon(dateStr, intervalHour) {
  const nowUTC8 = new Date(Date.now() + 8 * 60 * 60 * 1000)
  const todayUTC8 = nowUTC8.toISOString().slice(0, 10)
  if (dateStr !== todayUTC8) return false
  const currentHourUTC8 = nowUTC8.getUTCHours()
  const startHour = parseInt(String(intervalHour).split('-')[0], 10)
  return startHour - currentHourUTC8 < 2  // 距现在不足2小时则划掉
}

// --- Sub-components ---
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
          day.interval.map((slot) => {
            // 单独计算该 slot 是否距离现在不足2小时或已过去
            const slotTooSoon = isTooSoon(day.date, slot.interval_hours)
            
            // 只要本身不空闲，或者时间太近/已过，就被视为不可预约 (加划线)
            const effectivelyBooked = !slot.free || slotTooSoon
            
            // 【核心修改点】只要日期整天已过去，或者当天的这一个 slot 已过去/太近，就加上变淡灰的 past 样式
            const isSlotPast = past || slotTooSoon

            return (
              <div
                key={slot.interval_hours}
                className={`slot ${effectivelyBooked ? 'booked' : 'free'}${isSlotPast ? ' past' : ''}`}
                title={
                  slotTooSoon
                    ? 'Too close to book'
                    : slot.free
                    ? `Available ${slot.interval_hours}:00`
                    : 'Unavailable'
                }
              >
                {slot.interval_hours}
              </div>
            )
          })
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
          想使用AI编程自己实现日常需求？Vibe Coding？我可以手把手带你了解最基本的方法和原理，授人以渔
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

      {/* ── Service Section ── */}
      <section className="section schedule-section">
        <div className="schedule-header">
          <h2 className="schedule-title">
            服务方式
          </h2>
          <p className="intro-body">
            我会尽全力满足你的需求，但还是要提醒一句，咨询服务，到头来是有可能无法帮你解决问题的，也许你更需要睡一觉醒来后勇敢地对自己生活负责......
          </p>
        </div>
 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {SERVICE_STEPS.map(step => (
            <div key={step.num} style={{ borderTop: '1px solid var(--pale-sage)', paddingTop: '1.2rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: 'var(--pale-sage)', lineHeight: 1, marginBottom: '0.6rem' }}>
                {step.num}
              </div>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--moss-mid)', marginBottom: '0.5rem' }}>
                {step.title}
              </div>
              <p className="intro-body" style={{ fontSize: '0.92rem', lineHeight: 1.4 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
 
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid rgba(184,201,176,0.5)' }}>
          <a
            href="https://shop.taobao.com"
            target="_blank"
            rel="noopener noreferrer"
            className="slot free"
            style={{ display: 'inline-block', padding: '0.65rem 1.8rem', fontSize: '0.72rem', letterSpacing: '0.12em', cursor: 'pointer', textDecoration: 'none', borderRadius: '3px', whiteSpace: 'nowrap' }}
          >
            前往淘宝店铺下单 →
          </a>
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
            已被预约 | 我有自己的事 | 时间太近了
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

