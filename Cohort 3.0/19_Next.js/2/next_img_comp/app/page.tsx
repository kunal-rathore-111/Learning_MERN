import Image from "next/image";

import peaky from "../public/image.png"

export default function Home() {
  return <div className="flex flex-col gap-4">
    <h1>Next.js Image Component</h1>
    <div>
      <Image src="/image.png" alt="image" width={400} height={400} className="border border-red-500 rounded-full w-[400px] h-[400px] object-cover" />
    </div>
    <br />
    <div className="w-[900px] h-[450px] relative hover:translate-x-20 transition-all duration-300">
      <Image src={peaky} alt="image" fill={true} quality={100} priority={false}
        placeholder="blur"
        blurDataURL="" />
    </div>

  </div>
}


/*
Recap-
Image tag- src for the image, 
width and fill cannot be togther,
priority  for defining lazy loading or not
placeholder for blur img while main image loading, and blurDataURL for the blur img
when using the fill need to use relative in parent comp,

*/