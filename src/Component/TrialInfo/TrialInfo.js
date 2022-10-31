import React from 'react'
import style from './TrialInfo.module.scss'

const TrialInfo = () => {
    const { info_wrapper} = style
  return (
    <div className={info_wrapper}>
        <p><b>Try it free 7 days</b> then $20/mo. thereafter</p>
    </div>
  )
}

export default TrialInfo