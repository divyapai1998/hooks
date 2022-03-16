import React from 'react'
import { UserContext, ChannelContext } from './App';

const ContextF = () => {
  return (
    <div>
        {/* <UserContext.Consumer>
           
        {username=>{
            return <ChannelContext.Consumer>
                 {un=>{
                     return <h4>Hello {username} - Hello {un}</h4>
                 }}
           
            </ChannelContext.Consumer>
        }}
        
        </UserContext.Consumer> */}

        {/* IF WE JUST USE THE ABOVE METHOD IT BECOMES UGLY. 
        IF THERE ARE MORE NUMBER OF CONTEXTS THEN IT WILL BE REALLY UGLY.
        LETS SEE HOW TO REDUCE IT IN THE EARLIER LEVEL ITSELF WITH THE HELP OF USECONTEXT HOOK */}
    </div>
  )
}

export default ContextF