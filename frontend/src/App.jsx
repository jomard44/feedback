import Nav from './components/Nav.jsx';
import Table from './components/Table.jsx';
import CreateForm from './components/createForm.jsx';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
    <Router>
    <Nav />
    
      <Routes>
      
        <Route path="/" element={<Table />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
