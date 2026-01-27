import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { SiImessage } from 'react-icons/si';

// Website knowledge base
const knowledgeBase = {
    courses: {
        keywords: ['course', 'courses', 'program', 'programs', 'learn', 'study', 'offer', 'teach'],
        response: "We offer 4 comprehensive courses:\n\n📖 **Nazra Quran** - Learn to read Quran with proper pronunciation\n📚 **Hifz Program** - Complete Quran memorization\n🎤 **Tajweed Course** - Master beautiful recitation rules\n🗣️ **Arabic Language** - Understand Quranic Arabic\n\nWould you like to enroll in any of these?"
    },
    pricing: {
        keywords: ['price', 'cost', 'fee', 'payment', 'how much', 'charges'],
        response: "Our courses are very affordable! We offer flexible payment plans.\n\n💰 **Free Trial** - Start with a free demo class\n📱 **Contact us** on WhatsApp for personalized pricing based on your schedule and course selection.\n\nWould you like to book a free trial?"
    },
    timing: {
        keywords: ['time', 'timing', 'schedule', 'hours', 'when', 'available'],
        response: "We're available **24/7** with flexible timing! 🕐\n\nOur teachers work across different time zones to accommodate students worldwide. You can schedule classes at your convenience.\n\nShall I help you book a trial class?"
    },
    teachers: {
        keywords: ['teacher', 'tutor', 'instructor', 'qualified', 'who teaches'],
        response: "Our teachers are highly qualified! 👨‍🏫\n\n✅ **Ijazah Certified** - Sacred chain of knowledge\n✅ **Experienced** - Years of teaching expertise\n✅ **Native Arabic Speakers** - Authentic pronunciation\n✅ **Patient & Caring** - Great with all age groups\n\nWant to meet your teacher in a free trial?"
    },
    enroll: {
        keywords: ['enroll', 'register', 'join', 'sign up', 'start', 'begin', 'admission'],
        response: "Great choice! 🎉 Enrolling is easy:\n\n1️⃣ Book a **FREE trial class**\n2️⃣ Meet your teacher\n3️⃣ Choose your schedule\n4️⃣ Start learning!\n\nClick the WhatsApp button below to get started!"
    },
    about: {
        keywords: ['about', 'who are you', 'what is', 'virtual islamic'],
        response: "**Virtual Islamic Complex** is an online Quran academy established in **2022**. 🕌\n\nWe're dedicated to making authentic Quranic education accessible worldwide. With **100+ students** learning with us, we bring qualified teachers directly to your home!\n\nHow can I help you today?"
    },
    greeting: {
        keywords: ['hello', 'hi', 'salam', 'assalam', 'hey', 'good'],
        response: "Wa Alaikum Assalam! 🌙\n\nWelcome to Virtual Islamic Complex! I'm **Ayesha**, your virtual assistant.\n\nHow can I help you today? You can ask about:\n• Our Courses\n• Class Timings\n• Enrollment\n• Pricing"
    }
};

const quickActions = [
    { label: '📖 View Courses', query: 'What courses do you offer?' },
    { label: '💰 Pricing Info', query: 'What are the fees?' },
    { label: '📝 Enroll Now', query: 'I want to enroll' },
    { label: '🕐 Class Timings', query: 'What are the class timings?' },
];

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Assalamu Alaikum! 🌙\n\nI'm **Ayesha**, your virtual assistant at Virtual Islamic Complex.\n\nHow can I help you today?",
            time: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const findResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        for (const [key, data] of Object.entries(knowledgeBase)) {
            if (data.keywords.some(keyword => lowerQuery.includes(keyword))) {
                return data.response;
            }
        }

        return "I'm here to help with information about our Quran courses! 📚\n\nYou can ask me about:\n• Courses we offer\n• Class timings\n• Enrollment process\n• Pricing\n\nOr click one of the quick options below!";
    };

    const handleSend = (text = inputValue) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = {
            type: 'user',
            text: text,
            time: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = {
                type: 'bot',
                text: findResponse(text),
                time: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000 + Math.random() * 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: isOpen
                        ? '0 0 0 0 rgba(2, 163, 253, 0)'
                        : ['0 0 0 0 rgba(2, 163, 253, 0.4)', '0 0 0 20px rgba(2, 163, 253, 0)', '0 0 0 0 rgba(2, 163, 253, 0.4)']
                }}
                transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
            >
                {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-secondary p-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">👩‍💼</span>
                                </div>
                                <div>
                                    <h3 className="font-bold">Ayesha</h3>
                                    <div className="flex items-center gap-1 text-sm text-white/80">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                        Online | Virtual Assistant
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${msg.type === 'user'
                                                ? 'bg-primary text-white rounded-br-sm'
                                                : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-sm'
                                            }`}
                                    >
                                        {msg.text.split('**').map((part, i) =>
                                            i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-bl-sm">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Actions */}
                        <div className="px-4 py-2 bg-white border-t border-gray-100">
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                {quickActions.map((action, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleSend(action.query)}
                                        className="flex-shrink-0 px-3 py-1.5 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20 transition-colors"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-light transition-colors"
                                >
                                    <FaPaperPlane size={14} />
                                </button>
                            </div>

                            {/* Direct Contact Options */}
                            <div className="flex justify-center gap-4 mt-3 pt-3 border-t border-gray-100">
                                <a
                                    href="https://wa.me/923169895979?text=Assalamu%20Alaikum!%20I%20need%20assistance."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-green-600 hover:text-green-700"
                                >
                                    <FaWhatsapp /> WhatsApp
                                </a>
                                <a
                                    href="https://wa.me/923175185601?text=Assalamu%20Alaikum!%20I%20need%20assistance."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700"
                                >
                                    <SiImessage /> IMO
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
