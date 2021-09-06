
const dataList = [  
    {  
        lenguage:  "Spanish",  
        text:  "Bienvenido  al  curso  de  React  Native  en PachaQtec",  
        id:  1,  
    },  
    { 
        lenguage: "English", 
        text: "Welcome to the React Ne course at PachaQteativc", 
        id: 2, 
    }, 
    { 
        lenguage: "French",  
        text:  "Bienvenue  dans  le cours  React Native chez  PachaQtec", 
        id:  3,  
    }, 
    {  
        lenguage: "Italian",  
        text:  "Benvenuti  al  corso  React  Native  presso  PachaQtec",  
        id:  4,  
    },  
    {  
        lenguage: "Portuguese", 
        text: "Bem-vindo ao curso React Native na PachaQtec", 
        id: 5, 
    } 
]

let word = prompt("Inserte palabra a traducir");
for (let i = 0; i < dataList.length; i++) {
    
    if (dataList[i].text === word) {
        alert("El idioma es: " + dataList[i].lenguage)
    }
    
}

let lenguage = prompt("A que lenguaje quiere traducir: Spanish, English, French, Italian, Portuguese")
for (let i = 0; i < dataList.length; i++) {
    
    for (let y = 0; y < dataList.length; y++) {
        
        if (dataList[i].text === word && dataList[y].lenguage === lenguage) {
            alert(dataList[y].text)
        }
        
    }
    
}

