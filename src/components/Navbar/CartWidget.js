import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './CartWidget.css';

const cart = <FontAwesomeIcon icon={faShoppingCart} />

function CartWidget() {
    return (
        <div>
            <i>{cart}</i>
        </div>
    )
}

export default CartWidget;
