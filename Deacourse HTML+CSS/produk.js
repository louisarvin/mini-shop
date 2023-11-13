var produk = {
    "Sports-Car" : [
    {
        "nama" : "Mclaren 720S",
        "image" : "asset/mclaren.jpg",
        "desc" : "Mobil yang murah dan mobil impian, dapatkan sekarang dengan harga yang masuk ke dompet anda",
        "harga" : 200000
    },
    {
        "nama" : "Mercedes Benz",
        "image" : "asset/AMG.jpg",
        "desc" : "Mobil yang murah dan mobil impian, dapatkan sekarang dengan harga yang masuk ke dompet anda",
        "harga" : 500000
    },
    {
        "nama" : "BMW M4",
        "image" : "asset/BMW.jpg",
        "desc" : "Mobil yang murah dan mobil impian, dapatkan sekarang dengan harga yang masuk ke dompet anda",
        "harga" : 400000
    },
    {
        "nama" : "Supra MK 4",
        "image" : "asset/supra.jpg",
        "desc" : "Mobil yang murah dan mobil impian, dapatkan sekarang dengan harga yang masuk ke dompet anda",
        "harga" : 350000
    }
]
}

for (var key in produk){
    var judul = document.createElement('h2');
    judul.className = 'mt-3';
    judul.innerHTML = key;
    document.getElementById(key).appendChild(judul)

    var cardGroup = document.createElement('div');
    cardGroup.className = 'card-group';
    cardGroup.id = `${key}-produk`;
    document.getElementById(key).appendChild(cardGroup);
    
    for(var i = 0; i < produk[key].length; i++) {
        var namaProduk = produk[key][i].nama;
        var imageProduk = produk[key][i].image;
        var descProduk = produk[key][i].desc;
        var hargaProduk = produk[key][i].harga;

        var card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
        <img src=${imageProduk} class="card-img-top" alt="..." width="180" height="120">
          <div class="card-body">
            <h5 class="card-title">${namaProduk}</h5>
            <p class="card-text">${descProduk}</p>
            <p class="card-text">Harga : ${hargaProduk}</p>
            <a onClick="chatToAdmin('${namaProduk}', '${descProduk}', '${hargaProduk}')" class="btn btn-primary d-block bg-dark">Beli Produk</a>
        </div>
        `;
        document.getElementById(`${key}-produk`).appendChild(card);
    }
}

function chatToAdmin(nama, desc, harga) {
    var nomorHp = "+6287709040766";
    window.open(`https://web.whatsapp.com/send?phone=${nomorHp}?&text=nama%20produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0AThanks%20BRO!!`)
}

// Bisa pakai yang ini juga untuk send ke whatsapp
// const message = `
//     namaProduk: ${namaProduk}
//     descProduk: ${descProduk}
//     hargaProduk: ${hargaProduk}
    
//   `;
//   window.open(
//     `https://web.whatsapp.com/send?phone=${nomorHp}?&text=${encodeURIComponent(
//       message
//     )}`
//   );
