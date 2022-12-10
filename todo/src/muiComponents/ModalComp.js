// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import InputComp from './InputComp';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [value,setValue] = React.useState("")
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const todoValue =()=>{
//     console.log(value)
//     setValue("")
//     setOpen(false)
//   }

//   return (
//     <div>
//       <Button onClick={handleOpen} variant="contained" size='large'>Add Todo</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//         <InputComp label='Enter New Todo...' onChange={(e)=>{setValue(e.target.value)}} value={value}/>
//         <Button onClick={todoValue} sx={{marginTop:"6px"}} size="large" variant='contained'>Add</Button> 
//         </Box>
//       </Modal>
//     </div>
//   );
// }