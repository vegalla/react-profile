import styles from './Tooltip.module.css';

import { useState, useRef } from 'react'
import TooltipContent from './TooltipContent'

const Tooltip = ({
  children: tooltipTarget,
  tooltipContent,
}) => {
  const targetRef = useRef(null)
  const [show, setShow] = useState(false)

  const [toolTipProperties, setToolTipProperties] = useState({
    tooltipTop: 0,
    tooltipLeft: 0,
  })

  const handleShowToolTip = () => {
    const toolTipHalfWidth =
      targetRef.current.getBoundingClientRect().width / 2
    const toolTipHeight =
      targetRef.current.getBoundingClientRect().height

    setToolTipProperties({
      tooltipTop: toolTipHeight,
      tooltipLeft: toolTipHalfWidth,
    })

    setShow(true)
  }

  return (
    <div
      ref={targetRef}
      onMouseEnter={handleShowToolTip}
      onMouseLeave={() => setShow(false)}
      className={show && styles.tooltip}
    >
      {/* Putting content inside this div allows it to stay open when hovering over content */}
      <TooltipContent
        show={show}
        top={toolTipProperties.tooltipTop}
        left={toolTipProperties.tooltipLeft}
      >
        {tooltipContent}
      </TooltipContent>
      <span className="cursor-pointer">{tooltipTarget}</span>
    </div>
  )
}

export default Tooltip;