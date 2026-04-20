"use client";

import { motion } from "framer-motion";


const footerLinks = {
  product: [
    { name: "Возможности", href: "#features" },
    { name: "Демо", href: "#demo" },
    { name: "API", href: "#" },
  ],
  company: [
    { name: "О нас", href: "#" },
    { name: "Блог", href: "#" },
    { name: "Вакансии", href: "#" },
    { name: "Контакты", href: "#" },
  ],
  resources: [
    { name: "Документация", href: "#" },
    { name: "Центр помощи", href: "#" },
    { name: "Сообщество", href: "#" },
    { name: "Шаблоны", href: "#" },
  ],
  legal: [
    { name: "Политика конфиденциальности", href: "/privacy" },
    { name: "Условия использования", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Лицензии", href: "#" },
  ],
};



export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-border">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                LeaduxAI.id
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-xs">
                AI-powered Pinterest automation platform. Создавайте, оптимизируйте и публикуйте контент в один клик.
              </p>
            </motion.div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 sm:p-8 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-1">Будьте в курсе</h4>
              <p className="text-sm text-muted-foreground">
                Получайте последние новости и обновления продукта
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Введите ваш email"
                className="flex-1 sm:w-64 px-4 py-3 rounded-xl bg-background border border-input focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
              />
              <button className="px-6 py-3 rounded-xl gradient-bg text-white font-medium text-sm hover:shadow-lg transition-shadow whitespace-nowrap">
                Подписаться
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeaduxAI.id. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
