import React from "react";
import Link from "next/link";

const Buttonlink = ({ id }) => {
  return <Link className='bg-red-500 max-w-{120px} border-2 border-blue-700 border-solid py-2 px-3 rounded-3xl hover:bg-red-300' href={`/show/${id}`}> View Show </Link>;
};

export default Buttonlink;
