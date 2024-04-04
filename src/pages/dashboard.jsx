//components import-----

import useTickets from "../hooks/useTickets";
import HomeLayout from "../layouts/homeLayout";

function DashBoard() {
  //hooks declaration
  const [ticketState] = useTickets();
  console.log(ticketState);

  return (
    <>
      <HomeLayout>
        <div className="overflow-x-auto w-[80%] m-auto bg-slate-300">
          <table className="table relative">
          
              <tr>
              
                <th>ticket_id</th>
                <th>title</th>
                <th>status</th>
                <th>description</th>
                <th>createdby</th>
                <th>assginee</th>
                <th>assignedto</th>
              </tr>
        
            
              {ticketState.ticketList &&
                ticketState.ticketList.length != 0 &&
                ticketState.ticketList.map((ticket) => {
                  console.log(ticket);
                  return (
                    <>
                      
                        <tr>
                        <th>{ticket._id}</th>
                        <td>{ticket.title}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.createdBy}</td>
                        <td>{ticket.assignee}</td>
                        <td>{ticket.assignedTo}</td>
                        </tr>
                      
                    </>
                  );
                })}
              {ticketState.ticketList.length == 0 || !ticketState.ticketList
                ? "no tickets "
                : null}
        
          </table>
        </div>
      </HomeLayout>
    </>
  );
}

export default DashBoard;
