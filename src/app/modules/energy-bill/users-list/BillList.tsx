import {ListViewProvider, useListView} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {UsersListHeader} from './components/header/UsersListHeader'
import {EnergyBillTable} from './table/EnergyBillTable'
import {KTCard} from '../../../../_metronic/helpers'
import {
  CardsWidget8,
  CardsWidget9,

} from '../../../../_metronic/partials/widgets'

const BillList = () => {
  const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <UsersListHeader />
        <EnergyBillTable />
      </KTCard>     
    </>
  )
}

const EnergyBillWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <div className='row'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-6 mb-xl-10'>
        <CardsWidget8
        className={'h-md-100 mb-10 mb-xl-10 bg-primary'}
        title={'ENERGY BILL MONITORING '}
        description={'JAL SHAKTI VIBHAG'} 
        icon={true}
        division={'DIVISON : THURAL' }
        labelColor='text-white'
        textColor='white'/>
          </div>
          <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-6 mb-xl-10'>
          <CardsWidget9
        className={'h-md-100 mb-10 mb-xl-10 bg-success text-light'}
        siteName={'SITE NAME : LWSS PAPLAH'}
        load={'SANCTIONED LOAD : 42 KW'} 
        demand={'CONTRACT DEMAND : 50 KVA'}
/>
          </div>
          </div>
        <BillList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {EnergyBillWrapper}
