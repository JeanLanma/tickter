<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import MainButton from '@/Shared/MainButton.vue';
import { Link, useForm, usePage } from '@inertiajs/vue3';

const props = defineProps({
    tickets: {
        type: Object,
    },
});

const form = useForm({
    title: null,
    description: null,
    application_id: null,
});
</script>

<template>

    <header>
        <h1 class="text-xl font-bold text-gray-800">Mis ultimos tickets</h1>

        <div class="my-8">
            <Link :href="route('ticket.create')">
                <MainButton>
                    Crear ticket
                </MainButton>
            </Link>
        </div>

    </header>

    <div class="p-3">
        <div class="overflow-x-auto">
            <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <!-- <th scope="col" class="p-4 hidden">
                            <div class="flex items-center">
                                <input @click="selectAllActivities()" id="checkbox-all" type="checkbox" class="w-4 h-4 text-sky-600 bg-gray-100 rounded border-gray-300 focus:ring-sky-500 focus:ring-2">
                                <label for="checkbox-all" class="sr-only">checkbox</label>
                            </div>
                        </th> -->
                        <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">Titulo</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                            <div class="font-semibold text-left">Descripción</div>
                        </th>
                        <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-400">			          
                            <svg
                                color="currentColor"
                                class="w-6 text-right fill-current text-grey-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="currentColor"
                                fill="CurrentColor"
                                viewBox="0 0 20 20"
                            >
                            <path
                            d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            />
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                    <tr v-if="props.tickets.data" v-for="ticket in props.tickets.data" class="h-12 hover:bg-sky-300">
                        <!-- <td class="p-4 w-4 hidden">
                            <div class="flex items-center">
                                <input @click="selectActivity(pickup)" id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-sky-600 bg-gray-100 rounded border-gray-300 focus:ring-sky-500 focus:ring-2">
                                <label for="checkbox-table-1" class="sr-only">checkbox</label>
                            </div>
                        </td> -->
                        <td class="p-2 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="font-medium text-gray-800">{{ ticket.title }}</div>
                            </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="font-medium text-gray-800 hover:text-green-500">
                                    <div class="font-medium text-gray-800">
                                        {{ ticket.description }}
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td class="p-2 whitespace-nowrap">
                            <div class="flex items-center">
                                <div class="font-medium text-gray-400">...</div>
                            </div>
                        </td>
                    </tr>
                    <tr v-else class="h-12 hover:bg-sky-300 text-center">
                        <td colspan="3" class="p-2 whitespace-nowrap text-center">
                            <div class="flex items-center justify-center text-center">
                                <div class="text-center font-bold text-sky-400"> No hay información dispobible</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="text-xs">
            <p>
                tickets
            </p>
        </div>
    </div>

</template>