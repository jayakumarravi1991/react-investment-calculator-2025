
import UserInputGroup from "./UserInputGroup";
import InvestmentResults from "./InvestmentResults";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

const inputFieldInitialValue = {
    initialInvestment: 1500,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
}

export default function InvestmentCalculator()
{
    const [userInputValue, setUserInputValue] = useState(inputFieldInitialValue);
    function inputChangeHandler(event)
    {
        const { name, value } = event.target;
        setUserInputValue((previousValuesofInputfield) => {
            const updatedFieldValues = {...previousValuesofInputfield, [name]: +value, };
            return updatedFieldValues;
        });
    }
    let inputIsValid = userInputValue.duration >= 1;
    let annualData = calculateInvestmentResults(userInputValue);
    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <UserInputGroup lableText="INITIAL INVESTMENT" inputType="number" changeListner={inputChangeHandler} inputName="initialInvestment" initialValue={userInputValue.initialInvestment} />
                    <UserInputGroup lableText="ANNUAL INVESTMENT" inputType="number" changeListner={inputChangeHandler} inputName="annualInvestment" initialValue={userInputValue.annualInvestment} />
                </div>
                <div className="input-group">
                    <UserInputGroup lableText="EXPECTED RETURN" inputType="number" changeListner={inputChangeHandler} inputName="expectedReturn" initialValue={userInputValue.expectedReturn} />
                    <UserInputGroup lableText="DURATION" inputType="number"changeListner={inputChangeHandler} inputName="duration" initialValue={userInputValue.duration} />
                </div>
            </section>
            {!inputIsValid && <p className="center">Please enter value greater than one.</p>}
            {inputIsValid && <InvestmentResults annualData={annualData} />}
        </>
    );
}