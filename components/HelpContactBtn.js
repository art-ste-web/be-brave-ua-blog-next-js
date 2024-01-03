import Image from "next/image"
import Link from "next/link"

export default function HelpContactBtn(props) {
    const btnIcon = () => {
        switch(props.type) {
  
          case "telegram": return <Image
                                        src='/images/contacts-icons/telegram.svg'
                                        alt="btn-icon"
                                        width={24}
                                        height={24}
                                    />;
            
        //   case "viber":   return '/images/contacts-icons/viber.svg';

          case "phone": return <Image
                                    src='/images/contacts-icons/phone.svg'
                                    alt="btn-icon"
                                    width={24}
                                    height={24}
                                />;
        //   case "whatsapp":  return '/images/contacts-icons/whatsapp.svg';
        //   default:      return <h1>No project match</h1>
        
        }
      }
  return (
      (<Link href={props.link}>

          <button className="help-contact-btn">
              <span>
              {btnIcon()}
              </span>
              {props.label}
          
          </button>

      </Link>)
  );
}
