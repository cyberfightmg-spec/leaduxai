"use client";

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
    <footer className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-[hsl(var(--border))]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <div className="col-span-2">
            <h3 className="text-xl font-medium mb-4 text-[hsl(var(--foreground))]">
              leaduxAI
            </h3>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6 max-w-xs">
              AI-powered Pinterest automation platform. Создавайте, оптимизируйте и публикуйте контент в один клик.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-medium mb-4 capitalize text-[hsl(var(--foreground))]">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 p-6 border border-[hsl(var(--border))]">
          <div>
            <h4 className="font-medium mb-1 text-[hsl(var(--foreground))]">Будьте в курсе</h4>
            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Получайте последние новости и обновления продукта
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Введите ваш email"
              className="flex-1 sm:w-64 px-4 py-3 bg-[hsl(var(--background))] border border-[hsl(var(--border))] outline-none transition-all text-sm text-[hsl(var(--foreground))]"
            />
            <button className="px-6 py-3 bg-[hsl(var(--foreground))] text-[hsl(var(--background))] font-medium text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[hsl(var(--border))]">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            © {new Date().getFullYear()} LeaduxAI.id. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
