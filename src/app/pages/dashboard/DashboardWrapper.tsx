/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useState } from 'react';
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {getIotLatestData} from './_requests'
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from '../../../_metronic/partials/widgets'

interface iotDataObject {
  tag: string;
  value: number;
}

let liveValue : number = 0

const DashboardPage: React.FC<{liveData: iotDataObject[], pumpLive:number}> = ({liveData, pumpLive} ) => (
  
  <>  
    {/* begin::Row */}
    <div className='row g-5 g-xl-8 mb-5 mb-xl-8'>
    <div className={`alert d-flex align-items-center p-5 mb-10 ${pumpLive ? 'alert-success' : 'alert-warning'} ` }>
   
  <span className={`svg-icon svg-icon-2hx svg-icon-success  me-3  svg-icon-${pumpLive ? 'success' : 'warning'}`}>
    <span className={`svg-icon svg-icon-2hx svg-icon-success  me-4  svg-icon-${pumpLive ? 'success' : 'warning'}`}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mh-50px text-success">
        <path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black"></path><path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black"></path>
    </svg>
    </span>
 </span>
  
  <div className="d-flex flex-column">
    <h5 className={`mb-1 text-${pumpLive ? 'success' : 'warning'}`}>{pumpLive ? `Pump ${ pumpLive } is running` : 'No pump running'}</h5>
    
  </div>
</div>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
      <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='kilovolt-ampere hour'
          title='KVAH'
          icon={false}
          stats={ (liveData.find((data ) => data.tag === "METER:KVAH" ))?.value }
          labelColor='dark'
          textColor='gray-300'
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='kilowatt hour'
          title='KWH'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:KWH" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
      <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description=' kilovolt amperes'
          title='KVA'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:KVA" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='VOLTAGE Line-to-line'
          title='VOLTAGE_LL'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:VOLTAGE_LL" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
      <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='VOLTAGE Line-to-neutral'
          title='VOLTAGE_LN'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:VOLTAGE_LN" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='CURRENT'
          title='CURRENT'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:CURRENT" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}    

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
      <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          
          description='Power factor'
          title='PF'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:PF" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
        <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='FREQUENCY'
          title='FREQUENCY'
          icon={false}
          stats={(liveData.find((data ) => data.tag === "METER:FREQUENCY" ))?.value}
          labelColor='dark'
          textColor='gray-300'
        />
      </div>
      {/* end::Col */}

    </div>
    {/* end::Row */}

   

    <div className='row g-5 gx-xxl-8'>
      
      
    </div>
  </>
)

const DashboardWrapper: FC = ( ) => {
  const intl = useIntl()
  const [liveData, setLiveData] = useState<iotDataObject[]>([])
  const [pumpLive, setPumpLive] = useState<number>(0)

  const getData = async () => {
      const resp = await getIotLatestData('iot/latest')      
      setLiveData(resp.body?.data)
      console.log(liveData)
      const pumpData = resp.body?.data.find((pump) => {
          return pump.tag.includes("PLC:PUMP") && pump.value === 1
      })
      const pumpNumber = pumpData && pumpData.tag === "PLC:PUMP_1_FB" ? 1 : pumpData && pumpData.tag === "PLC:PUMP_2_FB" ? 2 : 0
      setPumpLive(pumpNumber)
  }

  useEffect(()=>{

  },[liveData])
  useEffect(() => {
      getData();
      // get data after every 1 minute (60 seconds)
      const intervalCall = setInterval(() => {
          getData();
      }, 60000);

      return () => {
          // clean up
          clearInterval(intervalCall);
      };
  }, []);
  return (
    <>
      <PageTitle breadcrumbs={[]}>
        {/* {intl.formatMessage({id: 'MENU.DASHBOARD'})}  */}
        LIVE DATA</PageTitle>
      <DashboardPage 
      liveData={liveData}
      pumpLive={pumpLive}
      />
    </>
  )
}

export {DashboardWrapper}
