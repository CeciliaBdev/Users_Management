import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { getUsers, editUser } from '../services/api'

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

const EditUser = () => {
  const [user, setUser] = useState(defaultValue)
  // const { name, username, email, phone } = user;
  const navigate = useNavigate()
  const { id } = useParams()


  useEffect(() => {
    loadUserDetails()
    // eslint-disable-next-line
  }, [])

  const loadUserDetails = async () => {
    const response = await getUsers(id)
    console.log('response load', response)
    // console.log(response.data.users)
    setUser(response.data.users)
  }

//user = data (dans services/api)
  //asynchrone
  const editUserDetails = async () => {
    // const response =  await editUser(id, user)
    await editUser(id, user)
    // console.log('response edit', response)
    // console.log('edit user', user)
    navigate('/all')
  }

  const onValueChange = (event) => {
    // console.log(event.target.name, event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={user.name}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username" value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  )
}

export default EditUser
