import './globals.css';

export const metadata = {
  title: 'Sistemas Acoplados e Multiprocessamento',
  description: 'Apresentação interativa desenvolvida com Next.js e Three.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}