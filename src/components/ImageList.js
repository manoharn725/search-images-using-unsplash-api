import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ imagesList }) {
  const renderedImages = imagesList.map((img) => {
    return (
      <div key={img.id}>
        <ImageShow image={img} />
      </div>
    );
  });
  return <div className="image-list">{renderedImages}</div>;
}
export default ImageList;
