import React, { Component } from 'react'
import Api from '../../Api'
import './Region.css';
import {addCountry} from '../../actions';
import {connect} from 'react-redux';

export class Europe extends Component {
    state={
        europeCountries:[],
    }

    async componentDidMount(){
        const response = await Api.get('/region/europe')
        this.setState({europeCountries:response.data})
    }

    render() {

        const {europeCountries} = this.state

        return (
            <div id="conteiner">
                <div className="ui grid">
                {europeCountries.map((european) =>{
                    const {name,flag} = european
                    return(
                        <div id="region-card" key={european.numericCode} className="five wide column">
                        <div>
                            <img id="region-flag" src = {flag} alt={name}/>
                            <h1 id="h1">{name}</h1>
                            <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(european)}
                                        
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

export default connect (null,{addCountry})( Europe);