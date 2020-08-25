import Head from 'next/head'
import Layout from '../components/Layout'
import ContentMain from '../components/ContentMain'

export default function Home() {
	return (
		<>
			<Head>
				<title>Eveliina's site</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Layout>
				<ContentMain />
			</Layout>
		</>
	)
}
