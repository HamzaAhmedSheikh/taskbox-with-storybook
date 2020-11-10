import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import TaskList from '../TaskList/TaskList';

 export function PureInboxScreen({ error }) {
    if (error) {
     return (
        <div className="page lists-show">
         <div className="wrapper-message">
          {/* <span className="icon-face-sad" /> */}
          <SentimentVeryDissatisfiedIcon style={{ width: "50px", height: "70px" }} />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message"> Something went wrong. </div>
         </div>
        </div>
      );
    }
  
    return (
      <div className="page lists-show">
        <nav>
          <h1 className="title-page">
            <span className="title-wrapper"> Taskbox </span>
          </h1>
        </nav>
        <TaskList />
      </div>
    );
  }
  
  PureInboxScreen.propTypes = {
    /** The error message */
    error: PropTypes.string,
  };
  
  PureInboxScreen.defaultProps = {
    error: null,
  };
  
  export default connect(({ error }) => ({ error }))(PureInboxScreen);