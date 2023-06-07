import styles from './Navbar.module.css'

const navbarTags = [
  'Propuestas',
  'Integrantes',
  'Eventos'
]

export const Navbar = () => {
  return (
    <nav className={styles.nav} >
      <h2 className="title-nav">Asociacion SC</h2>
      
      <ul className={styles['nav-links']}>
        {
          navbarTags.map( tag => (
            <li key={tag} className={styles['nav-link']}>
              <a href={`#tag`} className={styles['nav-link-item']}>{ tag }</a>
            </li>
          ))
        }
      </ul>

    </nav>
  )
}
