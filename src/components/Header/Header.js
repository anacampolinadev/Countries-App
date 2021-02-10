import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {    
    render(){        
        return(
           
            <div className="box-home"> 
                <br/> 
                    <div className="six ui buttons">
                        <button className="ui button"><Link to="/"> Home</Link> </button>
                        <button className="ui button"><Link to="/africa">Africa</Link></button>
                        <button className="ui button"><Link to="/americas">Americas</Link> </button>     
                        <button className="ui button"><Link to="/asia">Asia</Link></button> 
                        <button className="ui button"><Link to="/europe">Europe</Link> </button>     
                        <button className="ui button"><Link to="/oceania">Oceania</Link></button>             
                    </div>
                 </div>
      )
    }
}

export default Header;
