window.onload=function(){
//Validacija rezervacija
document.getElementById("btnRezervacija").addEventListener("click",validacija);

//validacija kontakt forme
document.getElementById("btnPosalji").addEventListener("click",provera);
//SAKRIVANJE GRESAKA
let greske = document.getElementsByClassName("greska"); 

for(let i=0; i < greske.length; i++){
    
    greske[i].classList.add("sakrij");
   
}
//SAKRIVANJE GRESAKA KONTAKT
let greske1 = document.getElementsByClassName("greska1"); 

for(let i=0; i < greske1.length; i++){
    
    greske1[i].classList.add("sakrij");
   
}
// ispis istorije islanda
var istorija=document.getElementsByClassName("tekst")[0];
istorija.innerHTML=`<h2>O istoriji Islanda</h2><br/>
<p>Island je država bez kopnenih granica koja se nalazi u severnom Atlantiku. Ova ostrvska država je lokalizovana
     između Grenlanda, Norveške i Britanskih ostrva u severnoj Evropi. Glavni grad Islanda je Rejkjavik.
      Ime “Island“ potiče od engleske reči za “ostrvo“.
</p><br/>
<p>Istorija Islanda
    Naseljavanje Islanda počelo je tek u kasnom IX i početkom X veka i to dolaskom imigranata, 
    ponajviše Norvežana i Kelta. 
    
  


Zanimljiva činjenica vezana za ovu zemlju je ta da ona ima najstariji parlament na svetu, Alting (Althing), koji je

osnovan 930. godine. Alting je održavao zasedanja u Tingveliru sve do suspendovanja 1799. godine. Nakon četrdesetpet godina, 
parlament je ponovo uspostavljen 1844. godine, ali ovog puta u glavnom gradu – Rejkjaviku.
</p><br/><p>            
Island je bio nezavisan 300 godina, a zatim su njime vladali Norveška i Danska. Godine 1874.
Island od danske vlade dobija ograničenu autonomnu vlast, a suverenitet u unutrašnjim pitanjima 1918.
godine, dok su pitanja spoljnih odnosa ostali pod upravom Danske do Drugog svetskog rata, tj. 1940. godine
kada je došlo do vojne okupacije Danske od strane Nemačke. 
        
        
        </p>`;


//lepote islanda
var lepote=document.getElementsByClassName("tekst")[1];
lepote.innerHTML=`<h2>Lepote Islanda</h2><br/>
<p>Island se naziva i “zemlja leda i vatre“ jer obiluje vulkanima i
     gejzirima po kojima je i poznat. Zima na Islandu nije toliko 
     surova kao što biste pomislili. Temperature se kreću oko nula stepeni,
      a leta su prilično hladna sa prosečnom temperaturom od deset stepeni
      
      celzijusa.</p><br> <p>Unutrašnjost ostrva je uglavnom prekrivena ledom dok su 
      njegove periferije naseljene.
Ono što bi svakako morali da obiđete ukoliko bi se odlučili za 
ovu bajkovitu destinaciju jeste Plava Laguna ili “Blue Lagoon“ u Grindaviku.
</p></br><p>
Rejkjavik, osim što je prestonica, nudi
 kvalitetno upoznavanje načina življenja starih Vikinga. Ovaj 
 tipičan skandinavski grad omogućiće vam jedno autenično iskustvo 
 tamošnjeg načina života.</p></br><p> U Rejkjaviku obavezno posetite crkvu svetog 
 Halgrima sa čijeg se tornja otvara horizont ovog grada.
Ukoliko želite da isprobate toplo kupanje u hladnom 
okruženju, visoko se preporučuje Perlan koji poseduje jedan od pet 
velikih izvora tople vode.
</p>  `;

//galerijaa
for(let i=0;i<9;i++){
let pozicija =document.getElementById("galerija1");
  let novElement=document.createElement("div");
  novElement.setAttribute("class","slike");
  pozicija.appendChild(novElement);
}
let promena=0;
for(let i=0;i<9;i++){
    promena++;
let slike=document.getElementsByClassName("slike")[i];
noviElement=document.createElement("img");
noviElement.setAttribute("src","images/slika"+promena+".jpg");
noviElement.setAttribute("alt","slika"+[i+1])
slike.appendChild(noviElement);
}


//ispis mesta
let mesto=["Izaberite","Rejkjavik","Selfos","Keblavik","Akranes"]
let ispis7="";
for(let i=0;i<mesto.length;i++){
    ispis7+=`<option value="${[i]} id="izbor">${mesto[i]}</option>`;
}
document.getElementById("mesto").innerHTML=ispis7;
//ispis pola

 let polovi=["Muški","Ženski"]
 for(let i=0;i<polovi.length;i++){
var pozPol=document.getElementById("pol");
var polNov=document.createElement("li");
polNov.innerHTML=`<input type="radio" name="pol"/>${polovi[i]}`;
pozPol.appendChild(polNov);
 }
//Ispis mreza autora
let pisano=["Stomatološka ordinacija Deny","Portfolio","Salon venčanica Yes","Facebook","Instagram","Gmail"]
let putanje=["https://rdijana.github.io/dijana/index.html","https://rdijana.github.io/portfoliodijanaradovanovic/","https://rdijana.github.io/salonvencanicayes/","https://www.facebook.com/","https://www.instagram.com/","https://www.gmail.com/"]
 for(let i=0;i<pisano.length;i++){
var mreze=document.getElementById("mrezeAutor");
var mrezeNov=document.createElement("li");
mrezeNov.innerHTML=`<a href="${putanje[i]}" class="brisi"/>${pisano[i]}`;
mreze.appendChild(mrezeNov);
 }
 //ispis linkova
 let linkovi=["Dokumentacija","Sitemap","RSS","Facebook","Instagram","Gmail"]
let putanjeLink=["dokumentacija.pdf","mapa.xml","naziv.xml","https://www.facebook.com/","https://www.instagram.com/","https://www.gmail.com/"]
 for(let i=0;i<linkovi.length;i++){
var link=document.getElementById("link");
var linkNov=document.createElement("li");
linkNov.innerHTML=`<a href="${putanjeLink[i]}" target="blank" class="brisi"/>${linkovi[i]}`;
link.appendChild(linkNov);
 }
 //ISPIS LISTE O NAMA
 var onama=["Island","Fabrisova 11,Beograd","064/000/0000","island&#64;gmail&#46;com"]
 for(let i=0;i<onama.length;i++){
    var pozONama=document.getElementById("onama");
    var oNamaNov=document.createElement("li");
    oNamaNov.innerHTML=`${onama[i]}`;
    pozONama.appendChild(oNamaNov);
     }
 slajder();
pravljenjeMenija();
meni();
pravljenjeMenija2();
}

