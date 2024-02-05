function Button(props) {
    
    const handleSubmit = () => {
        props.submit();
    }
    
    return <button type="button" onClick={handleSubmit}>API CALL</button>
}

export default Button;