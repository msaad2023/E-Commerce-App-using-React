function Categories({ categories }) {
    return (
      <div className="btn-group" role="group" aria-label="Basic example">
        {categories.map((cat) => (
          <button key={cat._id} type="button" className="btn btn-primary">
            {cat.name}
          </button>
        ))}
      </div>
    );
  }
  
  export default Categories;