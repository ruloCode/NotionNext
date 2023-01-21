import classnames from 'classnames'
import styles from './button.module.scss'

export const Button = ({variant, children, handleClick}) => {
  return (
    <button onClick={handleClick} className={classnames(styles.button, {
    [styles["button--outline"]] : variant === 'outline'
    })} type="button">{children}</button>
  )
}
