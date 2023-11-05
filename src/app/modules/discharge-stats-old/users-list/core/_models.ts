import {ID, Response} from '../../../../../_metronic/helpers'
export type EnergyBill = {

  parameter?: string
  consumption?: string
 
 
}

export type EnergyBillQueryResponse = Response<Array<EnergyBill>>

export const initialUser: EnergyBill = {

  parameter: '',
  consumption: ''
  
 
}
