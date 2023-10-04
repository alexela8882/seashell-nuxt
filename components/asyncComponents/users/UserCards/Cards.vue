<template>
  <div>
    <v-toolbar class="mb-3">
      <v-text-field
        hide-details
        prepend-icon="search"
        placeholder="Search"
      ></v-text-field>
    </v-toolbar>
    <v-card v-for="(user, $index) in users" :key="$index" class="mb-3">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          <v-list-item-subtitle>Full Stack Web Developer</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['users']
}
</script>

<style>

</style>