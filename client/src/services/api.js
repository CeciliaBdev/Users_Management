import axios from 'axios'

const URL = 'http://localhost:3001'

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data)
  } catch (error) {
    console.log('error while calling add user Api', error)
  }
}

export const getUsers = async (id) => {
  id = id || '';
  return await axios.get(`${URL}/${id}`);
}
// export const getOneUser = async (id) => {
//   try {
//     return await axios.get(`${URL}/${id}`)
//   } catch (error) {
//     console.log('error while calling get one user Api', error)
//   }
// }

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/${id}`, user)
  } catch (error) {
    console.log('error while calling update user Api', error)
  }
}

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log('error while calling delete user Api', error)
  }
}
