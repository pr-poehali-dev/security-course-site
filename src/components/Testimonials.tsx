import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Александр Петров",
    role: "Руководитель охранного предприятия",
    content: "Отличный современный портал для обучения. Наши сотрудники прошли курсы и получили все необходимые документы для работы. Особенно понравилась простота использования и качество учебных материалов.",
    rating: 5,
    avatar: "АП"
  },
  {
    id: 2,
    name: "Елена Иванова",
    role: "Сотрудник ЧОП",
    content: "Прошла курс повышения квалификации на этой платформе. Информация подается структурированно и понятно. Тесты помогли закрепить знания, а сертификат получила сразу после окончания курса.",
    rating: 5,
    avatar: "ЕИ"
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    role: "Начальник службы безопасности",
    content: "Организовал обучение для всего отдела. Удобная система позволила отслеживать прогресс каждого сотрудника. Материалы актуальны и соответствуют современным требованиям к охранной деятельности.",
    rating: 4,
    avatar: "ДС"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Отзывы о наших курсах</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Мнения специалистов, прошедших обучение на нашей платформе
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-10">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
