import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const regions = [
  { id: 1, name: 'Акмолинская область', level: 'safe', value: 15, trend: 'down', population: 738587 },
  { id: 2, name: 'Актюбинская область', level: 'warning', value: 65, trend: 'stable', population: 910131 },
  { id: 3, name: 'Алматинская область', level: 'safe', value: 25, trend: 'down', population: 2078420 },
  { id: 4, name: 'Атырауская область', level: 'danger', value: 82, trend: 'up', population: 690465 },
  { id: 5, name: 'Восточно-Казахстанская область', level: 'warning', value: 58, trend: 'up', population: 1369601 },
  { id: 6, name: 'Жамбылская область', level: 'critical', value: 95, trend: 'up', population: 1152484 },
  { id: 7, name: 'Западно-Казахстанская область', level: 'danger', value: 78, trend: 'stable', population: 673000 },
  { id: 8, name: 'Карагандинская область', level: 'safe', value: 20, trend: 'down', population: 1371003 },
  { id: 9, name: 'Костанайская область', level: 'warning', value: 45, trend: 'up', population: 859794 },
  { id: 10, name: 'Кызылординская область', level: 'safe', value: 30, trend: 'stable', population: 827835 },
  { id: 11, name: 'Мангистауская область', level: 'safe', value: 18, trend: 'down', population: 720000 },
  { id: 12, name: 'Павлодарская область', level: 'warning', value: 52, trend: 'up', population: 744201 },
  { id: 13, name: 'Северо-Казахстанская область', level: 'danger', value: 88, trend: 'up', population: 547451 },
  { id: 14, name: 'Туркестанская область', level: 'safe', value: 22, trend: 'down', population: 2093723 },
];

const dangerLevels = {
  safe: { label: 'Безопасно', color: 'bg-green-500', textColor: 'text-green-700', bgLight: 'bg-green-50', icon: 'CheckCircle2' },
  warning: { label: 'Повышенный уровень', color: 'bg-yellow-500', textColor: 'text-yellow-700', bgLight: 'bg-yellow-50', icon: 'AlertTriangle' },
  danger: { label: 'Опасно', color: 'bg-orange-500', textColor: 'text-orange-700', bgLight: 'bg-orange-50', icon: 'AlertOctagon' },
  critical: { label: 'Критическая опасность', color: 'bg-red-500', textColor: 'text-red-700', bgLight: 'bg-red-50', icon: 'XCircle' },
};

const recommendations = {
  safe: ['Ситуация под контролем', 'Можно продолжать обычную деятельность', 'Следите за обновлениями'],
  warning: ['Будьте готовы к эвакуации', 'Подготовьте документы и ценные вещи', 'Следите за официальными сообщениями'],
  danger: ['Эвакуируйтесь в безопасное место', 'Не приближайтесь к водоёмам', 'Отключите газ и электричество при необходимости'],
  critical: ['Немедленная эвакуация!', 'Звоните 112 при угрозе жизни', 'Поднимайтесь на возвышенности'],
};

