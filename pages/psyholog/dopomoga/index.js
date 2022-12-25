import Head from "next/head"
import Link from "next/link"
import CurrentPageHeader from "../../../components/CurrentPageHeader"
import HelpContactBtn from "../../../components/HelpContactBtn"

export default function Help() {
  return (
    <div>
        <Head>
          <title>Контакти психологічної допомоги</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className='container help-contacts'>

          <CurrentPageHeader text='Контакти психологічної допомоги' backLink='/psyholog'/>
          
          <p className="page-desc">
            <b>
            ❗ В житті кожної людини бувають періоди, коли дуже важко справлятися зі своїми проблемами самостійно,
             а поруч немає нікого, хто міг би допомогти і порадити...<br/>
             💕 На щастя, в Україні працюють десятки ліній, де готові надати безплатні консультації.
                І хоча вони не замінюють повноцінних сесій, проте в термінових ситуаціях чи складний
                період тобі готові допомогти, порадити та підтримати.
            </b>
          </p>

          <h2>Гарячі лінії психологічної допомоги:</h2>

          {/* Lifeline Ukraine */}

          <h4 className="hr-header">Lifeline Ukraine</h4>
          <p className="help-contact-desc">
            Лінія працює цілодобово для запобігання самогубств та підтримки психічного здоров’я.
          </p>

          <h4>Контакти:</h4>
          <div className="help-contact-link">
            <span>Сайт: </span> 
            <Link href='https://lifelineukraine.com/'><a>https://lifelineukraine.com/</a></Link>
          </div>
          <HelpContactBtn 
            type='phone'
            link='tel:7333'
            label='Зателефонувати 7333'
          />
          <small className="help-contact-notice">*дзвінки безкоштовні</small>
          <HelpContactBtn 
            type='telegram'
            link='https://t.me/LifelineUkraine7333'
            label='Написати в Telegram'
          />

          {/* #ВАРТОЖИТИ */}

          <h4 className="hr-header">#ВАРТОЖИТИ</h4>
          <p className="help-contact-desc">
          Команда психологів всеукраїнського кол-центру “ВАРТОЖИТИ” надає безкоштовні консультації всім, хто не може самотужки впоратись з переживаннями через війну росії проти України.<br/>
          🕓 З 11:00 до 19:00 у будні
          </p>

          <h4>Контакти:</h4>
          <div className="help-contact-link">
            <span>Сайт: </span> 
            <Link href='https://vartozhyty.com.ua/oncopsychologyhelp'><a>https://vartozhyty.com.ua/</a></Link>
          </div>
          <HelpContactBtn 
            type='phone'
            link='tel:5522'
            label='Зателефонувати 5522'
          />
          <small className="help-contact-notice">*дзвінки безкоштовні для абонентів Kyivstar, Lifecell та Vodafone</small>
          

          {/* Friend first aid bot */}

          <h4 className="hr-header">Чат-бот &quot;Друг&quot;</h4>
          <p className="help-contact-desc">
          Чат-бот першої психологічної допомоги. Розроблений за науково доведеними міжнародними протоколами.
          </p>

          <HelpContactBtn 
            type='telegram'
            link='https://t.me/friend_first_aid_bot'
            label='Відкрити чат-бот'
          />

          {/* VeteranHub */}

          <h4 className="hr-header">VeteranHub</h4>
          <p className="help-contact-desc">
            Консультація психолога, поради юристів та інша допомога ветеранам.
          </p>

          <h4>Контакти:</h4>
          <div className="help-contact-link">
            <span>Сайт: </span> 
            <Link href='https://veteranhub.com.ua/'><a>https://veteranhub.com.ua/</a></Link>
          </div>
          <HelpContactBtn 
            type='phone'
            link='tel:+380673482868'
            label='067 348 28 68'
          />
          <small className="help-contact-notice">*Для кого працюють консультанти: ветерани, подружжя, діти та близькі ветеранів, родини та близькі військових, захисників і захисниць НГУ, МВС, ТрО, Державної прикордонної служби, ДСНС, медиків і добровольців</small>
          
          <h2>Контакти психологів-волонтерів:</h2>

          <p className="temp-text">В розробці...</p>

        </div>
      </div>
  )
}