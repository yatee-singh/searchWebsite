//console.log("jewwd")

let searchShow=document.getElementById('p1');
const myurl= new URL("https://www.google.com/");
//const myurl= new URL("https://docs.google.com/document/u/0/");
//console.log(myurl);
let query= document.getElementById('query');
let searchbtn= document.querySelector('.searchbtn')
var image = document.getElementById('myImage')
var image2 = document.getElementById('iii')
//console.log(query)
console.log(image);

function click(){
    
    const search = query.value.split(" ");
    const searchEngine=search.splice(0,1)
    console.log(searchEngine)
    let final="";
    
    for (let x of search)
    {
        final= final+x + " ";
    }
    
    if (searchEngine=="youtube")
    {
        // console.log(x);
        myurl.hostname='youtube.com'
        myurl.pathname='/results'
        myurl.searchParams.set('search_query',final)
        
    }
    else if (searchEngine=="google")
    {
        myurl.pathname="/search"
        myurl.searchParams.set('q',final)
    }
    else if (searchEngine=="github")
    {
        myurl.hostname='github.com'
        myurl.pathname="/search"
        myurl.searchParams.set('q',final)
    }
    else if (searchEngine=="docs")
    {
        myurl.hostname='docs.google.com'
        myurl.pathname='/document/u/0/'
        myurl.searchParams.set('q',final)
    }
    else if (searchEngine=="slides")
    {
        myurl.hostname='docs.google.com'
        myurl.pathname='/presentation/u/0/'
        myurl.searchParams.set('q',final)
    }
    else if (searchEngine=="sheets")
    {
        myurl.hostname='docs.google.com'
        myurl.pathname='/spreadsheets/u/0/'
        myurl.searchParams.set('q',final)
        console.log(myurl.href)

    }
  
    else if(search=="")
    {
        myurl.pathname="/search"
        myurl.searchParams.set('q',searchEngine)
    }

    else{
        myurl.pathname="/search"
        myurl.searchParams.set('q',searchEngine+" "+final)

    }
   
    console.log(myurl.href)
    window.open(myurl.href,);
 
    
    
}
function print(){
    console.log(query.value)
    if (query.value=="youtube")
    {
        searchShow.innerHTML="search youtube"
        image2.src='Youtube-Logo.jpg';
       
    }
    if (query.value=="github")
    {
        searchShow.innerHTML="search github"
        image2.src='Github-logo.png';
    }
    if (query.value=="docs")
    {
        searchShow.innerHTML="search docs"
        image2.src='google-docs-logo.png';
    
    }
    if (query.value=="sheets")
    {
        searchShow.innerHTML="search sheets"
        image2.src='Google-Sheets-Logo-1.png';
    
    }
    if (query.value=="slides")
    {
        searchShow.innerHTML="search slides"
        image2.src='google-slides-logo.png';
    }
    if (query.value=="google")
    {
        searchShow.innerHTML="search google"
        image2.src='google-logo.webp';
    }
    if (query.value=="")
    {
        searchShow.innerHTML="search google"
        image2.src='google-logo.webp';
    }
    
    // if(query.value=="")
    // {
    //     
    // }
}
query.onkeydown=print;
searchbtn.onclick=click;
