'use client';

import { Provider } from 'jotai';
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
          {children}
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  );
};

Providers.displayName = 'Providers';
export default Providers;
