import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, category }: { currentPage: number; totalPages: number; category: string }) {
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    if (category !== 'All') {
      params.set('category', category);
    }
    return `/products?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link href={getPageUrl(currentPage - 1)} className="px-4 py-2 bg-gray-200 rounded">
          Previous
        </Link>
      )}
      <span className="px-4 py-2">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link href={getPageUrl(currentPage + 1)} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </Link>
      )}
    </div>
  )
}

