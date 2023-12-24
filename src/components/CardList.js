import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(10);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://suitmedia-backend.suitdev.com/api/ideas',
          {
            params: {
              'page[number]': currentPage,
              'page[size]': pageSize,
              append: ['small_image', 'medium_image'],
              sort: sortBy === 'newest' ? '-published_at' : 'published_at',
            },
          }
        );
        setPosts(response.data.data);
        setTotalPages(response.data.meta.last_page);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [currentPage, pageSize, sortBy]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'id-ID',
      options
    );
    return formattedDate;
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPagination = () => {
    const totalPages = 10;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mr-2 px-3 py-1 border rounded ${
            i === currentPage ? 'bg-blue-500 text-white' : ''
          }`}>
          {i}
        </button>
      );
    }

    return <div className='mt-4'>{pages}</div>;
  };

  return (
    <div className='container mx-auto mt-10'>
      <div className='flex justify-end items-center mb-4'>
        <div>
          <span className='mr-2'>Show Per Page:</span>
          <select
            className='p-2 border rounded'
            value={pageSize}
            onChange={(e) => handlePageSizeChange(e.target.value)}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>
        </div>

        <div className='mr-4 ml-5'>
          <span className='mr-2'>Sort By:</span>
          <select
            className='p-2 border rounded'
            value={sortBy}
            onChange={(e) => handleSortByChange(e.target.value)}>
            <option value='newest'>Newest</option>
            <option value='oldest'>Oldest</option>
          </select>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {posts.map((post) => {
          return (
            <div key={post.id} className='bg-white shadow-md rounded-md p-4'>
              <img src={post.medium_image[0].url} alt='' />

              <p className='text-gray-500 mt-5 mb-5'>
                {formatDate(post.published_at)}
              </p>
              <h2 className='font-semibold text-lg mb-2 line-clamp-3'>
                {post.title}
              </h2>
            </div>
          );
        })}
      </div>

      <div className='flex justify-center mt-4'>
        <button
          className='relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 '
          onClick={handlePrevPage}>
          <span>&laquo;</span>
        </button>
        {renderPagination()}

        <button
          className='relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300'
          onClick={handleNextPage}>
          <span>&raquo;</span>
        </button>
      </div>
    </div>
  );
};

export default ListPost;
