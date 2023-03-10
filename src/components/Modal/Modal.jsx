import PropTypes from 'prop-types';

import { Component } from 'react';

import css from './Modal.module.css'

export class Modal extends Component {

  componentDidMount() {
         window.addEventListener('keydown', this.handleKeyDown)
  } componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
  }
  
   handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onImageClick('');
    }
  };
  
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onImageClick('');
    }
  };


  render() {
    return (
      <div onClick={this.handleBackdrop} className={css.Overlay}>
        <div className={css.Modal}>
          <img src={this.props.largeImgUrl} alt="" />
        </div>
      </div>
    )
  }
};

Modal.propTypes = {
  onImageClick: PropTypes.func.isRequired,
};