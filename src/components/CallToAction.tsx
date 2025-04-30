import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const CallToAction = () => {
  const benefits = [
    "Официальное удостоверение",
    "Доступ к материалам 24/7",
    "Практические задания",
    "Поддержка наставника"
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="rounded-xl bg-gradient-to-r from-primary/80 to-primary overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Начните обучение сегодня и получите скидку 20%
              </h2>
              <p className="mb-8 text-lg text-white/90">
                Специальное предложение для новых учеников. Запишитесь на курс до конца месяца и получите дополнительные бонусные материалы.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-white" />
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary" className="text-primary">
                  <Link to="/courses">Выбрать курс</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="/demo">Демо-доступ</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-full min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Обучение охранников"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
