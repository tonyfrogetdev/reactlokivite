const Plats = ({ title, description, price, image, slug }) => {
  return (
    <>
      <div className="mexicanDish">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{price}</span>
        <img src={image} alt={title} />
        <span>{slug}</span>
      </div>
    </>
  );
};

export default Plats;
