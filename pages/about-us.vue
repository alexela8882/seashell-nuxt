<template>
<div>
    <div
      class="shell-section-bg"
      :class="responsiveBorderRadius"
      style="position: relative; margin-top: -120px; z-index: 52 !important;">
      <div
        class="shadow-xl px-md-16 px-5 w-100 mx-0 py-16 white--text transparent-bg-black-dark"
        :class="responsiveBorderRadius"
        style="width: 100%; padding-top: 100px;">
        <div class="px-md-16 px-0">
          <div
            :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;')}`"
            class="soul-seashell mt-10">
            About Us
          </div>

          <v-row
            class="kollektif-font text-sm-body-2 text-md-body-1 text-xl-h6">
            <v-col cols="12" md="12" sm="12">
              <div>
                Bintan Seashells is a website managed by the Bintan Seashell Museum 
                which is dedicated to the public relating to the rich marine mollusks in the island. 
                We are passionate about these beautiful natural creations, 
                and we love sharing our knowledge and enthusiasm with others.
              </div>
              <div class="mt-5">
                Our website is a valuable resource for anyone interested in seashells, 
                whether you are a beginner or an experienced collector. 
                We offer a wide range of information on seashells identification, 
                and its specific description. 
              </div>
              <div class="mt-5">
                In addition to our website, we also have an upcoming seashell museum in the island where we showcase a wide variety of seashells from all over the world.
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div
        style="position:absolute;
        width: 100%;
        height: 100%;
        bottom: 0;
        right: 0;">
        <v-img
          v-if="!$vuetify.breakpoint.sm && !$vuetify.breakpoint.xs"
          :style="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? 'bottom: -14rem;' : 'bottom: -10rem;'"
          style="position: absolute; right: 5rem; z-index: 55 !important;"
          src="/img/island-page/Shell.png"
          :width="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl ? '300' : '200'"></v-img>
      </div>
    </div>

    <v-row
      class="shadow-xl px-md-16 px-5 py-5 white w-100 mx-0 py-16"
      :class="responsiveBorderRadius"
      style="position: relative; z-index: 51 !important; margin-top: -100px;">
      <div class="px-md-16 electric_blue--text" style="padding-top: 90px; width: 100% !important;">
        <div
            :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;')}`"
            class="soul-seashell">
            Why Seashells?
          </div>
        <p
          class="avenir-book text-xs-caption text-lg-body-1 text-xl-h6 text-md-body-2"
          :style="`${(!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm) && 'white-space: pre-line'}`"><span>
            Seashells are fascinating creatures that come in a wide variety of shapes, sizes, and colors. 
            They are also incredibly durable, and can be found on beaches all over the world. 
            We love seashells for their beauty, diversity, and resilience. 
            They are a reminder of the power and beauty of nature, 
            and they can bring a touch of the beach to any home. 
            Nonetheless, it's crucial to acknowledge that certain seashell species are currently under threat, 
            facing a decline in population due to excessive harvesting. 
            This is why our organization is steadfast in its commitment to ethical and 
            sustainable collection practices, with an objective to strike a balance 
            between educating individuals about these creatures and safeguarding their future.
          </span>
        </p>
      </div>
    </v-row>

    <div
      class="shadow-xl px-md-16 px-5 py-5 electric_blue w-100 mx-0 py-16 pb-0 mb-8"
      :class="responsiveBorderRadius"
      style="position: relative; z-index: 50 !important; margin-top: -100px;">
      <div
        class="px-md-16 white--text"
        style="width: 100% !important;"
        :style="`padding-top: ${$vuetify.breakpoint.xs ? '50px' : '70px'}`">
        <v-row>
          <v-col
            cols="12"
            md="6" sm="12"
            class="kollektif"
            :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6'">
            <div
                :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;')}`"
                class="soul-seashell mb-8 mt-8">
                Our Mission
            </div>
            <div class="mb-8">
                Our mission is to promote the appreciation and enjoyment of seashells. 
                We want to help people learn more about these amazing creatures by exploring the website and help them identify shells.
            </div>
          </v-col>
          <v-col
            cols="12"
            md="6" sm="12"
            class="kollektif"
            :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6'">
            <div class="mb-3 mb-md-8">
              <v-img height="250" contain src="/img/shells/landingpage/shell_combined.png"></v-img>
            </div>
            <div
                :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;')}`"
                class="soul-seashell mb-8">
                Our Values
            </div>

            <div class="mb-3 mb-md-8">
                We believe that everyone should have the opportunity to enjoy the beauty of seashells. That's why we offer a wide range of seashells for identification and education.
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div
      class="shadow-xl px-md-16 px-5 py-5 white w-100 mx-0 py-16 pb-0"
      style="position: relative; z-index: 49 !important; margin-top: -100px;">
      <div
        class="px-md-16 electric_blue--text"
        style="width: 100% !important;"
        :style="`padding-top: ${$vuetify.breakpoint.xs ? '50px' : '70px'}`">
        <v-row>
          <v-col
            cols="12"
            md="6" sm="12"
            class="kollektif"
            :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'text-caption' : 'text-h6'">
            <div
                :style="`${$vuetify.breakpoint.xs || $vuetify.breakpoint.sm ? 'font-size: 85px;' : ($vuetify.breakpoint.xl ? 'font-size: 175px;' : 'font-size: 125px;')}`"
                class="soul-seashell mb-9 mt-9">
                Contact Us
            </div>
            <div class="mb-8">
                If you have any questions or comments, please do not hesitate to contact us. We are always happy to hear from you.
            </div>
            <div class="mb-8">
              <v-card flat ref="form">
                <v-text-field
                    v-model="contact.email"
                    outlined
                    label="Email"
                    class="rounded-xl pa-0 ma-0 text-search"
                    color="electric_blue"
                    dense
                    :rules="[rules.required, rules.email]"
                    :error-messages="email.error"
                ></v-text-field>
                
                <v-text-field
                    v-model="contact.subject"
                    outlined
                    label="Subject"
                    class="rounded-xl pa-0 ma-0 text-search"
                    color="electric_blue"
                    dense
                    :rules="[rules.required]"
                    :error-messages="subject.error"
                ></v-text-field>
                
                <v-textarea label="Message" 
                class="rounded-xl pa-0 ma-0 text-search"
                v-model="contact.message"
                color="electric_blue"
                dense
                outlined
                :rules="[rules.required]"
                :error-messages="message.error"
                ></v-textarea>
                <v-card-actions>
                  <v-btn color="electric_blue" class="rounded-xl white--text float-right flex" @click="sendMessage"> Send</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
          <v-col
          cols="12"
          md="6" sm="12"
          >
            <v-img
            style="width: 100% !important; height:100%; max-height: 550px"
            class="rounded-lg top-rounded-sm"
            :aspect-ratio="1"
            src="/img/shells/landingpage/shell-section-bg.jpg"
            ></v-img>
        </v-col>
        </v-row>
      </div>
    </div>

    <v-dialog
      v-model="contactResultDialog"
      width="500">
      <v-card>
        <v-toolbar
          color="primary"
          title="Success"
          class="white--text"
        >Success</v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pt-8">
          <div>
            Message successfully sent.
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="secondary"
            text
            @click="contactResultDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>



