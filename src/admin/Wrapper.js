import React from 'react'
import Menu from './components/Menu';
import Nav from './components/Nav';

const Wrapper = (props) => {
    return (
        <div>
            <Nav />

            <div class="container-fluid">
                <div class="row">
                    <Menu />

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Wrapper
