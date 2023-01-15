import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../services/api'

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
 
  & > div {
    margin-top: 20px;
  }
`
const defaultValue = {
  name: '',
  username: '',
  email: '',
  phone: '',
}

const AddUser = () => {
  const [user, setUser] = useState(defaultValue)
  const navigate = useNavigate()

  const onValueChange = (event) => {
    // console.log(event.target.name, event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  //user = data (dans services/api)
  //asynchrone
  const addUserDetails = async () => {
    await addUser(user)
    // console.log(user)
    navigate('/all')
  }

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add user
        </Button>
      </FormControl>
    </Container>
  )
}

export default AddUser
