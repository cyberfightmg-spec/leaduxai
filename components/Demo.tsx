"use client";

import { PinCanvas } from "./PinCanvas";

export function Demo() {
  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 text-[hsl(var(--foreground))]">
            Создай свой первый пин
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            Загрузите изображение или сгенерируйте его с помощью AI, добавьте текст и скачайте готовый пин
          </p>
        </div>

        <PinCanvas />
      </div>
    </section>
  );
}
