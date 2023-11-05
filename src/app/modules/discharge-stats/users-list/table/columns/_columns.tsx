// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {EnergyBill} from '../../core/_models'

const dataColumns: ReadonlyArray<Column<EnergyBill>> = [
 
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Parameter Name' className='min-w-125px text-bold' />,
    accessor: 'parameter',
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='New Reading' className='min-w-125px' />,
  //   accessor: 'newReading',
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Old Reading' className='min-w-125px' />
  //   ),
  //   accessor: 'oldReading',
    
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Consumption' className='min-w-125px' />
    ),
    accessor: 'consumption',
   
  } 
]

export {dataColumns}
