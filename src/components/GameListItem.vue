<template>
  <div>
     <!-- Exibir imagem do item -->
    <div class="thumb">
      <img :src="item.thumb" alt="Descrição da imagem do item" />
    </div>

    <!-- Exibir detalhes do item -->
    <li class="item">
      {{ item.title }} - Preço $ <span style="text-decoration: line-through">{{ item.normalPrice }}</span> - com Desconto ${{ item.salePrice }} - {{ parseInt (item.savings) }}%
      de Desconto
    </li>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped></style>
