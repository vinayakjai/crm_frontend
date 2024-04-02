//libraries import
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//slice imports
import { login } from "../../Redux/slices/authSlice";

function Login() {
  //declaring all hooks here
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [loginDetails, setLoginDetails] = useState({
    email: undefined,
    password: undefined,
  });

  //defining all functions here
  async function onSubmit() {
    console.log(loginDetails);
    if (!loginDetails.email || !loginDetails.password) {
      alert("please enter all details");
      return;
    }
    const response = await dispatch(login(loginDetails));

    if (response.payload.data) {
      navigate("/");
    } else {
      alert(response.payload.response.data);
      setLoginDetails({ ...loginDetails, email: "", password: "" });
    }
  }
  return (
    <>
      <div className="flex justify-center items-center h-[90vh]">
        <div className="card w-96 bg-base-100 shadow-xl bg-slate-300">
          <div className="card-body">
            <h2 className="card-title ">Login</h2>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text ">Enter your email</span>
                </div>
                <input
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  value={loginDetails.username}
                  onChange={(e) =>
                    setLoginDetails({ ...loginDetails, email: e.target.value })
                  }
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
                  value={loginDetails.password}
                  onChange={(e) =>
                    setLoginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    })
                  }
                />
                <div className="label"></div>
              </label>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={onSubmit}>
                Submit
              </button>
            </div>
            <p>
              Not registered yet then please{" "}
              <a className="text-red-800"> Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
