import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaBookOpen, FaMosque, FaHeart, FaQuran, FaPray } from 'react-icons/fa';

// Expanded mock data linking to authority Islamic sites
const blogPosts = [
    {
        id: 1,
        title: 'The Virtues of Memorizing Quran',
        excerpt: 'Discover the immense spiritual rewards and benefits of becoming a Hafiz of the Holy Quran.',
        image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=400&h=250&fit=crop',
        category: 'Spirituality',
        icon: FaHeart,
        link: 'https://productivemuslim.com/',
    },
    {
        id: 2,
        title: 'Tips for Effective Quran Revision',
        excerpt: 'Learn proven techniques to maintain and strengthen your Quran memorization over time.',
        image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&h=250&fit=crop',
        category: 'Learning',
        icon: FaBookOpen,
        link: 'https://muslimmatters.org/',
    },
    {
        id: 3,
        title: 'Understanding Tajweed Rules',
        excerpt: 'A comprehensive guide to mastering the essential rules of beautiful Quran recitation.',
        image: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=400&h=250&fit=crop',
        category: 'Tajweed',
        icon: FaMosque,
        link: 'https://aboutislam.net/',
    },
    {
        id: 4,
        title: 'Benefits of Learning Arabic',
        excerpt: 'Why understanding the language of the Quran transforms your connection with Allah.',
        image: 'https://images.unsplash.com/photo-1579187707643-35646d22b596?w=400&h=250&fit=crop',
        category: 'Arabic',
        icon: FaQuran,
        link: 'https://yaqeeninstitute.org/',
    },
    {
        id: 5,
        title: 'The Power of Daily Quran Reading',
        excerpt: 'How consistent daily recitation can transform your life spiritually and mentally.',
        image: 'https://images.unsplash.com/photo-1590076215667-875c2d82f4a2?w=400&h=250&fit=crop',
        category: 'Daily Practice',
        icon: FaPray,
        link: 'https://quran.com/',
    },
    {
        id: 6,
        title: 'Teaching Quran to Children',
        excerpt: 'Effective methods and tips for parents to introduce Quran to young learners.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop',
        category: 'Parenting',
        icon: FaHeart,
        link: 'https://muslimhands.org.uk/',
    },
];

const Blog = () => {
    return (
        <section id="blog" className="section-padding bg-gray-50/50">
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
                        Curated Resources
                    </span>
                    <h2 className="font-amiri text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">
                        Islamic Learning Hub
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our handpicked collection of resources from trusted Islamic scholars
                        and educators worldwide.
                    </p>
                </motion.div>

                {/* Blog Cards - 3x2 Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-secondary">
                                        <post.icon className="text-primary" />
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-amiri text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                                >
                                    Read More <FaExternalLinkAlt className="text-xs" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
