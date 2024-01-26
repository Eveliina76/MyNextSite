// import Head from 'next/head';
// import Layout from '../components/Layout';
// import ContentMain from '../components/ContentMain';

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Eveliina's site</title>
//         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//       </Head>
//       <Layout>
//         <ContentMain />
//       </Layout>
//     </>
//   );
// }

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