<template>
  <h1 class="visually-hidden">О школе Английского в Красноярске</h1>

  <HomeLayout>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto max-w-2xl gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none"
        >
          <a href="/" class="text-base/7 font-semibold text-indigo-600">
            <- Назад
          </a>
          <div class="lg:max-w-4xl">
            <h2
              class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
            >
              English Time – Студия Иностранных Языков
            </h2>
            <p class="mt-6 text-lg/8 text-gray-600">
              Добро пожаловать в English Time, студию иностранных языков, где
              обучение английскому и французскому языку становится не только
              эффективным, но и приятным! Мы предлагаем уникальные программы для
              всех уровней подготовки, от начинающих до продвинутых студентов.
              <br />
              <br />
              <br />
              <strong> Преимущества обучения в English Time: </strong>
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="font-semibold text-gray-900">
                  <span
                    class="absolute left-1 top-1 size-5 text-indigo-600"
                    aria-hidden="true"
                  >
                    {{ feature.icon }}</span
                  >
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </HomeLayout>
</template>

<script setup>
import HomeLayout from "../layout/home.vue";
// import Footer from './components/footer.vue'
// import Team from './components/team.vue'
import InfinityTable from "../components/infinity-table.vue";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Индивидуальный подход.",
    description:
      "Наши преподаватели разрабатывают учебные планы, учитывая ваши цели и потребности. Вы можете выбрать удобный график занятий и интенсивность курса.",
    icon: "👤",
  },
  {
    name: "Современные методики.",
    description:
      "Мы используем самые актуальные методы преподавания, включая коммуникативный подход, что позволяет вам быстро освоить разговорный английский и французский язык.",
    icon: "💡",
  },
  {
    name: "Опытные преподаватели.",
    description:
      "В нашей команде работают квалифицированные педагоги, которые постоянно развиваются и повышают квалификацию.",
    icon: "👩‍🏫",
  },
  {
    name: "Разнообразие курсов.",
    description:
      "У нас есть курсы общего английского языка, бизнес-английского, подготовка к международным экзаменам, французский язык, а также специализированные курсы по различным тематикам.",
    icon: "📚",
  },
  {
    name: "Технологическая поддержка.",
    description:
      "Мы активно внедряем современные технологии в процесс обучения, такие как онлайн-платформы, интерактивные задания и видеоматериалы.",
    icon: "💻",
  },
  {
    name: "Гибкость и удобство.",
    description:
      "Занятия могут проходить как очно, так и дистанционно через нашу онлайн-платформу, что делает обучение доступным в любое время и месте.",
    icon: "📅",
  },
  {
    name: "Мотивирующая атмосфера.",
    description:
      "В наших классах царит дружелюбная и поддерживающая атмосфера, которая помогает студентам чувствовать себя уверенно и достигать высоких результатов.",
    icon: "😊",
  },
  {
    name: "Постоянное развитие.",
    description:
      "Мы регулярно проводим семинары, мастер-классы и разговорные клубы, чтобы вы могли совершенствовать свои навыки общения на английском языке.",
    icon: "🎓",
  },
  {
    name: "Поддержка после окончания курса.",
    description:
      "После завершения обучения у вас будет возможность продолжать практиковаться в нашем сообществе выпускников и получать консультации преподавателей.",
    icon: "🤝",
  },
  {
    name: "Бесплатные пробные уроки.",
    description:
      "Перед началом обучения мы предлагаем пройти бесплатный пробный урок, чтобы вы смогли оценить наш подход и познакомиться с преподавателем.",
    icon: "🎁",
  },
  {
    name: "Скидки на групповые занятия.",
    description:
      "При записи на курс вместе с друзьями или коллегами вы получите скидку на обучение.",
    icon: "👥",
  },
  {
    name: "Подарочные сертификаты.",
    description:
      "Мы предоставляем подарочные сертификаты, которые можно использовать для оплаты курсов или подарить друзьям и близким.",
    icon: "🎟️",
  },
];
</script>
