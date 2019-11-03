import React from 'react';
import { Image } from 'react-bootstrap'
import styled from 'styled-components'


export default function Poster(props) {

    const StyledImg = styled.div `
    &:hover .image{
       opacity:0.7;
       filter: alpha(opacity=0.0); 
    flex-direction: column;
       
    
  }
    }
    &:hover .title{
       opacity: ${props.Info? 1:0};
      font-size : 50px;
    }
  `;
    const Info = styled.div `
      position: absolute;
      top: 50%;
      margin:4px;
      color:black;
      font-weight:bold;
      opacity:0;
  `;
  
    return ( <StyledImg >
        <Image className = "image"
        key = { props.id }
        src = { props.path ? props.path.medium : "http://static.tvmaze.com/uploads/images/medium_portrait/215/538786.jpg" }
        /> {
            props.Info &&
                <Info className = "title" >
                
               < h2 > { props.title } </h2> 
               &nbsp; &nbsp; { props.date.substring(0, 4) }

            
                </Info>
        }

        
</StyledImg>
    );
}