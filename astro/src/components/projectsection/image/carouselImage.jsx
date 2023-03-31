import React from 'react'
import "./image.scss"
import { motion } from 'framer-motion'

const CarouselImage = ({items, count}) => {
  return (
    <motion.div
      className="grid-item-media"
      style={{ background: `${items[Math.abs(count) % items.length].color}` }}
      // layoutId={`container-${Math.abs(count) % items.length}`}
    >
      Image
    </motion.div>
  )
}

export default CarouselImage