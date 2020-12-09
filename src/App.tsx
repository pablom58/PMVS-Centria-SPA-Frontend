import React from 'react'
import { Switch , Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Car from './pages/Car'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'
import CreateProduct from './pages/CreateProduct'

const App = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={Signup} />
            <Route path='/car' exact component={Car} />
            <Route path='/checkout' exact component={Checkout} />
            <Route path='/productDetails/:id' exact component={ProductDetails} />
            <Route path='/createProduct' exact component={CreateProduct} />
        </Switch>
    )
}

export default App