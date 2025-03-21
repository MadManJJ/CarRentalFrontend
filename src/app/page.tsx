import Banner from '@/components/Banner'
import { TravelCard } from '@/components/TravelCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Banner/>
      <TravelCard/>
    </main>
  );
}
