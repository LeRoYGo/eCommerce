import style from './Hero.module.css';
import Gallery from '../Gallery';

function Hero() {
  return (
    <div className={style.hero}>
      <div className={style.gallery}>
        <Gallery />
      </div>
      <div className={style.content}>
        <h2 className={style.name}>Apple iPhone 14 Pro Max</h2>
        <span className={style.price}>$1399</span>
        <div className={style.selectColor}>
          <span className={style.selectColorTitle}>Select color :</span>
          <ul className={style.selectColorList}>
            <li style={{ backgroundColor: 'rgb(0, 0, 0)' }}>
              <a href="#"></a>
            </li>
            <li style={{ backgroundColor: 'rgb(120, 29, 188)' }}>
              <a href="#"></a>
            </li>
            <li style={{ backgroundColor: 'rgb(225, 0, 0)' }} className={style.active}>
              <a href="#"></a>
            </li>
            <li style={{ backgroundColor: 'rgb(225, 176, 0)' }}>
              <a href="#"></a>
            </li>
            <li style={{ backgroundColor: 'rgb(232, 232, 232)' }}>
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <ul className={style.equipment}>
          <li>
            <a href="#" className={style.notInStock}>
              128GB
            </a>
          </li>
          <li>
            <a href="#">256GB</a>
          </li>
          <li>
            <a href="#">512GB</a>
          </li>
          <li>
            <a href="#" className={style.active}>
              1TB
            </a>
          </li>
        </ul>
        <p className={style.description}>
          Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without
          rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the
          new systemwith two cameras more...
        </p>
        <div className={style.buttonBlock}>
          <button className={style.button}>Add to Wishlist</button>
          <button className={style.buttonBlack}>Add to Card</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
