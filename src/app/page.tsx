import { HomeCarousel } from "@/components/carousel";
import { LandingSection } from "@/components/landing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <main className='relative mx-auto flex h-full flex-col justify-center my-18 sm:my-18 sm:pt-20 2xl:pt-14'>
        <LandingSection />
        <div className='-mt-8 mb-8 py-12 sm:px-4 lg:px-6'>
          <HomeCarousel />
        </div>
      </main>
    </>
  );
}
