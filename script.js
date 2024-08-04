function sendMessage() {
    var url = document.getElementById('webhook-url').value;
    var mensagem = document.getElementById('message').value;
    var imagem = document.getElementById('image').files[0];

    var formData = new FormData();
    formData.append('content', mensagem);
    if (imagem) {
        formData.append('file', imagem, imagem.name);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log('Message Sent Successfully:');
        } else {
            console.error('Error Sending Message:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error Sending Message:', error);
    });
}

function chooseWebhook(webhookUrl) {
    document.getElementById('webhook-url').value = webhookUrl;
}