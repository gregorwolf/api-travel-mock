using {API_TRAVEL_U_V2 as external} from './external/API_TRAVEL_U_V2';

service TravelService @(path : '/DMO/API_TRAVEL_U_V2') {

    @cds.persistence.skip : false
    @cds.persistence.table
    entity Travel: external.Travel {

    };

    action reset();
}
