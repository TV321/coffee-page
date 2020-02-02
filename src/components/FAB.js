import React from 'react';
import '../styles/FAB.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"

const arrow = <FontAwesomeIcon icon={ faArrowUp } />


const FAB = () => {
    return(
        <motion.a
            initial={{ y: "0", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fab"
            href="#home"
            ><span id="arrow">{ arrow }</span>
        </motion.a>
    )
}

export default FAB
