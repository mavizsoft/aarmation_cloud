import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../_metronic/helpers'
import {IOTData, IOTDataResponse} from './_models'

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
