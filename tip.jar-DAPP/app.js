let provider;
let signer;
let contract;

const tips = ["Tip A", "Tip B", "Tip C"];

window.onload = async() => {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        contract = new ethers.Contract(contractAddress, contractABI, signer);
        populateTips();
    }
    else {
        alert("Please install MetaMask to use this app.");
  }
};


function populateTips() {
  const tipSelect = document.getElementById("tipPerson");
  tips.forEach(tip => {
    
    const option = document.createElement("option");
    
    option.value = tip;
    option.text = tip;
    tipSelect.appendChild(option);
  });
}



async function tipPerson() {
  const name = document.getElementById("tipPerson").value;
  const amount = document.getElementById("amount").value;

  try {
    const tx = await contract.tip(name, {
      value: ethers.utils.parseEther(amount),
    });
    document.getElementById("status").innerText = "Tip sent, waiting for confirmation...";
    await tx.wait();
    document.getElementById("status").innerText = "Tip successful!";
  } catch (err) {
    document.getElementById("status").innerText = err.message;
  }
}
