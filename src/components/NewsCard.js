import { BlurImage } from "./BlurImage";

const NewsCard = ({ img, title, description, link, index }) => {
  return (
    <div className="col-md-4 mb-3" key={index}>
      <div className="card h-100">
        <BlurImage // Blur image when the original Image is Loading.
          img={
            <img // Original Image
              src={img}
              className="card-img-top"
              alt="Card image cap"
              style={{ height: "250px", width: "100%" }}
            />
          }
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a href={link} className="btn btn-primary">
            Read News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
