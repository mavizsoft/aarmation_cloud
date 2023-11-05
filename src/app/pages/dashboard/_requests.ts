import axios, {AxiosResponse} from 'axios'
import {ID} from '../../../_metronic/helpers'

const API_URL = import.meta.env.VITE_API_URL
interface Response {
  body: any;
}

const getIotLatestData = (url: string): Promise<Response> => {
  return axios
    .post(`${API_URL}/${url}`)
    .then((d: AxiosResponse<Response>) => d.data)
}



export {getIotLatestData}
