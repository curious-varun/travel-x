export default function AuthLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className="bg-slate-100 dark:bg-stone-800 h-full w-full border-r  col-span-1 flex justify-center items-center  ">
        <h1 className="font-bold text-8xl " > Travell-X </h1>
      </div>
      <div className="flex justify-center mt-[200px] col-span-1">
        {children}
      </div>
    </div>
  );
}
