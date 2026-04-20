"use client";

import { motion } from "framer-motion";
import { PinCanvas } from "./PinCanvas";
import { Sparkles } from "lucide-react";

export function Demo() {
  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium">Попробуйте сейчас</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Создай свой <span className="gradient-text">первый пин</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Загрузите изображение или сгенерируйте его с помощью AI, добавьте текст и скачайте готовый пин
          </p>
        </motion.div>

        {/* Pin Generator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PinCanvas />
        </motion.div>
      </div>
    </section>
  );
}
