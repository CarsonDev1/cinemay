'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import { SessionProvider } from 'next-auth/react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SessionProvider>
			<ProtectedRoute>{children}</ProtectedRoute>
		</SessionProvider>
	);
};
export default AuthProvider;
