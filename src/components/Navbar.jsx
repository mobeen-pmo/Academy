import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaWhatsapp, FaHome, FaBook, FaStar, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const navItems = [
    { name: 'Home', path: '/#home', icon: FaHome },
    { name: 'Courses', path: '/#courses', icon: FaBook },
    { name: 'Why Us', path: '/#why-us', icon: FaStar },
    { name: 'About Us', path: '/#about', icon: FaInfoCircle },
    { name: 'Contact', path: '/#contact', icon: FaEnvelope },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section based on scroll position
            const sections = ['home', 'courses', 'why-us', 'about', 'blog', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (path) => {
        setIsOpen(false);
        if (path.includes('#')) {
            const id = path.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const isActive = (path) => {
        const sectionId = path.split('#')[1];
        return activeSection === sectionId;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-white/95 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/logo.png"
                            alt="Virtual Islamic Complex"
                            className="h-14 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.name}
                                item={item}
                                isActive={isActive(item.path)}
                                onClick={() => handleNavClick(item.path)}
                            />
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="https://wa.me/923169895979?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold px-6 py-3 rounded-full flex items-center gap-2 text-sm"
                        >
                            <FaWhatsapp className="text-lg" />
                            Book Free Trial
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-secondary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t shadow-xl"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={() => handleNavClick(item.path)}
                                    className={`flex items-center gap-3 py-3 px-4 rounded-xl font-medium transition-all ${isActive(item.path)
                                            ? 'bg-primary text-white'
                                            : 'text-secondary hover:bg-gray-100'
                                        }`}
                                >
                                    <item.icon className="text-lg" />
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/923169895979?text=Assalamu%20Alaikum!%20I%20would%20like%20to%20book%20a%20free%20trial%20class."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold w-full py-3 rounded-full flex items-center justify-center gap-2 mt-4"
                            >
                                <FaWhatsapp className="text-lg" />
                                Book Free Trial
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({ item, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = item.icon;

    return (
        <a
            href={item.path}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-secondary hover:text-primary'
                }`}
        >
            <Icon className={`text-sm ${isActive ? 'text-white' : 'text-primary'}`} />
            {item.name}

            {/* Hover underline for non-active items */}
            {!isActive && (
                <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
            )}
        </a>
    );
};

export default Navbar;
