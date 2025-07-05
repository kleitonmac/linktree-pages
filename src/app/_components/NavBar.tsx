import CustomLink from "./CustomLink";
import {IconBrandInstagram, 
        IconBrandWhatsapp, 
        IconBrandFacebook, 
}
from "@tabler/icons-react";

export default function NavBar() {
  return (
    <nav>
        <div className="flex  justify-center items-center gap-5">
  <CustomLink href="https://www.instagram.com/" icon={<IconBrandInstagram size={42} color="#ffffff" />} />
  <CustomLink href="https://wa.me/" icon={<IconBrandWhatsapp size={42} color="#ffffff" />} />
  <CustomLink href="https://www.facebook.com/" icon={<IconBrandFacebook size={42} color="#ffffff" />} />
        </div>

           <ul>
               <div className="flex justify-center flex-col gap-5 mx-auto items-center p-5">
                     <CustomLink href="https://www.instagram.com/iamkleiton/">Instagram</CustomLink>
                     <CustomLink href="https://www.facebook.com/kleiton.santosmacedo">Facebook</CustomLink>
                     <CustomLink href="https://wa.me/5527981911375">WhatsApp</CustomLink>
               </div>
           </ul>
    </nav>
  );
}
