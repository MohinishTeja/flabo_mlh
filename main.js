if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function pur(){
    var e=check();
    alert("Thanks for purchase. Your total order value is "+parseInt(e));
    
}

function data(){
    var a=cough1();
    var b=fever1();
    var c=head1();
    var d=pain1();
    var e=vomit1();
    var f=stomach1();
    var g=mask1();
    var h=san1();
    var i=vit1();
    var j=wipe1();
    document.getElementById("zxc").innerHTML=a+','+b+','+c+','+d+','+e+','+f+','+g+','+h+','+i+','+j;
    

}

            
function check(){
    var a=cough();
    var b=fever();
    var c=head();
    var d=pain();
    var e=vomit();
    var f=stomach();
    var g=mask();
    var h=san();
    var i=vit();
    var j=wipe();
    var xx=a+b+c+d+e+f+g+h+i+j
    
    document.getElementById("still2").innerHTML=xx;
    return xx;
    //var aaaa=p1();
    }


function cough(){
var u=document.getElementById("cough")
if(window.getComputedStyle(u).display != "none"){
var x=document.getElementById("l").innerHTML;
var o=document.getElementById("still").innerHTML;
var xx=parseInt(x)
var xy=parseInt(o)
var z=xy*xx;
return z;
}
else{
var z=0
return z;
}
}



function fever(){
    var u=document.getElementById("fever")
    if(window.getComputedStyle(u).display != "none"){
    var x=document.getElementById("la").innerHTML;
    var o=document.getElementById("stilla").innerHTML;
    var xx=parseInt(x)
    var xy=parseInt(o)
    var z=xy*xx;
    return z;
    }
    else{
    var z=0
    return z;
    }
    }
    

function head(){
var u=document.getElementById("head")
if(window.getComputedStyle(u).display != "none"){
var x=document.getElementById("lb").innerHTML;
var o=document.getElementById("stillb").innerHTML;
var xx=parseInt(x)
var xy=parseInt(o)
var z=xy*xx;
return z;
}
else{
var z=0
return z;
}
}



function pain(){
    var u=document.getElementById("pain")
    if(window.getComputedStyle(u).display != "none"){
    var x=document.getElementById("lc").innerHTML;
    var o=document.getElementById("stillc").innerHTML;
    var xx=parseInt(x)
    var xy=parseInt(o)
    var z=xy*xx;
    return z;
    }
    else{
    var z=0
    return z;
    }
    }
    



function vomit(){
var u=document.getElementById("vomit")
if(window.getComputedStyle(u).display != "none"){
var x=document.getElementById("ld").innerHTML;
var o=document.getElementById("stilld").innerHTML;
var xx=parseInt(x)
var xy=parseInt(o)
var z=xy*xx;
return z;
}
else{
var z=0
return z;
}
}

function stomach(){
    var u=document.getElementById("stomach")
    if(window.getComputedStyle(u).display != "none"){
    var x=document.getElementById("le").innerHTML;
    var o=document.getElementById("stille").innerHTML;
    var xx=parseInt(x)
    var xy=parseInt(o)
    var z=xy*xx;
    return z;
    }
    else{
    var z=0
    return z;
    }
    }


function mask(){
var u=document.getElementById("mask")
if(window.getComputedStyle(u).display != "none"){
var x=document.getElementById("lf").innerHTML;
var o=document.getElementById("stillf").innerHTML;
var xx=parseInt(x)
var xy=parseInt(o)
var z=xy*xx;
return z;
}
else{
var z=0
return z;
}
}

function san(){
    var u=document.getElementById("san")
    if(window.getComputedStyle(u).display != "none"){
    var x=document.getElementById("lg").innerHTML;
    var o=document.getElementById("stillg").innerHTML;
    var xx=parseInt(x)
    var xy=parseInt(o)
    var z=xy*xx;
    return z;
    }
    else{
    var z=0
    return z;
    }
    }


