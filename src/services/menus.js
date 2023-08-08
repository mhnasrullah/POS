import axios from "../lib/axios"

export const getAllMenu = () => {
  return axios.get('/menus')
}

