import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

export default function FeatureBlock() {
  const { images, loading } = useContext(ImageContext);
  const path = 'http://localhost:1337';

  if (loading === true) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className="feature-block">
      <div className='feature-image'>
        <img src={`${path}${images[5].attributes.image.data.attributes.formats.small.url}`} />
      </div>
      <div className="feature-details">
        <h4>Show off your collection</h4>
        <p>Show off your collection or buy some online!</p>
      </div>
    </div>
  );
}
