const scanner = new Html5QrcodeScanner('camera', {
    qrbox: {
        width: 250,
        height: 250,
        }, fps: 20, 
});
  
scanner.render(success, error);
  
function success(resultado) {
    document.getElementById('resultado').innerHTML = `<a href="${resultado}">${resultado}</a>`;
}
  
function error(err) {
    console.error(err);
}

function gerarQrCode() {
    const inputUsuario = document.querySelector('textarea').value;
    const googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl=';
    const conteudoQrCode = googleChartApi + encodeURIComponent(inputUsuario);
    document.querySelector('#qrCodeImage').src = conteudoQrCode;
}