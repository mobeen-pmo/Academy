import { motion } from 'framer-motion';
import { FaQuran, FaGraduationCap, FaHandsHelping, FaStar } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                            About Us
                        </span>
                        <h2 className="font-amiri text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                            Spreading the Light of Quranic Knowledge
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Virtual Islamic Complex is dedicated to making authentic Quranic education
                            accessible to Muslims worldwide. Our mission is to nurture a deep connection
                            with the Holy Quran through expert guidance and personalized learning.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Founded with the vision of bridging traditional Islamic scholarship with
                            modern technology, we bring qualified teachers directly to your home. Our
                            certified instructors carry the sacred chain of knowledge (Ijazah) and are
                            passionate about nurturing the next generation of Quran learners.
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaQuran className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secondary">Authentic Teaching</h4>
                                    <p className="text-gray-500 text-sm">Traditional methodology</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaGraduationCap className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secondary">Qualified Teachers</h4>
                                    <p className="text-gray-500 text-sm">Ijazah certified scholars</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaHandsHelping className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secondary">Personalized Care</h4>
                                    <p className="text-gray-500 text-sm">Individual attention</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FaStar className="text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secondary">Excellence</h4>
                                    <p className="text-gray-500 text-sm">Quality education</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image/Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Decorative Elements */}
                        <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

                        {/* Main Card */}
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                            <img
                                src="/logo.png"
                                alt="Virtual Islamic Complex"
                                className="w-40 mx-auto mb-8"
                            />

                            <div className="text-center mb-8">
                                <h3 className="font-amiri text-2xl font-bold text-secondary mb-2">
                                    Virtual Islamic Complex
                                </h3>
                                <p className="text-gray-500">Your Gateway to Quranic Excellence</p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-primary">100+</div>
                                    <div className="text-xs text-gray-500">Students</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-2xl font-bold text-primary">2022</div>
                                    <div className="text-xs text-gray-500">Established</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
