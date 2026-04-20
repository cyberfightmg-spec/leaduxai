"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp, Users, Star, CheckCircle } from "lucide-react";

export function HeroModern() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", delay: 0.6 }
      );
      gsap.fromTo(
        ".hero-stat",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.7)", delay: 0.8 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-[10%] w-20 h-20 border border-white/10 rounded-lg"
        animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-[15%] w-16 h-16 border border-purple-500/20 rounded-full"
        animate={{ y: [0, 30, 0], rotate: [0, -90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[20%] w-12 h-12 border border-pink-500/20"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
        >
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span className="text-sm text-white/80">AI автоматизация для Pinterest</span>
        </motion.div>

        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-violet-400">
            Публикуй пины
          </span>
          <br />
          <span className="text-white">в 1 клик</span>
        </h1>

        <p className="hero-subtitle text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Автоматическая генерация, оптимизация и публикация контента в Pinterest с помощью искусственного интеллекта
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.button
            onClick={scrollToDemo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all"
          >
            Попробовать бесплатно
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Смотреть демо
          </motion.button>
        </div>

        {/* Stats */}
        <div className="hero-stat flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { icon: Zap, value: "10M+", label: "Пинов создано" },
            { icon: Users, value: "50K+", label: "Активных пользователей" },
            { icon: Shield, value: "99.9%", label: "Время работы" },
            { icon: Star, value: "4.9/5", label: "Рейтинг" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <stat.icon className="w-5 h-5 text-purple-400" />
                <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
