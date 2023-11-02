# The hangman game

## The main goal
The goal of this project is improve the frontend skills using different frameworks and technologies.
Some of them I'm already familiar with, but others are new to me.

## Technologies & Frameworks

The following technologies and frameworks I've never used before. So the goal is to 
end up being familiar with them:

- [TypeScript](https://www.typescriptlang.org/). Superset of JavaScript.
- [Astro framework](https://astro.build/). It's a new framework that I'm really 
  interested in. I like the idea of this framework which allows to combine different 
  frameworks.
- [Nano stores](https://github.com/nanostores/nanostores). State management.
- [Tailwind](https://tailwindcss.com/). Styling framework.
- [React](https://react.dev/). UI framework.
- [Svelte](https://svelte.dev/). UI framework.
- [Vercel](https://vercel.com/). Platform for deploying the project.

Only the next framework I'm already familiar with. So the goal is to improve it and 
see how integrates with the other frameworks in the Astro framework.
- [Vue](https://vuejs.org/). UI framework.

## Modules & Services

### Generate password (TS)

`src/password.ts`

A service for generating a random word. The password. The only responsibility of this 
service is to generate a random word.

### Password discovery (React)

`src/components/PasswordDiscovery.tsx`

Module for showing the password while the user is guessing it. The letters that are 
not guessed yet will be hidden showing a — symbol. The letters that are guessed will 
be shown as the letter itself.
This module will interact with the store to get the password and the letters that are 
used. With this information will be capable of showing the password.

Watch how the user is guessing the password. Showing the correct letters and 
hiding the others.

### Pick letter (Vue)

`src/components/PickLetter.vue`

Module for showing the collection of letters for guess the password. Those that are 
used will be disabled.
This module will interact with the store adding the letters used into the store.

### Drawing hangman (Svelte)

`src/components/DrawingHangman.svelte`

Module for showing the result of the game. It will count the mistakes and draw the hangman. 
When the user has guessed the password or the hangman is completed the game is over.
This module will interact with the store retrieving the password and the letters used.
With this information will be capable of knowing if the user won or lost the game. And 
will show a restart button to start a new game.

### Store (Nano stores - TS)

`src/store.ts`

It's like a service. It will store the state of the game. The password, the letters 
and the mistakes. It will be used by the other modules to get the state of the game