import request from 'request';//Importamos el paquete que nos hemos descargado.
import yargs from 'yargs';
import {country} from './utils.js';


const baseURL = 'https://api.mapbox.com/';
const more = 'geocoding/v5/mapbox.places/';
const endpoint = `${baseURL}geocoding/v5/mapbox.places/`;
const arch = '.json?access_token=';
const token = 'pk.eyJ1IjoibWF0ZW9zaXAiLCJhIjoiY2sxYW8wdHczMDFyazNucDQxM2QxeTdteCJ9.NKhI1kx6sDHpnmDUtMAQJg';

const parte1 = `${endpoint}`;
const parte2 = `${arch}${token}`;


const baseApiURL = 'https://api.darksky.net/';
const apiToken = 'e6b8571b913292477e7a4794c0f75d78/';
const apiEndpoint = `${baseApiURL}forecast/${apiToken}`;


yargs.command({
    command: 'country',
    describe: 'enter the country',
    builder: {
        name: {
            describe: 'Name of the country',
            demandOption: true,
            type: 'string',
        },
        index: {
            describe: 'Index of the country',
            demandOption : false,
            type: 'int',
        },
    },
    handler: function(args){
       country(parte1,parte2,args,apiEndpoint);
    }
})

yargs.parse();