import React, { Component } from 'react';
import { Input, Col, Row } from 'antd';
import Poster from './poster';
import {Link} from 'react-router-dom';
import Cine from './Film.png';
import './search.css';
import Service from '../service';
export default class Search extends Component {
 

    search = {
      value: '',
    }
  

  constructor(props) {
    super(props);
    this.state = {
       data: []
    };
    this.Service = new Service();
}
componentDidMount() {
    this.Service
        .GetData()
        .then(res => {
            this.setState({ data: res });
        })
}
  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  

  render () {
    const { value: query } = this.state
    console.log(this.state.value);
    console.log(this.state.data);
    let search = this.state.data.map((data)=>{
      if(data.show.name.toString().toLowerCase() ==this.state.value ||data.show.name ==this.state.value ||data.show.name.toString().toUpperCase() ==this.state.value ||data.show.premiered.substring(0,4)==this.state.value){
          
          if(data.show.image!== null){
              
            var  image=data.show.image.medium;
          }
          return(
            <Col  md={4} key={data.show.id}>
                 <Link to = { '/secondpage/' + data.show.id } >
                <Poster Info
                 id={data.show.id} 
                 path={data.show.image}
                  title={data.show.name} 
                  voteAverage={data.show.rating.average}
                   date={data.show.premiered} responsive />
              </Link>
                </Col>
          );
      }
  });
    
    return (
      <Row> <img id='img' src={Cine} alt="" width="100" height="50" />
              <h3 id='title'>Ecrivez le nom complet du film ou la date du film</h3>

        <Col className='search'>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>								
            <Input width="50" height="50" placeholder="Ecrivez le nom complet du film '(min ou maj)' ou la date du film ..." onChange={this.handleChange} />
            
            
         {search}
          
          {query}
       </Col>
      
      </Row>
    )
  }
}