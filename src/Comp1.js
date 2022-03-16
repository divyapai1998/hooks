import {  React, Component} from 'react';
import UpdatedComp from './Hoccomp';
class Comp1 extends Component {
    render(){
        return (
            <div>
                <button onClick={this.props.incrementCount}>{this.props.name}Clicked {this.props.count} times</button>
            </div>
        )
    }
}
export default UpdatedComp(Comp1,5);