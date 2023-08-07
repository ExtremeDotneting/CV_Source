// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#000000",
          secondary: "#000000",
          accent: "#000000",
          error: "#000000",
          background: "#000000",

          //My colors
          //-------------------------
          cardsIconColor: "#e4ecfa",
          cardsCircleColor: "#395a9d",
          cardsTitleColor: "#595667",

          workTimelineTitleColor: "#595667",
          workTimelineDotsColor: "#5d7ec2",

          //-------------------------
        },
      },
    },
  },
})
