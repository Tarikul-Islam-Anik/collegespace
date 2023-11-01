'use client'

import '@radix-ui/themes/styles.css';
import './radix-theme-config.css';
import { Provider } from 'jotai';
import { Theme } from '@radix-ui/themes';
import AuthProvider from './auth-context';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Provider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Theme>{children}</Theme>
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
};

Providers.displayName = 'Providers';
export default Providers;
