//const getImagenPromesa = () => 
//    new Promise( resolve => resolve('https://asdfghjklñ.com'))
//

//getImagenPromesa().then(console.log);

const getImage = async() => {

    try {
        const apiKey = 'e6FF0QVXVCREbPQPItoI99ngFfUH3A4Q';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img )

        console.log(data);
    } catch (error) {
        console.error(error);
    }
    
}

getImage();


//peticion.then( resp => resp.json())
//.then(({data}) => {
//    const {url} = data.images.original;
//    
//    const img = document.createElement('img');
//    img.src = url;
//
//    document.body.append( img )
//})
//.catch(console.warn)
//