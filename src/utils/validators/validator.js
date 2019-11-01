export const requiredField = value=>{

    if (value) return undefined
    return 'error msg'
   
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value  && value.length >  maxLength) return `max length is ${maxLength} symbols`

    return undefined
    
}


