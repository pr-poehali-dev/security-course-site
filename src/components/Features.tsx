import { Shield, Clock, CheckCircle, Award, BadgeCheck, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Официальная аккредитация",
      description: "Все наши курсы имеют необходимые лицензии и аккредитации государственных органов"
    },
    {
      icon: Clock,
      title: "Обучение в удобное время",
      description: "Изучайте материалы в любое время суток без отрыва от работы"
    },
    {
      icon: CheckCircle,
      title: "Проверка знаний онлайн",
      description: "Система тестирования позволяет проверить готовность к экзаменам"
    },
    {
      icon: Award,
      title: "Цифровые сертификаты",
      description: "Получите официальное подтверждение квалификации с защитой от подделки"
    },
    {
      icon: BadgeCheck,
      title: "Разряды от 4 до 6",
      description: "Подготовка ко всем категориям охранной деятельности с учетом требований"
    },
    {
      icon: BookOpen,
      title: "Актуальные материалы",
      description: "Контент регулярно обновляется в соответствии с изменениями законодательства"
    }
  ];

  return (
    <section className="bg-accent py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Преимущества нашей платформы
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Обучение на нашем портале имеет ряд важных преимуществ для соискателей и действующих охранников
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-lg border bg-card p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
