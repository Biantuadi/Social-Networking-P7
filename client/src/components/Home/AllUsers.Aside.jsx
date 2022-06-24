import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const AllUsers = () => { 
    const usersData = useSelector((state) => state.usersReducer);


    return (
      <aside className="asideHome">
      <div className="divContainer">
        <h2>Utulisateurs</h2>
        <br />

        <ul className="eachUser">
          {usersData.map((user) => {
            return (
              <li className="user" key={user.id}>
                <img src={user.imageUrl} alt="" />
                <span className="name">{user.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
    );
};

export default AllUsers;