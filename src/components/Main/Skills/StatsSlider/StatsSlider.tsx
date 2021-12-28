import React, { useContext } from 'react';
import { TranslationContext } from '../../../../contexts/translationContext';
import Slider from 'infinite-react-carousel';
import Slide from './Slide/Slide';

interface Props {
  className: string;
}

const StatsSlider: React.FC<Props> = ({ className }) => {
  const translation = useContext(TranslationContext);

  const settings =  {
    autoplay: true,
    autoplaySpeed: 6000,
    adaptiveHeight: true,
    className: className
  };

  return (
    <Slider { ...settings }>

      <Slide title={translation.skills.sliderTitles.allPercentage} >
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/72658fda-26bb-4c47-8980-dbc7915eeda0.svg"></embed>
      </Slide>
      <Slide title={translation.skills.sliderTitles.allHours} >
        <embed className="slide__stats" src="https://github-readme-stats.vercel.app/api/wakatime?username=sahvea&hide_title=true&hide_border=true&theme=calm&bg_color=21212100&text_color=ffffffb0"></embed>
      </Slide>
      <Slide title={translation.skills.sliderTitles.activity30} >
        <embed className="slide__stats" src="https://wakatime.com/share/@sahvea/cdbaa112-cf56-4dc5-8d45-248fd70e883b.svg"></embed>
      </Slide>

    </Slider>
  );
}

export default StatsSlider;