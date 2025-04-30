import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Базовый курс охранника 4 разряда",
    description: "Начальная подготовка для работы в сфере охраны без права ношения оружия",
    duration: "40 часов",
    level: "Начальный",
    students: 1240,
    image: "https://images.unsplash.com/photo-1608755728617-aefab37d2ced?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Популярный",
    price: "5 900 ₽"
  },
  {
    id: 2,
    title: "Курс охранника 5 разряда",
    description: "Подготовка специалистов с правом использования специальных средств",
    duration: "60 часов",
    level: "Средний",
    students: 860,
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "9 800 ₽"
  },
  {
    id: 3,
    title: "Профессиональный курс 6 разряда",
    description: "Полный курс для специалистов с правом ношения оружия",
    duration: "80 часов",
    level: "Продвинутый",
    students: 645,
    image: "https://images.unsplash.com/photo-1565528252780-bddda3160771?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Сертификация",
    price: "14 500 ₽"
  }
];

const CoursesList = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Наши курсы
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Выберите программу обучения, соответствующую вашим профессиональным целям
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/courses">Все курсы</Link>
          </Button>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden transition-all hover-scale">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {course.badge && (
                  <Badge className="absolute right-3 top-3 bg-primary">{course.badge}</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{course.students} учеников</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span>Сертификат</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="text-lg font-semibold">{course.price}</div>
                <Button>Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
