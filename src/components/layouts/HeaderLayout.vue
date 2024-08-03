<script setup lang="ts">
  import { reactive } from 'vue'
  import useGuestStore from '@/services/stores/guest'
  import IconNotifications from '@/components/atoms/icons/IconNotifications.vue'
  import IconMap from '@/components/atoms/icons/IconMap.vue'
  import IconLuggage from '@/components/atoms/icons/IconLuggage.vue'
  import ROUTES from '@/constants/routes'

  interface IconsPage {
    book: '' | 'checked'
    guest: '' | 'checked'
    home: '' | 'checked'
  }

  const guestStore = useGuestStore()

  const iconsPage = reactive<IconsPage>({
    book: '',
    guest: '',
    home: 'checked'
  })

  const resetIconsPage = () => {
    iconsPage.book = ''
    iconsPage.guest = ''
    iconsPage.home = ''
  }

  const handleIcons = (key: keyof IconsPage) => {
    resetIconsPage()

    iconsPage[key] = 'checked'
  }
</script>

<template>
  <header class="header">
    <router-link class="header-icon" :to="ROUTES.HOME" @click="handleIcons('home')">
      <img alt="Vue logo" src="../../assets/images/logo.webp" />
      <h1>BBoooKing</h1>
    </router-link>
    <div class="header-options">
      <router-link :to="ROUTES.HOME">
        <IconMap :classes="iconsPage.home" @handleIconMapClick="handleIcons('home')" />
      </router-link>
      <router-link :to="ROUTES.BOOK">
        <IconLuggage :classes="iconsPage.book" @handleIconLuggageClick="handleIcons('book')" />
      </router-link>
    </div>
    <div class="header-profile">
      <router-link class="header-profile-link" :to="ROUTES.GUEST" @click="handleIcons('guest')">
        <span class="header-profile-link-label">{{ guestStore.notificationStatus }}</span>
        <IconNotifications
          :classes="iconsPage.guest"
          @handleIconNotificationsClick="handleIcons('guest')"
        />
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 68px;
    justify-content: space-between;
    padding: 4px 0;
    width: 100%;

    &-icon {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      text-decoration: none;

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
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 32px;
      justify-content: space-between;
      text-decoration: none;
    }

    &-profile {
      &-link {
        align-items: center;
        display: flex;
        justify-content: flex-end;
        text-decoration: none;
        gap: 8px;
        height: 100%;
        width: 100%;

        &-label {
          align-items: center;
          color: $black-800;
          display: flex;
          font-size: 0.8em;
          font-weight: 500;
          height: 100%;
          justify-content: center;
          width: 100%;
        }
      }

      .icon-notifications {
        padding: 8px 14px;
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
        a {
          span {
            display: none;
          }
        }
      }

      &-options {
        gap: 8px;
      }
    }
  }
</style>
