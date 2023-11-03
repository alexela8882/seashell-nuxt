<template>
    <v-app>
      <v-container fluid fill-height>
        <v-layout align-center justify-center wrap>
          <v-flex xs12 sm8 md4>
            <h1 class="text-h1 font-weight-black text-center">
                <v-icon class="text-h1 font-weight-black text-center">mdi-wrench</v-icon>
            </h1>
            <div class="mt-5 text-center">
              <p class="text-h5 font-weight-light">
                This page is under construction.
              </p>
              <v-btn color="primary" nuxt-link to="/">
                Home
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    auth: false,
    layout: 'landing',
    head: {
      title: 'Museum'
    }
  }
  </script>
  
  <style>
  
  </style>