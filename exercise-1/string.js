function ucfirst(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

function camelCase(chaine){
    if(typeof chaine !== "string" || chaine === "") return "";
    let words = chaine.toLowerCase().split(' ');
    let result = "";
    for (var i = 0; i < words.length; i++) {
        result += ucfirst(words[i]);
    }
    return result;
}

function prop_access(obj, path) {
    if(path === ""){
        return obj;
    }
    if(path === null){
        return null;
    }
    let props = path.split('.');
    let result = obj;
    for (var i = 0; i < props.length; i++) {
        result = result[props[i]];
    }
    if (typeof result !== 'undefined'){
            return result;
    }else{
        console.log(path + " not exist");
    }
}


