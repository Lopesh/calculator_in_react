import React from 'react'
import CalculatorButton from '../components/Button'
import DisplayField from '../components/DisplayField'

export default class CalculatorBody extends React.Component{
    constructor(){
        super();
        this.buttonsArray = [ '7', '8', '9', '/', 'back', 'clear', '4', '5', '6', 'X', '(', ')', '1', '2', '3', '-', 'X^2', 'Sq. Root', '0', '.', '%', '+', '=']
    }

    createCalculatorButton = () => {
        let allbuttonsArray = []
        for(let i = 0; i < this.buttonsArray.length; i++){
            allbuttonsArray.push(<CalculatorButton name={this.buttonsArray[i]} />)
        }
        console.log(allbuttonsArray);
        return allbuttonsArray;
    }

    render(){
        return(
            <div >
                <div className="card">
                    <DisplayField/>
                    <div className="row">
                         {this.createCalculatorButton()}
                    </div>
                </div>
            </div>   
        )
    }
}
