import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  filterTickets, getAllTickets } from "../Redux/slices/ticketSlice";
import { useSearchParams } from "react-router-dom";

function useTickets() {
  const authState = useSelector((state) => state.auth);
  const ticketState = useSelector((state) => state.ticket);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  //defining functions here-------
  async function loadAllTickets() {
    if (ticketState.downloadedTickets.length == 0) {
      const response = await dispatch(getAllTickets());
      if (!response.payload.data) {
        return alert("unable to fetch tickets");
      }
    }
    let status = searchParams.get("status");


    if (status) {
      //dispatch filter for status
      
      dispatch( filterTickets({ status }));
    }
  }
  /*
    
    */

  //useEffect ----------
  useEffect(() => {
    loadAllTickets();
  }, [authState.token,searchParams.get("status")]);
  return [ticketState];
}

export default useTickets;
