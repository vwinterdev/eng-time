# Stage 1: Сборка Vue-приложения
FROM node:20 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Запускаем сборку приложения с SSG
RUN npm run ssg

# Stage 2: Настройка Nginx для статического хостинга
FROM nginx:alpine

# Копируем сгенерированные статические файлы в папку Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем файл конфигурации Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт для контейнера
EXPOSE 80

# Запуск Nginx
CMD ["nginx", "-g", "daemon off;"]