function vit(){
var u=document.getElementById("vit")
if(window.getComputedStyle(u).display != "none"){
var x=document.getElementById("lh").innerHTML;
var o=document.getElementById("stillh").innerHTML;
var xx=parseInt(x)
var xy=parseInt(o)
var z=xy*xx;
return z;
}
else{
var z=0
return z;
}
}


function wipe(){
    var u=document.getElementById("wipe")
    if(window.getComputedStyle(u).display != "none"){
    var x=document.getElementById("li").innerHTML;
    var o=document.getElementById("stilli").innerHTML;
    var xx=parseInt(x)
    var xy=parseInt(o)
    var z=xy*xx;
    return z;
    }
    else{
    var z=0
    return z;
    }
    }
    

    

    function cough1(){
        var u=document.getElementById("cough")
        if(window.getComputedStyle(u).display != "none"){
        var x=document.getElementById("l").innerHTML;
        var o=document.getElementById("still").innerHTML;
        var xx=parseInt(x)
        var xy=parseInt(o)
        var z=xy;
        return z;
        }
        else{
        var z=0
        return z;
        }
        }
        
        
        
        function fever1(){
            var u=document.getElementById("fever")
            if(window.getComputedStyle(u).display != "none"){
            var x=document.getElementById("la").innerHTML;
            var o=document.getElementById("stilla").innerHTML;
            var xx=parseInt(x)
            var xy=parseInt(o)
            var z=xy;
            return z;
            }
            else{
            var z=0
            return z;
            }
            }
            
        
        function head1(){
        var u=document.getElementById("head")
        if(window.getComputedStyle(u).display != "none"){
        var x=document.getElementById("lb").innerHTML;
        var o=document.getElementById("stillb").innerHTML;
        var xx=parseInt(x)
        var xy=parseInt(o)
        var z=xy;
        return z;
        }
        else{
        var z=0
        return z;
        }
        }
        
        
        
        function pain1(){
            var u=document.getElementById("pain")
            if(window.getComputedStyle(u).display != "none"){
            var x=document.getElementById("lc").innerHTML;
            var o=document.getElementById("stillc").innerHTML;
            var xx=parseInt(x)
            var xy=parseInt(o)
            var z=xy;
            return z;
            }
            else{
            var z=0
            return z;
            }
            }
            
        
        
        
        function vomit1(){
        var u=document.getElementById("vomit")
        if(window.getComputedStyle(u).display != "none"){
        var x=document.getElementById("ld").innerHTML;
        var o=document.getElementById("stilld").innerHTML;
        var xx=parseInt(x)
        var xy=parseInt(o)
        var z=xy;
        return z;
        }
        else{
        var z=0
        return z;
        }
        }
        
        function stomach1(){
            var u=document.getElementById("stomach")
            if(window.getComputedStyle(u).display != "none"){
            var x=document.getElementById("le").innerHTML;
            var o=document.getElementById("stille").innerHTML;
            var xx=parseInt(x)
            var xy=parseInt(o)
            var z=xy;
            return z;
            }
            else{
            var z=0
            return z;
            }
            }
        
        
        function mask1(){
        var u=document.getElementById("mask")
        if(window.getComputedStyle(u).display != "none"){
        var x=document.getElementById("lf").innerHTML;
        var o=document.getElementById("stillf").innerHTML;
        var xx=parseInt(x)
        var xy=parseInt(o)
        var z=xy;
        return z;
        }
        else{
        var z=0
        return z;
        }
        }
        
        function san1(){
            var u=document.getElementById("san")
            if(window.getComputedStyle(u).display != "none"){
            var x=document.getElementById("lg").innerHTML;
            var o=document.getElementById("stillg").innerHTML;
            var xx=parseInt(x)
            var xy=parseInt(o)
            var z=xy;
            return z;
            }
            else{
            var z=0
            return z;
            }
            }
        
        
        function vit1(){
        var u=document.getElementById("vit")
        if(window.getComputedStyle(u).display != "none"){
        var x=document.getElementById("lh").innerHTML;
        var o=document.getElementById("stillh").innerHTML;
        var xx=parseInt(x)
        var xy=parseInt(o)
        var z=xy;
        return z;
        }
        else{
        var z=0
        return z;
        }
        }
        
        
        function wipe1(){
            var u=document.getElementById("wipe")
            if(window.getComputedStyle(u).display != "none"){
            var o=document.getElementById("stilli").innerHTML;
            var xy=parseInt(o)
            var z=xy;
            return z;
            }
            else{
            var z=0
            return z;
            }
            }
            


