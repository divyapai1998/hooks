import {  React, Component} from 'react';
import UpdatedComp from './Hoccomp';
class Comp2 extends Component {
    render(){
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>{this.props.name}Hovered {this.props.count} times</h1>
            </div>
        )
    }
}
export default UpdatedComp(Comp2,10);