import React, { Component } from 'react';
import Api from '../../Api';
import './Region.css'
import {addCountry} from '../../actions';
import {connect} from 'react-redux';

class Africa extends Component{
    
        
        state= {
            africaCountries:[],
        }

        async componentDidMount(){
            const response = await Api.get('/region/africa')
            this.setState({africaCountries: response.data})
            console.log(response.data);
        }        
        
        render(){

            const {africaCountries} = this.state
        return(
           <div id="conteiner">
               <div className="ui grid">
                <br/>
               {africaCountries.map((african)=>{
                   const { name, flag} = african
                   return(
                      
                          <div id="region-card" key={african.numericCode} className="five wide column">
                            
                            <div>
                                <img id="region-flag" src = {flag} alt={name}/>
                                <h1 id="h1">{name}</h1>
                                <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(african)}
                                        
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

export default connect (null, {addCountry})(Africa);