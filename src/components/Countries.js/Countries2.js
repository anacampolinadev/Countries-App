import React, {Component} from 'react';
import './Countries.css';
import {connect} from 'react-redux';
import {addCountry} from '../../actions';
import SearchBox from '../SearchBox/SearchBox';
import Api from '../../Api';

class Countries2 extends Component{
    state={
        countries:[],
        searchText:'',
        filteredCountries:[]
    }

    searchText = (e) => {
        this.setState({searchText:e.target.value})
        this.setState({
            filteredCountries:
            this.state.countries.filter(country => country.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
        })
    }

    async componentDidMount(){
        const response = await Api.get('/all')
        this.setState({countries:response.data})
        console.log(response.data)
        this.setState({filteredCountries:response.data})
    }

    render(){
        return(
            <div>
                <div className="search-item">
                    <SearchBox placeholder="Search..." 
                onChange={this.searchText}
                value={this.state.searchText}
                />
                </div>
                
                <div id="grid" className="ui grid">
                    {this.state.filteredCountries.map(filtCountry=>(
                        <div key={filtCountry.numericCode} className="four wide column"  >
                            <div id="inCard">
                            <img id="img" src = {filtCountry.flag} alt="flag"/>
                                        <h3><strong></strong> {filtCountry.name}</h3>
                                        <p><strong>Population:</strong> {filtCountry.population}</p>
                                        <p><strong>Region:</strong> {filtCountry.region}</p>
                                        <p><strong>Capital:</strong> {filtCountry.capital}</p>

                                        <button id="add" 
                                        class="ui button"
                                        onClick={ ()=> this.props.addCountry(filtCountry)}
                                        
                                        >Addo to List</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default connect (null,{addCountry})(Countries2);