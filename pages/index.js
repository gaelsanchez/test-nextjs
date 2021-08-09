import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holidays in Zell am See</title>
      </Head>
      <Header />
    </div>
  );
}
