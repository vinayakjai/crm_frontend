

//component imports--------
import Card from "../../components/Card";
import HomeLayout from "../../layouts/homeLayout";



//third party library imports--------
import {TbProgressBolt} from "react-icons/tb";
import {MdOutlineDoneAll,MdPending,MdCancel} from "react-icons/md";
import {BsFillPCircleFill} from "react-icons/bs";
import useTickets from "../../hooks/useTickets";



function Home() {
   const [ticketState]=useTickets();
  return (
    <HomeLayout>
      {
        ticketState && (
          <>
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
          </>
        )
      }
    </HomeLayout>
  );
}

export default Home;
