import React from 'react'
import { Link, Outlet } from "react-router-dom";
import getRooms from "../data";

const Rooms = () => {
  
  let allRooms = getRooms();


  return (
    <>
    <div>Rooms</div>
    <nav
    style={{
      borderRight: "solid 1px",
      padding: "1rem",
    }}
  >
    {allRooms.map((room) => (
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`/rooms/${room.sys.id}`}
        key={room.sys.id}
      >
        {room.fields.name}
      </Link>
    ))}
  </nav>
    </>
  )
}

export default Rooms