"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export function PrivacySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm text-muted-foreground">Политика конфиденциальности</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-6">
            Мы заботимся о безопасности ваших данных. Ваши персональные данные хранятся на защищённых серверах и используются только для предоставления услуг сервиса.
          </p>
          <a
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm gradient-text hover:opacity-80 transition-opacity"
          >
            Читать полную политику конфиденциальности
          </a>
        </motion.div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} leaduxAI. Все права защищены.
        </p>
      </div>
    </section>
  );
}
