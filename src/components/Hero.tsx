import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Профессиональное обучение для сотрудников охраны
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Получите необходимые знания и навыки для успешной работы в сфере безопасности. 
                Онлайн-курсы с сертификацией и аттестацией для охранных предприятий.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <img
                alt="Обучение охранников"
                className="object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1621361389855-4149eb9b7f01?q=80&w=1964&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
