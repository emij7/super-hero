import React from "react"
const URL = 'https://superheroapi.com/api.php/'
const miToken = '10227367807479577'
const ApiContext = React.createContext(`${URL}${miToken}`)

export default ApiContext
