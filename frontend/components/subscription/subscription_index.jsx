import React from 'react';
import Subscription from './subscription';

class SubscriptionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribe = this.unsubscribe.bind(this);
  }

  unsubscribe(subreddit) {
    return () => {
      this.props.deletePosts(subreddit);
    };
  }

  render() {
    const { subscriptions } = this.props;
    const subscriptionsList = subscriptions.map( (subreddit, idx) =>
      <Subscription key={`subscription-${idx}`}
                    subreddit={subreddit}
                    unsubscribe={this.unsubscribe(subreddit)} />
    );

    return (
      <div className="subscriptions">
        {subscriptionsList}
      </div>
    );
  }
}

export default SubscriptionIndex;
