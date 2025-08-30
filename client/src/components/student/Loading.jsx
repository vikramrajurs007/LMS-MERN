import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Loading = () => {

  const {path} = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    if (path) {
      const timer = setTimeout(() => {
        navigate(`/${path}`);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);
  // }, [path, navigate]);

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='w-16 sm:w-20 aspect-square border-4 border-gray-300 border-t-4 border-t-blue-400 rounded-full animate-spin '></div>
      <div className="mt-70 flex space-x-2 items-center  justify-center">
         </div>
    </div>
  )
}

export default Loading