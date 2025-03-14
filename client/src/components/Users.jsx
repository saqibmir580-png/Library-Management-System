import React from "react";
import { useSelector } from "react-redux";
import Header from "../layout/Header";
const Users = () => {
  const { user } = useSelector((state) => state.user);

  const formDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const formatedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getFullYear())}`;
    const formatTime = `${String(date.getHours()).padStart(2, "0")}:${String(
      date.getMinutes()
    ).padStart(2, "0")}:${String(date.getSeconds())}`;
    const result = `${formDate} ${formatTime}`;
    return result;
  };
  return (
    <>
      <main className="relative flex-1 p-6 pt-28">
        <Header />
        <header>
          <h2></h2>
        </header>
      </main>
    </>
  );
};

export default Users;
