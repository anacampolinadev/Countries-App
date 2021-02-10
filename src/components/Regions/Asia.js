import React, { Component } from 'react'
import Api from '../../Api'
import './Region.css';
import {addCountry} from '../../actions';
import {connect} from 'react-redux';

export class Asia extends Component {
    state = {
        asiaCountries:[],

    }

    async componentDidMount(){
        const response = await Api.get('/region/asia')
        this.setState({asiaCountries: response.data})
    }

    render() {
        
        const {asiaCountries} = this.state

        return (
            <div id="conteiner">
                 <div className="ui grid">
                    {asiaCountries.map((asian) => {
                        const {name,flag} = asian
                            return (
                        
                                <div id="region-card" key={asian.numericCode} className="five wide column">
                                <div>
                                    <img id="region-flag" src = {flag} alt={name}/>
                                    <h1 id="h1">{name}</h1>
                                    <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(asian)}
                                        
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

export default connect (null,{addCountry}) (Asia);
