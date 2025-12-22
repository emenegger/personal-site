import { Major_Mono_Display, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', });

const majorMonoDisplay = Major_Mono_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-major-mono',
});

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${majorMonoDisplay.variable}`}>
      {/* <body className="bg-white text-black dark:bg-gray-900 dark:text-white"> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}