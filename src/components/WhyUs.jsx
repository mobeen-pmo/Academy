import { motion } from 'framer-motion';
import {
    FaUserGraduate,
    FaClock,
    FaGlobe,
    FaChalkboardTeacher,
    FaLaptop,
    FaAward
} from 'react-icons/fa';

const features = [
    {
        icon: FaUserGraduate,
        title: 'Certified Teachers',
        description: 'Learn from qualified scholars with Ijazah certification and years of teaching experience.',
    },
    {
        icon: FaClock,
        title: 'Flexible Timing',
        description: 'Schedule classes at your convenience. We accommodate students across all time zones.',
    },
    {
        icon: FaGlobe,
        title: 'Global Access',
        description: 'Join from anywhere in the world. All you need is a stable internet connection.',
    },
    {
        icon: FaChalkboardTeacher,
        title: 'One-on-One Classes',
        description: 'Personalized attention ensures faster progress and better understanding.',
    },
    {
        icon: FaLaptop,
        title: 'Interactive Platform',
        description: 'Modern learning tools with screen sharing, digital whiteboards, and recordings.',
    },
    {
        icon: FaAward,
        title: 'Progress Reports',
        description: 'Regular assessments and detailed feedback to track your learning journey.',
    },
];

const WhyUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section id="why-us" className="section-padding relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
                        Why Choose Us
                    </span>
                    <h2 className="font-amiri text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                        The Virtual Islamic Complex Difference
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We combine traditional Islamic education with modern technology to provide
                        the best learning experience for our students.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                <feature.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
                            </div>

                            {/* Content */}
                            <h3 className="font-amiri text-xl font-bold text-secondary mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyUs;
