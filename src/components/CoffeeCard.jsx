const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between items-center w-full pr-4">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>

        <div className="card-actions justify-end py-4">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn bg-[#D2B48C]">View</button>
            <button className="btn">Edit</button>
            <button className="btn bg-[#EA4744]">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
