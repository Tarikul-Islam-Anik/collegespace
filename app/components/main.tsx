import React from 'react';

const Main = ({ children }: { children: React.ReactNode }) => {
  return <main className='flex-1'>{children}</main>;
};

Main.displayName = 'Main';
export default Main;
