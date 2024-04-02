function Card({ status, titleText, quantity, children }) {
  return (
    <>
    
      <div className="card w-96 bg-base-100 shadow-xl bg-slate-200">
        <figure className="px-10 pt-10">
        <progress className="progress w-56" value="10" max="100" color="white"></progress>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">10% completed</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
