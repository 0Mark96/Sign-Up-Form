import style from './Intro.module.scss'

const Intro = () => {
    const {intro,title,description} = style
  return (
    <header className={intro}>
       <h1 className={title}>Learn to code by watching others</h1>
       <p  className={description}> See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
       but understanding how developers think is invaluable. </p>
    </header>
  )
}

export default Intro