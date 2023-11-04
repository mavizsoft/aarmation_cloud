import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EnergyBillWrapper} from './users-list/BillList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Energy Bill',
    path: 'energy-bill/bill',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const EnergyBillPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='bill'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Energy Bill</PageTitle>
              <EnergyBillWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/energy-bill' />} />
    </Routes>
  )
}

export default EnergyBillPage
