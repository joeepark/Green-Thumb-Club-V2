import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

export default function GalleryBlock() {
  const { images, loading } = useContext(ImageContext);

  console.log(images);

  if (loading === true) {
    return <h2>Loading....</h2>
  }
  return (
    <div>
      <h4>More Ways To Find the Perfect Plant</h4>
      <div className="container"></div>
    </div>
  );
}
