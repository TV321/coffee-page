import React from 'react';
import '../styles/HomeSection.sass';
import { motion } from "framer-motion"
import MediaIcons from "./MediaIcons"


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const HomeSection = () => {
    return(
            <main id="home">
                <div id="space-above"></div>
                <div id="container-home">
                    <motion.h3
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0", opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                            Lorem ipsum dolor amet
                    </motion.h3>
                    <motion.p
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0", opacity: 1 }}
                        transition={{ duration: 1 }}
                        >
                        Phasellus bibendum arcu sit amet
                    </motion.p>
                </div>
                <MediaIcons />
            </main>
    )
}


export default HomeSection
