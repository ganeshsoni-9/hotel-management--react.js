import { useEffect, useState } from "react";

const ScrollProgressBar = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.body.scrollHeight -
        window.innerHeight;

      const scrollTop = window.scrollY;

      const scrollPercent =
        (scrollTop / totalHeight) * 100;

      setScroll(scrollPercent);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <div className="scroll-bar">

      <div
        className="scroll-fill"
        style={{ width: `${scroll}%` }}
      />

    </div>

  );

};

export default ScrollProgressBar;