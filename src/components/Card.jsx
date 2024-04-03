function Card({ status, titleText, quantity, statusIcon }) {
  return (
    <>
    
      <div className="card w-96 bg-base-100 shadow-xl bg-slate-200 m-10">
        <figure className="px-10 pt-10">
        <progress className="progress w-56" value={Math.trunc(status*100)} max="100" color="white"></progress>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{Math.trunc(status*100)}% completed</h2>
          <p>{titleText}</p>
          <div className="card-actions">
            <button className="btn btn-primary">{statusIcon}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
