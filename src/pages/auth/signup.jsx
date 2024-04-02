import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../Redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Signup() {
  //decalring all hooks here
  const dispatch = useDispatch();
  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    email: "",
    userType: "",
    password: "",
    clientName:"",
  });
  const navigate = useNavigate();

  //defining custom functions here
  async function onSubmit() {
    if (
      !signupDetails.name ||
      !signupDetails.password ||
      !signupDetails.email ||
      !signupDetails.userType ||
      !signupDetails.clientName
    ) {
      alert("plz enter all details");
      return;
    }

    const response = await dispatch(signup(signupDetails));
    if (response.payload.data) {
    
      navigate("/login");
      
    } else {
      alert(response.payload.response.data);
      setSignUpDetails({
        ...signupDetails,
        email: "",
        password: "",
        name: "",
        userType: "",
        clientName:"",
      });
    }
  }

  function onHandleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setSignUpDetails({
      ...signupDetails,
      [name]: value,
    });
  }

  function redirect() {
    navigate("/login");
  }
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
                  value={signupDetails.name}
                  name="name"
                  onChange={onHandleChange}
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
                  name="email"
                  className="input input-bordered w-full max-w-xs"
                  value={signupDetails.email}
                  onChange={onHandleChange}
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
                  name="password"
                  value={signupDetails.password}
                  onChange={onHandleChange}
                  className="input input-bordered w-full max-w-xs"
                />
                <div className="label"></div>
              </label>
            </div>

            <select
              className="select select-bordered w-full max-w-xs"
              id="drop"
              onChange={onHandleChange}
              name="userType"
            >
              <option disabled selected>
                User Type
              </option>
              <option>Customer</option>
              <option>Engineer</option>
              <option>Admin</option>
            </select>
            <div className="label"></div>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Enter clientName</span>
                </div>
                <input
                  type="password"
                  placeholder="Type here"
                  name="clientName"
                  value={signupDetails.clientName}
                  onChange={onHandleChange}
                  className="input input-bordered w-full max-w-xs"
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
              Already registered then please
              <a className="text-red-800" onClick={redirect}>
                login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
