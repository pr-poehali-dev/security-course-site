import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Shield, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    category: "basic",
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
    category: "special",
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
    category: "professional",
    price: "14 500 ₽"
  },
  {
    id: 4,
    title: "Повышение квалификации охранников",
    description: "Курс для действующих охранников для продления разряда",
    duration: "20 часов",
    level: "Разный",
    students: 1580,
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "qualification",
    price: "4 200 ₽"
  },
  {
    id: 5,
    title: "Специальная подготовка по работе с оружием",
    description: "Дополнительная подготовка по обращению с оружием для охранников 6 разряда",
    duration: "40 часов",
    level: "Продвинутый",
    students: 320,
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Специальный",
    category: "professional",
    price: "8 500 ₽"
  },
  {
    id: 6,
    title: "Работа с системами видеонаблюдения",
    description: "Курс для охранников по эффективной работе с системами наблюдения",
    duration: "30 часов",
    level: "Средний",
    students: 480,
    image: "https://images.unsplash.com/photo-1567276697331-7b7edab1a8f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "special",
    price: "6 700 ₽"
  }
];

const Courses = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-6">Каталог курсов</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Выберите подходящий курс для получения или продления разряда, 
              повышения квалификации и развития профессиональных навыков
            </p>
          </div>
          
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Поиск курсов..." className="pl-9" />
            </div>
            <Button variant="outline" className="shrink-0">Фильтры</Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все курсы</TabsTrigger>
              <TabsTrigger value="basic">4 разряд</TabsTrigger>
              <TabsTrigger value="special">5 разряд</TabsTrigger>
              <TabsTrigger value="professional">6 разряд</TabsTrigger>
              <TabsTrigger value="qualification">Повышение квалификации</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="basic">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "basic")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="special">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "special")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "professional")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="qualification">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses
                  .filter((course) => course.category === "qualification")
                  .map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

type CourseCardProps = {
  course: {
    id: number;
    title: string;
    description: string;
    duration: string;
    level: string;
    students: number;
    image: string;
    badge?: string;
    category: string;
    price: string;
  };
};

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover-scale">
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
  );
};

export default Courses;
