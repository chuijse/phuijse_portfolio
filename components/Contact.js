import React, { useRef, useState, useEffect } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const motionIcon = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 0.5 } },
};

const motionContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

export default function Contact({ id }) {
  const [buttonMessage, setButtonMassege] = useState("SEND");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setButtonMassege("SENT");
        //console.log(result.text);
      },
      (error) => {
        //console.log(error.text);
      }
    );
  };

  return (
    <motion.article className="grid-layout" id={id}>
      <div className="item-title">
        <Title>Contact</Title>
      </div>
      <motion.div className="item-contact">
        <motion.p
          initial={{
            y: "-100%",
            clipPath: "inset(100% 0% 0% 0%)",
            marginTop: "40px",
          }}
          whileInView={{
            y: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            marginTop: "40px",
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          If you have questions or you want to colaborate:
        </motion.p>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="email-form-root"
          variants={motionContainer}
          initial="hidden"
          whileInView="show"
        >
          <motion.label variants={motionIcon} htmlFor="from_name">
            Name:
          </motion.label>
          <motion.input
            variants={motionIcon}
            type="text"
            id="name"
            name="from_name"
            required
            placeholder="Write your name.."
          />
          <motion.label variants={motionIcon} htmlFor="user_email">
            Email:
          </motion.label>
          <motion.input
            variants={motionIcon}
            type="email"
            id="email"
            name="user_email"
            required
            placeholder="Write your email.."
          />
          <motion.label variants={motionIcon} htmlFor="message">
            Message:
          </motion.label>
          <motion.textarea
            variants={motionIcon}
            type="text"
            id="message"
            name="message"
            required
            className="message-input"
            placeholder="Great to meet you"
          />
          <motion.input
            variants={motionIcon}
            whileHover={{ color: style.primaryColor }}
            animate={{
              color: buttonMessage === "SENT" ? style.primaryColor : style.text,
              fontStyle: buttonMessage === "SENT" ? "italic" : "normal",
            }}
            type="submit"
            value={buttonMessage}
            className="submit-button"
          />
          {buttonMessage === "SENT" ? (
            <motion.caption
              className="form-captions"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Your message was sent successfully
            </motion.caption>
          ) : null}
        </motion.form>
      </motion.div>
    </motion.article>
  );
}
