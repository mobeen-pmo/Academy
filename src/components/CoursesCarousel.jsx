import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaBook, FaQuran, FaMicrophone, FaLanguage, FaWhatsapp } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const courses = [
    {
        id: 1,
        title: 'Nazra Quran',
        description: 'Learn to read the Quran with proper pronunciation. Perfect for beginners of all ages.',
        icon: FaBook,
        color: 'from-blue-500 to-cyan-400',
        features: ['Basic Arabic alphabets', 'Word formation', 'Fluent recitation'],
        whatsappMessage: 'Assalamu Alaikum! I am interested in enrolling for the Nazra Quran course. Please share the details.',
    },
    {
        id: 2,
        title: 'Hifz Program',
        description: 'Comprehensive Quran memorization program with personalized guidance and revision plans.',
        icon: FaQuran,
        color: 'from-emerald-500 to-teal-400',
        features: ['Daily memorization', 'Revision schedules', 'Progress tracking'],
        whatsappMessage: 'Assalamu Alaikum! I am interested in enrolling for the Hifz Program. Please share the details.',
    },
    {
        id: 3,
        title: 'Tajweed Course',
        description: 'Master the art of Quranic recitation with proper Tajweed rules and Makharij.',
        icon: FaMicrophone,
        color: 'from-purple-500 to-pink-400',
        features: ['Makharij al-Huroof', 'Tajweed rules', 'Melodious recitation'],
        whatsappMessage: 'Assalamu Alaikum! I am interested in enrolling for the Tajweed Course. Please share the details.',
    },
    {
        id: 4,
        title: 'Arabic Language',
        description: 'Learn Quranic Arabic to understand the divine message directly without translation.',
        icon: FaLanguage,
        color: 'from-orange-500 to-amber-400',
        features: ['Grammar basics', 'Vocabulary building', 'Quran understanding'],
        whatsappMessage: 'Assalamu Alaikum! I am interested in enrolling for the Arabic Language course. Please share the details.',
    },
];

const CoursesCarousel = () => {
    return (
        <section id="courses" className="section-padding bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                        Our Programs
                    </span>
                    <h2 className="font-amiri text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                        Explore Our Courses
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover comprehensive Islamic education programs designed for students
                        of all ages and skill levels.
                    </p>
                </motion.div>

                {/* Courses Swiper */}
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="courses-swiper pb-16"
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <CourseCard course={course} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Swiper Styles */}
                <style>{`
          .courses-swiper .swiper-pagination-bullet {
            background: #02A3FD;
            opacity: 0.3;
          }
          .courses-swiper .swiper-pagination-bullet-active {
            opacity: 1;
          }
          .courses-swiper .swiper-button-prev,
          .courses-swiper .swiper-button-next {
            color: #02A3FD;
            background: white;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          }
          .courses-swiper .swiper-button-prev:after,
          .courses-swiper .swiper-button-next:after {
            font-size: 18px;
            font-weight: bold;
          }
        `}</style>
            </div>
        </section>
    );
};

const CourseCard = ({ course }) => {
    const Icon = course.icon;
    const whatsappUrl = `https://wa.me/923169895979?text=${encodeURIComponent(course.whatsappMessage)}`;

    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 relative overflow-hidden"
        >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="text-white text-2xl" />
                </motion.div>

                {/* Title */}
                <h3 className="font-amiri text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                    {course.features.map((feature, index) => (
                        <motion.li
                            key={index}
                            className="flex items-center gap-2 text-gray-700 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                        </motion.li>
                    ))}
                </ul>

                {/* Enroll Now Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
                >
                    <FaWhatsapp className="text-lg" />
                    Enroll Now
                </a>
            </div>
        </motion.div>
    );
};

export default CoursesCarousel;
