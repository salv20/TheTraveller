import { motion } from "framer-motion";

const LoadingDot = {
    display: "block",
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "#f18700",
    borderRadius: "50%"
};

const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.5
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.5
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "100%"
    }
};

const DotTransition = {
    repeat: Infinity,
    repeatDelay: 1,
    duration: 1
};


export default function ThreeDotsWave() {
    return (
        <div
            style={{
                paddingTop: "5rem",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <motion.div
                style={LoadingContainer}
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
            </motion.div>
        </div>
    );
}
