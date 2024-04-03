import { useEffect } from "react";
import Card from "../../components/Card";
import HomeLayout from "../../layouts/homeLayout";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../../Redux/slices/ticketSlice";

function Home() {

  //hooks declaration-------------
  const dispatch=useDispatch();

  //accessing state from store
  const authState=useSelector((state)=>state.auth);
  const ticketState=useSelector((state)=>state.ticketState);

  //defining functions here-------
  async function loadAllTickets(){
   const response=await dispatch(getAllTickets());
   if(response.payload.data){
     
   }
  }
 

  //useEffect ----------
  useEffect(()=>{
     loadAllTickets();
  },[authState.token]);
  return (
    <HomeLayout>
      <Card />
    </HomeLayout>
  );
}

export default Home;
