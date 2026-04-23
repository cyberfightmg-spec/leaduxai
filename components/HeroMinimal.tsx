"use client";

import { ArrowRight } from "lucide-react";

export function HeroMinimal() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-[hsl(var(--background))]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[hsl(var(--foreground))] mb-6">
          Публикуй пины<br />в 1 клик
        </h1>

        <p className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-10">
          Автоматическая генерация, оптимизация и публикация контента в Pinterest с помощью искусственного интеллекта
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={scrollToDemo}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-base hover:opacity-90 transition-opacity"
          >
            Попробовать бесплатно
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none border border-[hsl(var(--border))] text-[hsl(var(--foreground))] font-medium text-base hover:bg-[hsl(var(--accent))] transition-colors">
            Смотреть демо
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {[
            { value: "10M+", label: "Пинов создано" },
            { value: "50K+", label: "Активных пользователей" },
            { value: "99.9%", label: "Время работы" },
            { value: "4.9/5", label: "Рейтинг" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-medium text-[hsl(var(--foreground))]">{stat.value}</div>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
