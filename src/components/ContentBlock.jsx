import '@/styles/ContentBlock.css'

export default function ContentBlock({ heading, body }) {
  return (
    <div className="content-block">
      <h2 className="content-block__heading">{heading}</h2>
      <p className="content-block__body">{body}</p>
    </div>
  )
}