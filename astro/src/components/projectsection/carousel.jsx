import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import './carousel.scss'
import Header from './header/header'
import Image from './image/image'
import CarouselImage from './image/carouselImage'
import useMeasure from 'react-use-measure'

const Carousel = () => {
  const items = [
    { color: 'red', id: 'red' },
    { color: 'blue', id: 'blue' },
    { color: 'green', id: 'green' },
    { color: 'cyan', id: 'cyan' },
    { color: 'purple', id: 'purple' },
  ]

  let [gridVisible, setGridVisible] = useState(true)
  let [count, setCount] = useState(0)
  let [ref, {width}] = useMeasure();


  let prev = usePrevious(count)
  let direction = count > prev ? 1 : -1 // pos if increasing, neg if decreasing

  let slideAnimation = {
    enter: ({direction, width}) => ({ x: direction * width }),
    center: { x: 0 },
    exit: ({direction, width}) => ({ x: direction * - width })
  }

  return (
    <>
      <Header
        view={gridVisible}
        toggleView={(value) => setGridVisible(value)}
        setCount={setCount}
      />
      <div className="content">
        {/* Render Grid view by default */}
        {gridVisible &&
          <div className="grid-container">
            <div className="grid-elements">
              {items.map((element, index) => {
                return (
                  <div className="element" key={index}>
                    <div className="thumbnail-wrapper">
                      <Image
                        element={element}
                        index={index}
                        view={gridVisible}
                        toggleView={(value) => setGridVisible(value)}
                        setCount={setCount}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        }
        {/* if carousel is toggled, render the carousel: */}
        {!gridVisible &&
          <>
            <button onClick={() => setCount(count - 1)}>Prev</button>
            <button onClick={() => setCount(count + 1)}>Next</button>
          {count}
          <motion.div
            ref={ref}
            className="carousel-wrapper"
            layoutId={`container-${Math.abs(count) % items.length}`}
          >
            <AnimatePresence initial={false} custom={{direction, width}}>
              <motion.div
                key={count}
                className="list-elements"
                variants={slideAnimation}
                initial="enter"
                animate="center"
                exit="exit"
                custom={{direction, width}}
                >
                <CarouselImage count={count} items={items} />  
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </>
        }
      </div>
    </>
  )
}
export default Carousel

function usePrevious(state) {
  let [tuple, setTuple] = useState([null, state]) // [prev, current]
  // Tuple is used to track whether a user is scrolling forward or backward in the carousel
  if (tuple[1] !== state) {
    setTuple([tuple[1], state])
  }
  return tuple[0]
}