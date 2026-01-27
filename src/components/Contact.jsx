import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa';
import { SiImessage } from 'react-icons/si';

const Contact = () => {
    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-primary/20" />

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                        Get Started Today
                    </span>
                    <h2 className="font-amiri text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Begin Your Quranic Journey
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                        Ready to learn the Quran from expert teachers? Book your free trial class
                        now and experience the difference of personalized online learning.
                    </p>
                </motion.div>

                {/* Contact CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/923169895979?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaWhatsapp className="text-2xl" />
                        Chat on WhatsApp
                    </a>

                    {/* IMO Button */}
                    <a
                        href="https://wa.me/923175185601?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                    >
                        <SiImessage className="text-2xl" />
                        Chat on IMO
                    </a>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
                >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                        <FaWhatsapp className="text-3xl text-green-400 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">WhatsApp</h3>
                        <a
                            href="https://wa.me/923169895979"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white text-sm transition-colors"
                        >
                            +92 316 989 5979
                        </a>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                        <SiImessage className="text-3xl text-blue-400 mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">IMO</h3>
                        <a
                            href="https://wa.me/923175185601"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/70 hover:text-white text-sm transition-colors"
                        >
                            +92 317 518 5601
                        </a>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                        <FaEnvelope className="text-3xl text-accent mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <a
                            href="mailto:virtual.islamic.complex@gmail.com"
                            className="text-white/70 hover:text-white text-sm transition-colors break-all"
                        >
                            virtual.islamic.complex@gmail.com
                        </a>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                        <FaClock className="text-3xl text-accent mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Available</h3>
                        <p className="text-white/70 text-sm">
                            24/7 - Flexible Timings
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
