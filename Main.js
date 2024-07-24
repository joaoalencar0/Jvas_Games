function compre() {
    alert('Obrigado por sua compra! Seu pedido foi processado.');}
    // Segundo
    function formularioDePagamento() {
    document.getElementById('formulario').style.display = 'block';
    }
    function submeterPagamento() {
    
    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value;
    const numero = document.getElementById('numero').value;
    const validade = document.getElementById('validade').value;
    const cvv = document.getElementById('cvv').value;
    // Aqui você pode adicionar lógica para processar o pagamento
    alert(`Obrigado, ${nome}! Seu cartão ${numero} foi clonado.`);
    // Opcional: ocultar o formulário após a submissão
    document.getElementById('formulario').style.display = 'none';
    }
    // Terceiro
    function comprar() {
    const nome = prompt("Por favor, insira seu nome:");
    if (!nome) return alert("Nome é obrigatório para prosseguir com a compra.");
    const numero = Number(window.prompt("Por favor, insira o número do seu cartão de crédito:"));
    if (!numero) return alert("Número do cartão é obrigatório paraprosseguir com a compra.");
    const validade = prompt("Por favor, insira a data de validade doseu cartão (MM/AA):");
    if (!validade) return alert("Data de validade é obrigatória paraprosseguir com a compra.");
    const cvv = Number(window.prompt("Por favor, insira o CVV do seu cartão:"));
    if (!cvv) return alert("CVV é obrigatório para prosseguir com a compra.");
    // Aqui você pode adicionar lógica para processar o pagamento
    alert(`Obrigado, ${nome}! Seu pagamento com o cartão ${numero} foi processado.`);
    }
    // Quarto
    function comprarAgora() {
    const width = 800;
    const height = 600;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);
    window.open('pagar.html', 'Pagamento', `width=${width},height=${height},top=${top},left=${left}`);}
    const baseProdutos = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 15 },
    { id: 4, name: 'Product 4', price: 25 },
    // Adicione mais produtos conforme necessário
    ];
    function adicionar(produtoId) {
    const produto = baseProdutos.find(p => p.id === produtoId);
    if (produto) {
        let pagar = JSON.parse(localStorage.getItem('pagar')) || [];
    
    pagar.push(produto);
    localStorage.setItem('pagar', JSON.stringify(pagar));
    alert('Produto adicionado ao carrinho!');
    }
    }
    function nextBlock(nextBlockId, progress) {
        const currentBlock = document.querySelector('.block.active');
        const inputs = currentBlock.querySelectorAll('input, select');
        let isValid = true;
        inputs.forEach(input => {
        if (!input.value) {
        isValid = false;
        input.style.borderColor = 'red';
        } else {
        input.style.borderColor = '';
        }
        });
        if (isValid) {
        currentBlock.classList.remove('active');
        
        document.getElementById(nextBlockId).classList.add('active');
        
        updateProgressBar(progress);
        }
        }
        function updateProgressBar(progress) {
        document.getElementById('progressBar').style.width = progress + '%';
        }
        function submitPayment() {
        updateProgressBar(100);
        
        alert('Você foi roubado com sucesso!');
        }
        document.addEventListener('DOMContentLoaded', () => {
        const cartItemsContainer = document.getElementById('cart-items');
        const pagar = JSON.parse(localStorage.getItem('pagar')) || [];
        if (pagar.length === 0) {
        cartItemsContainer.innerText = 'O carrinho está vazio.';
        } else {
        pagar.forEach(produto => {
        const itemElemento = document.createElement('div');
        itemElemento.className = 'cart-item';
        itemElemento.innerText = `${produto.name} - $${produto.price}`;
        
        cartItemsContainer.appendChild(itemElemento);
        });
        }
        });