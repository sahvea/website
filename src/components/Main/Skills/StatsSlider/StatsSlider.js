import Slider from 'infinite-react-carousel';
import Slide from './Slide/Slide';

function StatsSlider(props) {
  const settings =  {
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    className: props.className
  };

  return (
    <Slider { ...settings }>

      <Slide title={'Languages over all time (in percentage)'}>
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/72658fda-26bb-4c47-8980-dbc7915eeda0.svg"></embed>
      </Slide>
      <Slide title={'Languages over all time (in hours)'}>
        <embed className="slide__stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=sahvea&hide_title=true&hide_border=true&theme=calm&bg_color=21212100&text_color=ffffffb0"></embed>
      </Slide>
      <Slide title={'Coding activity over last 30 days'}>
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/5436d345-07ee-43b4-8cf4-b4ae274b5bbe.svg"></embed>
      </Slide>

    </Slider>
  );
}

export default StatsSlider;