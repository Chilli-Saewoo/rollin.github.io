import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

class VisibilitySensorImage extends Component {
    state = {
      visibility: false
    }
  
    render() {
      return (
        <VisibilitySensor
          onChange={(isVisible) => {
            this.setState({visibility: isVisible})
          }}
        >
          <img
            alt={this.props.alt}
            src={this.props.src}
            style={{
              display: 'block',
              maxWidth: '100%',
              width: '100%',
              height: 'auto',
              opacity: this.state.visibility ? 1 : 0.25,
              transition: 'opacity 500ms linear'
            }}
          />
        </VisibilitySensor>
      );
    }
  }
  
  export default VisibilitySensorImage;