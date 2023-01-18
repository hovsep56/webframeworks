import { useState } from "react";

import styles from "./App.module.css";

interface headerprops{
  name:string,
  profilepic:string,
  hoursago:string,
  content:string,
  url:string,
  texturl:string
}

interface bodyprops{
  thumb:string,
  title:string,
  subtitle:string,
  url:string

}

interface footerprops{
  like:string,
  comment:string,
  share:string

}
const Facebookheader=(props:headerprops)=>{
  return(
    <div className={styles.header}>
          <div className={styles.options}>
            <i className="fa fa-chevron-down"></i>
          </div>
          <img
            className={styles.co_logo}
            src={props.profilepic}
          />
          <div className={styles.co_name}>
            <a href="#">{props.name}</a>
          </div>
          <div className={styles.time}>
            <a href="#">{props.hoursago}</a> · <i className="fa fa-globe"></i>
          </div>
          <div className={styles.content}>
          <p>
            {props.content}
            <a href={props.url}>{props.texturl}</a> 
          </p>
        </div>
        </div>
        
  )
}

const Facebookbody=(props:bodyprops)=>{
  return(
    <div className={styles.reference}>
          <img className={styles.reference_thumb} src={props.thumb} />
          <div className={styles.reference_content}>
            <div className={styles.reference_title}>
              {props.title}
            </div>
            <div className={styles.reference_subtitle}>
              {props.subtitle}
            </div>
            <div className={styles.reference_font}>{props.url}</div>
          </div>
        </div>
  )
}
const Facebookfooter = (props:footerprops) =>{
  return(
    <div className={styles.social}>
          <div className={styles.social_content}></div>
          <div className={styles.social_buttons}>
            <span>
              <i className={props.like}></i>Like
            </span>
            <span>
              <i className={props.comment}></i>Comment
            </span>
            <span>
              <i className={props.share}></i>Share
            </span>
          </div>
        </div>
  )
}
const App = () => {
  return (
    <>
      <div className={styles.f_card}>
        
        <Facebookheader name = "nicolas cage" hoursago="2h" content="Height is optional, if no height is specified the image will be a
            square. Example:&nbsp;" profilepic="https://www.placecage.com/c/40/40/" url="https://www.placecage.com/" texturl="https://www.placecage.com/"/>

        <Facebookbody title="A quick and simple image placeholder service. | PlaceCage" thumb="https://www.placecage.com/c/476/250" subtitle="How does it work? Just put your image size after our URL and
              you'll get a placeholder." url="placecage.com"/>

        <Facebookfooter like="fa fa-thumbs-up" comment="fa fa-comment" share="fa fa-share"/>
        
      </div>
    </>
  );
};

export default App;