"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Upload, Wand2, Share2, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Upload,
    title: "Загрузка",
    description: "Загрузите изображение или сгенерируйте его с помощью AI",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wand2,
    title: "AI обработка",
    description: "Наш AI оптимизирует контент для максимального охвата",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Share2,
    title: "Публикация",
    description: "Автоматическая публикация в Pinterest в один клик",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Отслеживайте статистику и улучшайте результаты",
    color: "from-rose-500 to-rose-600",
  },
];

export function Steps() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50,
              rotateY: -15,
            },
            {
              opacity: 1,
              y: 0,
              rotateY: 0,
              duration: 0.6,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="steps"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Как это <span className="gradient-text">работает</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Всего 4 простых шага для автоматизации вашего Pinterest маркетинга
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              whileHover={{
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10" />
      </div>
    </section>
  );
}
