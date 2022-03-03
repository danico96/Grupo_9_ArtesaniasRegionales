import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import UsersInDb from './UsersInDb';
import ProductsInDb from './ProductsInDb';
import RegionsInDb from './RegionsInDb';
import ContentRowMovies from './ContentRowMovies';
import FindProduct from './FindProduct';
import LastProduct from "./LastProduct";
import LastUser from "./LastUser";
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Artisan Market"/>
                    </div>
                    <div className='side-brand-icon'>
                        <span>Artisan Market</span>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <span>Artisan Market</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/UsersInDb">
                        <span>Lista de Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductsInDb">
                        <span>Lista de Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/UsersInDb">
                    <UsersInDb />
                </Route>
                <Route path="/ProductsInDb">
                    <ProductsInDb />
                </Route>
                <Route path="/RegionsInDb">
                    <RegionsInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/LastProduct">
                    <LastProduct />
                </Route>
                <Route path="/LastUser">
                    <LastUser />
                </Route>
                <Route path="/FindProduct/:id">
                    <FindProduct />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;