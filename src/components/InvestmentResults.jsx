
import { formatter } from "../util/investment";
export default function InvestmentResults({annualData})
{
    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>              
               {annualData.map((item, index) => {
                let totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                let totalAmountInvested = item.valueEndOfYear - totalInterest;
                return (<tr key={index}>
                        <td>{item.year}</td>             
                        <td>{formatter.format(item.valueEndOfYear)}</td>
                        <td>{formatter.format(item.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                    );                    
                    })}
            </tbody>           
        </table>
    );
}