
import './table.css'
function Table({ data, columns }) {

    const project = "My Project";
    const projectStatus = "In Progress";
    const date = new Date().toLocaleDateString();
    const actions = ["edit", "view", "delete"];
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
       <tr>
        <td>{project}</td>
        <td>{projectStatus}</td>
        <td>{date}</td>
        <td>{actions}</td>

       </tr>
      </tbody>
    </table>
  );
}
export default Table;