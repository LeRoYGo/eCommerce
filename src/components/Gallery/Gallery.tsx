import { useState, useRef } from 'react';
import style from './Gallery.module.css';
// import { useAppSelector } from '../../redux/store';

const listImg: string[] = [
  `https://surl.li/bdppre`,
  `https://surl.li/xhdeal`,
  `https://surl.li/swrhdy`,
  `https://surl.li/daqmjc`,
  `https://surl.li/bdppre`,
  `https://surl.li/xhdeal`,
  `https://surl.li/swrhdy`,
  `https://surl.li/daqmjc`,
];

type fwef = '-' | '+';

function Gallery() {
  // const categories = useAppSelector((state) => state.product);
  const myRef = useRef<any>();
  const [activePhoto, setActivePhoto] = useState(listImg[0]);
  const changingActivePhoto = (url: string) => {
    setActivePhoto(url);
  };
  const handleClick = (symbol: fwef) => {
    const top = Number.parseInt(myRef.current.style.top.replace('px')) || 0;
    switch (symbol) {
      case '+':
        myRef.current.style.top = top - 100 + 'px';
        break;
      case '-':
        myRef.current.style.top = top + 100 + 'px';
        break;
    }
  };

  return (
    <div className={style.gallery}>
      <img className={style.activePhoto} src={activePhoto} />
      <div className={style.listImg}>
        <svg
          className={style.up}
          onClick={() => handleClick('-')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none">
          <path
            d="M419.5 337.5L256.5 174.5L93.5 337.5"
            stroke="black"
            strokeWidth="24"
            strokeLinecap="round"
          />
        </svg>
        <ul ref={myRef}>
          {listImg.map((url, i) => (
            <li key={i}>
              <img
                className={url === activePhoto ? style.active : ''}
                onClick={() => changingActivePhoto(url)}
                src={url}
                alt=""
              />
            </li>
          ))}
        </ul>
        <svg
          className={style.down}
          onClick={() => handleClick('+')}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="none">
          <path
            d="M419.5 337.5L256.5 174.5L93.5 337.5"
            stroke="black"
            strokeWidth="24"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Gallery;
