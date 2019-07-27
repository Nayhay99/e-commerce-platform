import React from 'react'
import PreviewCollection from '../../components/preview-collection-component/preview-collection-component'

import SHOP_DATA from './shop-data'

class ShopPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            collections : SHOP_DATA
        }
      }

    render(){
        const {collections} = this.state
        return (
        <div className="shop-page">
            {
                collections.map(({id, ...otherprops}) => (
                    <PreviewCollection key={id} {...otherprops}></PreviewCollection>
                ))
            }    
        </div>)        
    }
}
export default ShopPage