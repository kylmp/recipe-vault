import { ThemeDefinition } from "vuetify"

export const lightTheme: ThemeDefinition = {
  colors: {
    background: '#FAFAFA',
    surface: '#FAFAFA',
    primary: '#1565C0',
    'primary-darken-1': '#0D47A1',
    divider: '#283593',
    error: '#B00020',
    success: '#4CAF50',
    'highlight-text': '#1f65ce',
    'sidenav': '#FAFAFA',
    header: '#0D47A1'
  }
}

export const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0e0e10',
    surface: '#1f1f23',
    primary: '#1565C0',
    'primary-darken-1': '#0D47A1',
    error: '#B00020',
    success: '#4CAF50',
    divider: '#000000',
    'highlight-text': '#42A5F5',
    'sidenav': '#1f1f23',
    header: '#18181b'
  }
}
