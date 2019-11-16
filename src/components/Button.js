import React from 'react'; 

export default class Button extends React.Component{
    constructor(){
      super();
      this.oprationArray = ['/', 'X', '-', '.', '%', '+', '=']
      this.otherFunctionalArray = ['X^2', 'Sq. Root', 'back', 'clear', '(', ')']
    }

  
    buttonClick = () => {
      let textBoxObject = document.getElementById('Display-Box')
      if( textBoxObject.value === "" ){
        if(!(this.oprationArray.includes(this.props.name))){
          textBoxObject.value = this.props.name
        }
      } else {
          if(['1','2','3','4', '5', '6','7','8','9'].includes(this.props.name)){
            textBoxObject.value += this.props.name  
          }
             
      } 
    }

    render(){
      return(
        <div style={{marginTop: 5, marginBottom: 5}} className="col-md-2">
          <button style={{width: '100%'}} key={this.props.name} onClick={this.buttonClick}>{this.props.name}</button>
        </div>
      )
    }
}
