
import { motion } from "framer-motion"


export default function Decorator({ className, widthDecorator, heightDecorator, pathDecorator } : {className?: string, widthDecorator?: number, heightDecorator?: number, pathDecorator?: string}) {
    const width = widthDecorator ?? 30;
    const height = heightDecorator ?? 500;
    const path = pathDecorator ??
      "M0 0V500 h30";

//       <svg width="40" height="1" viewBox="0 0 40 1" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.5 0.5H39.5" stroke="black"/>
// </svg>

  
    return (
      <div className={className}>
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`} 
        fill="none"
      >
        <path
          d={path}
          stroke="black"
          strokeOpacity="0.2"
        />
        <path
          d={path}
          stroke="url(#pulse-1)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <defs>
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
              y1: [height, height / 2],
              y2: [height * 2, height]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
            id="pulse-1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#e31e50" stopOpacity="0" />
            <stop stopColor="#e31e50" />
            <stop offset="1" stopColor="#b21ee3" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
      </div>
    )
  }