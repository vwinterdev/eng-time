<template>
    <a class="gradient-btn">
        <slot />
    </a>
</template>
<style scoped>
.gradient-btn {
    cursor: pointer;
    display: inline-block;
    border-radius: 0.375rem; /* rounded-md */
    background: linear-gradient(90deg, #4f46e5, #6366f1, #4f46e5);
    background-size: 200%;
    padding: 0.625rem 1rem; /* px-3.5 py-2.5 */
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    color: #fff; /* text-white */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* shadow-sm */
    text-align: center;
    text-decoration: none;
    transition: background 0.3s;
    animation: gradient-animation 3s infinite;
  }
  
  .gradient-btn:hover {
    background-position: right;
  }
  
  .gradient-btn:focus-visible {
    outline: 2px solid #4f46e5;
    outline-offset: 2px;
  }
  
  /* Переливающаяся анимация */
  @keyframes gradient-animation {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
</style>