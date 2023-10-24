# The hangman game

## The main goal
The goal of this project is improve the frontend skills.

The project consists of playing the hangman game against the computer, which will choose a word at random. Difficulty level can be set.

## Technologies
- [Astro framework](https://astro.build/)
- [Tailwind](https://tailwindcss.com/)
- Combine different UI Frameworks:
    - [Vue](https://vuejs.org/)
    - [React](https://react.dev/)
    - [Svelte](https://svelte.dev/)
- Deploy the project using [Vercel](https://vercel.com/)

## Modules & Services

### Generate password (TS)
Generate a random word. The password.

### Password discovery (React)
Watch how the user is guessing the password. Showing the correct letters and hiding the others.

### Pick letter (Vue)
Collection of letters for guess the password. Those that are used will be disabled.

### Drawing hangman (Svelte)
Show the picture of the hangman. Every time the user misses a letter, Will advance one more step.

### Instructions (Vue)
Show how to play the game.

### Change difficulty (React)
The difficulty affects the length of the password and the attempts to guess it by picking letters.
