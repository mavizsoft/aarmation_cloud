import axios, {AxiosResponse} from 'axios'
import {EnergyBill, EnergyBillQueryResponse} from './_models'

const API_URL = import.meta.env.VITE_API_URL
const GET_BILL_URL = `${API_URL}/iot/getBill`

const getBillData = (query: string): Promise<EnergyBillQueryResponse> => {
  return axios
    .get(`${GET_BILL_URL}?${query+'&filter_billtype=bill'}`)
    .then((d: AxiosResponse<EnergyBillQueryResponse>) => d.data)
}



export {getBillData}
