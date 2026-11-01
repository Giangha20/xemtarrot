import type { Metadata } from 'next';
import { Playfair_Display, Be_Vietnam_Pro, Cinzel } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese', 'latin'],
  variable: '--font-serif',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MYSTIC TAROT – Khám Phá Thông Điệp Từ Những Lá Bài',
  description:
    'Website xem bài Tarot trực tuyến chuyên nghiệp. Trải bài Tarot theo câu hỏi, giải nghĩa chuyên sâu 78 lá bài Rider-Waite-Smith, đa dạng phương pháp trải bài: 1 lá, 3 lá, Tình yêu, Công việc, Celtic Cross.',
  keywords: [
    'Tarot',
    'Tarot reading',
    'Xem Tarot',
    'Bói bài Tarot',
    'Rider Waite Smith',
    'Mystic Tarot',
    'Ý nghĩa 78 lá bài',
    'Celtic Cross'
  ],
  authors: [{ name: 'Mystic Tarot Team' }],
  openGraph: {
    title: 'MYSTIC TAROT – Khám Phá Thông Điệp Từ Những Lá Bài',
    description:
      'Hệ thống xem bài Tarot chuyên nghiệp, có chiều sâu nội dung, trải nghiệm huyền bí và giao diện cao cấp.',
    type: 'website',
    locale: 'vi_VN'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`dark scroll-smooth ${beVietnamPro.variable} ${playfairDisplay.variable} ${cinzel.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#100B1D] text-[#F5F0FF] antialiased selection:bg-[#D8B56D]/30 selection:text-[#F5F0FF]">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
