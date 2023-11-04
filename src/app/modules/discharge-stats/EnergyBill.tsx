import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EnergyBillWrapper} from './users-list/BillList'

const usersBreadcrumbs: Array<PageLink> = [
  // {
  //   title: 'Energy Bill',
  //   path: 'energy-bill/bill',
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
    <PageTitle breadcrumbs={usersBreadcrumbs}>Discharge Statistics</PageTitle>
    <EnergyBillWrapper />
  </>
  )
}

export default EnergyBillPage
