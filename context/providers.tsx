import '@radix-ui/themes/styles.css';
import './radix-theme-config.css';
import { Theme } from '@radix-ui/themes';
import AuthProvider from './auth-context';
import { ThemeProvider } from './theme-provider';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Theme>{children}</Theme>
      </ThemeProvider>
    </AuthProvider>
  );
};

Providers.displayName = 'Providers';
export default Providers;
