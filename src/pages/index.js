import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the under-construction page
    router.push('/under-construction');
  }, []);

  return null; // This component doesn't render anything on the original index page
};

export default HomePage;
