import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div>
              <Image src="assets/logo.svg" alt={'logo'} width={128} height={128} />
              <div className={'mt-5 text-center text-xl'}>Wattmi Wattmi Home Page</div>
          </div>
      </main>
    </div>
  );
}
