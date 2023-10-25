<script setup>
defineProps({
  filterText: String
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="search-bar">
    <div class="search-input-container">
      <svg
        class="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.2237 10.6913H11.8162L15.5587 14.4413L14.4412 15.5588L10.6912 11.8163V11.2238L10.4887 11.0138C9.63375 11.7488 8.52375 12.1913 7.31625 12.1913C4.62375 12.1913 2.44125 10.0088 2.44125 7.31625C2.44125 4.62375 4.62375 2.44125 7.31625 2.44125C10.0087 2.44125 12.1912 4.62375 12.1912 7.31625C12.1912 8.52375 11.7487 9.63375 11.0137 10.4888L11.2237 10.6913ZM3.94125 7.31625C3.94125 9.18375 5.44875 10.6913 7.31625 10.6913C9.18375 10.6913 10.6912 9.18375 10.6912 7.31625C10.6912 5.44875 9.18375 3.94125 7.31625 3.94125C5.44875 3.94125 3.94125 5.44875 3.94125 7.31625Z"
          fill="white"
          fill-opacity="0.5"
        />
      </svg>
      <input type="text" @input="handleInput" placeholder="Procurar" class="search-input" />
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .search-bar .search-input {
    font-size: 18px;
    min-width: 320px;
  }
  .search-bar .search-icon {
    width: 24px;
    height: 24px;
  }
}

.search-bar {
  display: flex;
  padding: 4px;
  border: none;
  outline: none;
  width: 174px;
  height: 36px;
  border-radius: 8px;
  background: #0b1641;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.search-input-container {
  display: flex;
}

.search-icon {
  width: 14px;
  height: 14px;
  margin-top: 8px;
  margin-left: 6px;
  margin-right: 14px;
}

.search-input {
  border: none;
  outline: none;
  width: 100px;
  background: #0b1641;
  color: #fff;
  font-size: 14px;
  font-weight: 100;
}
</style>
