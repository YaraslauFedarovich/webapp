import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss"

export function Loader({ isLoading, delay }) {
  const [isVisible, setVisible] = useState(false)
  const timeout = delay ?? 500

  useEffect(() => {
    if (!isLoading) {
      if (delay) {
        setTimeout(() => setVisible(false), timeout)
      } else {
        setVisible(false)
      }
    } else {
      setVisible(true)
    }
  }, [isLoading, delay, timeout])

  return (isVisible ?
      <div className={styles.background}>
        <div className={styles.loader}/>
      </div>
      : ''
  )
}