import { HomeCarousel } from "@/components/carousel";
import { LandingSection } from "@/components/landing";

export default function Home() {
  return (
    <main className='relative mx-auto flex h-full flex-col justify-center my-18 sm:my-18 sm:pt-20 2xl:pt-14'>
      <LandingSection />
      <div className='-mt-8 mb-8 py-12 px-6 sm:px-8 lg:px-12'>
        <HomeCarousel />
      </div>
    </main>
  );
}
