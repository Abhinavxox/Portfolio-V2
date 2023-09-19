const Card = (props) => {
  return (
    <div className="flex justify-center px-5">
      <div className="card lg:w-4/5 w-full bg-base-100 shadow-xl h-[50vh] lg:h-[60vh] my-5 hover:scale-105 transition-transform duration-30">
        <figure className="h-[35vh] lg:h-[40vh]">
          <img
            src={props.image}
            alt={props.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body h-[15vh] lg:h-[20vh] flex flex-col justify-center">
          <h2 className="card-title">{props.title}</h2>
          <p className="truncate ...">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
