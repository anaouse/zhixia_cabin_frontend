import '@/styles/ShopCard.css'

export default function ShopCard({ imageSrc, imageAlt, buttonLabel, onButtonClick }) {
  return (
    <div className="shop-card">
      <p className="shop-card__hint">使用淘宝扫描二维码或点击下方按钮进入我的淘宝店铺</p>

      <div className="shop-card__image-wrap">
        <img src={imageSrc} alt={imageAlt} className="shop-card__image" />
      </div>
      
      <button className="shop-card__btn" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  )
}