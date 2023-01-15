import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, deleteUser } from '../services/api'

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 20px;
`
const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #84dcc6;
    color: #ffffff;
  }
`
const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`
const EditButton = styled(Button)`
background: #aa7fd6;
`
const DelButton = styled(Button)`
background: #ffa69e;
`


const AllUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    let response = await getUsers()
    setUsers(response.data.users)
    // console.log('All users', response.data.users)
  }

  const deleteOneUser = async (id) => { 
    // je supprime l'utilisateur dans la bd
    // let response = await deleteUser(id)
    await deleteUser(id)
    // console.log('user deleted', response)
    //je reactualise l'affichage des users
    getAllUsers()
  }

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <EditButton
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Edit
              </EditButton>

              <DelButton color="secondary" variant="contained" onClick={() => deleteOneUser(user._id)}>
                Delete
              </DelButton>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}
export default AllUsers
