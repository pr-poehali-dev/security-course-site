import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 md:py-12 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">ОхранаКурс</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Профессиональная платформа для обучения и аттестации сотрудников охранных предприятий
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h4 className="font-medium">Платформа</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-foreground">Главная</Link></li>
                <li><Link to="/courses" className="text-muted-foreground hover:text-foreground">Курсы</Link></li>
                <li><Link to="/testing" className="text-muted-foreground hover:text-foreground">Тестирование</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Поддержка</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">Частые вопросы</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Связаться с нами</Link></li>
                <li><Link to="/help" className="text-muted-foreground hover:text-foreground">Помощь</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3 col-span-2 md:col-span-1">
              <h4 className="font-medium">Контакты</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">info@okhranakurs.ru</li>
                <li className="text-muted-foreground">+7 (495) 123-45-67</li>
                <li className="text-muted-foreground">Москва, ул. Примерная, д. 123</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 ОхранаКурс. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
