import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebookF,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Social = () => {
  return (
    <ul className={styles.list}>
      <li href='https://twitter.com/'>
        <FontAwesomeIcon icon={faTwitter} />
        <span className='sr-only'>Twitter</span>
      </li>
      <li href='https://www.facebook.com/'>
        <FontAwesomeIcon icon={faFacebookF} />
        <span className='sr-only'>Facebook</span>
      </li>
      <li href='https://github.com/'>
        <FontAwesomeIcon icon={faGithub} />
        <span className='sr-only'>GitHub</span>
      </li>
    </ul>
  )
}

export default Social
