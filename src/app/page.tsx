import { PageHeading } from "@/components/styles/heading";
import Image from "next/image";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className='container mx-auto px-8 py-24'>
        <PageHeading title='About' />
      </div>
    </main>
  );
}
