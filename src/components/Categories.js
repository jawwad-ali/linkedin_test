import CategoryNewsCard from "./CategoryNewsCard";

const Categories = ({
  articles,
  categories,
  selectedCategory,
  setSelectedCategory,
  setArticles,
}) => {
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Filter articles based on selected category
    const filteredArticles = articles.filter(
      (article) => article.category === category
    );
    setArticles(filteredArticles);
  };

  return (
    <div>
      <CategorySelector
        categories={categories}
        onSelectCategory={handleCategorySelect}
      />

      {selectedCategory.length > 0 ? <NewsList articles={articles} /> : null}
      {selectedCategory}
    </div>
  );
};

const NewsList = ({ articles }) => {
  return (
    <div className="container" key={Math.random() * 10}>
      <div className="row">
        {/* <div className="col-md-12"> */}
        {articles.length > 0 ? (
          articles?.map((article, index) => (
            <CategoryNewsCard
              name={article.name}
              description={article.description}
              link={article.url}
            />
          ))
        ) : (
          <h1>No Articles Available</h1>
        )}

        {/* </div> */}
      </div>
    </div>
  );
};

const CategorySelector = ({ categories, onSelectCategory }) => {
  return (
    <div>
      <div class="form-group">
        <label for="select-category">Select category</label>
        <select
          class="form-control"
          id="select-category"
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          {categories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Categories;
