import { useAppSelector } from '../../redux/store';
import style from './CharacteristicsBlock.module.css';
import { CharacteristicProps } from './CharacteristicsBlock.props';

function Characteristic({ title, value }: CharacteristicProps) {
  return (
    <dl className={style.characteristic}>
      <dt>{title}</dt>
      <dd>{value}</dd>
    </dl>
  );
}

function CharacteristicsBlock() {
  const { description, listBlock } = useAppSelector((state) => state.product);
  return (
    <>
      <span className={style.titleh1}>Details</span>
      <p className={style.desc}>{description}</p>
      {listBlock.map((block, i) => (
        <div key={i} className={style.container}>
          <span className={style.title}>{block.title}</span>
          {block.items.map((characteristic, i) => (
            <Characteristic key={i} title={characteristic.title} value={characteristic.value} />
          ))}
        </div>
      ))}
    </>
  );
}

export default CharacteristicsBlock;
