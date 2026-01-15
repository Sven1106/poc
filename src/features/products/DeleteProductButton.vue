<script lang="ts">
import { defineComponent } from 'vue'
import { useDeleteProduct, invalidateGetAllProducts } from '@/api/generated/client';
import { useQueryClient } from '@tanstack/vue-query';


export default defineComponent({
    name: 'DeleteProductButton',
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const queryClient = useQueryClient()

        const { mutate, error, isPending } = useDeleteProduct({
            mutation: {
                onSuccess: (data, variables) => {
                    invalidateGetAllProducts(queryClient);
                }
            }
        });

        return {
            props,
            mutate,
            error,
            isPending,
        }
    },
})
</script>

<template>
    <Button label="Delete Product" severity="danger" @click="mutate({ id: props.id })" />
</template>