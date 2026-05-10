import axios from "axios";

export const GetBookings = async () => {
  const Response = await axios.get("/api/bookings");

  return Response.data;
};
