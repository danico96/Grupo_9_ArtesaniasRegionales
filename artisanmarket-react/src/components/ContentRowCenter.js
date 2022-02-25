import React from 'react';
import UsersInDb from './UsersInDb';
import ProductsInDb from './ProductsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Products in DB -->*/}
            <ProductsInDb />
            {/*<!-- End content row Products in Data Base -->*/}

            {/*<!-- Users in DB -->*/}
            <UsersInDb />

        </div>
    )
}

export default ContentRowCenter;