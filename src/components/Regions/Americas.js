import React, { Component } from 'react';
import Api from '../../Api';
import './Region.css';
import {addCountry} from '../../actions';
import {connect} from 'react-redux';

class Americas extends Component{
    state={
        americasCountries:[],
    }

    async componentDidMount(){
        const response = await Api.get('/region/americas')
        this.setState({americasCountries:response.data});
    }


    render(){

        const {americasCountries} = this.state

        return(
            <div id="conteiner">

 <div className="ui grid">
                {americasCountries.map((americans) => {
                    const {name,flag} = americans
                    return(
                        
                        <div id="region-card" key={americans.numericCode} className="five wide column">
                            <div>
                                <img id="region-flag" src = {flag} alt={name}/>
                                <h1 id="h1">{name}</h1>
                                <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(americans)}
                                        
                                        >Addo to List</button>
                            </div>
                        </div>
                    )
                })}

            </div>
            </div>

           
            
        )
    }
}

export default connect (null, {addCountry})( Americas);