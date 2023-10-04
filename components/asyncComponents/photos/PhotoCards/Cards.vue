<template>
  <div>
    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        xs=12
        v-for="(item, $index) in photos"
        :key="$index"
      >
        <PhotoCard :photo="item"></PhotoCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import AsyncLoading from '../../LoadingComponent'
import AsyncLoadError from '../../ErrorComponent'
const AsyncComponent = import('./Card')

export default {
  props: ['photos'],

  components: {
    PhotoCard: () => ({
      // The component we want to load.
      component: AsyncComponent,
      // The component to use as a placeholder while the
      // async component is loading.
      loading: AsyncLoading,
      // The component to render instead if there is an error
      // loading the async component.
      error: AsyncLoadError,
      // The delay before the loading component is shown.
      delay: 100,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 0
    })
  }
}
</script>

<style>

</style>