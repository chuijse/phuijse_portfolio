import React from "react";
import { motion } from "framer-motion";

const Modal = ({ setIsOpen, items, index }) => {
  console.log(index);
  console.log(items[index].year);

  return (
    <>
      <motion.div
        className="darkBG"
        onClick={() => setIsOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="centered"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="modal">
          <div className="modalHeader">
            <div className="model-accion-bar">
              <button onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 145.49L366.51 112L256 222.51L145.49 112L112 145.49L222.51 256L112 366.51L145.49 400L256 289.49L366.51 400L400 366.51L289.49 256L400 145.49z"
                  />
                </svg>
              </button>
            </div>
            <h3 className="primary">{items[index].title}</h3>
            <h5>{items[index].year}</h5>
            <p>{items[index].venue}</p>
          </div>
          <div className="modal-video">
            <video controls>
              <source src={items[index].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
