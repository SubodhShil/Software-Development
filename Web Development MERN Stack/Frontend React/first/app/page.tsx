import Hello from "./components/hello";

export default function Home() {
  console.log('What am I?');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl">Hi this is Subodh Chandra Shil</h1>
      <Hello />
    </div>
  );
}