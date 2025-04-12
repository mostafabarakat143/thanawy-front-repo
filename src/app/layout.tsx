import '@/app/globals.css';
import Sidebar from '@/components/Sidbar';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Thanawy',
  description: 'Frontend Dev Task',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="flex min-h-screen font-sans text-right bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col mr-[240px]">
          <Navbar />
          <main className="flex-1 pt-16 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}