import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  imageSrc: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Базовый курс для охранников",
    description: "Основы профессиональной подготовки для начинающих специалистов охранной деятельности",
    level: "Начальный",
    duration: "40 часов",
    price: 7500,
    imageSrc: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 2,
    title: "Курс повышения квалификации",
    description: "Углубленное изучение тактики охраны и современных средств защиты для специалистов с опытом",
    level: "Продвинутый",
    duration: "72 часа",
    price: 12000,
    imageSrc: "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    id: 3,
    title: "Подготовка к аттестации",
    description: "Интенсивный курс для подготовки к прохождению официальной аттестации и получения лицензии",
    level: "Специализированный",
    duration: "24 часа",
    price: 5000,
    imageSrc: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

const CoursesList = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Наши курсы</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Выберите подходящую программу обучения для повышения вашей квалификации
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-10">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col h-full overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={course.imageSrc} 
                  alt={course.title} 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{course.title}</CardTitle>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{course.duration}</span>
                  </div>
                  <div className="text-lg font-semibold">{course.price} ₽</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Подробнее о курсе</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg">Показать все курсы</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;

import { Clock } from "lucide-react";
