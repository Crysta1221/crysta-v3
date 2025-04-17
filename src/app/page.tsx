import { HomeCarousel } from "@/components/carousel";

export default function Home() {
  return (
    <main className='relative mx-auto flex h-full ml-6 md:mx-8 lg:mx-0 lg:ml-6 flex-col justify-center my-18 sm:my-18 sm:pt-20 2xl:pt-14'>
      <div className='mt-24 md:mt-16'>
        <HomeCarousel />
      </div>
    </main>
  );
}
