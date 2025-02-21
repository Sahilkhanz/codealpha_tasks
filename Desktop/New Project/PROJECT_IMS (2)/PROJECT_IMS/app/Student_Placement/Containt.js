"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../style/Containt.css";

const Containt = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <motion.div
      ref={ref}
      className={`container mx-auto mt-10 p-2 px-2 py-3 md:mx-20 `}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="box mr-48">
        <h3 className="text-3xl font-bold mb-4">Explore Job Opportunities</h3>
        <p className="text-lg">
          The job market offers a diverse range of opportunities across various
          industries and sectors. From innovative tech startups to established
          corporations, there's something for everyone.
        </p>
        <p className="text-lg mt-2">
          Discover roles in software development, marketing, finance, and more.
          Each company brings its unique culture and values, offering employees
          a chance to grow and make an impact.
        </p>
      </div>

      <div className={`box mt-5 ml-0 md:ml-60`}>
        <h3 className="text-3xl font-bold mb-4">Unlock Student's Potential</h3>
        <p className="text-lg">
          College placement services are invaluable for students transitioning
          into the professional world. Take advantage of career fairs,
          internships, and networking events to explore different industries and
          gain practical experience.
        </p>
        <p className="text-lg mt-2">
          Utilize resources like career counseling, resume workshops, and
          interview preparation to enhance your job search skills. With the
          right support, you can confidently pursue your career goals and
          achieve success.
        </p>
      </div>
    </motion.div>
  );
};

export default Containt;
