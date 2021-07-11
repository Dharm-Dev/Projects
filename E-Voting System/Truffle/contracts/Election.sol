pragma solidity >0.4.18 <0.9.0;

contract Election {
	// Model a candidate
	struct Candidate{ 
		uint id;
		// string pan;
		// string mobile;
		// string email;
		// string constituency;
		// string partyName;
		string name;
		string gender;
		uint voteCount;
	}
	// store accounts that have voted
	mapping(address => bool) public voters;
	// Store a candidate
	//Fetch Candidate
	mapping(uint => Candidate) public candidates;
	
	// Store candidate count 
	uint public candidatesCount;

	//constructor
	constructor() public{
		addCandidate("Bill","M");//,"AUX3234X","9541229329","Bill@rolla.in","South Delhi","BJP");
		addCandidate("Tom","M");//,"BSX3234X","98134329329","Tom@rolla.in","Delhi","Congress");
		// addCandidate("Shaline","f","AVX3234X","93129329329","Shaline@rolla.in","North Delhi","TMC");
		// addCandidate("Janice","M","AXf234X","9829329329","Janice@rolla.in","East Delhi","TDM");
		addCandidate("Nota", "NULL");//"NULL","NULL","NULL","NULL","NULL");
	}
	function getVoter(address _add) public view returns(bool){
		return voters[_add];
	}
	function addCandidate (string memory _name,string memory _gender) public {//,string memory _pan,string memory _mobile,string memory _email,string memory _constituency,string memory _party) public {
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount,_name, _gender, 0);// _pan,_mobile,_email,_constituency,_party
	}

	function getCount() public view returns(uint){
		return candidatesCount;
	}
	function getCandidates(uint i) public view returns( uint, string memory, string memory, uint ){
		// 		uint id;
		// string pan;
		// string mobile;
		// string email;
		// string constituency;
		// string partyName;
		// string name;
		// string gender;
		// uint voteCount;
		return (candidates[i].id,candidates[i].name,candidates[i].gender,candidates[i].voteCount);
	}
	function getStatus() public view returns(string memory){
			if(voters[msg.sender]==true){
				return "true";
			}
			return "false";
	}

	function vote(uint _candidateId) public {
		// require that the voter hasn't voted before
		
		require (!voters[msg.sender]);


		// require a valid candidate
		require (_candidateId > 0 && _candidateId <= candidatesCount);

		//record  that voter has voted
		voters[msg.sender] = true;

		// update candiadte voteCount
		candidates[_candidateId].voteCount ++;
	
		}
}