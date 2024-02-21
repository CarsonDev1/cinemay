'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === 'loading') return;

		if (!session) {
			router.replace('/login');
		}
	}, [session, status, router]);

	return status === 'loading' ? null : <>{children}</>;
};

export default ProtectedRoute;
