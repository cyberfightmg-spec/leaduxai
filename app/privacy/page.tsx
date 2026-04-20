import { Metadata } from "next";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — LeaduxAI.id",
  description: "Политика конфиденциальности сервиса LeaduxAI.id",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground">
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты персональных данных пользователей сервиса LeaduxAI.id (далее — «Сервис»).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Сбор персональных данных</h2>
            <p className="text-muted-foreground mb-2">
              Мы собираем следующие персональные данные:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Имя и фамилия</li>
              <li>Email адрес</li>
              <li>Данные аккаунта Pinterest</li>
              <li>IP-адрес и данные о браузере</li>
              <li>Cookies и аналогичные технологии</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Использование персональных данных</h2>
            <p className="text-muted-foreground mb-2">
              Мы используем ваши персональные данные для:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Предоставления доступа к Сервису</li>
              <li>Обработки и публикации контента в Pinterest</li>
              <li>Улучшения качества Сервиса</li>
              <li>Коммуникации с пользователями</li>
              <li>Соблюдения правовых обязательств</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Защита данных</h2>
            <p className="text-muted-foreground">
              Мы применяем современные методы защиты данных, включая шифрование SSL/TLS, контроль доступа и регулярный аудит безопасности. Ваши данные хранятся на защищённых серверах с ограниченным доступом.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground">
              Мы не продаём ваши персональные данные. Ваши данные могут быть переданы третьим лицам только в случаях, предусмотренных законодательством, или для предоставления услуг (например, хостинг-провайдерам).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">
              Мы используем cookies для улучшения работы Сервиса. Вы можете отключить cookies в настройках браузера, но это может повлиять на функциональность Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Права пользователей</h2>
            <p className="text-muted-foreground mb-2">
              Вы имеете право:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Получить доступ к своим персональным данным</li>
              <li>Исправить неточные данные</li>
              <li>Удалить свои данные</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Контакты</h2>
            <p className="text-muted-foreground">
              Если у вас есть вопросы о настоящей Политике, вы можете связаться с нами по email: hello@leaduxai.id
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Изменения</h2>
            <p className="text-muted-foreground">
              Мы оставляем за собой право изменять настоящую Политику. Изменения вступают в силу с момента их публикации на этой странице.
            </p>
          </section>

          <p className="text-muted-foreground text-sm mt-12">
            Последнее обновление: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}