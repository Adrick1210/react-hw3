function Button(props) {
    
    const handleSubmit = () => {
        props.submit();
    }
    
    return <button type="button" onClick={handleSubmit}>Make Me A GIF</button>
}

export default Button;