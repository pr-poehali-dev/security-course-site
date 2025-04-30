import { CheckCircle, Award, Clock, FileText } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-accent py-14 sm:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Официальная аттестация</h3>
            <p className="text-muted-foreground">
              Получите государственный сертификат, подтверждающий вашу квалификацию в сфере охранной деятельности
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Удобный график</h3>
            <p className="text-muted-foreground">
              Обучайтесь в любое время и в любом месте благодаря гибкому онлайн-формату курсов
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Современные материалы</h3>
            <p className="text-muted-foreground">
              Актуальные учебные материалы, разработанные профессионалами отрасли в соответствии с законодательством
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
