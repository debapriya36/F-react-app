import React , {Component} from 'react';
import './color.css'
class CC extends Component {
    constructor()
    {
        super();
        this.state={
            number:0
        }
    }
    add=()=>
    {
        this.setState({number : this.state.number+1});
    }
    sub=()=>
    {
        this.setState({number: this.state.number-1});
    }
    render()
    {
        return <div>
           <h1>counter value : {this.state.number} </h1> 
            <br />
            <button onClick={this.add}><h2>+1</h2></button>

            <button onClick={this.sub}><h2>-1</h2></button>
        </div>
    }
}
export default CC;