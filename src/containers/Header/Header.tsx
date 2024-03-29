import { FC } from "react";
import { motion } from "framer-motion";
import { images } from "../../assets/images";
import { AppWrap } from "../../wrappers";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header: FC = () => {
  const headerInfoMotionDiv = (
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋 </span>
          <div>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Mamed</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">React / Node JS</p>
        </div>
      </div>
    </motion.div>
  );

  const headerImageMotionDiv = (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 1.5, delayChildren: 1.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
  );

  const headerCircleMotionDiv = (
    <motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.next, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="app__header app__flex">
      {headerInfoMotionDiv}
      {headerImageMotionDiv}
      {headerCircleMotionDiv}
    </div>
  );
};

export default AppWrap(Header, "home");
