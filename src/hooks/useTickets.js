import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTickets } from "../Redux/slices/ticketSlice";

function useTickets(){
    const authState = useSelector((state) => state.auth);
    const ticketState = useSelector((state) => state.ticket);
    const dispatch=useDispatch();
  
  
    //defining functions here-------
    async function loadAllTickets() {
      const response = await dispatch(getAllTickets());
      if(!response.payload.data){
        return alert('unable to fetch tickets');
      }
     
    }
    /*
    
    */
     
    //useEffect ----------
    useEffect(() => {
      
      loadAllTickets();
    }, [authState.token]);
    return [ticketState]
}

export default useTickets;