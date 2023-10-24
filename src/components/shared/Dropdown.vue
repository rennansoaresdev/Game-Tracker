<script setup>
import { ref } from 'vue'

defineProps(['selectedItem', 'items'])

const emit = defineEmits(['update:selectedItem'])

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectItem = (item) => {
  isOpen.value = false
  emit('update:selectedItem', item)
}
</script>

<template>
  <div class="dropdown">
    <div class="dropdown__selected" @click="toggleDropdown">
      <div class="dropdown__selected__text">
        {{ selectedItem.label }}
      </div>
      <div class="dropdown__selected__icon">
        <img src="src/assets/icons/arrow-down.svg" alt="arrow-down" />
      </div>
    </div>
    <div class="dropdown__list" v-if="isOpen">
      <div class="dropdown__list__item" v-for="item in items" :key="item" @click="selectItem(item)">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  width: 148px;
  height: 36px;
  background: #0b1641;
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-size: 18px;
}

@media (min-width: 768px) {
  .dropdown {
    height: 50px;
  }
}

@media (max-width: 768px) {
  .dropdown {
    width: 122px;
    min-width: 122px;
    height: 36px;
    font-size: 14px;
  }
  .dropdown .dropdown__selected__text {
    font-size: 14px;
  }
  .dropdown .dropdown__list__item {
    font-size: 14px;
  }
}

.dropdown__selected {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-left: 8px;
  padding-right: 8px;
}

.dropdown__selected__text {
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
}

.dropdown__selected__icon {
  width: 16px;
}

.dropdown__selected__icon img {
  position: relative;
  max-width: 100%;
  height: auto;
}

.dropdown__list {
  position: absolute;
  top: 88%;
  left: 0;
  width: 100%;
  background: #0b1641;
  z-index: 1;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.dropdown__list__item {
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown__list__item:hover {
  color: #c70160;
}
</style>