// Add or subtract Item Quantity
function kk(){
var x=document.getElementById("still").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("still").innerHTML=z;
}  

function k(){
var x=document.getElementById("still").innerHTML;
var xx=parseInt(x)
var z=xx+1;
console.log(z)
document.getElementById("still").innerHTML=z;
}


function ka(){
    var x=document.getElementById("stilla").innerHTML;
    var xx=parseInt(x)
    var z=xx+1;
    console.log(z)
    document.getElementById("stilla").innerHTML=z;
    }


    function kb(){
        var x=document.getElementById("stillb").innerHTML;
        var xx=parseInt(x)
        var z=xx+1;
        console.log(z)
        document.getElementById("stillb").innerHTML=z;
        }



        function kc(){
            var x=document.getElementById("stillc").innerHTML;
            var xx=parseInt(x)
            var z=xx+1;
            console.log(z)
            document.getElementById("stillc").innerHTML=z;
            }


    function kd(){
        var x=document.getElementById("stilld").innerHTML;
        var xx=parseInt(x)
        var z=xx+1;
        console.log(z)
        document.getElementById("stilld").innerHTML=z;
    }

    
function ke(){
    var x=document.getElementById("stille").innerHTML;
    var xx=parseInt(x)
    var z=xx+1;
    console.log(z)
    document.getElementById("stille").innerHTML=z;
    }



function kf(){
var x=document.getElementById("stillf").innerHTML;
var xx=parseInt(x)
var z=xx+1;
console.log(z)
document.getElementById("stillf").innerHTML=z;
}



function kg(){
    var x=document.getElementById("stillg").innerHTML;
    var xx=parseInt(x)
    var z=xx+1;
    console.log(z)
    document.getElementById("stillg").innerHTML=z;
    }



function kh(){
var x=document.getElementById("stillh").innerHTML;
var xx=parseInt(x)
var z=xx+1;
console.log(z)
document.getElementById("stillh").innerHTML=z;
}



function ki(){
    var x=document.getElementById("stilli").innerHTML;
    var xx=parseInt(x)
    var z=xx+1;
    console.log(z)
    document.getElementById("stilli").innerHTML=z;
    }



function kka(){
var x=document.getElementById("stilla").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("stilla").innerHTML=z;
}  

function kkb(){
    var x=document.getElementById("stillb").innerHTML;
    var xx=parseInt(x)
    if(xx<=1){
    var z=1;
    }else{
    var z=xx-1;
    }
    console.log(z)
    document.getElementById("stillb").innerHTML=z;
    }  
    
function kkc(){
var x=document.getElementById("stillc").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("stillc").innerHTML=z;
}  

function kkd(){
    var x=document.getElementById("stilld").innerHTML;
    var xx=parseInt(x)
    if(xx<=1){
    var z=1;
    }else{
    var z=xx-1;
    }
    console.log(z)
    document.getElementById("stilld").innerHTML=z;
    }  
    

function kke(){
var x=document.getElementById("stille").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("stille").innerHTML=z;
}  


function kkf(){
    var x=document.getElementById("stillf").innerHTML;
    var xx=parseInt(x)
    if(xx<=1){
    var z=1;
    }else{
    var z=xx-1;
    }
    console.log(z)
    document.getElementById("stillf").innerHTML=z;
    }  

