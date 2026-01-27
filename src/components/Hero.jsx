import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPlayCircle, FaStar, FaMosque, FaQuran, FaMoon } from 'react-icons/fa';

// Floating Islamic decoration component
const FloatingElement = ({ children, delay = 0, duration = 6, x = 0, y = 20 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -y, 0],
            x: [0, x, 0],
            rotate: [0, 10, -10, 0]
        }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none"
    >
        {children}
    </motion.div>
);

// Typewriter effect component
const TypewriterText = ({ texts, className }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const text = texts[currentTextIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (currentText.length < text.length) {
                    setCurrentText(text.slice(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(text.slice(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTextIndex, texts]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-1 h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    );
};

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    const typewriterTexts = ['Quran', 'Tajweed', 'Hifz', 'Arabic'];

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
            {/* Background Pattern */}
            <div className="bg-pattern" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            {/* Floating Islamic Decorations */}
            <FloatingElement delay={0} duration={8} x={15} y={25}>
                <div className="top-32 left-[5%]">
                    <FaStar className="text-4xl text-accent/30" />
                </div>
            </FloatingElement>

            <FloatingElement delay={1} duration={7} x={-10} y={20}>
                <div className="top-48 right-[10%]">
                    <FaMoon className="text-5xl text-primary/20" />
                </div>
            </FloatingElement>

            <FloatingElement delay={2} duration={9} x={20} y={30}>
                <div className="bottom-32 left-[15%]">
                    <FaMosque className="text-6xl text-secondary/10" />
                </div>
            </FloatingElement>

            <FloatingElement delay={0.5} duration={6} x={-15} y={15}>
                <div className="top-64 left-[20%]">
                    <FaQuran className="text-3xl text-accent/25" />
                </div>
            </FloatingElement>

            <FloatingElement delay={1.5} duration={8} x={10} y={25}>
                <div className="bottom-48 right-[20%]">
                    <FaStar className="text-2xl text-primary/25" />
                </div>
            </FloatingElement>

            {/* Additional floating geometric shapes */}
            <motion.div
                className="absolute top-40 right-[8%] w-16 h-16 border-2 border-accent/20 rounded-full"
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            <motion.div
                className="absolute bottom-40 left-[10%] w-12 h-12 border-2 border-primary/15 rotate-45"
                animate={{
                    rotate: [45, 405],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <motion.div
                className="absolute top-[60%] right-[5%] w-8 h-8 bg-accent/10 rounded-full"
                animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            Online Quran Academy
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="font-amiri text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6"
                        >
                            Master the{' '}
                            <br className="hidden sm:block" />
                            <TypewriterText
                                texts={typewriterTexts}
                                className="text-gradient"
                            />
                            <br />
                            from Home
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Join students worldwide learning Quran with certified
                            teachers. Expert guidance in Nazra, Hifz, Tajweed, and Arabic —
                            all from the comfort of your home.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="https://wa.me/923169895979?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg"
                            >
                                <FaWhatsapp className="text-xl" />
                                Start Free Trial
                            </a>
                            <a
                                href="#courses"
                                className="btn-primary px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg"
                            >
                                <FaPlayCircle className="text-xl" />
                                Explore Courses
                            </a>
                        </motion.div>

                        {/* Trust Badges - Updated Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-12"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">100+</div>
                                <div className="text-gray-500 text-sm">Active Students</div>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-secondary">2022</div>
                                <div className="text-gray-500 text-sm">Established</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Branded Card */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            {/* Decorative circles */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
                                animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.4, 0.6] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Main Branded Card */}
                            <motion.div
                                className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-100"
                                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Animated Logo */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                                    className="flex justify-center mb-8"
                                >
                                    <motion.img
                                        src="/logo.png"
                                        alt="Virtual Islamic Complex"
                                        className="w-36 h-auto drop-shadow-lg"
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </motion.div>

                                {/* Title with animation */}
                                <motion.div
                                    className="text-center mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                >
                                    <h3 className="font-amiri text-2xl md:text-3xl font-bold text-secondary mb-2">
                                        Virtual Islamic Complex
                                    </h3>
                                    <motion.p
                                        className="text-gray-500"
                                        animate={{ opacity: [0.7, 1, 0.7] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Your Gateway to Quranic Excellence
                                    </motion.p>
                                </motion.div>

                                {/* Stats Grid */}
                                <motion.div
                                    className="grid grid-cols-2 gap-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                >
                                    <motion.div
                                        className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(2, 163, 253, 0.15)" }}
                                    >
                                        <motion.div
                                            className="text-2xl font-bold text-primary"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 1.2, type: "spring" }}
                                        >
                                            100+
                                        </motion.div>
                                        <div className="text-xs text-gray-500 mt-1">Students</div>
                                    </motion.div>
                                    <motion.div
                                        className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/10"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.15)" }}
                                    >
                                        <motion.div
                                            className="text-2xl font-bold text-accent"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 1.4, type: "spring" }}
                                        >
                                            2022
                                        </motion.div>
                                        <div className="text-xs text-gray-500 mt-1">Established</div>
                                    </motion.div>
                                </motion.div>

                                {/* Decorative elements inside card */}
                                <motion.div
                                    className="absolute top-4 right-4 text-accent/20"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <FaStar className="text-2xl" />
                                </motion.div>
                                <motion.div
                                    className="absolute bottom-4 left-4 text-primary/20"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                >
                                    <FaMoon className="text-xl" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
