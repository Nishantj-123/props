// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const HookUseEffect = () => {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//   axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//         setUsers(response.data); 
//         console.log(response.data)
//       }).catch((err) => {
//         setError("Error fetching data!", err); 
//       });
//   }, []); 



//   return (
//     <div>
//           {users.map(user => (
//         <div key={user.id}>
//           <img src={user.avatar} alt={user.name} style={{ width: 50, height: 50, borderRadius: '50%' }} />
//           <h3>{user.name}</h3>
//           <p>{user.email}</p>
//           <p>{user.phone}</p>
//         </div>
//          ) )}

//     </div>
//   );
// };

// export default HookUseEffect;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HookUseEffect = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://randomuser.me/api')
      .then(response => {
        setUser(response.data.results[0]); 
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data', error);
      });
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Info</h1>
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} style={{ width: 150, borderRadius: '50%' }} />
      <h3>{user.name.first} {user.name.last}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};



export default HookUseEffect;


