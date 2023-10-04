<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="12">
        <div class="text-h4 font-weight-bold primary--text mb-5">
          Topics
        </div>
        <div class="text-subtitle-1 my-2 text--secondary">
          Peakon groups comments into topics, enabling you to quickly understand the common themes that matter to your employees.<br /> <br />

          Each topic includes a summary of the most frequently mentioned issues for that topic. The score assigned to each topic is an average of all scores for comments relating to that topic. This gives you an indication of the general sentiment towards that topic. Learn more about Topics.
        </div>
        <v-divider class="my-5"></v-divider>
      </v-col>
      <v-col sm="12" md="12">
        <v-row v-for="n in 3" :key="n" style="border-bottom: 1px solid #eee; padding: 20px 0;">
          <v-col cols="12" sm="3" md="3">
            <v-avatar color="info" size="36" class="mb-3">
              <span class="white--text headline mx-auto">A</span>
            </v-avatar>
            <div class="text-body-1">
              <nuxt-link to="/" class="text--primary text-decoration-none">
                Autonomy
                <v-icon small>mdi-chevron-right</v-icon>
              </nuxt-link>
            </div>
            <div class="text-caption font-weight-bold">3 topics</div>
            <div class="text-caption">Engineer, Decision, Service Engineer</div>
            <div class="text-caption font-weight-bold mt-3">
              <nuxt-link to="/" class="text--primary text-decoration-none">
                See all topics
              </nuxt-link>
              <v-icon small>mdi-chevron-right</v-icon>
            </div>
          </v-col>
          <v-col cols="12" sm="9" md="9">
            <v-row>
              <v-col cols="12" sm="4" md="4" v-for="n in 3" :key="n">
                <v-card hover>
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="overline mb-4">"Engineer",</div>
                      <div class="d-flex">
                        <div class="mr-5">
                          <div class="text-caption text--secondary font-weight-bold">Avg. score</div>
                          <div class="text-h5 font-weight-bold">9.5</div>
                        </div>
                        <div>
                          <div class="text-caption text--secondary font-weight-bold">Comments</div>
                          <div class="d-flex mt-1">
                            <v-icon>mdi-comment-multiple</v-icon>
                            <div class="text-subtitle-2 mx-3">(5)</div>
                          </div>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: ['auth'],

  head: {
    title: 'Topics'
  },

  data: () => ({
    breadcrumbs: [ { text: 'Topics', disabled: true } ]
  })
}
</script>

<style>

</style>