import React from "react";
import Title from "./Title";
import Image from "next/image";
import profilePic from "../images/pablo.png";
import ScrollDown from "./ScrollDown";
import Icons from "./Icons";

export default function Skills() {
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
        <form
          action="/send-data-here"
          method="post"
          className="email-form-root"
        >
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          <label for="message">Message:</label>
          <input type="text" id="message" name="message" required />
          <button type="submit">Submit</button>
        </form>
        <h5>my mail</h5>
        <h5>
          <i>Pablo.huijse@gmail.com</i>
        </h5>
      </div>
    </article>
  );
}
