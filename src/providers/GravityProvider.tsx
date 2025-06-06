import { ThemeProvider } from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import { ReactNode } from 'react';

interface GravityProviderProps {
  children: ReactNode;
}

export function GravityProvider({ children }: GravityProviderProps) {
  return (
    <ThemeProvider theme="light">
      {children}
    </ThemeProvider>
  );
} 