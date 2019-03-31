import React,{Component} from 'react';
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    state = {  }
    render() { 
        return (  
            <Aux>
                <Burger ingredients={ this.state.ingredients}/>
                <div>Burger BurgerBuilder</div>
            </Aux>
        );
    }
}
 
export default BurgerBuilder;