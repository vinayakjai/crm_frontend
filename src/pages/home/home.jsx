//component imports--------
import Card from "../../components/Card";
import HomeLayout from "../../layouts/homeLayout";

//third party library imports--------
import { TbProgressBolt } from "react-icons/tb";
import { MdOutlineDoneAll, MdPending, MdCancel } from "react-icons/md";
import { BsFillPCircleFill } from "react-icons/bs";
import useTickets from "../../hooks/useTickets";
import { Pie, Line,Bar } from "react-chartjs-2";

//hooks import-------


import useCharts from "../../hooks/useChart";

function Home() {
  const [ticketState] = useTickets();

  const [pieChartData, lineChartData, barChartData] = useCharts();

  return (
    <HomeLayout>
      {ticketState && (
        <>
          <Card
            titleText="Open"
            status={
              ticketState.ticketDistribution.open /
              ticketState.ticketList.length
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
              ticketState.ticketDistribution.onHold /
              ticketState.ticketList.length
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
      )}
      <div className="mt-10 flex justify-center items-center gap-10">
        <div className="w-80 h-80 ">
          <Pie data={pieChartData} />
        </div>
      </div>
      <div className="mt-10 mb-10 flex justify-center items-center gap-10">
        <div className="w-[50rem] bg-[wheat]">
          <Line data={lineChartData} />
        </div>
      </div>
      <div className="mt-10 mb-10 flex justify-center items-center gap-10">
        <div className="w-[50rem] bg-[wheat]">
          <Bar data={barChartData} />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
