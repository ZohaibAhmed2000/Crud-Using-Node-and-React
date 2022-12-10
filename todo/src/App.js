import './App.css';
import {Typography } from '@mui/material';
import {Todo} from './Components/Todo';
import { useEffect } from 'react';
import axios from 'axios';


function App() {

//   useEffect(()=>{
//    const getData =()=>{
//      let data =axios.get('http://localhost:5000/api/gettodo')
//      .then((res)=>console.log(res.data)).catch((err)=>console.log(err));
//      console.log(data.data)

//     }
// getData()
//   },[])

  return (
    <div className="App">
      <h1>Todo App with React and NodeJs</h1>
      <Todo/>
    </div>
  );
}

export default App;

