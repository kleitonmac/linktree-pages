import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex flex-col items-center">
      <Image 
        src="/kleitonsn.jpg"
        width={150}
        height={100}
        alt="avatar"
        className="rounded-full"
      />
      
      <div className="text-center mt-4">
        <h2 className="text-zinc-100 font-mono text-md mt-2">
         Kleiton Macedo
        </h2>    
      </div>
    </div>
  );
}