function kkg(){
var x=document.getElementById("stillg").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("stillg").innerHTML=z;
}  

function kkh(){
    var x=document.getElementById("stillh").innerHTML;
    var xx=parseInt(x)
    if(xx<=1){
    var z=1;
    }else{
    var z=xx-1;
    }
    console.log(z)
    document.getElementById("stillh").innerHTML=z;
    }  
    
function kki(){
var x=document.getElementById("stilli").innerHTML;
var xx=parseInt(x)
if(xx<=1){
var z=1;
}else{
var z=xx-1;
}
console.log(z)
document.getElementById("stilli").innerHTML=z;
}  

    










// Add to cart and remove from cart functions

function myFunction() {
var x = document.getElementById("cough");
if (window.getComputedStyle(x).display === "none") {
x.style.display = "flex";
if(document.getElementById("still").innerHTML == 0){
    k();
    check();
}
}
}         

function myFunction2() {
var x = document.getElementById("cough");
if (window.getComputedStyle(x).display != "none") {
x.style.display = "none";
document.getElementById("still").innerHTML=0;
}
}


function myFunctiona() {
    var x = document.getElementById("fever");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    console.log(document.getElementById("stilla").innerHTML);
    if(document.getElementById("stilla").innerHTML == 0){
        ka();
        check();
    }
    }
}         
    
function myFunction2a() {
    var x = document.getElementById("fever");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    
document.getElementById("stilla").innerHTML=0;
        }
    }
    
function myFunctionb() {
    var x = document.getElementById("head");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stillb").innerHTML == 0){
        kb();
        check();
    }
    }
    }         
    
function myFunction2b() {
    var x = document.getElementById("head");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    
document.getElementById("stillb").innerHTML=0;
        }
    }

function myFunctionc() {
    var x = document.getElementById("pain");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stillc").innerHTML == 0){
        kc();
        check();
    }
    }
    }         
    
function myFunction2c() {
    var x = document.getElementById("pain");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stillc").innerHTML=0;
        }
    }


function myFunctiond() {
    var x = document.getElementById("vomit");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stilld").innerHTML == 0){
        kd();
        check();
    }
    }
    }         
    
function myFunction2d() {
    var x = document.getElementById("vomit");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stilld").innerHTML=0;
        }
    }



function myFunctione() {
    var x = document.getElementById("stomach");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stille").innerHTML == 0){
        ke();
        check();
    }
    }
    }         
    
function myFunction2e() {
    var x = document.getElementById("stomach");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stille").innerHTML=0;
        }
    }


function myFunctionf() {
    var x = document.getElementById("mask");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stillf").innerHTML == 0){
        kf();
        check();
    }
    }
    }         
    
function myFunction2f() {
    var x = document.getElementById("mask");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stillf").innerHTML=0;
        }
    }


function myFunctiong() {
    var x = document.getElementById("san");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stillg").innerHTML == 0){
        kg();
        check();
    }
    }
    }         
    
function myFunction2g() {
    var x = document.getElementById("san");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stillg").innerHTML=0;
        }
    }

function myFunctionh() {
    var x = document.getElementById("vit");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stillh").innerHTML == 0){
        kh();
        check();
    }
    }
    }         
    
function myFunction2h() {
    var x = document.getElementById("vit");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stillh").innerHTML=0;
        }
    }



function myFunctioni() {
    var x = document.getElementById("wipe");
    if (window.getComputedStyle(x).display === "none") {
    x.style.display = "flex";
    if(document.getElementById("stilli").innerHTML == 0){
        ki();
        check();
    }
    }
    }         
    
