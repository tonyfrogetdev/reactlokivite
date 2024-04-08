const Dishes = ({ title, description, price, image, slug }) => {
  return (
    <>
      <main>
        <div className="mexicanDish">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>{price}</span>
          <img src={image} alt={title} />
          <span>{slug}</span>
        </div>
      </main>
    </>
  );
};

export default Dishes;
