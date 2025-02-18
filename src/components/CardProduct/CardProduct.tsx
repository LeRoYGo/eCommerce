import style from './CardProduct.module.css';
import starFill from '../../assets/star.svg';
import { CardProductProps } from './CardProduct.props';
import { Link } from 'react-router';

function CardProduct(data: CardProductProps) {
  const { id, img, countStars, title, price } = data;
  return (
    <Link to={id.toString()} className={style.card}>
      <img className={style.img} src={img} alt={title} />
      <div className={style.stars}>
        {[...new Array(countStars)].map((_, i) => (
          <img key={i} src={starFill} alt="star fill" />
        ))}
      </div>
      <h3 className={style.title}>{title}</h3>
      <span className={style.price}>${price}</span>
    </Link>
  );
}

export default CardProduct;
