import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types'
import './index.css';


function Tweet({ tweet }) {
  return(
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} /> <Time time={tweet.timestamp}/>
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src={url} className="avatar" alt="avatar" />
  )
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function Author ({ author }) {
  const { name, handle } = author;
  return (
    <span className="author">
      <span className="name">
        {name}
      </span>
      <span className="handle">
        @{handle}
      </span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(
    time
  ).fromNow();
  return ( 
    <span className="time">
    {timeString}
    </span>
  );
}

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count){
  if (count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
      );
    } else {
      return null;
    }
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button" >
    <i className="fa fa-heart" />
    {count > 0 && 
      <span className="like-count"> 
      {count}
      </span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" / >
);

const testTweet = {
  message: 'Something about cats',
  gravatar: '4080acea8620a6a4bccf6b886ef6f225',
  author: {
    handle: 'ramperson',
    name: 'IAMA RamPerson'
  },
  likes: 2,
  retweets: 17,
  timestamp: '2020-07-08 21:24:37'
};


ReactDOM.render(
  <Tweet tweet={testTweet} />,
  document.querySelector('#root')
);
