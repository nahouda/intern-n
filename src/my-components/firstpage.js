import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
//import Card from '@material-ui/core/Card';
import {Link} from 'react-router-dom';
import Poster from './poster'
import Header from './header';
import Footer from './footer';
import Service from '../service';
import Search from './search';




class firstpage extends Component {
    
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
       
    render() {
        
        let video = this.state.data.map(data => {
              
            console.log(data.show._links.self.href);
            
            
            return (
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
               )
                
        });
            
        return (
        <div>
            <div>
          
        <Header/>
        </div>
        <div>
        <Search />
        </div>
        <div>
            
           
        <Row >
            
           
                {video}
             
            </Row>
            
        </div>
        <div>
        <Footer/>
        </div>
        </div>
        
    
        );
    }
}
export default firstpage;
