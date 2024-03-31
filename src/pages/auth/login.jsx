function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="card w-96 bg-base-100 shadow-xl bg-slate-300">
          <div className="card-body">
            <h2 className="card-title ">Login</h2>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text ">Enter your username</span>
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
                  <span className="label-text ">Enter your password</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Submit</button>
            </div>
            <p >Not registered yet then please <a className="text-red-800"> Sign up</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
