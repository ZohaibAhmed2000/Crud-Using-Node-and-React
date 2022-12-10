import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InputComp from '../muiComponents/InputComp';
import OutlinedCard from '../muiComponents/CardComp';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const Todo = () => {
  useEffect(() => {
    const getUser = async () => {
      const data = await axios.get("http://localhost:5000/api/gettodo");
      setTodos(data.data)
      console.log(data, "data");
    };
    getUser();
  });
  const [indexNumber, setIndexNumber] = useState();
  const [todos, setTodos] = useState([])

  const deleteTodo = () => {
  }
  const editTodo = () => {
    console.log(indexNumber)
  }
  return (
    <>
      <Grid sx={{ marginBottom: "25px" }} container direction="row"
        alignItems="flex-start"
        justifyContent="center">
        <Grid item xs={6} display='flex' sx={{ alignItems: "center", justifyContent: "center" }} >
          <Typography sx={{ mr: 2 }} variant='h6'>Have Task? Add Here</Typography>
          <BasicModal Setvalue={setTodos} value={todos} />
        </Grid>
      </Grid>
      <Grid container direction="row"
        alignItems="flex-start"
        spacing={4}
      >
        {todos.map((todo, index) => {
          return (
            <>
              <Grid item xs={3} key={index}>
                <OutlinedCard
                  text={todo.todo}
                  index={index}
                  editTodo={editTodo}
                  deleteTodo={deleteTodo}
                  value={todos}
                  setValue={setTodos}
                  indexNumber={indexNumber}
                  setIndex={setIndexNumber}
                  id={todo._id}
                />
              </Grid>
            </>

          )
        })}
      </Grid>


    </>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ Setvalue, value }) {
  const [valuetext, setValuetext] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const todoValue = () => {
    axios.post("http://localhost:5000/api/add",{data:{todo:valuetext}})
    .then(res => {
      console.log(res)
      setValuetext("")
      Setvalue([...value, valuetext])
    })
    .catch((err)=>console.log(err))
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" size='large'>Add Todo</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <InputComp label='Enter New Todo...' onChange={(e) => { setValuetext(e.target.value) }}  />
          <Button onClick={todoValue} sx={{ marginTop: "6px" }} size="large" variant='contained'>Add</Button>
        </Box>
      </Modal>
    </div>
  );
}

export { Todo };