import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Landing = ({ name, tagline }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="landing">
      <div className="textContainer">
        <motion.h1
          className="name"
          ref={ref}
          initial={{ y: "-10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "-10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {name}
        </motion.h1>
        <motion.p
          className="description"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {tagline}
        </motion.p>
        <a href="/contact">
          <motion.button
          className="landingBtn btn"
          ref={ref}
          initial={{ x: "10vw", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}>Hire Me</motion.button>
        </a>
      </div>
{/*       <div className="image-container">
        <motion.img
          className="landingImage"
          ref={ref}
          initial={{ y: "10vw", opacity: 0 }}
          animate={inView ? { y: 0, opacity: 0.4 } : { y: "10vw", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={landingImage}
          alt="" />
      </div> */}
    </section>
  );
};

export default Landing;
