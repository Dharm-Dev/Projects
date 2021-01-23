import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=({
        btnclick:false,
    });
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event){
      event.preventDefault();
      const toggle= !this.state.btnclick;
      this.setState({
        btnclick:toggle,
      });

  }
  render(){
    const title="Body Mass Index";
    const disp=res(title);
    const form=<DispForm title={title} handle={this.handleClick} />;
    return(
        <div className='container-fluid '>
          <div className='row App-header'>
            <h1>{this.props.mainTitle}<i className='glyphicon glyphicon-heart'></i></h1>
            { !this.state.btnclick &&<button className='btn btn-primary' onClick={this.handleClick}>
                <h3>BMI </h3><center>Click Me!</center>
            </button>
            }
             { this.state.btnclick && <p> Page Scroll <span class='glyphicon glyphicon-arrow-down'></span></p>}
          </div>
          <div className='App'>
           
          </div><br />
          <div>
{/* BMI Start */}
          {/* Title */}
          {this.state.btnclick && disp }  
          {/* Button toggle */}
          { this.state.btnclick 
                  &&
            <button className='btn btn-primary' onClick={this.handleClick}>
                Hide BMI
            </button>
          } 
            {/* display form */}
          {this.state.btnclick && form }
{/* BMI Ends */}
          </div>
        </div>
        
    );
  }
}


function res(title) {
  return (
    <div className="App">
<div><h1>{title}</h1></div>
    </div>
  );
}


class DispForm extends React.Component{

    constructor(props){
      super(props);
      this.state=({
        flag:false,
        errorFlagh:false,
        errorFlagw:false,
        height:1.50,
        weight:50,
        bmi:12,
      });
      this.handleChangeHeight=this.handleChangeHeight.bind(this);
      this.handleChangeWeight=this.handleChangeWeight.bind(this);
      // this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeHeight(event){
        const value=event.target.value;
        
        if(value>=1 && value<=2.5){

          const w=this.state.weight;
          const bvalue= w /(value*value);
          this.setState({
            errorFlagh:false,
            height:value,
            bmi: bvalue,
          });
        }
        else{
          this.setState({
            height:'',
            errorFlagh:true,
          });
        }
    } 

    handleChangeWeight(event){
      const value=event.target.value;
      if(value>=30 && value<=450){
        const h=this.state.height;
        const bvalue= value /(h*h);
      
      this.setState({
        errorFlagw:false,
        weight:value,
        bmi: bvalue,

      });
      }
      else{
        this.setState({
          errorFlagw:true,
          weight:'',

        });
      }
    } 
// unused method
    // handleSubmit(event){
    //   event.preventDefault();
    //   const w=this.state.weight;
    //   const h=this.state.height;
    //   const bvalue= w /(h*h);
    //   this.setState((state)=>({
    //     flag:true,
    //     bmi:bvalue.toFixed(2),
    //   }));
    // } 

    render(){
      const chart="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/BMI_chart.svg/1024px-BMI_chart.svg.png";
      const description="Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is universally expressed in units of kg/m², resulting from mass in kilograms and height in metres.";
      
      let clr='red';

      if(this.state.bmi < 18.6){
        clr=' #fff ';
      }
      else if(this.state.bmi<25.1){
        clr='yellow';
      }
      else if(this.state.bmi<30.1){
        clr='rgba(255, 240, 211, 0.925)';
      }
      else{
        clr='rgb(247, 185, 165,0.85)';
      }

      let mystyle={backgroundColor: clr,};
      
      return(
      <div className="container-fluid">
        {/* <div className="App ">
         <div><h1>{this.props.title}</h1></div>
        </div> */}
        <div className='well'>
            <h1><center><img src={logo} className='App-logo'  width='92px' alt='React Logo'/></center></h1>
        
          { !this.state.flag &&
            
            <div className='row'>
                <div className='col-xs-7'> 
                    <h2 className='text-primary '><u>BMI Index  :</u></h2>
                    <span className='text-info'>{description} </span>
                    <br />
                    {/* BMI chart */}
                    <img src={chart} className='img-responsive' alt="BMI Chart"/>
                </div>
                
                <div className='col-xs-5'>
                  <form>
                    <label className='bmi-label '>Height(m)</label>
                      <input type='number' value={ this.state.height} className='form-control' onChange={this.handleChangeHeight} placeholder='Height in meter' min='1' max='2.5' />{ this.state.errorFlagh == true &&<span className='text-danger'>Invalid Height :1m and max weight: 2.5m <br /><small>use number slider now</small></span> }
                    <label className='bmi-label '>Weight(kg)</label>
                      <input type='number' value={this.state.weight} className='form-control' onChange={this.handleChangeWeight} placeholder= 'Weight in KG' min='30' max='450' /> { this.state.errorFlagw == true &&<span className='text-danger'>Invalid  Weight :30kg and max weight: 450kg <br /><small>use number slider now</small></span> }
                    <br />
                    {/* Live Result  */}
                    <label className='bmi-label-result '>Computed BMI Index</label>
                    <h2 className='result text-primary bg-success ' style={mystyle}><b> {this.state.bmi.toFixed(2)} </b></h2>
                      
                      {/* <input type='submit' className='form-control' onClick={this.handleSubmit} /> */}
                  </form>
                </div>
            </div>
          }
          {/* Resultant BMI  will activated using Button submit above*/}
          { this.state.flag &&  <h2>BMI Index  : <b> {this.state.bmi} </b></h2>}
          </div>
        </div>

      );    
  }
}

export default App;
