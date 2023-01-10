import { GithubIcon, twitterIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>jType</div>
      <a
        href="https://github.com/JmarbinGG/jtype"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
        aria-label="View on Github"
      >
        {GithubIcon}
      </a>

     
    </nav>
  )
})
