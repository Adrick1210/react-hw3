function Button(props) {
    
    const handleSubmit = () => {
        props.submit();
    }
    
    return <button type="button" onClick={handleSubmit}>Make API Call Again</button>
}

export default Button;