export default function Index() {
  const [selectedRegion, setSelectedRegion] = useState(regions[5]);

  const criticalCount = regions.filter(r => r.level === 'critical').length;
  const dangerCount = regions.filter(r => r.level === 'danger').length;
  const warningCount = regions.filter(r => r.level === 'warning').length;
  const safeCount = regions.filter(r => r.level === 'safe').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-orange-50">
      <header className="bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] text-white shadow-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 animate-fade-in">
              <Icon name="Droplets" size={40} className="text-white" />
              <div>
                <h1 className="text-3xl font-bold">Мониторинг паводков</h1>
                <p className="text-blue-100 text-sm">Республика Казахстан</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Icon name="Clock" size={20} />
              <span className="text-sm font-medium">Обновлено: 09.02.2026, 14:30</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-none shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-4xl font-bold">{criticalCount}</CardTitle>
              <CardDescription className="text-red-100 font-medium">Критическая опасность</CardDescription>
            </CardHeader>
            <CardContent>
              <Icon name="XCircle" size={32} className="opacity-50" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-4xl font-bold">{dangerCount}</CardTitle>
              <CardDescription className="text-orange-100 font-medium">Опасно</CardDescription>
            </CardHeader>
            <CardContent>
              <Icon name="AlertOctagon" size={32} className="opacity-50" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-none shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-4xl font-bold">{warningCount}</CardTitle>
              <CardDescription className="text-yellow-100 font-medium">Повышенный уровень</CardDescription>
            </CardHeader>
            <CardContent>
              <Icon name="AlertTriangle" size={32} className="opacity-50" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-none shadow-lg hover:scale-105 transition-transform duration-300 animate-fade-in">
            <CardHeader className="pb-3">
              <CardTitle className="text-4xl font-bold">{safeCount}</CardTitle>
              <CardDescription className="text-green-100 font-medium">Безопасно</CardDescription>
            </CardHeader>
            <CardContent>
              <Icon name="CheckCircle2" size={32} className="opacity-50" />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-xl border-2 animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Map" size={28} className="text-primary" />
                    Интерактивная карта регионов
                  </CardTitle>
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    14 регионов
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {regions.map((region, index) => {
                    const danger = dangerLevels[region.level];
                    return (
                      <div
                        key={region.id}
                        onClick={() => setSelectedRegion(region)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                          selectedRegion.id === region.id ? 'ring-4 ring-primary shadow-xl scale-105' : ''
                        } ${danger.bgLight} ${region.level === 'critical' ? 'animate-pulse-glow' : ''}`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-sm leading-tight">{region.name}</h3>
                          <Icon name={danger.icon} size={20} className={danger.textColor} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Уровень опасности</span>
                            <span className="font-bold">{region.value}%</span>
                          </div>
                          <Progress value={region.value} className="h-2" />
                          <div className="flex items-center justify-between">
                            <Badge className={`${danger.color} text-white text-xs`}>
                              {danger.label}
                            </Badge>
                            <div className="flex items-center gap-1">
                              {region.trend === 'up' && <Icon name="TrendingUp" size={16} className="text-red-500" />}
                              {region.trend === 'down' && <Icon name="TrendingDown" size={16} className="text-green-500" />}
                              {region.trend === 'stable' && <Icon name="Minus" size={16} className="text-gray-500" />}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Icon name="BarChart3" size={28} className="text-secondary" />
                  Статистика по регионам
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Обзор</TabsTrigger>
                    <TabsTrigger value="trends">Динамика</TabsTrigger>
                    <TabsTrigger value="population">Население</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Критическая опасность</span>
                        <span className="text-2xl font-bold text-red-600">{criticalCount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium">Опасно</span>
                        <span className="text-2xl font-bold text-orange-600">{dangerCount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium">Повышенный уровень</span>
                        <span className="text-2xl font-bold text-yellow-600">{warningCount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Безопасно</span>
                        <span className="text-2xl font-bold text-green-600">{safeCount}</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="trends" className="space-y-4 mt-6">
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="TrendingUp" size={24} className="text-red-600" />
                          <span className="font-medium">Рост уровня воды</span>
                        </div>
                        <span className="text-2xl font-bold text-red-600">6 регионов</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="TrendingDown" size={24} className="text-green-600" />
                          <span className="font-medium">Снижение уровня воды</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">5 регионов</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icon name="Minus" size={24} className="text-gray-600" />
                          <span className="font-medium">Стабильная ситуация</span>
                        </div>
                        <span className="text-2xl font-bold text-gray-600">3 региона</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="population" className="space-y-4 mt-6">
                    <div className="space-y-3">
                      {regions
                        .filter(r => r.level === 'critical' || r.level === 'danger')
                        .sort((a, b) => b.population - a.population)
                        .map(region => (
                          <div key={region.id} className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                            <div>
                              <div className="font-medium">{region.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {region.population.toLocaleString('ru-RU')} чел.
                              </div>
                            </div>
                            <Badge className={dangerLevels[region.level].color}>
                              {dangerLevels[region.level].label}
                            </Badge>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="shadow-xl border-2 animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">Детальная информация</CardTitle>
                  <Icon name={dangerLevels[selectedRegion.level].icon} size={24} className={dangerLevels[selectedRegion.level].textColor} />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">{selectedRegion.name}</h3>
                  <Badge className={`${dangerLevels[selectedRegion.level].color} text-white mb-3`}>
                    {dangerLevels[selectedRegion.level].label}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Уровень опасности</span>
                    <span className="font-bold text-lg">{selectedRegion.value}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Население</span>
                    <span className="font-bold text-lg">{selectedRegion.population.toLocaleString('ru-RU')}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Динамика</span>
                    <div className="flex items-center gap-2">
                      {selectedRegion.trend === 'up' && (
                        <>
                          <Icon name="TrendingUp" size={20} className="text-red-500" />
                          <span className="font-bold text-red-500">Растёт</span>
                        </>
                      )}
                      {selectedRegion.trend === 'down' && (
                        <>
                          <Icon name="TrendingDown" size={20} className="text-green-500" />
                          <span className="font-bold text-green-500">Снижается</span>
                        </>
                      )}
                      {selectedRegion.trend === 'stable' && (
                        <>
                          <Icon name="Minus" size={20} className="text-gray-500" />
                          <span className="font-bold text-gray-500">Стабильно</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-lg ${dangerLevels[selectedRegion.level].bgLight} border-2 border-${selectedRegion.level === 'critical' ? 'red' : selectedRegion.level === 'danger' ? 'orange' : selectedRegion.level === 'warning' ? 'yellow' : 'green'}-200`}>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Icon name="Info" size={20} className={dangerLevels[selectedRegion.level].textColor} />
                    Рекомендации населению
                  </h4>
                  <ul className="space-y-2">
                    {recommendations[selectedRegion.level].map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Icon name="ChevronRight" size={16} className={`mt-0.5 flex-shrink-0 ${dangerLevels[selectedRegion.level].textColor}`} />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Bell" size={24} />
                  Экстренная связь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <div className="text-sm opacity-90 mb-1">Единая служба спасения</div>
                  <div className="text-2xl font-bold">112</div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <div className="text-sm opacity-90 mb-1">МЧС Казахстана</div>
                  <div className="text-2xl font-bold">101</div>
                </div>
                <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                  <div className="text-sm opacity-90 mb-1">Горячая линия</div>
                  <div className="text-xl font-bold">8-800-080-112</div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Icon name="Radio" size={24} className="text-primary" />
                  О системе мониторинга
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p className="leading-relaxed">
                  Система мониторинга паводков обрабатывает данные с метеостанций, гидропостов и спутников в режиме реального времени.
                </p>
                <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                  <Icon name="Satellite" size={20} className="text-primary" />
                  <span className="font-medium">Спутниковое наблюдение 24/7</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-secondary/10 rounded-lg">
                  <Icon name="Database" size={20} className="text-secondary" />
                  <span className="font-medium">140+ датчиков мониторинга</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-green-100 rounded-lg">
                  <Icon name="Zap" size={20} className="text-green-600" />
                  <span className="font-medium">Обновление каждые 15 минут</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Droplets" size={28} />
              <span className="font-bold text-lg">Мониторинг паводков РК</span>
            </div>
            <div className="text-center md:text-right text-sm text-gray-300">
              <p>© 2026 Министерство по чрезвычайным ситуациям РК</p>
              <p className="text-xs mt-1">Данные обновляются автоматически</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
