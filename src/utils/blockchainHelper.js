import { ethers} from "ethers"

const getProvider = async () => {
    await window.ethereum.enable();
    const provider = new ethers.BrowserProvider(window.ethereum);
    return provider
}

export const fetchBalance = async (walletAddress) => {
    let balance = 0;
    try{
        if (!window.ethereum) throw new Error("No Crypto Wallet");
        const provider = await getProvider();
        balance = await provider.getBalance(walletAddress);
        return ethers.formatEther(balance).toString();
    } catch (err){
        return "--"
    }
}

export const sendEther = async (walletAddress, amountInEther) => {
    try{
        if (!window.ethereum) {
            alert("Crypto wallet not installed")
        } else{
            const amountInWei = ethers.parseEther(amountInEther.toString());
            const provider = await getProvider();
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to : walletAddress,
                value : amountInWei
            })
            console.log(tx.hash);
            return true;
        }
    } catch (err) {
        alert("Transaction Failed")
    }
}