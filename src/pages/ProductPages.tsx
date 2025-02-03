import { useParams } from 'react-router';

function ProductPages() {
  const { productID, category } = useParams();
  return (
    <h1>
      {category} ProductPages {productID}
    </h1>
  );
}

export default ProductPages;
