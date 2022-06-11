let namaSiswa = ["Dodi", "rudo"];
let kelas = ["X", "X"];
let alamat = ["Jakarta","Bogor"];


let table = document.querySelector(".tampilData");
const judul = document.querySelector(".modal-content #judul");
const judulModal = document.querySelector(".tambah");
console.log(judulModal)

function message(pesan, aksi) {
    const message1 = document.querySelector(".message");
    message1.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        Data siswa <strong>${pesan}</strong> ${aksi}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`
}

judulModal.addEventListener("click", function () {
    judul.innerHTML = "Tambah Data Siswa";

    const nama = document.querySelector("#namasiswa");
    const Kelas = document.querySelector("#kelas");
    const Alamat = document.querySelector("#alamat");
    nama.value  = "";
    Kelas.value = "X";
    Alamat.value = "";
    simpan()

})


function simpan() {
    
    const modal1 = document.querySelector(".simpan");
    modal1.addEventListener("click", function(){
    
    const namaSiswaBaru = document.querySelector("#namasiswa").value;
    const kelasBaru = document.querySelector("#kelas").value;
    const alamatBaru = document.querySelector("#alamat").value;
    
    namaSiswa.push(namaSiswaBaru);
    kelas.push(kelasBaru);
    alamat.push(alamatBaru);

    showData();

    modal1.setAttribute("data-dismiss", "modal");
    message("berhasil", "Ditambahkan")
   
});
}

function showData() {
    table.innerHTML = "";

    namaSiswa.forEach((e,i) => {
        
        let nomor = i+1;
        table.innerHTML += `<tr id="th">
                                <th scope="row" class="id">${nomor}</th>
                                
                                <td>${e}</td>
                                <td>${kelas[i]}</td>
                                <td>${alamat[i]}</td>
                                <td>
                                    <button type="button" class="btn btn-warning" onclick="edit(${i})">
                                    Edit
                                    </button>
                                    <button class="btn btn-danger hapus" >Hapus</button>
                                </td>
                            </tr>`;

                            
                            hapus();

                            

    })
}

showData();

function edit(no) {
    const hasil = document.querySelector(".hasil");
    hasil.style.display = "block"
    hasil.style.position = "absolute"
    hasil.style.marginLeft = "70px"
    hasil.style.width = "40%"
    hasil.style.marginTop = "-17%"

    const card = document.querySelector(".tampil");
    card.style.marginLeft = "10px"
    card.style.marginTop = "10px"
    card.style.position = "absolute"

    const main = document.querySelector(".main1");
    main.style.width ="70%";
    main.style.marginLeft = "30%";

    const container = document.querySelector(".container");
    container.removeAttribute("style")
    container.style.width ="100%";

    const namaEdit = document.querySelector(".hasil input[type=text]");
    namaEdit.value = namaSiswa[no];

    const kelasEdit = document.querySelector(".hasil select");
    kelasEdit.value = kelas[no];

    const alamatEdit = document.querySelector(".hasil textarea");
    alamatEdit.value = alamat[no]

    // console.log(no)
    const tombolEdit = document.querySelector(".hasil .bungkus4 .editbaru");
    tombolEdit.setAttribute("onclick", `edit2(${no})`)
}

function edit2(id2) {
    const namaEdit = document.querySelector(".hasil input[type=text]");
    const kelasEdit = document.querySelector(".hasil select");
    const alamatEdit = document.querySelector(".hasil textarea");

    let nama1 = namaSiswa[id2].includes(namaEdit.value);
    let kelas1 = kelas[id2].includes(kelasEdit.value);
    let alamant1 = alamat[id2].includes(alamatEdit.value);

    let tampung = [nama1, kelas1, alamant1].includes(false);

    if(tampung == false){
        alert("Anda Tidak Mengubah Apa Apa");
        
        const hasil = document.querySelector(".hasil");
        hasil.style.display = "none"
        hasil.style.width = "0%"

        const main = document.querySelector(".main1");
        main.style.width ="100%";
        main.style.marginLeft = "0%";
    }else{
    namaSiswa[id2] = namaEdit.value;
    kelas[id2] = kelasEdit.value;
    alamat[id2] = alamatEdit.value;

    showData();
    
    const hasil = document.querySelector(".hasil");
    hasil.style.display = "none"
    hasil.style.width = "0%"

    const main = document.querySelector(".main1");
    main.style.width ="100%";
    main.style.marginLeft = "0%";

    message("berhasil", "Diubah")
    }
}

function batal() {
    const hasil = document.querySelector(".hasil");
    hasil.style.display = "none"
    hasil.style.width = "0%"

    const main = document.querySelector(".main1");
    main.style.width ="100%";
    main.style.marginLeft = "0%";
}

function hapus() {
    const hapus = document.querySelectorAll(".hapus");
    hapus.forEach(function(e, i){
        e.addEventListener("click", function(){
            let confirmasi = confirm("Anda Yakin?");

            if (confirmasi == true) {
                namaSiswa.splice(i,1);
                kelas.splice(i, 1);
                alamat.splice(i, 1);

                showData();

                message("berhasil", "Dihapus")
            }else{
                console.log("tidak dihapus")
            }
            
        })
    })
}

