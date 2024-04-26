import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import FormGroup from "react-bootstrap/esm/FormGroup";
import Button from 'react-bootstrap/Button';
import '../Component/Bmi.css';


export default function BMI(){

    //Calculation method
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    function CalculateBmi(){
        if (weight && height) {
            const heightInMeters = height / 100; 
            const bmiValue = (weight / (heightInMeters * heightInMeters)); 
            // let bmi = (weight / (height * height) * 703);
            setBmi(bmiValue.toFixed(2));
         
         let message = ''; 
            if (bmiValue < 18.5) { 
                message = 'You are Underweight'; 
            } else if (bmiValue >= 18.5 && bmi < 25) { 
                message = 'You are Normal weight'; 
            } else if (bmiValue >= 25 && bmi < 29.9) { 
                message = 'You are Overweight'; 
            } else { 
                message = 'You are Obese'; 
            } 
            setMessage(message); 
        } else { 
            setBmi(''); 
            setMessage(''); 
        }

    };

    return(
    
        <div className="bmi-form">
            <h2>BMI Calculator</h2>
            <Form>
                <FormGroup>
                    <Form.Label>Your Weight</Form.Label>
                    <Form.Control value={weight} onChange={(e) => setWeight(e.target.value)}  placeholder="Weight in kgs" />
                </FormGroup>
                <FormGroup>
                    <Form.Label>Your Height</Form.Label>
                    <Form.Control value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height in cms"/>
                </FormGroup>
                <Button id="submitButton" onClick={CalculateBmi}> Submit </Button>
            </Form>
            <div className="showResult">
            <h3>Your BMI is:<span> {bmi}</span> </h3>
            <p>{message}</p>
            </div>
        </div>
  
);


}