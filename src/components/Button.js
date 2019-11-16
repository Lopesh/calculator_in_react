import React from 'react'; 

export default class Button extends React.Component{
    constructor(){
      super();
      this.oprationArray = ['/', 'back', 'clear', 'X', '(', ')', '-', 'X^2', 'Sq. Root', '.', '%', '+', '=']
    }
    buttonClick = () => {
      console.log(this.props)  
    }

    render(){
      return(
        <div style={{marginTop: 5, marginBottom: 5}} className="col-md-2">
          <button style={{width: '100%'}} key={this.props.name} onClick={this.buttonClick}>{this.props.name}</button>
        </div>
      )
    }
}
