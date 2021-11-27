import Slider from 'infinite-react-carousel';
import Slide from './Slide/Slide';

function StatsSlider(props) {
  const settings =  {
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: true,
    centerPadding: 30,
    className: props.className
  };

  return (
    <Slider { ...settings }>

      <Slide title={'Languages over all time (in percentage)'}>
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/02511174-7afa-4808-9f72-f583073f3c6d.svg"></embed>
      </Slide>
      <Slide title={'Languages over all time (in hours)'}>
        <embed className="slide__stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=sahvea&hide_title=true&hide_border=true&theme=calm&bg_color=212121&text_color=ffffffb0"></embed>
      </Slide>
      <Slide title={'Coding activity over last 30 days'}>
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/5436d345-07ee-43b4-8cf4-b4ae274b5bbe.svg"></embed>
      </Slide>

    </Slider>
  );
}

export default StatsSlider;