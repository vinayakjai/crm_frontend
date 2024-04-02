import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/slices/authSlice";
import { useEffect } from "react";

function HomeLayout({ children }) {
  //hooks declaration-----
  const authState = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  //defining custom functions
  function onLogout(){
    if(authState.isLoggedIn){
          dispatch(logout())
    }
  }


  //useEffect------
   useEffect(()=>{
      if(!authState.isLoggedIn){
         navigate('/login');
      }
   },[])
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button mx-5 my-5"
          >
            <GiHamburgerMenu className="text-3xl" />
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-red-100">
            <li>
              <a>View All tickets</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>

            {!authState.isLoggedIn ? (
              <>
                <li>
                <Link to='/login'> <a>Login</a></Link>
                </li>
                <li>
                <Link to='/signup'> <a>Sign up</a></Link>
                </li>
              </>
            ) : (
              <>
                <li>
                <Link to='/login'> <a onClick={onLogout}>Logout</a></Link>
                </li>
                <li>
                <Link to='/profile'> <a>Profile</a></Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}

export default HomeLayout;
