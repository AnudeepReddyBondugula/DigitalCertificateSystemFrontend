import {ethers} from 'ethers'

export const connectToMetaMask = async () =>{
    if (!window.ethereum){
        alert('Install metamask first!');
        return;
    }
    try{
        await window.ethereum.request({
            method : 'eth_requestAccounts'
        });

        const provider = new ethers.WebSocketProvider(window.ethereum);
        const signer = provider.getSigner();
        return {provider, signer}
    }
    catch(err){
        console.log('Error Connecting to metamask:', err);
    }
}

export const issueCertificate = async (studentAddress, fileCID) => {
    if (!sessionStorage.getItem('contractAddress')){
        getContractAddress();
    }
    const {signer} = await connectToMetaMask();
    const contractAddress = sessionStorage.getItem('contractAddress');
    const contractabi = getContractAbi();

    const contract = new ethers.Contract(contractAddress, contractabi, signer);
    const result = await contract.safeMint(studentAddress, fileCID);
    console.log("Transaction Hash tx :",result);

}

export const getContractAddress= async () => {
    const response = await fetch('http://localhost:3000/getcontractaddress', {
            method : "GET",
            headers : {
                'Authorization' : sessionStorage.getItem('jwToken')
            },
        })

        sessionStorage.setItem('contractAddress', (await response.json()).contractAddress);
}

export const getContractAbi = async () => {
    const response = await fetch('http://localhost:3000/getcontractabi', {
            method : "GET",
            headers : {
                'Authorization' : sessionStorage.getItem('jwToken')
            },
        })

    const contractabi = (await response.json()).contractAbi;
    return contractabi;
}
