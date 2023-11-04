/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'
import {EnergyBill} from '../../core/_models'

type Props = {
  user: EnergyBill
}

const UserInfoCell: FC<Props> = ({user}) => (
  <div className='d-flex align-items-center'>
   
    <div className='d-flex flex-column'>
    
        {user.parameter}
     
     
    </div>
  </div>
)

export {UserInfoCell}
