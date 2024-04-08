const NewsCard = ({ img, title, description, link, index }) => {
  return (
    <div className="col-md-4 mb-3" key={index}>
      <div className="card">
        <img
          // src="https://via.placeholder.com/150" 
          src={img}
          className="card-img-top"
          alt="Card image cap"
          style={{height:"250px" , width:"100%"}}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Read News
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
