import React, { Component } from 'react';
import './styles.styl';

function HeaderTitle(props) {
  const { entitle, cntitle1, cntitle2 } = props.title;
  return (
    <div>
      <div className="title">
        <div className="en-title">{entitle}</div>
        <div className="cn-title">
          {cntitle1}
          <strong>
            <span>{cntitle2}</span>
          </strong>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitle;
