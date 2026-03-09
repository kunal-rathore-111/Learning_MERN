import { useScroll, useTransform, motion, useMotionTemplate, useSpring } from "motion/react";
import { useRef } from "react";
import { FaRegSmile, FaRocket, FaLeaf, FaStar } from "react-icons/fa";

interface SectionProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}

const sections: SectionProps[] = [
    {
        title: "Smile Section",
        description: "This section is all about happiness and positivity.",
        icon: <FaRegSmile />,
        image: ""
    },
    {
        title: "Rocket Section",
        description: "Reach for the stars and aim high.",
        icon: <FaRocket />,
        image: ""
    },
    {
        title: "Leaf Section",
        description: "Embrace nature and growth.",
        icon: <FaLeaf />,
        image: ""
    },
    {
        title: "Star Section",
        description: "Shine bright and stand out.",
        icon: <FaStar />,
        image: ""
    }
];

const Croppl: React.FC = () => {

    return <div className="flex flex-col items-center justify-center gap-25  w-full min-h-screen overflow-y-auto snap-y snap-mandatory bg-black py-16 overflow-hidden scroll-smooth">
        {sections.map((section, idx) =>
            <Card section={section} idx={idx} />
        )}
    </div >
};


const Card = ({ section, idx }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", 'end start'] });


    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 1, 0.])
    const translateY = useTransform(scrollYProgress, [0, .4, 0.8], [-240, 0, 200])


    const smooth = useSpring(translateY, {
        stiffness: 10,
        damping: 10,
        mass: 10,
    });

    const blur = useTransform(scrollYProgress, [0, 0.3, 0.89, 0.9], [4, 0, 0, 4])
    // const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1.5, 1, 1.1])

    return <motion.div key={idx} className="w-full flex items-center justify-center mb-12  "
        style={{ opacity, }}
        ref={ref}
    >
        <motion.div className="flex w-[900px] h-[350px] items-stretch"
        >
            {/* Left: Text */}
            <motion.div className="flex flex-col justify-center w-1/2 px-8 text-center"
                style={{
                    y: translateY,
                    x: 0, z: 0, filter: useMotionTemplate`blur(${blur}px)`
                }}
            >
                <div className="flex flex-col items-center mb-4"
                >
                    <span className="mb-2 text-3xl text-blue-400">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-lg text-gray-300">{section.description}</p>
            </motion.div>
            {/* Right: Image */}
            <div className="w-1/2 flex items-center justify-center">
                <img src={section.image} alt={section.title} className="object-cover h-[320px] w-[320px] rounded-xl border border-gray-700 bg-black" />
            </div>
        </motion.div>
    </motion.div>
}

export default Croppl;
