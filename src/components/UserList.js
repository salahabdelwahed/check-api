// Import necessary
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = () => {
  // Define state variable to store list of users
  const [listOfUsers, setListOfUsers] = useState([]);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Update state with fetched data
      setListOfUsers(response.data);
    };
    // Call fetchData function
    fetchData();
   
  }, []);
  // Render list of users
  return (
    <div>
      <h2>List of Users</h2>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
