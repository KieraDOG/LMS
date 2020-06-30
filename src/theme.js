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
