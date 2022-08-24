import { useContext } from 'react';
import { ImageContext } from '../context/ImageContext';

export default function GalleryBlock() {
  const { images, loading } = useContext(ImageContext);
  const path = 'http://localhost:1337';
  const GalleryImages = images.slice(0,4)
  
  
  if (loading === true) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <hr/>
      <h4 className="gallery-header">More Ways To Find the Perfect Plant</h4>
      <div className="gallery-container">
        {GalleryImages.map((image, index) => (
          <img src={`${path}${image.attributes.image.data.attributes.formats.small.url}`} 
          className="gallery-image"
          key={index}/>
        ))}
      </div>
      <hr />
    </div>
  );
}
