import { useEffect, useState } from 'react'
import '@/styles/HomePage.css'

const SERVICE_STEPS = [
  { num: '01', title: '选好时段', desc: '查看下方日程表，找到你想要的空闲时间，记下日期和时间。' },
  { num: '02', title: '前往我的淘宝店', desc: '点击下方链接进入我的淘宝店，如果有明确目的，可以下单前先和我说希望了解什么东西，我认为可以帮助你的话再下单，避免下单后我无能为力只能退款了😭' },
  { num: '03', title: '备注你的需求', desc: '下单时在备注栏写明你希望咨询的主题，以及你希望交流的时间段，比如3月18日的10到11点（只接受网站上日程表空闲的时候，而且目前只接受1小时下单）' },
  { num: '04', title: '一对一通话', desc: '下单成功后我会在淘宝私信聊天里发给你一个视频通话链接地址，时间到了点击链接就可以愉快聊天啦，如果是和电脑有关的内容，可以用电脑聊天，方便你投屏我直接指导' },
]

const SOCIAL = [
  { label: 'Bilibili', href: 'https://space.bilibili.com/1640255193' },
  { label: 'XiaoHongShu', href: 'https://www.xiaohongshu.com/user/profile/68c04e3f0000000005001821' },
  { label: 'DOUYIN', href: 'https://v.douyin.com/lEqayVJDMRY/ 1@0.com' },
  { label: 'GitHub', href: 'https://github.com/anaouse' },
]

// UTC+8 helpers
const nowUTC8 = () => new Date(Date.now() + 8 * 3600_000)
const todayStr = () => nowUTC8().toISOString().slice(0, 10)

function slotState(dateStr, slot) {
  const today = todayStr()
  if (dateStr < today) return 'past'
  if (dateStr === today) {
    const startHour = parseInt(String(slot.interval_hours).split('-')[0], 10)
    if (startHour - nowUTC8().getUTCHours() < 2) return 'past'
  }
  return slot.free ? 'free' : 'booked'
}

function DayColumn({ day }) {
  const d = new Date(day.date + 'T00:00:00')
  const isPast = day.date < todayStr()
  const isToday = day.date === todayStr()

  return (
    <div className="day-col">
      <div className={`day-hd ${isPast ? 'past' : ''} ${isToday ? 'today' : ''}`}>
        <div className="lbl">{day.day.slice(0, 3)}</div>
        <div className={`date-num ${isToday ? 'today' : ''}`}>{d.getDate()}</div>
        <div className="lbl sm">{d.toLocaleDateString('en-US', { month: 'short' })}</div>
      </div>
      <div className="slots">
        {day.interval.length === 0
          ? <span className="no-slot">—</span>
          : day.interval.map(slot => {
              const state = slotState(day.date, slot)
              return (
                <div
                  key={slot.interval_hours}
                  className={`slot ${state}`}
                  title={state === 'past' ? 'Too close / past' : state === 'free' ? `Available ${slot.interval_hours}:00` : 'Unavailable'}
                >
                  {slot.interval_hours}
                </div>
              )
            })
        }
      </div>
    </div>
  )
}

export default function HomePage() {
  const [schedule, setSchedule] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch('/schedule.json')
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(d => { setSchedule(d); setStatus('ok') })
      .catch(() => setStatus('error'))
  }, [])

  return (
    <div className="page">
      <nav className="nav">
        <span className="nav-logo">徵夏小屋</span>
      </nav>

      <section className="sec intro">
        <h1 className="large-title">正在努力成为可以解答<span className="accent">万物</span>的人......</h1>
        {[
          '你好！你可以叫我徵（zhǐ）夏，我没什么特别的，现在二十多岁，是一位普通人，小学到初中生活在乡镇，高中生活在小城市，大学生活在大城市，就读数据科学与大数据技术专业',
          '欢迎找我咨询任何我可能了解的东西，或者和我聊天？？？',
          '想使用AI编程自己实现日常需求？Vibe Coding？我可以手把手带你了解最基本的方法和原理，授人以渔',
          '点击下方我的社交媒体链接，看看我分享了什么内容，如果有任何你想进一步了解的东西都可以询问我',
        ].map((t, i) => <p key={i} className="body-text">{t}</p>)}

        <div className="social-links">
          {SOCIAL.map(({ label, href }, i) => (
            <span key={label}>
              {i > 0 && <span className="sep">·</span>}
              <a href={href} className="social-link" target="_blank" rel="noopener noreferrer">{label}</a>
            </span>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-hd">
          <h2 className="sec-title">服务方式</h2>
          <p className="body-text">我会尽全力满足你的需求，但还是要提醒一句，咨询服务，到头来是有可能无法帮你解决问题的，也许你更需要睡一觉醒来后勇敢地对自己生活负责......</p>
        </div>

        <div className="steps-grid">
          {SERVICE_STEPS.map(({ num, title, desc }) => (
            <div key={num} className="step-card">
              <div className="step-num">{num}</div>
              <div className="step-title">{title}</div>
              <p className="body-text sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-row">
          <a href="https://shop.taobao.com" target="_blank" rel="noopener noreferrer" className="slot free cta">
            前往淘宝店铺下单 →
          </a>
        </div>
      </section>

      <section className="sec">
        <div className="sec-hd">
          <h2 className="sec-title">我的日程表 (上海时间 UTC+8)</h2>
        </div>

        <div className="legend">
          {[
            { cls: 'free',   label: '空闲可约' },
            { cls: 'booked', label: '已被预约 | 我有自己的事 | 距离现在太近了' },
          ].map(({ cls, label }) => (
            <div key={cls} className="legend-item">
              <div className={`legend-dot ${cls}`} />
              {label}
            </div>
          ))}
        </div>

        {status === 'loading' && <div className="status-msg">Loading schedule…</div>}
        {status === 'error'   && <div className="status-msg error">Could not load schedule. Please try again later.</div>}
        {status === 'ok' && (
          <div className="cal-grid">
            {schedule.map(day => <DayColumn key={day.date} day={day} />)}
          </div>
        )}
      </section>

      <footer className="footer">
        <div className="footer-logo">ZhiXia Cabin</div>
        <div className="footer-text">
          © 2026.03.18 – {new Date().toLocaleDateString('en-CA').replace(/-/g, '.')}
        </div>
      </footer>
    </div>
  )
}
