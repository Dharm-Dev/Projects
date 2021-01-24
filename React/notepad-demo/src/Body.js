import React from 'react';
import NewPad from './NewPad';
class MyBody extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            // rflag:false, readonly flag for edit
            viewFlag:false,
            input:'',
            data:'',
            files:['Welcome Note','Greeting'],
        });
        this.handleClick=this.handleClick.bind(this);
        
        this.handleClickView=this.handleClickView.bind(this);
        this.handleviewClose=this.handleviewClose.bind(this);
        // this.handleviewEdit=this.handleviewEdit.bind(this);


        this.handleChange=this.handleChange.bind(this);
        this.handleReset=this.handleReset.bind(this);
        // this.displayMe=this.displayMe.bind(this);

    }
    // handleviewEdit(event){
    //     event.preventDefault();
        
    //     this.setState({
    //         rflag:true,
    //         data:'',
    //     });
    // }
    handleviewClose(event){
        event.preventDefault();
        
        this.setState({
            viewFlag:false,
            data:'',
        });
    }
    handleClickView(event){
        event.preventDefault();
        const val=event.target.value;
        this.setState({
            viewFlag:true,
            data:val,
        });
    }
    render(){
        // const show=!this.state.viewFlag?'true':'false';// Edit flag
        
        const fileList=this.state.files.map((i)=>{
                        let v=i;
                        let k=i;
                        let c='';
                        let i2;
                        if(i.length > 15){
                            c=k.substring(0,14);
                            c+='...';
                            v=c;
                        }    
                        return (
                               <li><button title={i} onClick={this.handleClickView} className='btn btn-info' value={i}> {v} </button></li>
                            );
            });
        
        const mybox={color:'red',width:'68vw', height:'50vh',};
        return(
            <div className='App-body row'>
                <div className='row'>
                   <h3 className='text-info'> {this.props.title} </h3>
                    
                </div>
                
                <div className='row'>
                    
                    <div className='col-xs-3'>
                        <label className=''><h3>Available Files</h3></label> 
                        <hr />
                        
                        <ol style={{ overflowY: 'scroll' , maxHeight:'34vh',}}>
                        {fileList}
                        </ol>
                        {/* <button className='btn btn-danger'> Clear All</button> */}
                    </div>
                    
                    <div className='col-xs-9'>
                        { this.state.viewFlag==false ?
                        <NewPad value={this.state.input}  handleChange={this.handleChange} handleClick={this.handleClick} reset={this.handleReset} /> :
                        <div>
                            <label>File Content</label> <br />
                            
                            {/* <button className='btn btn-info' onClick={this.handleviewEdit}>
                                    Edit
                            </button> */}

                            <button className=' btn btn-danger' onClick={this.handleviewClose}>
                                    Close
                            </button>
                            
                            <textarea value={this.state.data} className='form-control' style={mybox} ></textarea>
                        </div>
                        }
                    </div>

                </div>
            
            </div>
        );
    }

    handleChange(event){
        const value=event.target.value;
        this.setState({
            input:value,
        });
    }
    handleReset(event){
        event.preventDefault();
        this.setState((state)=>({
            input:'',
        }));
    }
    handleClick(event){
        event.preventDefault();
        const value=this.state.input;
        if(value==''){
          
        }
        else{
        this.setState((state)=>({
            input:'',
            files: [...this.state.files,value],
        }));
        }
        
    }
    
}
export default MyBody;