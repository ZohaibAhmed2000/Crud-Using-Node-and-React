import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicModal from '../Components/Todo';
import InputComp from './InputComp';
import axios from 'axios';

let today = new Date().toLocaleDateString()
console.log(today)

export default function OutlinedCard({ text,value,setValue,deleteTodo,index,editTodo,indexNumber,setIndex,id}){
  function deleteTodo (){
    axios.delete("http://localhost:5000/api/delete",{data: {id: id}})
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
    console.log("Delete")
    value.splice(index,1);
    setValue([...value])
  }
  function editTodo (){
    console.log("Edit")
    setIndex(index)
    console.log(indexNumber)
  }
 
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent sx={{ background: "#073b4c", color: "#fff" }}>
            <Typography variant='h5' color="text.black" gutterBottom>
              Task Details
            </Typography>
            <Typography variant="p" component="div">
              Created On {today}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.white">
              Description
            </Typography>
            <Typography variant="body2">
              {text}
            </Typography>
          </CardContent>

          <Box sx={{ backgroundColor: "#457b9d", justifyContent: "space-between" }} display="flex">
            <Box sx={{ alignItems: "center", color: 'black', fontWeight: "600" }} display="flex">
              Edit<EditIcon onClick={editTodo} color="action" sx={{ marginLeft: '5px', color: "black" }} /></Box>
            <Box sx={{ alignItems: "center", color: 'black', fontWeight: "600" }} display="flex">
              Delete<DeleteIcon onClick={deleteTodo} color="action" sx={{ marginLeft: '5px', color: "black" }} /></Box>
          </Box>

        </React.Fragment>
      </Card>
    </Box>
  );
}