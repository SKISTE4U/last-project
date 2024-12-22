import './css.css'
// import '../../global_css.css'
// import '../../images/logo.png'

export default function Header() {
    return (
      <div className='Header'>
        <img src="/logo.svg" alt="image" />
        <div className='navbar'>
          <ul>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Contacts</a></li>
          </ul>
        </div>
        <div className='ContactZone'>
          <a href='tel:+79084320538'>
            <div className='CallUs'>
              <img src='phone.svg'></img>
              <div className='_2lines'>
                <span className='name'>Call Us</span>
                <span className='text_in_contact'>+ 7 987 654 32-10</span>
              </div>
            </div>
          </a>
          <a href='email:ne_pizdaboli@naebalovo.com'>
            <div className='Chat'>
              <img src='Chat.svg'></img>
              <div className='_2lines'>
                <span className='name'>Talk to Us</span>
                <span className='text_in_contact'>ne_pizdaboli@naebalovo.com</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
  