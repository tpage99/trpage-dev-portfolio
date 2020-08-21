import { motion } from "framer-motion";

export default function SlideIn() {
  return <motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />;
}
