import {useEffect, useState} from 'react'
import {MenuComponent} from '../../../../../../_metronic/assets/ts/components'
import {initialQueryState, KTIcon} from '../../../../../../_metronic/helpers'
import {useQueryRequest} from '../../core/QueryRequestProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import moment from 'moment'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Filter = () => {
  const {updateState} = useQueryRequest()
  const {isLoading} = useQueryResponse()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate()-1)));
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(()=>{
    const startdate = moment(startDate).format('YYYY-MM-DD')
    const enddate = moment(endDate).format('YYYY-MM-DD')
    updateState({
      filter: {startdate, enddate},
      ...initialQueryState,
    })
  },[onChange])

  return (
    <>
   
    <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date("2023-09-07")}
        maxDate={new Date(new Date().setDate(new Date().getDate()-1))}
        className="form form-control"
      />
     <div style={{width: '30px'}}>&nbsp;</div>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={new Date("2023-09-07")}
        maxDate={new Date()}
        className="form ml-5 form-control"
      />
     
    </>
  )
}

export {Filter}
