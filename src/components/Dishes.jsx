const Dishes = ({ title, price, image }) => {
  return (
    <>
      <div className="mexicanDish">
        <h1>{title}</h1>

        <span>{price}</span>
        <img src={image} alt={title} />
      </div>
    </>
  );
};

export default Dishes;
