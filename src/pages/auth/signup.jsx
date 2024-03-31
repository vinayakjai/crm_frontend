function Signup() {
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="card w-96 bg-base-100 shadow-xl bg-slate-300">
          <div className="card-body">
            <h2 className="card-title ">Signup</h2>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter your username</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter your email</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter your password</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                User Type
              </option>
              <option>Customer</option>
              <option>Engineer</option>
            </select>
            <div className="label"></div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p>
              Already registered then please
              <a className="text-red-800"> login</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
