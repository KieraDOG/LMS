const color = {
  primary: '#1976d2',
  secondary: '#dc004e',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
  white: 'white',
  border: '#dadada',
};

export default {
  color,
  backgroundColor: {
    secondary: '#212121'
  },
  gutter: {
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '36px',
  },
  border: {
    default: `1px solid ${color.border}`,
  },
  borderRadius: {
    sm: '4px',
  },
  typography: {
    size: {
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '24px',
    },
    weight: {
      light: '300',
      normal: '400',
      bold: '500',
    },
    color: {
      info: '#888888'
    }
  },
};

const colors = {
  primary: '#1976d2',
  secondary: '#dc004e',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
  white: 'white',
  black: '#2d3436',
  border: '#dadada',
  mineShaftBlack: '#212121',
  grey: '#636e72',
  lightGrey: '#e6e6e6',
}

export const ssTheme = {
  colors,
  borders: {
    default: `1px solid ${colors.border}`,
  },
  space: {
    xxs: '6px',
    xs: '12px',
    sm: '16px',
    md: '24px',
    lg: '36px',
    xl: '48px',
    xxl: '72px',
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '36px',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    bold: '500',
  },
  breakpoints: ['40em', '52em', '64em', '80em'],
  radii: {
    sm: '4px',
    md: '16px',
    lg: '24px',
    circle: '100%',
  }
}