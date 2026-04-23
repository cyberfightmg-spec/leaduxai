"use client";

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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[hsl(var(--foreground))]">
            Все возможности в одном месте
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Мощный набор инструментов для профессионального Pinterest маркетинга
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition-colors"
            >
              <feature.icon className="w-6 h-6 mb-4 text-[hsl(var(--foreground))]" />

              <h3 className="text-lg font-medium mb-2 text-[hsl(var(--foreground))]">{feature.title}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "10M+", label: "Пинов создано" },
            { value: "50K+", label: "Активных пользователей" },
            { value: "99.9%", label: "Время работы" },
            { value: "4.9/5", label: "Рейтинг" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-light text-[hsl(var(--foreground))] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[hsl(var(--muted-foreground))]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