function myFunction2i() {
    var x = document.getElementById("wipe");
    if (window.getComputedStyle(x).display != "none") {
    x.style.display = "none";
    document.getElementById("stilli").innerHTML=0;
        }
    }




  
    function alanfeverp(quantity){
        var x = document.getElementById("fever");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";  
        if(quantity==1){
            k();
            check();
        }   
        else{
        for(var i=0;i<quantity-1;i++){
            ka();
            check();
        }
        }
    }
        
        else{
            for(var i=0;i<quantity;i++){
                ka();
                check();
            }
        }
    }
    
    
      
    function alancoughp(quantity){
        var x = document.getElementById("cough");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex"; 
        if(quantity==1){
            k();
            check();
        }   
        else{for(var i=0;i<quantity-1;i++){
            k();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                k();
                check();
            }
        }
    }
    
      
    function alanheadp(quantity){
        var x = document.getElementById("head");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";
        if(quantity==1){
            k();
            check();
        }   
        else{    
        for(var i=0;i<quantity-1;i++){
            kb();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kb();
                check();
            }
        }
    }
    
      
    function alanpainp(quantity){
        var x = document.getElementById("pain");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";  
        if(quantity==1){
            k();
            check();
        }   
        else{  
        for(var i=0;i<quantity-1;i++){
            kc();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kc();
                check();
            }
        }
    }
    
  
      
    function alanvomitp(quantity){
        var x = document.getElementById("vomit");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";  
        if(quantity==1){
            k();
            check();
        }   
        else{  
        for(var i=0;i<quantity-1;i++){
            kd();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kd();
                check();
            }
        }
    }
    
  
      
    function alanstomachp(quantity){
        var x = document.getElementById("stomach");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";    
        if(quantity==1){
            k();
            check();
        }   
        else{
        for(var i=0;i<quantity-1;i++){
            ke();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                ke();
                check();
            }
        }
    }
  
      
    function alanmaskp(quantity){
        var x = document.getElementById("mask");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";  
        if(quantity==1){
            k();
            check();
        }   
        else{  
        for(var i=0;i<quantity-1;i++){
            kf();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kf();
                check();
            }
        }
    }
    
      
    function alansanp(quantity){
        var x = document.getElementById("san");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex"; 
        if(quantity==1){
            k();
            check();
        }   
        else{   
        for(var i=0;i<quantity-1;i++){
            kg();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kg();
                check();
            }
        }
    }
      
    function alanvitp(quantity){
        var x = document.getElementById("vit");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";  
        if(quantity==1){
            k();
            check();
        }   
        else{  
        for(var i=0;i<quantity-1;i++){
            kh();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                kh();
                check();
            }
        }
    }
    
      
    function alanwipep(quantity){
        var x = document.getElementById("wipe");
        if (window.getComputedStyle(x).display === "none") {
        x.style.display = "flex";   
        if(quantity==1){
            k();
            check();
        }   
        else{ 
        for(var i=0;i<quantity-1;i++){
            ki();
            check();
        }
        }
    }
        else{
            for(var i=0;i<quantity;i++){
                ki();
                check();
            }
        }
    }
    



    function alancoughn(){
        var x = document.getElementById("cough");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }
    
    
    function alanfevern(){
        var x = document.getElementById("fever");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2a();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }

    function alanheadn(){
        var x = document.getElementById("head");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2b();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }

    function alanpainn(){
        var x = document.getElementById("pain");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2c();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }

    function alanvomitn(){
        var x = document.getElementById("vomit");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2d();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }

    function alanstomachn(){
        var x = document.getElementById("stomach");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2e();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }
    function alanmaskn(){
        var x = document.getElementById("mask");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2f();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }

    function alansann(){
        var x = document.getElementById("san");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2g();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }
    function alanvitn(){
        var x = document.getElementById("vit");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2h();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }
    function alanwipen(){
        var x = document.getElementById("wipe");
        if (window.getComputedStyle(x).display === "none") {
            userChoice = "a"
        }
        else{
            myFunction2i();
            userChoice="b";
            check();
          }
        
        alanBtnInstance.setVisualState({
            answer: userChoice
        });
    }
