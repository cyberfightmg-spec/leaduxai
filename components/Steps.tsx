"use client";

import { Upload, Wand2, Share2, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Загрузка",
    description: "Загрузите изображение или сгенерируйте его с помощью AI",
  },
  {
    icon: Wand2,
    title: "AI обработка",
    description: "Наш AI оптимизирует контент для максимального охвата",
  },
  {
    icon: Share2,
    title: "Публикация",
    description: "Автоматическая публикация в Pinterest в один клик",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Отслеживайте статистику и улучшайте результаты",
  },
];

export function Steps() {
  return (
    <section id="steps" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[hsl(var(--foreground))]">
            Как это работает
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Всего 4 простых шага для автоматизации вашего Pinterest маркетинга
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="p-6 border border-[hsl(var(--border))] hover:bg-[hsl(var(--accent))] transition-colors"
            >
              <div className="w-8 h-8 mb-4 flex items-center justify-center text-[hsl(var(--foreground))] font-medium text-sm border border-[hsl(var(--border))]">
                {index + 1}
              </div>

              <step.icon className="w-6 h-6 mb-4 text-[hsl(var(--foreground))]" />

              <h3 className="text-lg font-medium mb-2 text-[hsl(var(--foreground))]">{step.title}</h3>
              <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
