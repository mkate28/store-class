import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ShopItemClass extends Component {
   costructor(props) {
      this.props = props;
   }
   render() {
      const {item} = this.props;
      return (
         <div class="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div class="description">{item.descriptionFull}</div>
            <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div class="divider"></div>
            <div class="purchase-info">
               <div class="price">{item.currency}{item.price % 1 === 0 ? item.price + '.00': item.price}</div>
               <button>Добавить в корзину</button>
            </div>
         </div>
      );
   }
   static propTypes = {
      item: PropTypes.shape({
         brand: PropTypes.string,
         title: PropTypes.string,
         description: PropTypes.string,
         descriptionFull: PropTypes.string,
         price: PropTypes.number,
         currency: PropTypes.string
      })
   }
}

export default ShopItemClass;

// export default class ShopItemClass extends Component {
//   static propTypes = {second: third}

//   render() {
//     return (
//       <div>ShopItemClass</div>
//     )
//   }
// }
