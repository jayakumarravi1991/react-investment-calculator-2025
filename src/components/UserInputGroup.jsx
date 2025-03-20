
export default function UserInputGroup({lableText, inputType, inputName, changeListner, initialValue})
{
    return(
        <p>
            <label htmlFor={inputName}>{lableText}</label>
            <input type={inputType} name={inputName} onChange={changeListner}  value={initialValue} required />
        </p>
    );
}