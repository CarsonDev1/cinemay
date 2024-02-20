import Navbar from '@/components/Navbar';
import SearchResults from '@/components/SearchResults';
import React from 'react';

const SearchPage = ({ params }: { params: { query: string } }) => {
	const query = params.query;
	return (
		<>
			<Navbar />
			<SearchResults query={query} />
		</>
	);
};

export default SearchPage;
