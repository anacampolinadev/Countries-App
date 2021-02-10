export function addCountry (country){
    return{
        type: 'ADD_COUNTRY',
        payload: country
    }
}

export function excludeCountry (country){
    return{
        type: 'EXCLUDE_COUNTRY',
        payload: country
    }
}

