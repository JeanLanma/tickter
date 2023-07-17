
<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

const props = defineProps({
    ticket: {
        type: Object,
    },
});

const form = useForm({
    title: null,
    description: null,
    application_id: null,
});

console.log(props.ticket);
</script>

<template>

    <header>
        <h2 class="text-xl font-medium text-gray-900">Este es un ticket en especifico</h2>

        <p class="mt-1 text-sm text-gray-600">
            
        </p>
    </header>

    <div class="p-4 lg:p-2">

    <h4 class="text-xl text-gray-700 font-bold">Resumen</h4>
    <ul class="mt-2 dark:text-gray-100 text-gray-700">
        <li class="flex border-y py-3">
            <span class="font-bold w-24">Titulo:</span>
            <span class="text-gray-600">{{ props.ticket.title }}</span>
        </li>
        <li class="flex border-b py-3">
            <span class="font-bold w-24">Descripción:</span>
            <span class="text-gray-600">{{ props.ticket.description }}</span>
        </li>
    </ul>

    </div>


</template>