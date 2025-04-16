import css from "./ImageCard.module.css";

const ImageCard = ({ data, onClick }) => {
  return (
    <div className={css.card} onClick={onClick}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  );
};

export default ImageCard;