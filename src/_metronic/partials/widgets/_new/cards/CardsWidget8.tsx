/* eslint-disable jsx-a11y/anchor-is-valid */

type Props = {
  className: string
  title: string
  description: string
  icon: boolean
  division: string
  labelColor: string
  textColor: string
}


const CardsWidget8 = ({className, title,  description, icon, division, labelColor, textColor}: Props) => (
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-5'>
      <div className='card-title d-flex flex-column'>
        <div className='card-title d-flex flex-column'>
          <span className={`fs-3hx fw-bold  me-2 lh-1 ls-n2   ${labelColor ? labelColor : 'text-dark'}`} >{title}</span>
          <span className={`fs-3hx fw-bold  me-2 lh-1 ls-n2 mt-3   ${labelColor ? labelColor : 'text-dark'}`}>{description}</span>
        </div>
      </div>
    </div>
    <div className='card-body d-flex flex-column justify-content-end pe-0'>
      <span className={`fs-2hx fw-bold  me-2 lh-1 ls-n2 mt-3   ${labelColor ? labelColor : 'text-dark'}`}>{division}</span>
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
    </div>
  </div>
)
export {CardsWidget8}
