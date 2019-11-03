import React from 'react';
//import { Glyphicon } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import './Movies.css';

export default function Movie(props){
 console.log(props);
  var average = ""; 
  if(props.movie.rating.average!== null){
      average=props.movie.rating.average.toString() + "   ";
  }
    return(
      <div>
        <Row>
        <h1 > {props.movie.name} </h1>
        </Row>
        
        <Row>
          <Col xs={4}>
            <h4>Date de Sortie :  {props.movie.premiered}</h4>
          </Col>
          </Row>
          <Row>
          <Col xs={4}>
          <h4 >  Rating : {average?average : "not mention"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          <h4 >  Language : {props.movie.language}</h4>
          </Col>
        </Row>
        <Row>
          <Col >
          <h4 >  Length : {props.movie.runtime}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          <h4 >  Type : {props.movie.type}</h4>
          </Col>
        </Row>
        
        <Row>
        <div>
      <h3>summary</h3>
        {props.movie.summary?props.movie.summary: "can't find summary"}
    </div>
        </Row>
        <Row>
          <Col xs={4} >
            
            <h4 id="link">officialSite:<a href={props.movie.officialSite} >  {props.movie.officialSite} </a></h4>
          </Col>
          </Row>
      </div>
    );
}
