const CategoryNewsCard = ({ name, description, link, index }) => {
    return (
      <div className="col-md-4 mb-3" key={index}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <a href={link} className="btn btn-primary">
              Read News
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryNewsCard;
  