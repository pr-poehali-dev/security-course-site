import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ОхранаКурс</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Лицензированный центр обучения охранников с официальной аккредитацией
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ОхранаКурс. Все права защищены.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Курсы и обучение</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Все курсы
                </Link>
              </li>
              <li>
                <Link to="/course/4" className="text-muted-foreground hover:text-primary transition-colors">
                  4 разряд
                </Link>
              </li>
              <li>
                <Link to="/course/5" className="text-muted-foreground hover:text-primary transition-colors">
                  5 разряд
                </Link>
              </li>
              <li>
                <Link to="/course/6" className="text-muted-foreground hover:text-primary transition-colors">
                  6 разряд
                </Link>
              </li>
              <li>
                <Link to="/testing" className="text-muted-foreground hover:text-primary transition-colors">
                  Тестирование
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О центре
                </Link>
              </li>
              <li>
                <Link to="/licenses" className="text-muted-foreground hover:text-primary transition-colors">
                  Лицензии
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия использования
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Телефон: <a href="tel:+74951234567" className="hover:text-primary transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="text-muted-foreground">
                Email: <a href="mailto:info@ohrankurs.ru" className="hover:text-primary transition-colors">info@ohrankurs.ru</a>
              </li>
              <li className="text-muted-foreground">
                Адрес: г. Москва, ул. Охранная, д. 15
              </li>
              <li className="text-muted-foreground">
                Время работы: Пн-Пт с 9:00 до 18:00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
