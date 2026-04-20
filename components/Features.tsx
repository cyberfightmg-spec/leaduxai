"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Clock,
  TrendingUp,
  Palette,
  Globe,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI генерация",
    description:
      "Генерируйте уникальные изображения и описания с помощью передовых AI моделей",
  },
  {
    icon: Layers,
    title: "Пакетная публикация",
    description:
      "Публикуйте десятки пинов одновременно с индивидуальными настройками",
  },
  {
    icon: Clock,
    title: "Умное планирование",
    description:
      "Планируйте публикации на оптимальное время для максимального охвата",
  },
  {
    icon: TrendingUp,
    title: "Панель аналитики",
    description:
      "Отслеживайте показы, клики и конверсии в реальном времени",
  },
  {
    icon: Palette,
    title: "Свои шаблоны",
    description:
      "Используйте готовые шаблоны или создавайте свои уникальные дизайны",
  },
  {
    icon: Globe,
    title: "Несколько аккаунтов",
    description:
      "Управляйте несколькими Pinterest аккаунтами из одного интерфейса",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description:
      "Ваши данные защищены шифрованием и соответствуют GDPR",
  },
  {
    icon: Zap,
    title: "Авто-оптимизация",
    description:
      "AI автоматически оптимизирует контент под алгоритмы Pinterest",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Все возможности <span className="gradient-text">в одном месте</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мощный набор инструментов для профессионального Pinterest маркетинга
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10M+", label: "Пинов создано" },
            { value: "50K+", label: "Активных пользователей" },
            { value: "99.9%", label: "Время работы" },
            { value: "4.9/5", label: "Рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
