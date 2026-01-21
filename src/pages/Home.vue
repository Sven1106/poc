<script lang="ts">
import { defineComponent, ref } from 'vue';
import ProductList from '@/features/products/ProductList.vue';
import ProductDetails from '@/features/products/ProductDetails.vue';
import DeleteProductButton from '@/features/products/DeleteProductButton.vue';

export default defineComponent({
    name: 'Home',
    components: {
        ProductList,
        ProductDetails,
        DeleteProductButton,
    },
    setup() {
        const selectedProductId = ref<number | null>(null);

        const handleProductSelected = (productId: number | null) => {
            selectedProductId.value = productId;
        };

        return {
            selectedProductId,
            handleProductSelected,
        };
    },
});
</script>

<template>
    <div style="display: flex; gap: 2rem">
        <div style="flex: 1">
            <h1>Products</h1>
            <ProductList @product-selected="handleProductSelected" />
        </div>

        <div style="flex: 1">
            <h1>Product Details</h1>
            <ProductDetails
                v-if="selectedProductId"
                :key="selectedProductId"
                :id="selectedProductId"
            >
                <DeleteProductButton :id="selectedProductId" @deleted="selectedProductId = null" />
            </ProductDetails>
            <div v-else style="padding: 2rem; text-align: center; color: #666; font-style: italic">
                Select a product to view details
            </div>
        </div>
    </div>
</template>
