import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Отличная платформа для обучения охранников. Удобно, что можно проходить курсы в любое время. Успешно сдал экзамен на 4 разряд с первого раза.",
    author: "Александр Петров",
    role: "Охранник, 4 разряд",
    avatar: "AP",
    rating: 5
  },
  {
    id: 2,
    content: "Проходил повышение квалификации на 6 разряд. Материалы актуальные, тесты помогли хорошо подготовиться к экзамену. Рекомендую коллегам.",
    author: "Михаил Соколов",
    role: "Начальник охраны",
    avatar: "МС",
    rating: 5
  },
  {
    id: 3,
    content: "Отличный курс для начинающих. Никогда раньше не работал в охране, но благодаря понятным материалам смог освоить профессию и получить 4 разряд.",
    author: "Дмитрий Иванов",
    role: "Охранник торгового центра",
    avatar: "ДИ",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Отзывы наших выпускников
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Более 5000 специалистов успешно прошли обучение на нашей платформе и получили официальные разряды
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-primary text-primary" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-card-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
