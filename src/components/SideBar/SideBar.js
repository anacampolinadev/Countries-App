import React, { Component } from 'react';
import './SideBar.css';
import { connect } from 'react-redux';
import {excludeCountry} from '../../actions';
import SearchBox from '../SearchBox/SearchBox';
import Api from '../../Api';
 
class SideBar extends Component {
    state={
        sideList:[],
        searchTxt:'',
        filteredList:[]
    }
    searchTxt = (e) => {
        this.setState({searchTxt:e.target.value})
        this.setState({
            filteredList:
            this.state.sideList.filter(sideL => sideL.name.toLowerCase().includes(this.state.searchTxt.toLowerCase()))
        })
    }
    async componentDidMount(){
        const response = await Api.get('/all')
        this.setState({sideList:response.data})
        console.log(response.data)
        this.setState({filteredList:response.data})
    }
    
    render(){
         return (
        <div className="side-box">
            <div className="ui visible right sidebar">
                <br/>
                <div id="title">
                    Countries List:
                </div>
                    <div >
                        <SearchBox placeholder="Search..."
                        value={this.state.searchTxt}
                        onChange={this.searchTxt}                      
                        />
                        </div>
                    {this.props.selectedCountry.map((country)=>{
                        const { name } = country
                            return (
                                <div  key={country.numericCode} className="four wide column" > 
                                    <div  id="inCard">
                                        <h3><strong>{name}</strong></h3>
                                        <button id="exc" 
                                        class="ui button"
                                        onClick={ ()=> this.props.excludeCountry(country)}
                                        >
                                            Remove</button>

                                    </div>
                    </div>
                )
            })}
                
            </div>
        </div>
          
                  
    )
}

    }   

const mapStateToProps = (state) =>{
    return{
        selectedCountry: state
    }

}

export default connect (mapStateToProps, {excludeCountry}) (SideBar);
