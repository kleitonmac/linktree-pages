import CustomLink from "./CustomLink";
import {IconBrandInstagram, 
        IconBrandTiktok, 
        IconBrandYoutube, 
}
from "@tabler/icons-react";

export default function NavBar() {
  return (
    <nav>
        <div className="flex  justify-center items-center gap-5">
  <CustomLink href="https://www.instagram.com/" icon={<IconBrandInstagram size={42} color="#ffffff" />} />
  <CustomLink href="https://www.tiktok.com/" icon={<IconBrandTiktok size={42} color="#ffffff" />} />
  <CustomLink href="https://www.youtube.com/" icon={<IconBrandYoutube size={42} color="#ffffff" />} />
        </div>

           <ul>
               <div className="flex justify-center flex-col gap-5 mx-auto items-center p-5">
                     <CustomLink href="https://www.instagram.com/hakz.ff/">Instagram</CustomLink>
                     <CustomLink href="https://www.tiktok.com/@hakzfff?_t=ZM-8wdwpAcF92m&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaf7q4zNnFW_wovPYsiokR0nAIjrQTwfMS_XwQ0nthuai2IYfOP9dAbPf3rzyg_aem_hVwvBLh22vk5M6myuh6o3Q">Tiktok</CustomLink>
                     <CustomLink href="https://www.youtube.com/@hakfff">Youtube</CustomLink>
               </div>
           </ul>
    </nav>
  );
}
