import axios, {AxiosResponse} from 'axios'
import {EnergyBill, EnergyBillQueryResponse} from './_models'

const API_URL = import.meta.env.VITE_API_URL
const GET_BILL_URL = `${API_URL}/iot/getDischarge`

const getBillData = (query: string): Promise<EnergyBillQueryResponse> => {
  return axios
    .get(`${GET_BILL_URL}?${query}`)
    .then((d: AxiosResponse<EnergyBillQueryResponse>) => d.data)
}



export {getBillData}
