//components import-----

import useTickets from "../hooks/useTickets";
import HomeLayout from "../layouts/homeLayout";





function DashBoard(){
    //hooks declaration
    const [ticketState]=useTickets();


 

    return (
        <>
        <HomeLayout ></HomeLayout>
        </>
    )
}

export default DashBoard;
