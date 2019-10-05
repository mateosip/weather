import request from 'request';

const country = function(parte1,parte2,args,apiEndpoint){
    let ubic;
    let direccion;

    let latitud;
    let longitud;
    if(args.index === undefined){
        ubic = args.name;
        direccion = `${parte1}${ubic}${parte2}`;
        request({url: direccion, json: true}, (error,response) =>{
            response.body.features.forEach(function(element,index){
                console.log(index," ",element.place_name);
            })
        })
    }else{
        ubic = args.name;
        
        direccion = `${parte1}${ubic}${parte2}`;
        
        request({url:direccion, json: true}, (error,response)=>{
            const ciudad = response.body.features.find((element,index) => index === args.index);
            latitud = ciudad.geometry.coordinates[1];
            longitud = ciudad.geometry.coordinates[0];

            const direccionDarksy = `${apiEndpoint}${latitud},${longitud}?units=si&lang=es`;
            request({url:direccionDarksy, json: true}, (error,response)=>{
                console.log(`${"La temperatura en "}${ciudad.place_name}${" es de "}${response.body.currently.temperature}${"ºC"}`);
                console.log(`${"La probabilidad de precipitaciones en "}${ciudad.place_name}${" es de "}${response.body.currently.precipProbability}`);
            })
        })
    }
}
export {country};