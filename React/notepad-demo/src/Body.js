import React from 'react';
import NewPad from './NewPad';
class MyBody extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            input:'',
            files:['Welcome Note','Greeting'],
        });
        this.handleClick=this.handleClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleReset=this.handleReset.bind(this);
        // this.displayMe=this.displayMe.bind(this);

    }

    render(){
        const fileList=this.state.files.map((i)=>{
                        let v=i;
                        let c='';
                        let i2;
                        if(i.length > 15){
                            c=i.substring(0,14);
                            c+='...';
                            v=c;
                        }    
                        return (
                               <li><button title={i} className='btn btn-info'> {v} </button></li>
                            );
                        });
        return(
            <div className='App-body row'>
                <div className='row'>
                   <h3 className='text-info'> {this.props.title} </h3>
                    
                </div>
                
                <div className='row'>
                    
                    <div className='col-xs-3'>
                        <label className=''><h3>Current</h3></label> 
                        <hr />
                        <ol>
                        {fileList}
                        </ol>
                    </div>
                    
                    <div className='col-xs-9'>
                        <NewPad value={this.state.input}  handleChange={this.handleChange} handleClick={this.handleClick} reset={this.handleReset} />
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