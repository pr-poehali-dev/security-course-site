import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Clock, ArrowRight, Check, X } from "lucide-react";

const testCategories = [
  { id: "category-4", name: "4 разряд", questionsCount: 10 },
  { id: "category-5", name: "5 разряд", questionsCount: 15 },
  { id: "category-6", name: "6 разряд", questionsCount: 20 },
  { id: "category-legal", name: "Правовая подготовка", questionsCount: 12 },
  { id: "category-tactical", name: "Тактическая подготовка", questionsCount: 10 },
  { id: "category-technical", name: "Техническая подготовка", questionsCount: 8 },
];

const sampleQuestions = [
  {
    id: 1,
    question: "В каком нормативном акте содержатся правовые основы частной охранной деятельности?",
    options: [
      { id: "a1", text: "Закон РФ «О частной детективной и охранной деятельности в РФ»" },
      { id: "a2", text: "Федеральный закон «Об оружии»" },
      { id: "a3", text: "Уголовный кодекс Российской Федерации" },
      { id: "a4", text: "Трудовой кодекс Российской Федерации" }
    ],
    correctAnswer: "a1"
  },
  {
    id: 2,
    question: "Какие виды специальных средств разрешены для использования в частной охранной деятельности?",
    options: [
      { id: "b1", text: "Резиновые палки, наручники и газовые баллончики" },
      { id: "b2", text: "Электрошоковые устройства и искровые разрядники" },
      { id: "b3", text: "Резиновые палки, наручники, газовые баллончики и электрошоковые устройства" },
      { id: "b4", text: "Любые специальные средства, сертифицированные в РФ" }
    ],
    correctAnswer: "b3"
  },
  {
    id: 3,
    question: "В каких случаях охранник имеет право применить физическую силу?",
    options: [
      { id: "c1", text: "Только для пресечения преступлений" },
      { id: "c2", text: "Для защиты жизни и здоровья охраняемого лица или своих" },
      { id: "c3", text: "При любом неповиновении охраняемому объекту" },
      { id: "c4", text: "Только по письменному распоряжению руководителя ЧОП" }
    ],
    correctAnswer: "c2"
  },
  {
    id: 4,
    question: "Каков срок действия удостоверения частного охранника?",
    options: [
      { id: "d1", text: "1 год" },
      { id: "d2", text: "3 года" },
      { id: "d3", text: "5 лет" },
      { id: "d4", text: "Бессрочно" }
    ],
    correctAnswer: "d3"
  },
  {
    id: 5,
    question: "Какие документы обязан иметь при себе охранник во время исполнения служебных обязанностей?",
    options: [
      { id: "e1", text: "Только паспорт гражданина РФ" },
      { id: "e2", text: "Удостоверение частного охранника и паспорт" },
      { id: "e3", text: "Личную карточку и удостоверение частного охранника" },
      { id: "e4", text: "Удостоверение частного охранника, личную карточку охранника и паспорт" }
    ],
    correctAnswer: "e4"
  }
];

