import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Week One',
    Svg: require('@site/static/img/wk1.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study: Scale From Zero To Millions of Users</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EYRHbNl-BUhBlWl9nqOK-SsBtNhdWVgxxs6Hyxuo7mqWVw?e=Hrg4sh' target='_blank' >SA1 Slide: Fundamentals in Requirements Engineering</a>
          </li>
          <li>Homework 1 Released</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Two',
    Svg: require('@site/static/img/wk2.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:  Back Of The Envelop Estimation</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EUrOvngCvQ1BrXaQydf7crsBr3OdRcH6eo1RUGxvgpQ4eg?e=U2YiTA' target='_blank'>SD1 Slide: Types of Scaling</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EUl2znN_5sxHneazGaLM9zIBhM8sP0aegx8lwvUQNVPnXg?e=r6pPQM' target='_blank'>SD2 Slide: HTTP and Web Services</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/Eclh9aj24AtAj-Lg-PEZpKQB_LLgY4XLsuWv7BHJYcLM0w?e=x8txe2' target='_blank'>SA2 Slide: Requirements Engineering Core Activities and Principles</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Three',
    Svg: require('@site/static/img/wk3.svg').default,
    description: (
      <>
        Homework 1 due for submission
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
