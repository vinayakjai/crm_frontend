//hooks import-----------
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//component imports--------
import Card from "../../components/Card";
import HomeLayout from "../../layouts/homeLayout";

//action import------
import { getAllTickets } from "../../Redux/slices/ticketSlice";

//third party library imports--------
import {TbProgressBolt} from "react-icons/tb";
import {MdOutlineDoneAll,MdPending,MdCancel} from "react-icons/md";
import {BsFillPCircleFill} from "react-icons/bs";



function Home() {
  //hooks declaration-------------
  const dispatch = useDispatch();
  const navigate=useNavigate()

  //accessing state from store
  const authState = useSelector((state) => state.auth);
  const ticketState = useSelector((state) => state.ticket);


  //defining functions here-------
  async function loadAllTickets() {
    const response = await dispatch(getAllTickets());
    console.log(response)
   
  }
  /*
  
  */
   
  //useEffect ----------
  useEffect(() => {
    
    loadAllTickets();
  }, [authState.token]);
  return (
    <HomeLayout>
      <Card
      
      titleText="Open"
      status={
        ticketState.ticketDistribution.open / ticketState.ticketList.length
      }
      statusIcon={<BsFillPCircleFill />}
      
    />
    <Card
    
      titleText="In Progress"
      status={
        ticketState.ticketDistribution.inProgress /
        ticketState.ticketList.length
      }
      statusIcon={<TbProgressBolt />}
      
    />
    <Card 
      titleText="Resolved"
      status={
        ticketState.ticketDistribution.resolved /
        ticketState.ticketList.length
      }
      statusIcon={<MdOutlineDoneAll />}
    />
    <Card
      titleText="On Hold"
      status={
        ticketState.ticketDistribution.onHold / ticketState.ticketList.length
      }
      statusIcon={<MdPending />}
    />
    <Card
      titleText="Cancelled"
      status={
        ticketState.ticketDistribution.cancelled /
        ticketState.ticketList.length
      }
      statusIcon={<MdCancel />}
    />
    </HomeLayout>
  );
}

export default Home;
