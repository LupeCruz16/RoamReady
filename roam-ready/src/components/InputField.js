function InputField ({ inputHeader, placeHolderText }) {
    const inputFieldStyle = {
        backgroundColor: 'var(--accent-100)',
        width: '25vw',
        padding: '1vw',
        border: 'none',
        borderRadius: '0.5vw'
    };

    return (
        <div className = "textSizeS textAlign-Left">
            <div>{ inputHeader }</div>
            <div className = "paddingXS"></div>
            <input type="text" placeholder= { placeHolderText } className = "textSizeS" style = { inputFieldStyle }/>
        </div>
    );
}

export default InputField;