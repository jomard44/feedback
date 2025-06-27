import { useEffect, useState } from "react";
import "./table.css";
function Table() {
 

  const [data, setData] = useState([]);

  fetch("http://localhost:3000/feedbacks")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  return (
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Status</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.status}</td>
              <td>{new Date(item.createdAt).toLocaleString()}</td>
              <td>
                <button className="edit">Edit</button>
                <button className="view">View</button>
                <button className="delete">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
