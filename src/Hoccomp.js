import {  React, Component} from 'react';
const UpdatedComp = (OriginalComp,inc) => {
    class NewComp extends Component{
        constructor(props){
            super(props);
            this.state={
            count  : 0
            }
        }
        incrementCount =()=>{
            this.setState(
            {count:this.state.count + inc})
            //this.setState(ps=>{
            // return {count : ps.count + 1}
            //})
        }
        render(){
            return <OriginalComp count={this.state.count} incrementCount = {this.incrementCount} {...this.props}/>
        }
    }
    return NewComp
}
export default UpdatedComp