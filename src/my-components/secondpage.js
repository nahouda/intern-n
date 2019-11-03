import React , { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Poster from './poster';
import Movies from './Movies'
import Service from '../service';
import Header from './header';
import Footer from './footer'; 

import './secondpage.css'

class Secondpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :[]
        };
        this.service = new Service();
    }
    componentDidMount() { 
        this.service
        .GetData()
        .then(res => {
            this.setState({ data: res });
        })
           
    }
  
    render() {
        
        console.log(this.state.data);
        let movie = this.state.data.map((data)=>{
            if(data.show.id ==this.props.match.params.id){
                
                if(data.show.image!== null){
                    
                  var img=data.show.image.medium;
                }
                return(
                  <Container fluid={false}  key={data.show.id}>
                    <Row>
                      <Col  md={4} >
                        <Poster id={data.show.id} path={data.show.image} responsive />
                      </Col>
                      <Col md={8}>
                        <Movies movie={data.show}/>
                       
                      </Col>
                    </Row>
                    
                  </Container>
                );
            }
        });

        return (
            <div>
                < Header />
                
                <div id='box' >
                
                {movie}
                </div>
                <Footer />
            </div>
        );
        
    }
  }
  export default Secondpage;
