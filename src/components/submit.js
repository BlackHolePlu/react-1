import React from 'react'

function alertS(){
    return alert("Hello World!!!")
}

function SubmitBtn() {
    return (
        <button type='submit' className='submit' onClick={alertS}>Hello</button>
    );
}

export default SubmitBtn;