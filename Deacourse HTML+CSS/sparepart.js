var produk1 = {
    "Spareparts-Mobil" : [
    {
        "nama" : "Ban",
        "image" : "asset/ban.jpg",
        "desc" : "Ban yang murah dan enak saat digunakan, tidak licin dan sangat nyaman",
        "harga" : 200000
    },
    {
        "nama" : "Knalpot",
        "image" : "asset/knalpot.png",
        "desc" : "Suara yang gahar dan membuat orang-orang melihat mobil anda menjadi lebih keren",
        "harga" : 500000
    },
    {
        "nama" : "Wing",
        "image" : "asset/wing.jpg",
        "desc" : "Wing yang sangat keren, membuat kagum orang orang sekitar dan sayapnya keren",
        "harga" : 400000
    },
    {
        "nama" : "Velg",
        "image" : "asset/velg.jpg",
        "desc" : "Velg yang kokoh dan kuat untuk kita dalam menghantam polisi tidur",
        "harga" : 350000
    }
]
}

for (var key in produk1){
    var judul = document.createElement('h2');
    judul.className = 'mt-3';
    judul.innerHTML = key;
    document.getElementById(key).appendChild(judul)

    var cardGroup = document.createElement('div');
    cardGroup.className = 'card-group';
    cardGroup.id = `${key}-produk`;
    document.getElementById(key).appendChild(cardGroup);
    
    for(var i = 0; i < produk1[key].length; i++) {
        var namaProduk = produk1[key][i].nama;
        var imageProduk = produk1[key][i].image;
        var descProduk = produk1[key][i].desc;
        var hargaProduk = produk1[key][i].harga;

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
    window.open(`https://wa.me/${nomorHp}?text=nama%20produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0AThanks%20BRO!!`)
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
