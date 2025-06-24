const contractAddress = "0x60bb340d6ECD9d8caa5886010494D77aFD679dCa";

        const contractABI = [
            { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }
        ];

        let web3;
        let contractInstance;
        let ownerAddress;

        window.addEventListener('load', async () => {
            if (window.ethereum) {
                web3 = new Web3(window.ethereum);
                try {
                    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                    ownerAddress = accounts[0];
                    contractInstance = new web3.eth.Contract(contractABI, contractAddress);
                } catch (error) {
                    document.getElementById('output').innerText = 'Erro ao conectar com a carteira.';
                }
            } else {
                document.getElementById('output').innerText = 'Por favor, instale o Metamask.';
            }
        });

        function getContractAddress() {
            document.getElementById('output').innerText = "Endereço do Contrato:\n" + contractAddress;
        }

        async function getTotalSupply() {
            try {
                const supply = await contractInstance.methods.totalSupply().call();
                document.getElementById('output').innerText = "Total Supply:\n" + supply;
            } catch (error) {
                document.getElementById('output').innerText = "Erro ao buscar o Total Supply.";
            }
        }

        function toggleTheme() {
            document.body.classList.toggle('dark-mode');

            const btn = document.getElementById('themeToggleBtn');
            if (document.body.classList.contains('dark-mode')) {
                btn.textContent = '☀️';
            } else {
                btn.textContent = '🌙';
            }
        }

        function openLinkedIn() {
            window.open('https://www.linkedin.com/in/luissales/', '_blank');
        }

        function openGitHub() {
            window.open('https://github.com/DK-Destiny/BootcampDIO_MyTokenERC20.git', '_blank');
        }
        