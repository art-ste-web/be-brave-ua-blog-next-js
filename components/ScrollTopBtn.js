import Image from "next/image"
import Link from "next/link"

export default function ScrollTopBtn() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js
    
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  return (
    
    <button className="scroll-top-btn" onClick={scrollToTop}>

        <Image
            src='/images/other-icons/arrow-top.svg'
            alt="Picture of the author"
            width={40}
            height={40}
        />
     
    </button>
    
  )
}
