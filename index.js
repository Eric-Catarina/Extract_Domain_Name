function domainName(url){
    let slashSplitted
    let domainName
    if (myFunc(url) > 1){
        slashSplitted = url.split("//")
        domainName = slashSplitted[1].split(".")[0]

    }
    else{

        dotSplited = url.split(".")
        domainName = dotSplited[1]

    }

    return domainName

  

}

var myFunc = function(inside) {
    count = 0; 
    for (var i=0;i<inside.length;i++) {
        if(inside[i]=="/") {
            count+=1;
            }
        //return should not come here
    };
    return count;

};

console.log(domainName("http://google.com"))
