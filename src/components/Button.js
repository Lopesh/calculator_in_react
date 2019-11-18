import React from 'react'; 

export default class Button extends React.Component{
    constructor(){
      super();
      this.oprationArray = ['/', 'X', '-', '.', '%', '+', '=']
      this.otherFunctionalArray = ['X^2', 'Sq. Root', 'back', 'clear', '(', ')']
    }

    buttonClick = () => {
      var name = this.props.name
      let textBoxObject = document.getElementById('Display-Box')
      if( textBoxObject.value === '' ){
        if(!(this.oprationArray.includes(name))){
          textBoxObject.value = name
        }
      } else {
          if(!(['back', 'clear', '=', '%'].includes(name))){
            textBoxObject.value += name
          }
          switch(name) {
            case 'back':
              textBoxObject.value = textBoxObject.value.slice(0, -1)
              break;
            case 'clear':  
              textBoxObject.value = ''
              break;
            case '%':
              if(/^\d+$/.test(textBoxObject.value)){
                var valueForPercentage = textBoxObject.value
              };
              textBoxObject.value = valueForPercentage / 100
              break;
            case '=':
              try {            
                textBoxObject.value = eval(textBoxObject.value.replace('X', '*'))
              } catch(e) {
                textBoxObject.value = 'Invalid Equation'
              } 
              break;  
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
