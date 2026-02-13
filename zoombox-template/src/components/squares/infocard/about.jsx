import { delay, motion } from "framer-motion";

export default function AboutCard() {

  const scrollVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      y: -40
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={scrollVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: "60vw",
        maxWidth: "800px",
        height: "60vh",
        background: "#f4af69",
        borderRadius: "25px",
        padding: "2rem",
        transformOrigin: "top",
        overflow: "hidden",
        boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
      }}
    >
        <h1 style={{ marginBottom: "1rem" }}>Who Am I?</h1>

        <p style={{ lineHeight: 1.6 }}>
            Its Me. Yap Yap Yap
        </p>

        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
            Yap Yap Yap
        </p>

        <p style={{ marginTop: "1rem", lineHeight: 1.6 }}>
            Yap Yap Yap
        </p>        
    
    </motion.div>
  );
}