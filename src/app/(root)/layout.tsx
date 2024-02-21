import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import AuthProvider from '@/context/AuthProvider';
import ProtectedRoute from '@/components/ProtectedRoute';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CineMay',
	description: 'Next 14 Cine Project',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} overflow-x-hidden bg-black-1`}>
				<AuthProvider>
					<ProtectedRoute>{children}</ProtectedRoute>
				</AuthProvider>
			</body>
		</html>
	);
}
