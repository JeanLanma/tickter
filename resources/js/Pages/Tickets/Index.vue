<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import ListTickets from './Partials/ListTickets.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    tickets: {
        type: Object,
    },
});
</script>

<template>
    <Head title="Tickets" />

    <AppLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Ticket</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <ListTickets
                        :tickets="tickets"
                        class="max-w-xl"
                    />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
