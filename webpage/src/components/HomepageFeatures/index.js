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
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EUrOvngCvQ1BrXaQydf7crsBJYMjX4BRdMDX-YIK2HOYqQ?e=VIgEjl' target='_blank'>SD1 Slide: Types of Scaling</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EUl2znN_5sxHneazGaLM9zIBEB--PkI-vvrq9p06ghcJ3w?e=P2mpBj' target='_blank'>SD2 Slide: HTTP and Web Services</a>
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
        <ul>
          <li>Case Study:  A FRAMEWORK FOR SYSTEM DESIGN INTERVIEWS</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ER1zgQYIIcJDjk2pGQ_EWCwBeql7W75eHxJl5vy3UkQZsQ?e=X9U7s5' target='_blank'>SD3 Slide: Stateless Services</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EYCSNSG2YOFCgVPTUWBWySMBw8Q1uzdzavtYf03KunPPOA?e=NpIzfJ' target='_blank'>SD4 Slide: Proxies and Caches</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EblY2d9lDyZMizAWZbSJWN4Bg9dbHgCh5QDOfKqa0iJNug?e=ONQAG6' target='_blank'>SA3 Slide: Requirements Engineering Approaches Overview</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Four',
    Svg: require('@site/static/img/wk4.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:   DESIGN A RATE LIMITER and  DESIGN CONSISTENT HASHING</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ER7PnhSjMYJJtdEv-oF_H6oBv6ZoqbHVPbSjFly915tw9A?e=h81Xbh' target='_blank'>SD5 Slide:  REST APIs and Data Serialization</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ETGayaQDSFNOr5Vh24AJPvABZXCr-5h704XSDmiUYu9YhQ?e=6iQeNc' target='_blank'>SD6 Slide: Microservice</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EV-iDcIC47lKvMHXSf9w4TkBQA3khf-XVIlVISsUUCOEZg?e=suy2lt' target='_blank'>SA4 Slide: Requirements Elicitation</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Five',
    Svg: require('@site/static/img/wk5.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:  DESIGN A KEY-VALUE STORE and DESIGN A UNIQUE ID GENERATOR IN DISTRIBUTED SYSTEMS</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ESt-kZ7aRYhJr_PooOWgWJcBcTf1SO7fdGcTHvjjd90vYw?e=ApleFY' target='_blank'>SD7 Slide: Load Balancing</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/Ee53fEkqAEpMsSgV_MawtVQB7NtoX_Z2MocnRyecoP-4mw?e=gCbKUM' target='_blank'>SD8 Slide: Relational Databases</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EY2W8AhDI-1AtItLTTJ3PggBQmhTM_xQQovBIPx4WpJUrw?e=G6AgRu' target='_blank'>SA5 Slide: Functional Requirements</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Six',
    Svg: require('@site/static/img/wk6.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:   DESIGN A URL SHORTENER and  DESIGN A WEB CRAWLER</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EemfObvYspNClNDg4O195xIBVK6hY2vl82N2_y0jEgoixg?e=UXP8JH' target='_blank'>SD9 Slide: SQL Database Scaling</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EcCbHmed3ltAsm0_--tKsa8BmtCSuP73UsYLeqw7NYlx1g?e=mZrzno' target='_blank'>SD10 Slide: Authentication</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/Ee1ZR4Lfj5pAn3nuah6ClGEBUwWpOMLdSGzQ2FRXJFBpXQ?e=ylsrRq' target='_blank'>SA6 Slide: Non Functional Requirements</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Seven',
    Svg: require('@site/static/img/wk7.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:  DESIGN A NOTIFICATION SYSTEM and  DESIGN A NEWS FEED SYSTEM</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ETLsgWRKYOpHm9pclWRvfioB14ZLIi9cE15RDW52tHzZqQ?e=FFjHQi' target='_blank'>SD11 Slide: Basic Architecture Design</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EZf_N4JxczBMoU1cDmsr8_cBZYE7gDvEV0yPCWU59Yx04A?e=vGjkVa' target='_blank'>SD12 Slide: Push Notifications</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EbDuKZAMiW5BpdVf1OIOlbABh8IVu36_zB0ndB1NT_Bt_A?e=IZg0fq' target='_blank'>SA7 Slide: Requirements Quality Assurance</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eight',
    Svg: require('@site/static/img/wk8.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:  DESIGN A CHAT SYSTEM and DESIGN A SEARCH AUTOCOMPLETE SYSTEM</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EVGu0D2S4cZEh3XOEHG-z_kBZif0T5a-36jvs5ga_UKD4A?e=GUBGSM' target='_blank'>SD13 Slide: Distributed NoSQL Databases</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EUlypJiZhuZBn8jiBq4HbfABvBcD7kqszEGKMl0wQhclAg?e=qOdio4' target='_blank'>SD14 Slide: Distributed DB Consistency</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:b:/g/personal/poffei_st_ug_edu_gh/EYuQ0ZJ4E1lIgXmIvB_QZZkBlkSGlL_6ORKNT6sN8zzz4w?e=bGzpLi' target='_blank'>SA8 Slide: Requirements Management</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Nine',
    Svg: require('@site/static/img/wk9.svg').default,
    description: (
      <>
        <ul>
          <li>Case Study:  DESIGN YOUTUBE and DESIGN GOOGLE DRIVE</li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EYvuxDKtEvZGjof87hhtoxABerWuyy70B2lao8u5G_RSNA?e=CHVLut' target='_blank'>SD15 Slide: Choosing a Database</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/ERWWqPWlZXFCvQNP4-Zsvh8BZyNvikDK-oIlx5CFu2Fvxw?e=BQW5ab' target='_blank'>SD16 Slide: Asynchronous Processing</a>
          </li>
          <li>
            <a href='https://trello.com' target='_blank'>SA10 Individual Project: Project Work on Requirement Engineering using Trello</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Ten',
    Svg: require('@site/static/img/wk10.svg').default,
    description: (
      <>
        <ul>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EQs2JTYVDq5KjHxlRf0vfXoB_1f1TBZDDHbR_fJXkyAPpw?e=la5ngB' target='_blank'>SD17 Slide: Twitter Design Exercise (now X)</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/Ef5__PjV7f9FtUjXUy4yfnIBqpqxM3JNMjKAySU42RjsJw?e=rMHhqh' target='_blank'>SD18 Slide: Computing Platforms</a>
          </li>
          <li>
            <a href='https://ugedugh-my.sharepoint.com/:p:/g/personal/poffei_st_ug_edu_gh/EcOhFWXjY9NOp7--Ekyt8gUBAEoQeeI792zeVSKBZYdLJw?e=opUCcg' target='_blank'>SD19 Slide: Distributed Computing</a>
          </li>
          <li>
            <a href='https://app.diagrams.net/' target='_blank'>SA11 Individual Project: Use Drawio to Design your System in the Requirement Engineering Phase</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Week Eleven',
    Svg: require('@site/static/img/wk11.svg').default,
    description: (
      <>
        Revision week
      </>
    ),
  },
  {
    title: 'Week Twelve',
    Svg: require('@site/static/img/wk12.svg').default,
    description: (
      <>
        Examination Week
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
