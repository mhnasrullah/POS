import axios from "../lib/axios";

export const createPay = ({discount, items, nominal}) => axios.post('/order',{
  nominal_diskon : discount,
  items,
  nominal_pesanan : nominal
})