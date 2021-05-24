pragma solidity >0.4.18 <0.8.0;
/**
 * The contractName contract does this and that...
 */
contract Election {
	// Model a candidate
	struct Candidate{
		uint id;
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
		// name and gender
		addCandidate("Bill","M");
		addCandidate("Tom","M");
		addCandidate("Shaline","f");
		
		addCandidate("Janice","M");
	}
	function getVoter(address _add) public view returns(bool){
		return voters[_add];
	}
	function addCandidate (string memory _name,string memory _gender) public {
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount, _name, _gender, 0);
	}

	function getCount() public view returns(uint){
		return candidatesCount;
	}
	function getCandidates(uint i) public view returns( uint, string memory, string memory, uint ){
		return (candidates[i].id,candidates[i].name,candidates[i].gender,candidates[i].voteCount);
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