import imagePersonal from '../assets/PERSONAL-FOTO-EDELDEV.jpg'

const EdelContainer = () => {
  return (
    <div className="container">
        <div className="contenido">
            <img src={imagePersonal} alt="image-edeldev" />
            <h2>Edel Ballesteros</h2>
            <p>@edel.dev</p>
            <div className="social-media">
                <a href='https://www.tiktok.com/@edel.dev' target='_blank'><ion-icon name="logo-tiktok"></ion-icon></a>
                <a href='https://www.instagram.com/edel.dev/' target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                <a href='https://www.youtube.com/channel/UCY8L1pp2pvOGI7SwlwgAgPg' target='_blank'><ion-icon name="logo-youtube"></ion-icon></a>
                <a href='https://github.com/edeldev' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                <a href='https://www.linkedin.com/in/edeldeev/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
            </div>
            <div className="content-enlaces">
                <a href="https://edeldevnew.netlify.app" target='_blank'>
                    <ion-icon name="globe-outline"></ion-icon>
                    <p>Mi sitio web</p>
                </a>
            </div>
            <p className='fin'>¡VAMOS A CREAR JUNTOS!</p>
        </div>
    </div>
  )
}

export default EdelContainer
