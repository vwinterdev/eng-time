<template>
  <div />
</template>

<script setup>
import { useHead } from 'unhead'

useHead({
  script: [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Школа английского языка в Красноярске – English time",
      "description": "аша школа предлагает качественное обучение английскому и французскому языкам для всех уровней подготовки – от начального до продвинутого. Мы используем современные методики преподавания, которые помогают нашим студентам быстро и эффективно освоить язык. Мы предлагаем курсы английского и французского языков для детей и взрослых в Красноярске. Индивидуальный подход, опытные преподаватели, удобное расписание.",
      "url": "https://english-time24.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Вавилова, 1, строение 39, Красноярск, Красноярский край",
        "addressLocality": "Красноярск",
        "addressRegion": "Красноярский край",
        "postalCode": "660064",
        "addressCountry": "RU"
      },
      "telephone": "+7-391-123-45-67",
      "email": "info@example.com",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 55.992676,
        "longitude": 92.9100228,
      },
      "openingHours": "Mo-Fr 10:00-20:00, Sa-Su 11:00-16:00",
      "sameAs": [
        "https://vk.com/club218856600",
        "https://2gis.ru/krasnoyarsk/geo/70000001080067503",
        "https://t.me/englisssimo"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Курс английского языка для начинающих",
        "description": "Базовый курс английского языка для начинающих. Длительность: 3 месяца.",
        "price": "9900.00",
        "priceCurrency": "RUB",
        "availability": "https://schema.org/InStock",
        "url": "https://english-time24.ru#price"
      },
      "hasCourse": [
        {
          "@type": "Course",
          "name": "Английский язык для начинающих",
          "description": "Интенсивный курс для тех, кто только начинает изучать английский язык.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Школа английского и французского языка"
          }
        },
        {
          "@type": "Course",
          "name": "Французский язык для начинающих",
          "description": "Базовый курс французского языка для начинающих.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Школа английского и французского языка"
          }
        }
      ]
    }
  ],
})

</script>
