import React from "react";
import { motion, Variants } from "framer-motion";

const About = () => {
  let Animation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 1.5,
      },
    }
  };  
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={Animation}
      style={{ textAlign: "center", marginTop: 145 }}
    >
      <motion.p variants={Animation}>
        MONITOR ALERT AI DIAGNOSTICS ERPORT
      </motion.p>
      <motion.h1 variants={Animation} style={{ fontSize: 65, fontWeight: 900 }}>
        Get Downtime
        <br />
        AI Dianostics to help you
        <br />
        build better apps
      </motion.h1>
      <br />
      <motion.p variants={Animation}>
        Join the mailing list for evrly access to the alpha realse
      </motion.p>
      <motion.img
        variants={Animation}
        src="https://www.chhaswala.co/wp-content/uploads/2023/09/pro7.png"
        style={{ height: 250 }}
      ></motion.img>
      <motion.img
        variants={Animation}
        src="https://images.jdmagicbox.com/quickquotes/images_main/havmor-ice-cream-14-09-2020-67-210046606-tarb8.png"
        style={{ height: 250 }}
      ></motion.img>
      <motion.img
        variants={Animation}
        src="https://www.chhaswala.co/wp-content/uploads/2023/09/product7-1-1.png"
        style={{ height: 250 }}
      ></motion.img>{" "}
      <motion.img
        variants={Animation}
        src="https://www.chhaswala.co/wp-content/uploads/2023/09/pro8-1.png"
        style={{ height: 250 }}
      ></motion.img>
    </motion.div>
  );
};

export default About;
