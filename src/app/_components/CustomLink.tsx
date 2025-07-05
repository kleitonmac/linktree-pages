import Link from "next/link";
import React, { ReactNode } from "react";
interface CustomLinkProps{
  href:string;
  icon?:ReactNode;
  children?:ReactNode;

}

export default function CustomLink({href, icon, children}:CustomLinkProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="block">
      {icon && icon}

      {children && (
        <div className="relative w-80 mx-auto lg:w-[800px] p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-orange-500 to-pink-500
                          rounded-lg p-1 transition-transform duration-200 ease-in-out hover:scale-105">
            <div className="w-full h-full rounded-lg p-4 bg-white text-center">
              <span className="font-mono text-zinc-800 text-2xl">{children}</span>                               
                                  </div>
                             </div>
                        </div>
               )}
     
    </Link>
  );
}
