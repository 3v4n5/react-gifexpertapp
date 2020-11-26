import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');//admin el estado

    const handleInputchange = (e) => {//captura los cambios del imput
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {//captura el enter del submit
        e.preventDefault();//no recarga la pagina del form

        if( inputValue.trim().length > 2 ){
            //console.log('Submit hecho');
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');
        }

    }


    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputchange}

            />
        </form>
    )
}

AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}