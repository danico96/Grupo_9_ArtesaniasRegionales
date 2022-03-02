import React from 'react';
import LastUser from './LastUser';
import LastProduct from './LastProduct';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Product in DB -->*/}
            <LastProduct />
            {/*<!-- End content row Products in Data Base -->*/}

            {/*<!--  Last User in DB -->*/}
            <LastUser />

        </div>
    )
}

export default ContentRowCenter;