var naziv=["Početna","O Islandu","Galerija","Rezervacija","Kontakt","O autoru"]
var putanja=["index.html","#2","#3","#4","#5","#6"]
function pravljenjeMenija(){
var ul=document.getElementsByClassName("dinamicki")[0];
var li="";
for(var i=0;i<putanja.length;i++){
    li+=`<li><a href="${putanja[i]}" id="idi${[i]}">${naziv[i]}</a></li>`;
    ul.innerHTML=li;

     
}
var ul1=document.getElementsByClassName("dinamicki")[1];
var li1="";
for(var i=0;i<putanja.length;i++){
    li1+=`<li><a href="${putanja[i]}" id="idi${[i]}">${naziv[i]}</a></li>`;
    ul1.innerHTML=li1;

     
}
}
function pravljenjeMenija2(){
    var ul=document.getElementById("din");
    var li="";
    for(var i=0;i<putanja.length;i++){
        li+=`<li><a href="${putanja[i]}" id="ici${[i]}">${naziv[i]}</a></li>`;
        ul.innerHTML=li;
}
}
function meni(){
    var bar=document.querySelector("#nav a");
    var nav=document.querySelector("#nav ul");
    bar.addEventListener("click",function(event){
        event.preventDefault();
        nav.classList.toggle("prikazi");
        nav.classList.toggle("sakrij");
    })
}
var slika=document.getElementById("slike");
var j=0;
var slike=["pozadina.jpg","pozadina1.jpg","pozadina2.jpg"]
function slajder(){
slika.src=`images/${slike[j]}`;
if(j<slike.length-1) j++;
else j=0;
setTimeout(slajder,3500);
 
}



