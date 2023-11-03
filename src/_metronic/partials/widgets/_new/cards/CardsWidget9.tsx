/* eslint-disable jsx-a11y/anchor-is-valid */

type Props = {
  className: string
  siteName: string
  load: string
  demand: string

}


const CardsWidget9 = ({className, siteName,  load, demand}: Props) => (
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-5'>
      <div className='card-title d-flex flex-column'>
        <div className='card-title d-flex flex-column'>
          <span className='text-dark-400 fs-2hx pt-1 fw-bold fs-6 mt-3'>{siteName}</span>
          <span className='text-dark-400 fs-2hx pt-1 fw-bold fs-6 mt-3'>{load}</span>
          <span className='text-dark-400 fs-2hx pt-1 fw-bold fs-6 mt-3'>{demand}</span>
        </div>
      </div>
    </div>
    {/* <div className='card-body d-flex flex-column justify-content-end pe-0'>
      <span className='text-dark-400 fs-2hx pt-1 fw-bold fs-6'>{demand}</span>
      {/* <div className='symbol-group symbol-hover flex-nowrap'>
        {items.map((item, index) => (
          <div
            className='symbol symbol-35px symbol-circle'
            data-bs-toggle='tooltip'
            title={item.name}
            key={`cw7-item-${index}`}
          >
            {item.src && <img alt='Pic' src={item.src} />}
            {item.state && item.initials && (
              <span
                className={clsx(
                  'symbol-label fw-bold',
                  'bg-' + item.state,
                  'text-inverse-' + item.state
                )}
              >
                {item.initials}
              </span>
            )}
          </div>
        ))}

        <a href='#' className='symbol symbol-35px symbol-circle'>
          <span
            className={clsx('symbol-label fs-8 fw-bold', 'bg-' + labelColor, 'text-' + textColor)}
          >
            +42
          </span>
        </a>
      </div> */}
    {/* </div> */} 
  </div>
)
export {CardsWidget9}