</template>
  
  <script>
import axios from '~/plugins/axios'

  export default {
    auth: false,
    layout: 'landing',
    head: {
      title: 'About Us'
    },

    data () {
      return {
        subject: { value: null, error: null },
        email: { value: null, error: null },
        message:{ value: "", error: null },
        error: { value: null, error: null },

        contact: {
          subject: '',
          email: '',
          message: ''
        },

        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
        contactResultDialog: false,
      }
    },
    computed: {
        responsiveBorderRadius () {
        let data = this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.xs ? 'bottom-rounded-sm' : 'bottom-rounded-lg'
        return data
        },

        responsiveCorners () {
        let data = !this.$vuetify.breakpoint.xs && !this.$vuetify.breakpoint.sm && 'rounded-xl'
        return data
        }
    },
   methods: {
    async sendMessage () {
      if(this.contact.email == '' || this.contact.email == null){
        this.email.error = "Please enter your email"
      }
      else if(this.contact.subject == '' || this.contact.subject == null){
        this.email.error = null;
        this.subject.error = "Please enter your subject"
      }
      else if(this.contact.message == '' || this.contact.message == null){
        this.email.error = null;
        this.subject.error = null;
        this.message.error = "Please enter your message"
      } else {
        this.email.error = null;
        this.subject.error = null;
        this.message.error = null;

        const contactUrl = `${this.backendUrl}/api/web/create_contact_message`

        this.$store.dispatch('species/createContactMessage', this.contact)
        .then((res) => {
          console.log(res, 'res');
          // alert(res.message);
          this.contactResultDialog = true;

          this.contact.email = '';
          this.contact.subject = '';
          this.contact.message = '';
        })
      }
    },
   }
  }
  </script>
  
  <style scoped>
    .shell-section-bg {
        background: url("/img/shells/landingpage/shell-section-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: right 50% bottom 40%;
    }
  
  </style>

  <style>
    .text-search.v-text-field fieldset {
    border: 2px solid #08527b !important;
    color: #08527b;
    }

    .text-search.v-text-field i{
    color: #08527b;
    }

    .text-search.v-text-field input::placeholder {
    color: #08527b;
    opacity: 1; /* Firefox */
    }

    .text-search.v-text-field input::-ms-input-placeholder { /* Edge 12 -18 */
    color: #08527b;
    }
</style>