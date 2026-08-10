const Card = ({image, title, description, category, callToAction}) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        className="card-image"
      />

      <div className="card-content">
        <span className="card-category">{category}</span>

        <h3>{title}</h3>

        <p>
          {description}
        </p>

        <a href={callToAction} className="card-btn">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Card;