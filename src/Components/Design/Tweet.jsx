import React from 'react';

const TweetCard = ({ item }) => {
  const { twitterHandle, message, imageUrl } = item;

  return (
    <div className="tweet-card">
      <div className="user-image">
        <img src={imageUrl} alt="User" />
      </div>
      <div className="tweet-content">
        <div className="twitter-handle">{twitterHandle}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

const Tweet = () => {
  const tweet = {
    twitterHandle: "OpenAI",
    message: "Excited to announce the launch of our new language model!",
    imageUrl: "https://example.com/user-image.png",
  };

  return (
    <div>
      <h1>Tweet Component</h1>
      <TweetCard item={tweet} />
    </div>
  );
};

export default Tweet;
