import React from 'react'
import Axios from 'axios'

const axios = Axios.create({
    baseURL:'https://react-burger-8bcc4.firebaseio.com/'
    
})

export default axios