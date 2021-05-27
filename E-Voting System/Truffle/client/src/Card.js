import React from 'react';
export default (props)=>{

    var source;
    var key;
    var gender;
    var status;
    var style="w3-card-2  w3-container w3-quarter w3-padding w3-opacity w3-hover-opacity-off ";
    if(props){
        source=(props.gender==='F'||props.gender==='f')?"https://www.w3schools.com/howto/img_avatar2.png":"https://www.w3schools.com/howto/img_avatar.png";
        key=props.number;
        gender=(props.gender==='F'||props.gender==='f')?"Mrs.":"Mr.";
        style=(props.total%2!=0)?("w3-card-2  w3-container w3-third w3-padding w3-opacity w3-hover-opacity-off "):("w3-card-2  w3-container w3-quarter w3-padding w3-opacity w3-hover-opacity-off ");
    }
    else    
    {    
        source='https://www.w3schools.com/howto/img_avatar.png';
        key=1;
   
    }   
    
    const handleVote=async ()=>{
        
        const response = await props.contract.methods.vote(key).send({from:props.addr});
        // alert(response);
        status = await props.contract.methods.getVoter(props.addr).call();
        // alert(status);
        
    }
    return(

        <div className={style}>
            {/* {props.addr} */}
            <p>Candidate : {key}</p>{status}
            <img className='w3-circle w3-image w3-margin' src={source} width="100vw" alt="profile pic" />
            {/* <div className="w3-container w3-center "> */}
                <p>{gender} {props.name} </p>
             {(props.type==='admin')?(
                 <p className=' vote-count'>
                    Vote: {props.count}
                </p>
             ):(
                <button className='w3-btn w3-btn-hover' onClick={handleVote}>
                    Vote
                </button>
             )

             }   
            {/* </div> */}
        </div>
    );
}