import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/logo.png"
          alt="An image showing Max"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I&apos;m Punith</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
