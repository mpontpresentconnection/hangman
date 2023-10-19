<template>
    <div class="p-12">
        <div v-for="line in collection" class="flex justify-center mb-1">
            <button v-for="letter in line" class="flex" @click="clickHandler(letter)">
                <kbd class="px-2 py-1.5 mx-0.5 text-xl rounded-md bg-gray-600 text-gray-100 border border-gray-500">
                    {{letter}}
                </kbd>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
    const collection = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M']
    ]

    const clickHandler = (letter: string) => {
        console.log('click!', letter)
    }
</script>
