"use client";
import { motion } from 'framer-motion';

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const contactOptions = [
    {
      title: "Spectral Inquiries 👻",
      description: "Questions about GhostNet or want to learn more dark secrets?",
      email: "hello@ghostnet.dev",
      emoji: "🔮"
    },
    {
      title: "Cursed Feedback 🎃",
      description: "Share your haunting thoughts on our supernatural project",
      email: "feedback@ghostnet.dev",
      emoji: "📮"
    },
    {
      title: "Phantom Collaboration 🦇",
      description: "Interested in joining our coven or summoning together?",
      email: "team@ghostnet.dev",
      emoji: "🤝"
    },
    {
      title: "Necromancy Support 🕷️",
      description: "Need help or found a bug in our haunted demo?",
      email: "support@ghostnet.dev",
      emoji: "⚡"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#1a0a1a] to-[#0a0a0a] flex items-center relative overflow-hidden">
      {/* Spooky background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl animate-bounce">🎃</div>
        <div className="absolute top-40 right-20 text-8xl animate-pulse">👻</div>
        <div className="absolute bottom-40 left-1/4 text-7xl animate-bounce delay-100">🦇</div>
        <div className="absolute bottom-20 right-1/3 text-8xl animate-pulse delay-200">🕸️</div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-32 w-full relative z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <h1 className="sorts-mill-goudy-regular text-6xl md:text-7xl lg:text-8xl text-[#ff6b35] leading-tight mb-6 drop-shadow-[0_0_30px_rgba(255,107,53,0.5)]">
              Summon Us 🔮
            </h1>
            <p className="funnel-sans-regular text-xl md:text-2xl text-[#ff8c00]/80 max-w-3xl mx-auto leading-relaxed">
              GhostNet is a haunted hackathon project with supernatural dreams. We'd love to hear from you,
              whether you have questions, cursed feedback, or want to join our phantom collective. 👻
            </p>
          </motion.div>

          {/* Contact Options Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16"
            variants={containerVariants}
          >
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#1a0a1a] to-[#0a0a0a] rounded-2xl p-8 md:p-10 border-2 border-[#6a0dad]/30 hover:border-[#ff6b35]/50 hover:shadow-2xl hover:shadow-[#6a0dad]/30 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{option.emoji}</div>
                <h3 className="sorts-mill-goudy-regular text-2xl md:text-3xl text-[#ff6b35] mb-3">
                  {option.title}
                </h3>
                <p className="funnel-sans-regular text-[#ff8c00]/70 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <motion.a
                  href={`mailto:${option.email}?subject=Greetings from the GhostNet Realm`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#6a0dad] text-white funnel-sans-medium rounded-full hover:bg-[#8b2dd9] transition-colors duration-300 shadow-lg hover:shadow-[#6a0dad]/50"
                >
                  <span>Send Raven</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-br from-[#6a0dad]/20 to-[#ff6b35]/20 rounded-2xl p-8 md:p-10 max-w-4xl mx-auto border border-[#6a0dad]/30">
              <div className="text-6xl mb-4">🎃</div>
              <h3 className="sorts-mill-goudy-regular text-3xl md:text-4xl text-[#ff6b35] mb-4">
                Conjured During a Hackathon 🌙
              </h3>
              <p className="funnel-sans-regular text-lg text-[#ff8c00]/80 leading-relaxed">
                GhostNet was summoned as a hackathon project with the goal of reimagining supernatural technology.
                We're excited about the dark potential and would love to connect with fellow necromancers,
                phantom professionals, and anyone interested in the future of the afterlife. 👻
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}