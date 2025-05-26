import '../app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hospital Management System',
  description: 'Minimal hospital management app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl">Hospital Management System</h1>
          <nav className="mt-2">
            <a href="/" className="mr-4">Home</a>
            <a href="/auth">Auth</a>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
