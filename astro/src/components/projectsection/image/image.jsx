import React from 'react'
import "./image.scss"
import {motion} from 'framer-motion'

const Image = ({index, element, view, toggleView, setCount}) => {
  return (
    <motion.div
      className="grid-item-media"
      style={{ background: `${element.color}` }}
      layoutId={`container-${index}`}
      // layoutId={`container-${index}`}
      onClick={() => {
        toggleView(!view);
        setCount(index);
      }}
    >
      Image
    </motion.div>
  )
}

export default Image