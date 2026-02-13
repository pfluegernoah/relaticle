/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.{blade.php,js,vue}',
    './app/**/*.{blade.php,js,php}',
    './app-modules/**/*.{blade.php,js,php}',
    './vendor/filament/**/*.blade.php',
    './vendor/relaticle/**/*.blade.php',
    './vendor/awcodes/**/*.blade.php',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
