import { motion } from "framer-motion";

interface AboutBackgroundProps {
  startAnimation: boolean;
  className?: string;
}
export const AboutBackground = ({ startAnimation, className }: AboutBackgroundProps) => {
  return (
    <svg
      className={className}
      width="977"
      height="900"
      viewBox="0 0 977 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={startAnimation ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
        d="M684.019 674.763C807.201 567.682 896.633 445.478 941.696 334.544C986.807 223.494 987.255 124.346 933.621 62.6471C879.987 0.948453 781.742 -12.4067 665.494 16.8099C549.368 45.996 415.907 117.55 292.724 224.631C169.542 331.711 80.1104 453.916 35.0466 564.85C-10.0642 675.9 -10.5129 775.049 43.121 836.747L41.6116 838.059L40.3475 836.586C-66.2899 710.775 45.6375 436.77 291.412 223.121C538.151 8.63483 826.353 -63.7993 935.131 61.335L936.395 62.8079C1043.03 188.619 931.105 462.624 685.331 676.273L682.437 678.78C436.343 891.322 149.964 962.705 41.6116 838.059L43.121 836.747C96.7548 898.446 195.001 911.8 311.249 882.584C427.375 853.398 560.836 781.844 684.019 674.763Z"
        fill="none"
        stroke="#ffffff7a"
        strokeWidth=".8"
      />
    </svg>
  );
};
