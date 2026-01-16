<script lang="ts">
import { defineComponent } from 'vue'
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';
import { useQueryClient } from '@tanstack/vue-query';
import Button from 'primevue/button';
export default defineComponent({
    name: 'DeleteProductButton',
    emits: ['deleted'],
    components: { Button },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(_, { emit }) {
        const queryClient = useQueryClient()

        const { mutate, error, isPending } = useDeleteProduct({
            mutation: {
                onSuccess: (_data, variables) => {
                    invalidateGetAllProducts(queryClient)
                    emit('deleted', variables.id)
                },
            },
        })

        return { mutate, error, isPending }
    },
})
</script>

<template>
    <Button label="Delete Product" severity="danger" @click="mutate({ id })" />
</template>