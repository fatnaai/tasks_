import React from 'react';

export class Menu extends React.Component {

  constructor(props){
super(props);
this.handleClick=this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const text = e.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form className='Menu'> 
        <input onClick={this.handleClick} type="radio" name="src" value="fast" /> fast
        <input onClick={this.handleClick} type="radio" name="src" value="slow" /> slow
        <input onClick={this.handleClick} type="radio" name="src" value="cute" /> cute
        <input onClick={this.handleClick} type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}
