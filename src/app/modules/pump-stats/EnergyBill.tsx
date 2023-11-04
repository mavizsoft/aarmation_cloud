import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EnergyBillWrapper} from './users-list/BillList'

const usersBreadcrumbs: Array<PageLink> = [
  // {
  //   title: 'Pump Statistics',
  //   path: 'pump-stats',
  //   isSeparator: false,
  //   isActive: false,
  // },
  // {
  //   title: '',
  //   path: '',
  //   isSeparator: true,
  //   isActive: false,
  // },
]

const EnergyBillPage = () => {
  return (
    <>
    <PageTitle breadcrumbs={usersBreadcrumbs}>Pump Statistics</PageTitle>
    <EnergyBillWrapper />
  </>
    
  )
}

export default EnergyBillPage