function validacija(){

    //VALIDACIJA IMENA
   let ime=document.getElementById("ime").value;
let regexIme=/^[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,14}(\s[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,14})?$/;
let validnoIme=regexIme.test(ime);
if(!validnoIme){
    document.getElementsByClassName("greska")[0].classList.add("prikazi");
    document.getElementsByClassName("greska")[0].classList.add("red"); 
}
//validacija prezimena
let prezime=document.getElementById("prezime").value;
let regexPrezime=/^[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,19}(\s[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,19})*$/;
let validnoPrezime=regexPrezime.test(prezime);
if(!validnoPrezime){
    document.getElementsByClassName("greska")[1].classList.add("red");
document.getElementsByClassName("greska")[1].classList.add("prikazi");
}
//validacija Adrese
let adresa=document.getElementById("adresa").value;
let regexAdresa=/^[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{3,14}(\s[A-ZĆČŽŠĐ]?[a-zćčžšđ]{3,14})?\s\d{1,4}\,[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,14}$/;
let validnaAdresa=regexAdresa.test(adresa);
if(!validnaAdresa){
    document.getElementsByClassName("greska")[2].classList.add("red");
document.getElementsByClassName("greska")[2].classList.add("prikazi");
}
//VALIDACIJA MOBILNOG
let mobilni=document.getElementById("mobilni").value;
let regexMobilni=/^(06)[0-69]{1}\/\d{3}[\-]?\d{4}$/;
let validanMobilni=regexMobilni.test(mobilni);
if(!validanMobilni){
    document.getElementsByClassName("greska")[3].classList.add("red");
document.getElementsByClassName("greska")[3].classList.add("prikazi");
}
//VALIDACIJA POLASKA
let datumPolaska=document.getElementById("datumPolaska").value;
let regexdatumPolaska=/^([1-9]|[1-2][0-9]|3[0-1])\-([1-9]|1[0-2])\-(20[1-9][0-9])$/;
let validandatumPolaska=regexdatumPolaska.test(datumPolaska);
if(!validandatumPolaska){
    document.getElementsByClassName("greska")[5].classList.add("red");
document.getElementsByClassName("greska")[5].classList.add("prikazi");
}
//validacija dolaska
let datumPovratka=document.getElementById("datumPovratka").value;
let regexdatumPovratka=/^([1-9]|[1-2][0-9]|3[0-1])\-([1-9]|1[0-2])\-(20[2-9][0-9])$/;
let validandatumPovratka=regexdatumPovratka.test(datumPovratka);
if(!validandatumPovratka){
    document.getElementsByClassName("greska")[6].classList.add("red");
document.getElementsByClassName("greska")[6].classList.add("prikazi");
}
//validacija mesta
var mesto=document.getElementById("mesto");
var mestoSelektovano=mesto.selectedIndex;
if(mestoSelektovano==0){
    document.getElementsByClassName("greska")[4].classList.add("prikazi");
    document.getElementsByClassName("greska")[4].classList.add("red");
}
}
//PROVERA
function provera(){
//VALIDACIJA IMENA
let ime1=document.getElementById("ime1").value;
let regexIme1=/^[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,14}(\s[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,14})?$/;
let validnoIme1=regexIme1.test(ime1);
if(!validnoIme1){
    document.getElementsByClassName("greska1")[0].classList.add("prikazi");
    document.getElementsByClassName("greska1")[0].classList.add("red");
     
}
//validacija prezimena
let prezime1=document.getElementById("prezime1").value;
let regexPrezime1=/^[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,19}(\s[A-ZĆČŽŠĐ]{1}[a-zćčžšđ]{2,19})*$/;
let validnoPrezime1=regexPrezime1.test(prezime1);
if(!validnoPrezime1){
    document.getElementsByClassName("greska1")[1].classList.add("red");
document.getElementsByClassName("greska1")[1].classList.add("prikazi");
}
//validacija Email adrese
let adresa1=document.getElementById("adresa1").value;
let regexAdresa1=/^[a-z][a-z\d\.\-\_]+\@[a-z\d]+(\.[a-z]{2,4})+$/;
let validnaAdresa1=regexAdresa1.test(adresa1);
if(!validnaAdresa1){
    document.getElementsByClassName("greska1")[2].classList.add("red");
document.getElementsByClassName("greska1")[2].classList.add("prikazi");
}
//validacija broj MOBILNOG
let mobilni1=document.getElementById("mobilni1").value;
let regexMobilni1=/^(06)[0-69]{1}\/\d{3}[\-]?\d{4}$/;
let validanMobilni1=regexMobilni1.test(mobilni1);
if(!validanMobilni1){
    document.getElementsByClassName("greska1")[3].classList.add("red");
document.getElementsByClassName("greska1")[3].classList.add("prikazi");
}
//validacija poruke
let poruka=document.getElementById("tbPoruka").value;
let regexPoruka=/^([\w\d\n\s\,\.\!\?])+$/;
let validnaPoruka=regexPoruka.test(poruka);
if(!validnaPoruka){
    document.getElementsByClassName("greska1")[4].classList.add("red");
document.getElementsByClassName("greska1")[4].classList.add("prikazi");
}
//validacija pola
let pol = document.getElementsByName("pol");

    let isValidPol = false;

    for(let i=0; i< pol.length; i++){
        if(pol[i].checked){
            isValidPol = true;
            break;
        }
    }

    if(!isValidPol){
        document.getElementsByClassName("greska1")[5].classList.add("red");
        document.getElementsByClassName("greska1")[5].classList.add("prikazi");
    }
    

}
$(document).ready(ucitavanje);
function ucitavanje(){
    $("#mrezeAutor").addClass("sakrij");

    let brojac = 0;

    $("#taster").click(function(event){
        event.preventDefault();
        if(brojac % 2 == 0){
            $("#mrezeAutor").show();
            $(this).html("Sakrij");
        } else {
            $("#mrezeAutor").hide();
            $(this).html("Prikazi mreze");
        }
        brojac++;
    });
    $("#scrollToTop").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, '5000');
    });
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
        if(top >500){
            $("#scrollToTop").addClass("prikazi");
            $("#scrollToTop").removeClass("sakrij");
        } else {
            $("#scrollToTop").addClass("sakrij");
            $("#scrollToTop").removeClass("prikazi");
        }
    });
    $(".slika img").hover(function(){
            
        $(this).animate({opacity:"0.5"},"slow")
    
    },function(){
        $(this).animate({opacity:"1"},"slow")});

        $('#slikaAutor a').viewbox();

        
       
    }