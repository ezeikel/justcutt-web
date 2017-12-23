import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddShopForm from '../../components/AddShopForm';
import Shops from '../../components/Shops';
import Reviews from '../Reviews';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={AddShopForm} />
            <Route path='/shops' component={Shops} />
            <Route path='/reviews' component={Reviews} />
        </Switch>
    </main>
)

export default Main;
