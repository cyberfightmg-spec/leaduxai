"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "0",
    period: "forever",
    description: "Для знакомства с платформой",
    icon: Sparkles,
    features: [
      "5 пинов в месяц",
      "Базовые шаблоны",
      "Экспорт PNG",
      "Email поддержка",
    ],
    cta: "Начать бесплатно",
    popular: false,
    gradient: "from-slate-500 to-slate-600",
  },
  {
    name: "Pro",
    price: "19",
    period: "month",
    description: "Для профессионалов",
    icon: Zap,
    features: [
      "100 пинов в месяц",
      "Все шаблоны",
      "AI генерация",
      "Аналитика",
      "Приоритетная поддержка",
      "API доступ",
    ],
    cta: "Выбрать Pro",
    popular: true,
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: "49",
    period: "month",
    description: "Для команд и агентств",
    icon: Crown,
    features: [
      "Безлимитные пины",
      "Кастомные шаблоны",
      "White-label",
      "Team collaboration",
      "Dedicated менеджер",
      "SLA гарантия",
    ],
    cta: "Связаться",
    popular: false,
    gradient: "from-amber-500 to-orange-600",
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.5,
              delay: index * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
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
      id="pricing"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Простое <span className="gradient-text">ценообразование</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий план и начните автоматизировать Pinterest уже сегодня
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative rounded-2xl p-1 transition-all duration-500 ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 rounded-full gradient-bg text-white text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card background with gradient border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient} opacity-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : ""
                } ${plan.popular ? "opacity-100" : ""}`}
              />

              {/* Card content */}
              <div
                className={`relative rounded-xl h-full p-6 transition-all duration-300 ${
                  plan.popular
                    ? "bg-background dark:bg-slate-900"
                    : "glass"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}
                >
                  <plan.icon className="w-6 h-6 text-white" />
                </div>

                {/* Plan name */}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "gradient-bg text-white hover:shadow-lg hover:shadow-purple-500/25"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 10,000+ creators and businesses
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            {["Pinterest", "Shopify", "Notion", "Figma"].map((brand) => (
              <span key={brand} className="text-lg font-semibold">
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
