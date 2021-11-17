// merah
const ubahWarnaMerah= document.getElementById('merah');
ubahWarnaMerah.onclick= function() {
    document.body.setAttribute('class', 'merah');
}
const ubahWarnaJingga= document.getElementById('jingga')
ubahWarnaJingga.onclick= function() {
    document.body.setAttribute('class', 'jingga');
}
const ubahWarnaKuning= document.getElementById('kuning');
ubahWarnaKuning.onclick= function() {
    document.body.setAttribute('class', 'kuning');
}
const ubahWarnaHijau= document.getElementById('hijau');
ubahWarnaHijau.onclick= function() {
    document.body.setAttribute('class', 'hijau')
}
const ubahWarnaBiru= document.getElementById('biru');
ubahWarnaBiru.onclick=function() {
    document.body.setAttribute('class', 'biru');
}
const ubahWarnaUngu= document.getElementById('ungu');
ubahWarnaUngu.onclick=function() {
    document.body.setAttribute('class', 'ungu');
}
function tampilkan_nama(){
    document.getElementById("hasil").innerHTML = "<h3>Dylan jelek</h3>";
}

