function NewPad(props){
    const mybox={color:'red',width:'68vw', height:'50vh',};
    return(
        <form className='form-inline'>
            <label>File Content</label> <br />
            <textarea onChange={props.handleChange}  value={props.value} className='form-control' style={mybox}></textarea>
            <br />
            <div className='form-group'>
            <input type='reset' onClick={props.reset} className='form-control btn-danger'/>
            <input type='submit' onClick={props.handleClick} value='Save' className='form-control  btn-success'/>
            </div>
        </form>
    );
}
export default NewPad;