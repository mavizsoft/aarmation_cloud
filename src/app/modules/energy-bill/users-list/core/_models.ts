import {ID, Response} from '../../../../../_metronic/helpers'
export type EnergyBill = {

  parameter?: string
  newReading?: string
  oldReading?: string
  consumption?: string
 
 
}

export type EnergyBillQueryResponse = Response<Array<EnergyBill>>

export const initialUser: EnergyBill = {

  parameter: '',
  newReading: '',
  oldReading: '',
  consumption: ''
  
 
}
