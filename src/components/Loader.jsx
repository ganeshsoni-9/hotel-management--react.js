import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      onFinish?.();
    }, 3000); // 3 seconds loader

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="loader-content"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="loader-title"
              initial={{ letterSpacing: "20px", opacity: 0 }}
              animate={{ letterSpacing: "5px", opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
                            ROYAL STAY HUB
            </motion.h1>

            <motion.p
              className="loader-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Luxury • Comfort • Royal Experience
            </motion.p>

            <motion.div
              className="loader-bar"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;