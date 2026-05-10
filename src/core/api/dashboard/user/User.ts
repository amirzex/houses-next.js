import axios from "axios";

export const GetUser = async (id) => {
  const Response = await axios.get(`/api/user${id}`);

  return Response.data;
};
