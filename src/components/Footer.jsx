import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhone
} from 'react-icons/fa';
import { SiImessage } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/#home' },
        { name: 'Courses', path: '/#courses' },
        { name: 'Why Us', path: '/#why-us' },
        { name: 'About Us', path: '/#about' },
    ];

    const courses = [
        { name: 'Nazra Quran', path: '/#courses' },
        { name: 'Hifz Program', path: '/#courses' },
        { name: 'Tajweed Course', path: '/#courses' },
        { name: 'Arabic Language', path: '/#courses' },
    ];

    const socialLinks = [
        {
            icon: FaFacebookF,
            url: 'https://www.facebook.com/rehnumai.quran',
            label: 'Facebook',
            color: 'hover:bg-blue-600'
        },
        {
            icon: FaInstagram,
            url: 'https://www.instagram.com/virtualislamiccomplex/',
            label: 'Instagram',
            color: 'hover:bg-pink-600'
        },
        {
            icon: FaWhatsapp,
            url: 'https://wa.me/923169895979',
            label: 'WhatsApp',
            color: 'hover:bg-green-600'
        },
        {
            icon: SiImessage,
            url: 'https://wa.me/923175185601',
            label: 'IMO',
            color: 'hover:bg-blue-500'
        },
    ];

    return (
        <footer className="bg-secondary text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <div className="bg-white rounded-2xl p-3 inline-block shadow-lg">
                                <img
                                    src="/logo.png"
                                    alt="Virtual Islamic Complex"
                                    className="h-16 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            Empowering Muslims worldwide with authentic Quranic education
                            through modern technology and certified teachers.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors ${social.color}`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="text-lg" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-amiri text-xl font-bold mb-6 text-accent">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className="text-gray-300 hover:text-primary transition-colors inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="font-amiri text-xl font-bold mb-6 text-accent">
                            Our Courses
                        </h3>
                        <ul className="space-y-3">
                            {courses.map((course) => (
                                <li key={course.name}>
                                    <a
                                        href={course.path}
                                        className="text-gray-300 hover:text-primary transition-colors inline-flex items-center gap-2"
                                    >
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {course.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-amiri text-xl font-bold mb-6 text-accent">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                                <a
                                    href="mailto:virtual.islamic.complex@gmail.com"
                                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                                >
                                    virtual.islamic.complex@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaWhatsapp className="text-primary mt-1 flex-shrink-0" />
                                <a
                                    href="https://wa.me/923169895979"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    +92 316 989 5979
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <SiImessage className="text-primary mt-1 flex-shrink-0" />
                                <a
                                    href="https://wa.me/923175185601"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-primary transition-colors"
                                >
                                    +92 317 518 5601 (IMO)
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    Online Classes Worldwide
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Virtual Islamic Complex. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Designed & Developed by{' '}
                            <span className="text-accent font-semibold">Software Bazaar</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
