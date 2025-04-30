import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-4 md:px-6">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Готовы к профессиональному росту?
                </h2>
                <p className="opacity-90 max-w-[600px]">
                  Начните обучение сегодня и получите официальный сертификат, подтверждающий вашу квалификацию в сфере охранной деятельности
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:flex-row lg:justify-end">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Каталог курсов
                </Button>
                <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                  Начать бесплатно
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
