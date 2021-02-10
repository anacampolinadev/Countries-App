import React, { Component } from 'react'
import Api from '../../Api'
import './Region.css';
import {addCountry} from '../../actions';
import {connect} from 'react-redux';

export class Oceania extends Component {
    state={
        oceaniaCountries:[],
    }

    async componentDidMount(){
        const response = await Api.get('/region/asia')
        this.setState({oceaniaCountries:response.data})

    }
    render() {
        const {oceaniaCountries} = this.state

        return (
            <div id="conteiner">
                <div className="ui grid">
              {oceaniaCountries.map((oceanian) =>{
                  const {name,flag} = oceanian 
                  return(
                    <div id="region-card" key={oceanian.numericCode} className="five wide column">
                    <div>
                        <img id="region-flag" src = {flag} alt={name}/>
                        <h1 id="h1">{name}</h1>
                        <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(oceanian)}
                                        
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

export default connect (null, {addCountry}) (Oceania);