const Testing = () => {
  const [activeTab, setActiveTab] = useState("demo");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  
  const currentQuestion = sampleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / sampleQuestions.length) * 100;
  
  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answerId
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setTestCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setTestCompleted(false);
    setTimeLeft(300);
  };
  
  const correctAnswersCount = testCompleted
    ? Object.entries(selectedAnswers).filter(
        ([questionIndex, answerId]) => 
          sampleQuestions[parseInt(questionIndex)].correctAnswer === answerId
      ).length
    : 0;
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-6">Онлайн-тестирование</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Проверьте свои знания перед экзаменом с помощью наших тестов, разработанных на основе 
              реальных экзаменационных вопросов
            </p>
          </div>
          
          <Tabs defaultValue="demo" value={activeTab} onValueChange={setActiveTab} className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="demo">Демо-тест</TabsTrigger>
              <TabsTrigger value="categories">Категории тестов</TabsTrigger>
              <TabsTrigger value="full">Полные тесты</TabsTrigger>
            </TabsList>
            
            <TabsContent value="demo">
              {!testCompleted ? (
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Демонстрационный тест</CardTitle>
                        <CardDescription>Вопрос {currentQuestionIndex + 1} из {sampleQuestions.length}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{formatTime(timeLeft)}</span>
                      </div>
                    </div>
                    <Progress value={progress} className="mt-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                      <RadioGroup 
                        value={selectedAnswers[currentQuestionIndex]} 
                        onValueChange={handleAnswerSelect}
                      >
                        {currentQuestion.options.map((option) => (
                          <div key={option.id} className="flex items-center space-x-2 mb-4">
                            <RadioGroupItem value={option.id} id={option.id} />
                            <Label htmlFor={option.id} className="cursor-pointer flex-1 py-2">
                              {option.text}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={handlePrevQuestion}
                      disabled={currentQuestionIndex === 0}
                    >
                      Предыдущий
                    </Button>
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={!selectedAnswers[currentQuestionIndex]}
                    >
                      {currentQuestionIndex < sampleQuestions.length - 1 ? (
                        <>Следующий <ArrowRight className="ml-2 h-4 w-4" /></>
                      ) : (
                        'Завершить тест'
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <Card className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle>Результаты тестирования</CardTitle>
                    <CardDescription>
                      Вы ответили правильно на {correctAnswersCount} из {sampleQuestions.length} вопросов
                      ({Math.round((correctAnswersCount / sampleQuestions.length) * 100)}%)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Alert className={correctAnswersCount >= 4 ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
                      <div className="flex items-start">
                        {correctAnswersCount >= 4 ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                        )}
                        <div>
                          <AlertTitle className={correctAnswersCount >= 4 ? "text-green-600" : "text-red-600"}>
                            {correctAnswersCount >= 4 ? "Тест пройден успешно!" : "Тест не пройден"}
                          </AlertTitle>
                          <AlertDescription className="text-muted-foreground">
                            {correctAnswersCount >= 4 
                              ? "Поздравляем! Вы успешно прошли демонстрационный тест. Для доступа к полным тестам зарегистрируйтесь на сайте."
                              : "К сожалению, вы не набрали минимальное количество баллов. Рекомендуем повторить материал и попробовать снова."}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                    
                    <h3 className="text-lg font-medium mt-8 mb-4">Ваши ответы:</h3>
                    <div className="space-y-4">
                      {sampleQuestions.map((question, index) => {
                        const userAnswer = selectedAnswers[index];
                        const isCorrect = userAnswer === question.correctAnswer;
                        const selectedOption = question.options.find(opt => opt.id === userAnswer);
                        const correctOption = question.options.find(opt => opt.id === question.correctAnswer);
                        
                        return (
                          <div key={question.id} className="border rounded-md p-4">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{index + 1}. {question.question}</h4>
                              {isCorrect ? (
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                              )}
                            </div>
                            
                            <div className="mt-2 text-sm">
                              <div className={`p-2 rounded ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                                <p>Ваш ответ: {selectedOption?.text || "Не выбран"}</p>
                              </div>
                              
                              {!isCorrect && (
                                <div className="p-2 mt-2 rounded bg-green-50">
                                  <p>Правильный ответ: {correctOption?.text}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleRestartTest} className="mr-4">Пройти тест заново</Button>
                    <Button variant="outline" onClick={() => setActiveTab("categories")}>
                      Выбрать другой тест
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="categories">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testCategories.map((category) => (
                  <Card key={category.id} className="hover-scale">
                    <CardHeader>
                      <CardTitle>{category.name}</CardTitle>
                      <CardDescription>
                        {category.questionsCount} вопросов для проверки знаний
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Тесты составлены на основе реальных экзаменационных билетов.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => setActiveTab("demo")} className="w-full">
                        Пройти тест
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="full">
              <Card className="max-w-3xl mx-auto text-center p-8">
                <CardContent>
                  <div className="mb-6">
                    <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Доступ к полным тестам</h2>
                    <p className="text-muted-foreground">
                      Полные тесты доступны только зарегистрированным пользователям или при покупке курса
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full sm:w-auto">Зарегистрироваться</Button>
                    <Button variant="outline" className="w-full sm:w-auto">Войти в аккаунт</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testing;
