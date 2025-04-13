import { PageHeading } from "@/components/styles/heading";

export default function About() {
  return (
    <main className='min-h-screen'>
      <div className='container mx-auto px-8 py-24'>
        <PageHeading title='About' />
      </div>
      <div className='mt-96 mb-96'></div>
      <div className='py-96 '>
        <p className='text-center text-xl font-bold'>
          スクロールテスト用の余白
        </p>
      </div>
      <div className='py-96'>
        <p className='text-center text-xl font-bold'>
          スクロールテスト用の余白
        </p>
      </div>
      <div className='py-96'>
        <p className='text-center text-xl font-bold'>
          スクロールテスト用の余白
        </p>
      </div>
    </main>
  );
}
