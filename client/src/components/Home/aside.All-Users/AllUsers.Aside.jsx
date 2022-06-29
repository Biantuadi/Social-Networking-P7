import React from "react";
import { useSelector } from "react-redux";

const AllUsers = () => {
  const usersData = useSelector((state) => state.usersReducer);
  const [isAdmin , setIsAdmin] = React.useState(false);

  const allusers = usersData.map((user) => {
    return (
      <li className="user" key={user._id}>
        <img src={user.avatar} alt="" key={user.name} />
        <span className="name" key={user.avatar}>
          {user.name} {user.role === 'admin' ? <i className="fas fa-star"></i> : null}
        </span>
      </li>
    );
  });

  return (
    <aside className="asideHome">
      <div className="divContainer">
        <h2>Utulisateurs</h2>
        <br />

        <ul className="eachUser">{allusers}</ul>
      </div>
    </aside>
  );
};

export default AllUsers;
