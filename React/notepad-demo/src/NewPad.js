function NewPad(props){

    return(
            <div>
                <form className='form-inline'>
                    <label>{props.fileTitle}</label> <br />
                    <textarea onChange={props.handleChange}  value={props.value} className='form-control' style={props.myStyle}></textarea>
                    <br />
                    <div className='form-group'>
                        <input type='reset' onClick={props.reset} className='form-control btn-danger'/>
                        <input type='submit' onClick={props.handleClick} value='Save' className='form-control  btn-success'/>
                    </div>
                </form>
            </div>
    );
}
export default NewPad;