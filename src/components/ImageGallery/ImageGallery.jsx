import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map((img) => (
        <li key={img.id}>
          <ImageCard data={img} onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;