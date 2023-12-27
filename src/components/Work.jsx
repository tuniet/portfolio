import './Work.css';
import architecture from '../media/Images/1674976757-download-1.jpg'
import jewelry from '../media/Images/1674976855-download-3.jpg'
import clothing from '../media/Images/1679544184-download.jpg'
import other from '../media/Images/1674977916-download-18.jpg'
import css from '../media/icons/css.svg'
import html from '../media/icons/html.svg'
import js from '../media/icons/js.svg'
import react from '../media/icons/react.svg'


const Card = props =>{
  return(
    <a target="_blank" href={props.url} className={`card ${props.pos}`}><img className='card-img' src={props.img} alt=''/><span className='card-name'>{props.name}</span>{props.cardIcons}</a>
  )
}

const CardIcons = props =>{
  var iconss = props.icons;
  const listItems = iconss.map(icon =>
    <img key={icon} src={icon} alt='' width={16}/>
  );
  return(
      <div className='card-icons'>{listItems}</div>
  )
}
function Work() {
  return (
    <div id='work' className='work'>
      <h1 className='title'>Selected Work</h1>
        <div className='grid'>
          <Card url='https://tuniet.github.io/meraki' img={clothing} pos='first' name='Meraki' cardIcons = {<CardIcons icons={[css, html]}/>}/>
          <Card url='https://tuniet.github-io/nobelnest' img={jewelry} pos='second' name='Jewelry' cardIcons = {<CardIcons icons={[html]}/>}/>
          <Card url='https://www.tonifdez.com' img={architecture} pos='third' name='Architecture' cardIcons = {<CardIcons icons={[react]}/>}/>
          <Card url='https://www.tonifdez.com' img={other} pos='fourth' name='Allonda' cardIcons = {<CardIcons icons={[js]}/>}/>
        </div>
    </div>
  );
}

export default Work;