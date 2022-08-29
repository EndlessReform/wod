import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from './exercise_red.jpg';

const FirstLeftText = () => <p>About these WODs</p>;

const FirstRightText = () => (
  <p>
    These are the archives of {' '}
    <a href="https://web.archive.org/web/20220202105453/https://crossfittheville.wordpress.com/">Crossfit TheVille</a>
    , a Louisville, KY gym open from 2011 to 2022. 
    This site loops their schedule, so you can use their plans indefinitely.
    <a
      className={calloutLink}
      href="https://crossfittheville.wordpress.com/">
      Original Crossfit TheVille site (may be defunct) →
    </a>
  </p>
);



const BannerText = () => <h1>Workouts of the Day</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#750e13"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
