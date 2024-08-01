<script setup lang="ts">
  import IconNotifications from '@/components/atoms/icons/IconNotifications.vue'
  import IconMap from '@/components/atoms/icons/IconMap.vue'
  import IconLuggage from '@/components/atoms/icons/IconLuggage.vue'
</script>

<template>
  <header class="header">
    <div class="header-icon">
      <img alt="Vue logo" src="../../assets/images/logo.webp" />
      <h1>BBoooKing</h1>
    </div>
    <div class="header-options">
      <IconMap classes="checked" />
      <IconLuggage />
    </div>
    <div class="header-profile">
      <span>Sem notificações</span>
      <IconNotifications />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4px 0;
    width: 100%;

    div {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &-icon {
      img {
        margin-right: 12px;
      }

      h1 {
        color: $black-800;
        font-size: 1.8em;
        font-weight: 700;
      }
    }

    &-options {
      gap: 32px;
    }

    &-profile {
      span {
        color: $black-800;
        font-size: 0.8em;
        font-weight: 500;
        margin-right: 12px;
      }
    }

    @media (max-width: 992px) {
      &-icon {
        img {
          display: none;
        }

        h1 {
          font-size: 1em;
        }
      }

      &-profile {
        span {
          display: none;
        }
      }

      &-options {
        gap: 8px;
      }
    }
  }
</style>
