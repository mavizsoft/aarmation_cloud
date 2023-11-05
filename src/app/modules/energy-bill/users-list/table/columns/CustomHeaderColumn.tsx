// @ts-nocheck
import {FC} from 'react'
import {ColumnInstance} from 'react-table'
import {User} from '../../core/_models'

type Props = {
  column: ColumnInstance<User>
}

const CustomHeaderColumn: FC<Props> = ({column}) => (
  <>
    {column.Header && typeof column.Header === 'string' ? (
      <th className='bg-info' {...column.getHeaderProps()}>{column.render('Header')}</th>
    ) : (
      column.render('Header')
    )}
  </>
)

export {CustomHeaderColumn}
