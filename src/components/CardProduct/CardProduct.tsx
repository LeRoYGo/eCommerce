import style from './CardProduct.module.css';
import starFill from '../../assets/star.svg';

function CardProduct() {
  return (
    <div className={style.card}>
      <img className={style.img} src="https://i.ibb.co/VWJ7Ngkn/Default.png" alt="" />
      <div className={style.stars}>
        {[...new Array(5)].map((_, i) => (
          <img key={i} src={starFill} alt="star fill" />
        ))}
      </div>
      <h3 className={style.title}>1.3 Chair</h3>
      <span className={style.price}>$69.90</span>
    </div>
  );
}

export default CardProduct;
