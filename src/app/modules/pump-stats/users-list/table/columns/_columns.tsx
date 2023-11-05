// @ts-nocheck
import {Column} from 'react-table'
import {UserCustomHeader} from './UserCustomHeader'
import {EnergyBill} from '../../core/_models'

const dataColumns: ReadonlyArray<Column<EnergyBill>> = [
 
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Parameter Name' className='min-w-125px text-bold' />,
    accessor: 'parameter',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='New Reading' className='min-w-125px' />,
    accessor: 'newReading',
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Old Reading' className='min-w-125px' />
    ),
    accessor: 'oldReading',
    
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Consumption' className='min-w-125px' />
    ),
    accessor: 'consumption',
   
  } 
]

export {dataColumns}
