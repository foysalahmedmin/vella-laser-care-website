import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("tran_id");
  console.log(query);
  return <div>home</div>;
};

export default Success;
