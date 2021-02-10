import React from 'react';

const SearchBox =(props)=>{
    return(
        <div className="ui search">
            <div className="ui icon input">
                 <input className="prompt" 
                 type="text" 
                 value={props.text}
                 placeholder={props.placeholder}
                 onChange={props.onChange}
                 />

                 <i class="search icon"></i>
            </div>
        </div>
    )
}

export default SearchBox;