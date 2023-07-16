const Card = (props) => {
  return (
    <div className="flex justify-center px-5">
      <div className="card xl:w-4/5 w-full bg-base-100 shadow-xl h-[50vh] xl:h-[60vh] my-5 hover:scale-105 transition-transform duration-30">
        <figure>
          <img src={props.image} alt={props.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="truncate ...">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
