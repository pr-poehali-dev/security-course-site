import { Button } from "@/components/ui/button";
import { ShieldCheck, FileCheck, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" aria-hidden="true" />
      <div className="container relative">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Лицензированные курсы для охранников
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Профессиональная <span className="text-primary">подготовка</span> охранников онлайн
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Получите необходимые знания, пройдите тестирование и получите аттестацию для работы в сфере охраны
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="hover-scale">
                <Link to="/courses">Выбрать курс</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <Link to="/testing">Бесплатное тестирование</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <span className="text-sm">Аккредитация МВД</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <span className="text-sm">Цифровые сертификаты</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm">Официальная аттестация</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Профессиональная охрана" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-background/95 p-4 backdrop-blur shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Быстрый старт в профессии</h3>
                    <p className="text-sm text-muted-foreground">Обучение с нуля для получения разрядов 4-6 категории</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
