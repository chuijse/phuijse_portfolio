import React, { useRef, useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import style from "../styles/abstract/_color.module.scss";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [buttonMessage, setButtonMassege] = useState("SEND");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setButtonMassege("SENT");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <article className="grid-layout">
      <div className="item-title">
        <Title>Contact</Title>
      </div>
      <div className="item-contact">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam
          molestie at condimentum velit. adipiscing nunc justo.
        </p>
        <form ref={form} onSubmit={sendEmail} className="email-form-root">
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            id="name"
            name="from_name"
            required
            placeholder="Write your name.."
          />
          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            placeholder="Write your email.."
          />
          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            required
            className="message-input"
            placeholder="Great to meet you"
          />
          <motion.input
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
        </form>
      </div>
    </article>
  );
}
