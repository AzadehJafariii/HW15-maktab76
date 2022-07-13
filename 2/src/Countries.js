import { Component } from 'react';
import countries from './data';


import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';




class Information extends Component {
  constructor() {
    super();
    this.state = { index: 0 };
  }
  
  prevcountry = () => {
    let { index } = this.state;
    index<=0 ? index = countries.length : 
    this.setState({ index: index - 1 })
  };
  nextcountry = () => {
    let { index } = this.state;
    index<countries.length-1 ? 
    this.setState({ index: index + 1 }) : index=0;
  };
  render() {
    const { index } = this.state;
    const { name, capital, image } = countries[index];
    return (
      <article className="card">
        <div className="img-container">
          <img src={image} alt={name} className="country-img" />
        </div>
        <div className="title">
          <FaChevronLeft onClick={this.prevcountry} /><h3 className="countryName">{name}</h3><FaChevronRight onClick={this.nextcountry}/>
        </div> 
        <div><h5 className='capit'>{capital}</h5></div>          
      </article>
    );
  }
}

export default Information;
