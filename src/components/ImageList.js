import ImageShow from "./ImageShow";
import "./ImageList.scss";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return (
      <div key={Math.random()}>
        <ImageShow image={image} />
      </div>
    );
  });
  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;
