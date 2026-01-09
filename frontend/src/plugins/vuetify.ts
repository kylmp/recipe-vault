import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { darkTheme, lightTheme } from './themes'
import { VuetifyOptions } from 'vuetify'

export const vuetifyConfig: VuetifyOptions = {
  components,
  directives,
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  }
}
