import React, { useState } from 'react'

function Sample() {
    const [color,setColor] = useState({c1:'red',c2:'blue',c3:'green'})
    const [userDetails,setuserDetails] = useState([{username:"Jerry",age:24,designation:"Full Stack Developer"},
      {username: "Rincy",age:25,designation:"Nurse"},
      {username: "Soman",age:24,designation:"Cleaner"},
      {username:"Sasi",age:34,designation:"Clerk"}
    ])
  return (
    <div>
        <ul>
            <li>{color.c1}</li>
            <li>{color.c2}</li>
            <li>{color.c3}</li>
        </ul>
        <button className='btn-btn-info' onClick={()=>setColor({...color,c3:'violet'})}>Change State</button>
        {/* Table */}
        <table className='table caption-top rounded table-dark table-borderless mt-5 table-hover table-striped '>
          <caption>List of Users</caption>
          <thead className='text-primary bg-dark mb-1'><th>SI NO</th>
          <th>Name</th>
          <th>AGE</th>
          <th>Designation</th></thead>
          <tbody>
            {/* cannot use curly bracket for map function */}
           {userDetails.map((user,index)=>
              (<tr>
                <td>{index+1}</td>
                <td>{user.username}</td>
                <td>{user.age}</td>
                <td>{user.designation}</td>
              </tr>))
            }
          </tbody>
        </table>
    </div>
  )
}

export default Sample