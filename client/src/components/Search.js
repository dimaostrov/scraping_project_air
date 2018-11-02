import React from 'react';
import Autocomplete from 'react-autocomplete';
import airStore from '../store';
import { observer } from 'mobx-react'

class SearchBox extends React.Component {

  render() {
    return (
      <div>
        <Autocomplete
          getItemValue={(item) => item.name}
          items={names}
          shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightray' : 'white' }}>
              {item.name}
            </div>
          }
          value={airStore.searchTerm}
          onChange={(e) => this._updateTerm(e)}
          onSelect={(val) => airStore.setCity(val)}
        />

      </div>
    )
  }

  _updateTerm = (e) => {
    const newWord = e.target.value
    airStore.searchTerm = newWord;
  }
}

SearchBox = observer(SearchBox);

export default SearchBox;

const names = [
	{
		"name": "Avondale"
	},
	{
		"name": "Buckeye"
	},
	{
		"name": "Chandler"
	},
	{
		"name": "Cochise"
	},
	{
		"name": "Dewey"
	},
	{
		"name": "Dolan Springs"
	},
	{
		"name": "El Mirage"
	},
	{
		"name": "Flagstaff"
	},
	{
		"name": "Camp Verde"
	},
	{
		"name": "Cornville"
	},
	{
		"name": "Cottonwood"
	},
	{
		"name": "Fort Mohave"
	},
	{
		"name": "Glendale"
	},
	{
		"name": "Goodyear"
	},
	{
		"name": "Grand Canyon"
	},
	{
		"name": "Gilbert"
	},
	{
		"name": "Green Valley"
	},
	{
		"name": "Heber"
	},
	{
		"name": "Hereford"
	},
	{
		"name": "Holbrook"
	},
	{
		"name": "Kayenta"
	},
	{
		"name": "Kingman"
	},
	{
		"name": "Litchfield Park"
	},
	{
		"name": "Marana"
	},
	{
		"name": "Mesa"
	},
	{
		"name": "Page"
	},
	{
		"name": "Paradise Valley"
	},
	{
		"name": "Pearce"
	},
	{
		"name": "Peoria"
	},
	{
		"name": "Phoenix"
	},
	{
		"name": "Prescott Valley"
	},
	{
		"name": "Rimrock"
	},
	{
		"name": "Sahuarita"
	},
	{
		"name": "Sedona"
	},
	{
		"name": "Sierra Vista"
	},
	{
		"name": "Scottsdale"
	},
	{
		"name": "Sun City"
	},
	{
		"name": "Sun City West"
	},
	{
		"name": "Surprise"
	},
	{
		"name": "Tempe"
	},
	{
		"name": "Tolleson"
	},
	{
		"name": "Tombstone"
	},
	{
		"name": "Tucson"
	},
	{
		"name": "Yuma"
	},
	{
		"name": "Agoura Hills"
	},
	{
		"name": "Alameda"
	},
	{
		"name": "Alamo"
	},
	{
		"name": "Albany"
	},
	{
		"name": "Alhambra"
	},
	{
		"name": "Aliso Viejo"
	},
	{
		"name": "Altadena"
	},
	{
		"name": "American Canyon"
	},
	{
		"name": "Anaheim"
	},
	{
		"name": "Anderson"
	},
	{
		"name": "Angwin"
	},
	{
		"name": "Apple Valley"
	},
	{
		"name": "Aptos"
	},
	{
		"name": "Arcadia"
	},
	{
		"name": "Artesia"
	},
	{
		"name": "Atascadero"
	},
	{
		"name": "Atwater"
	},
	{
		"name": "Azusa"
	},
	{
		"name": "Belmont"
	},
	{
		"name": "Belvedere Tiburon"
	},
	{
		"name": "Benicia"
	},
	{
		"name": "Ben Lomond"
	},
	{
		"name": "Berkeley"
	},
	{
		"name": "Beverly Hills"
	},
	{
		"name": "Big Pine"
	},
	{
		"name": "Blue Lake"
	},
	{
		"name": "Blythe"
	},
	{
		"name": "Bonita"
	},
	{
		"name": "Boulder Creek"
	},
	{
		"name": "Brea"
	},
	{
		"name": "Brisbane"
	},
	{
		"name": "Buena Park"
	},
	{
		"name": "Burbank"
	},
	{
		"name": "Burlingame"
	},
	{
		"name": "Camarillo"
	},
	{
		"name": "Campbell"
	},
	{
		"name": "Canoga Park"
	},
	{
		"name": "Canyon Country"
	},
	{
		"name": "Canyon Dam"
	},
	{
		"name": "Capay"
	},
	{
		"name": "Capistrano Beach"
	},
	{
		"name": "Cardiff By The Sea"
	},
	{
		"name": "Carlsbad"
	},
	{
		"name": "Carmel"
	},
	{
		"name": "Carmel Valley"
	},
	{
		"name": "Carmichael"
	},
	{
		"name": "Carson"
	},
	{
		"name": "Castro Valley"
	},
	{
		"name": "Cerritos"
	},
	{
		"name": "Chatsworth"
	},
	{
		"name": "Chester"
	},
	{
		"name": "Chico"
	},
	{
		"name": "Chino"
	},
	{
		"name": "Chino Hills"
	},
	{
		"name": "Chula Vista"
	},
	{
		"name": "Citrus Heights"
	},
	{
		"name": "Claremont"
	},
	{
		"name": "Cloverdale"
	},
	{
		"name": "Clovis"
	},
	{
		"name": "Colfax"
	},
	{
		"name": "Colton"
	},
	{
		"name": "Compton"
	},
	{
		"name": "Concord"
	},
	{
		"name": "Corona"
	},
	{
		"name": "Corona Del Mar"
	},
	{
		"name": "Coronado"
	},
	{
		"name": "Corte Madera"
	},
	{
		"name": "Costa Mesa"
	},
	{
		"name": "Cotati"
	},
	{
		"name": "Covina"
	},
	{
		"name": "Crescent City"
	},
	{
		"name": "Culver City"
	},
	{
		"name": "Cupertino"
	},
	{
		"name": "Cypress"
	},
	{
		"name": "Daggett"
	},
	{
		"name": "Daly City"
	},
	{
		"name": "Dana Point"
	},
	{
		"name": "Davis"
	},
	{
		"name": "Deer Park"
	},
	{
		"name": "Diamond Bar"
	},
	{
		"name": "Discovery Bay"
	},
	{
		"name": "Dinuba"
	},
	{
		"name": "Dodgertown"
	},
	{
		"name": "Downey"
	},
	{
		"name": "Duarte"
	},
	{
		"name": "Dublin"
	},
	{
		"name": "Durham"
	},
	{
		"name": "El Centro"
	},
	{
		"name": "El Cerrito"
	},
	{
		"name": "Elk"
	},
	{
		"name": "El Monte"
	},
	{
		"name": "El Segundo"
	},
	{
		"name": "Emeryville"
	},
	{
		"name": "Encinitas"
	},
	{
		"name": "Encino"
	},
	{
		"name": "Escalon"
	},
	{
		"name": "Escondido"
	},
	{
		"name": "Eureka"
	},
	{
		"name": "Fairfax"
	},
	{
		"name": "Fairfield"
	},
	{
		"name": "Fair Oaks"
	},
	{
		"name": "Folsom"
	},
	{
		"name": "Fontana"
	},
	{
		"name": "Foresthill"
	},
	{
		"name": "Forest Knolls"
	},
	{
		"name": "Fountain Valley"
	},
	{
		"name": "Fremont"
	},
	{
		"name": "Fresno"
	},
	{
		"name": "Fullerton"
	},
	{
		"name": "Garberville"
	},
	{
		"name": "Gardena"
	},
	{
		"name": "Garden Grove"
	},
	{
		"name": "Glendora"
	},
	{
		"name": "Goleta"
	},
	{
		"name": "Granada Hills"
	},
	{
		"name": "Granite Bay"
	},
	{
		"name": "Greenbrae"
	},
	{
		"name": "Grover Beach"
	},
	{
		"name": "Hacienda Heights"
	},
	{
		"name": "Half Moon Bay"
	},
	{
		"name": "Hanford"
	},
	{
		"name": "Harbor City"
	},
	{
		"name": "Hat Creek"
	},
	{
		"name": "Hawthorne"
	},
	{
		"name": "Hayward"
	},
	{
		"name": "Hemet"
	},
	{
		"name": "Hermosa Beach"
	},
	{
		"name": "Huntington Beach"
	},
	{
		"name": "Imperial Beach"
	},
	{
		"name": "Inglewood"
	},
	{
		"name": "Irvine"
	},
	{
		"name": "Jamul"
	},
	{
		"name": "La Canada Flintridge"
	},
	{
		"name": "Ladera Ranch"
	},
	{
		"name": "Lafayette"
	},
	{
		"name": "Laguna Hills"
	},
	{
		"name": "Laguna Niguel"
	},
	{
		"name": "Lagunitas"
	},
	{
		"name": "La Habra"
	},
	{
		"name": "La Honda"
	},
	{
		"name": "La Jolla"
	},
	{
		"name": "Lake Elsinore"
	},
	{
		"name": "Lakewood"
	},
	{
		"name": "La Mesa"
	},
	{
		"name": "La Mirada"
	},
	{
		"name": "Lancaster"
	},
	{
		"name": "La Puente"
	},
	{
		"name": "Larkspur"
	},
	{
		"name": "La Verne"
	},
	{
		"name": "Lawndale"
	},
	{
		"name": "Lemon Cove"
	},
	{
		"name": "Lemon Grove"
	},
	{
		"name": "Lemoore"
	},
	{
		"name": "Lincoln"
	},
	{
		"name": "Lindsay"
	},
	{
		"name": "Livermore"
	},
	{
		"name": "Lodi"
	},
	{
		"name": "Lone Pine"
	},
	{
		"name": "Long Beach"
	},
	{
		"name": "Loomis"
	},
	{
		"name": "Los Alamitos"
	},
	{
		"name": "Los Altos"
	},
	{
		"name": "Los Angeles"
	},
	{
		"name": "Los Gatos"
	},
	{
		"name": "Los Osos"
	},
	{
		"name": "Lucerne"
	},
	{
		"name": "Manhattan Beach"
	},
	{
		"name": "Marina"
	},
	{
		"name": "Marina Del Rey"
	},
	{
		"name": "Martinez"
	},
	{
		"name": "Marysville"
	},
	{
		"name": "Mckinleyville"
	},
	{
		"name": "Meadow Vista"
	},
	{
		"name": "Menifee"
	},
	{
		"name": "Menlo Park"
	},
	{
		"name": "Merced"
	},
	{
		"name": "Midway City"
	},
	{
		"name": "Millbrae"
	},
	{
		"name": "Mill Valley"
	},
	{
		"name": "Millville"
	},
	{
		"name": "Milpitas"
	},
	{
		"name": "Mineral"
	},
	{
		"name": "Mira Loma"
	},
	{
		"name": "Miranda"
	},
	{
		"name": "Mission Hills"
	},
	{
		"name": "Mission Viejo"
	},
	{
		"name": "Modesto"
	},
	{
		"name": "Monrovia"
	},
	{
		"name": "Montague"
	},
	{
		"name": "Montara"
	},
	{
		"name": "Montebello"
	},
	{
		"name": "Monterey"
	},
	{
		"name": "Monterey Park"
	},
	{
		"name": "Montrose"
	},
	{
		"name": "Moraga"
	},
	{
		"name": "Morgan Hill"
	},
	{
		"name": "Moss Beach"
	},
	{
		"name": "Moss Landing"
	},
	{
		"name": "Mountain Ranch"
	},
	{
		"name": "Mountain View"
	},
	{
		"name": "Myers Flat"
	},
	{
		"name": "National City"
	},
	{
		"name": "Newark"
	},
	{
		"name": "Newbury Park"
	},
	{
		"name": "Newcastle"
	},
	{
		"name": "Newport Beach"
	},
	{
		"name": "Newport Coast"
	},
	{
		"name": "North Hills"
	},
	{
		"name": "North Hollywood"
	},
	{
		"name": "North Palm Springs"
	},
	{
		"name": "Northridge"
	},
	{
		"name": "Norwalk"
	},
	{
		"name": "Novato"
	},
	{
		"name": "Nuevo"
	},
	{
		"name": "Oakdale"
	},
	{
		"name": "Oakland"
	},
	{
		"name": "Oak View"
	},
	{
		"name": "Oceanside"
	},
	{
		"name": "Old Station"
	},
	{
		"name": "Ontario"
	},
	{
		"name": "Orange"
	},
	{
		"name": "Orangevale"
	},
	{
		"name": "Orinda"
	},
	{
		"name": "Pacifica"
	},
	{
		"name": "Pacific Grove"
	},
	{
		"name": "Pacific Palisades"
	},
	{
		"name": "Palmdale"
	},
	{
		"name": "Palo Alto"
	},
	{
		"name": "Paradise"
	},
	{
		"name": "Paramount"
	},
	{
		"name": "Parker Dam"
	},
	{
		"name": "Pasadena"
	},
	{
		"name": "Petaluma"
	},
	{
		"name": "Pico Rivera"
	},
	{
		"name": "Placentia"
	},
	{
		"name": "Playa Del Rey"
	},
	{
		"name": "Playa Vista"
	},
	{
		"name": "Pleasant Hill"
	},
	{
		"name": "Pleasanton"
	},
	{
		"name": "Pollock Pines"
	},
	{
		"name": "Pomona"
	},
	{
		"name": "Port Costa"
	},
	{
		"name": "Port Hueneme"
	},
	{
		"name": "Portola Valley"
	},
	{
		"name": "Poway"
	},
	{
		"name": "Quincy"
	},
	{
		"name": "Ranchita"
	},
	{
		"name": "Rancho Cordova"
	},
	{
		"name": "Rancho Cucamonga"
	},
	{
		"name": "Raymond"
	},
	{
		"name": "Redding"
	},
	{
		"name": "Redlands"
	},
	{
		"name": "Redondo Beach"
	},
	{
		"name": "Redwood City"
	},
	{
		"name": "Reseda"
	},
	{
		"name": "Rialto"
	},
	{
		"name": "Ridgecrest"
	},
	{
		"name": "Richmond"
	},
	{
		"name": "Ripon"
	},
	{
		"name": "Riverside"
	},
	{
		"name": "Rocklin"
	},
	{
		"name": "Rodeo"
	},
	{
		"name": "Rosamond"
	},
	{
		"name": "Rosemead"
	},
	{
		"name": "Roseville"
	},
	{
		"name": "Rowland Heights"
	},
	{
		"name": "Sacramento"
	},
	{
		"name": "Salinas"
	},
	{
		"name": "San Anselmo"
	},
	{
		"name": "San Bernardino"
	},
	{
		"name": "San Bruno"
	},
	{
		"name": "San Carlos"
	},
	{
		"name": "San Clemente"
	},
	{
		"name": "San Diego"
	},
	{
		"name": "San Fernando"
	},
	{
		"name": "San Francisco"
	},
	{
		"name": "San Gabriel"
	},
	{
		"name": "San Jose"
	},
	{
		"name": "San Juan Capistrano"
	},
	{
		"name": "San Leandro"
	},
	{
		"name": "San Luis Obispo"
	},
	{
		"name": "San Marcos"
	},
	{
		"name": "San Mateo"
	},
	{
		"name": "San Pablo"
	},
	{
		"name": "San Pedro"
	},
	{
		"name": "San Rafael"
	},
	{
		"name": "San Ramon"
	},
	{
		"name": "Santa Ana"
	},
	{
		"name": "Santa Barbara"
	},
	{
		"name": "Santa Clara"
	},
	{
		"name": "Santa Clarita"
	},
	{
		"name": "Santa Cruz"
	},
	{
		"name": "Santa Maria"
	},
	{
		"name": "Santa Monica"
	},
	{
		"name": "Santa Rosa"
	},
	{
		"name": "Saratoga"
	},
	{
		"name": "Sausalito"
	},
	{
		"name": "Scotts Valley"
	},
	{
		"name": "Seal Beach"
	},
	{
		"name": "Seaside"
	},
	{
		"name": "Sebastopol"
	},
	{
		"name": "Shafter"
	},
	{
		"name": "Shasta Lake"
	},
	{
		"name": "Sherman Oaks"
	},
	{
		"name": "Signal Hill"
	},
	{
		"name": "Smith River"
	},
	{
		"name": "Solana Beach"
	},
	{
		"name": "Solvang"
	},
	{
		"name": "Somis"
	},
	{
		"name": "South El Monte"
	},
	{
		"name": "South Gate"
	},
	{
		"name": "South Pasadena"
	},
	{
		"name": "South San Francisco"
	},
	{
		"name": "Spring Valley"
	},
	{
		"name": "Springville"
	},
	{
		"name": "Stanford"
	},
	{
		"name": "Stinson Beach"
	},
	{
		"name": "Stockton"
	},
	{
		"name": "Studio City"
	},
	{
		"name": "Suisun City"
	},
	{
		"name": "Sunnyvale"
	},
	{
		"name": "Sunol"
	},
	{
		"name": "Sunset Beach"
	},
	{
		"name": "Sun Valley"
	},
	{
		"name": "Sylmar"
	},
	{
		"name": "Tarzana"
	},
	{
		"name": "Temple City"
	},
	{
		"name": "The Sea Ranch"
	},
	{
		"name": "Thousand Oaks"
	},
	{
		"name": "Thousand Palms"
	},
	{
		"name": "Topanga"
	},
	{
		"name": "Torrance"
	},
	{
		"name": "Tracy"
	},
	{
		"name": "Trinidad"
	},
	{
		"name": "Tujunga"
	},
	{
		"name": "Turlock"
	},
	{
		"name": "Tustin"
	},
	{
		"name": "Union City"
	},
	{
		"name": "Universal City"
	},
	{
		"name": "Upland"
	},
	{
		"name": "Valencia"
	},
	{
		"name": "Vallejo"
	},
	{
		"name": "Valley Village"
	},
	{
		"name": "Van Nuys"
	},
	{
		"name": "Venice"
	},
	{
		"name": "Victorville"
	},
	{
		"name": "Walnut"
	},
	{
		"name": "Walnut Creek"
	},
	{
		"name": "Walnut Grove"
	},
	{
		"name": "West Covina"
	},
	{
		"name": "West Hills"
	},
	{
		"name": "West Hollywood"
	},
	{
		"name": "Westminster"
	},
	{
		"name": "West Point"
	},
	{
		"name": "Westport"
	},
	{
		"name": "West Sacramento"
	},
	{
		"name": "Whittier"
	},
	{
		"name": "Wildomar"
	},
	{
		"name": "Willits"
	},
	{
		"name": "Willow Creek"
	},
	{
		"name": "Wilmington"
	},
	{
		"name": "Windsor"
	},
	{
		"name": "Winnetka"
	},
	{
		"name": "Winters"
	},
	{
		"name": "Woodacre"
	},
	{
		"name": "Woodlake"
	},
	{
		"name": "Woodland"
	},
	{
		"name": "Woodland Hills"
	},
	{
		"name": "Yorba Linda"
	},
	{
		"name": "Yreka"
	},
	{
		"name": "Yucaipa"
	},
	{
		"name": "Alachua"
	},
	{
		"name": "Altamonte Springs"
	},
	{
		"name": "Anna Maria"
	},
	{
		"name": "Altoona"
	},
	{
		"name": "Archer"
	},
	{
		"name": "Apollo Beach"
	},
	{
		"name": "Atlantic Beach"
	},
	{
		"name": "Baker"
	},
	{
		"name": "Bartow"
	},
	{
		"name": "Belleair Beach"
	},
	{
		"name": "Big Pine Key"
	},
	{
		"name": "Bokeelia"
	},
	{
		"name": "Boca Raton"
	},
	{
		"name": "Bonita Springs"
	},
	{
		"name": "Bradenton"
	},
	{
		"name": "Brandon"
	},
	{
		"name": "Bradenton Beach"
	},
	{
		"name": "Cantonment"
	},
	{
		"name": "Brooksville"
	},
	{
		"name": "Cape Coral"
	},
	{
		"name": "Cape Canaveral"
	},
	{
		"name": "Casselberry"
	},
	{
		"name": "Clearwater Beach"
	},
	{
		"name": "Clearwater"
	},
	{
		"name": "Clewiston"
	},
	{
		"name": "Clermont"
	},
	{
		"name": "Cocoa"
	},
	{
		"name": "Cortez"
	},
	{
		"name": "Cocoa Beach"
	},
	{
		"name": "Crystal River"
	},
	{
		"name": "Dania"
	},
	{
		"name": "Debary"
	},
	{
		"name": "Deerfield Beach"
	},
	{
		"name": "Delray Beach"
	},
	{
		"name": "De Leon Springs"
	},
	{
		"name": "Destin"
	},
	{
		"name": "Deltona"
	},
	{
		"name": "Dunedin"
	},
	{
		"name": "Dundee"
	},
	{
		"name": "Eastpoint"
	},
	{
		"name": "Ellenton"
	},
	{
		"name": "Estero"
	},
	{
		"name": "Eustis"
	},
	{
		"name": "Everglades City"
	},
	{
		"name": "Fernandina Beach"
	},
	{
		"name": "Fleming Island"
	},
	{
		"name": "Fort Lauderdale"
	},
	{
		"name": "Fort Myers"
	},
	{
		"name": "Fort Walton Beach"
	},
	{
		"name": "Goodland"
	},
	{
		"name": "Gulf Breeze"
	},
	{
		"name": "Haines City"
	},
	{
		"name": "Hialeah"
	},
	{
		"name": "High Springs"
	},
	{
		"name": "Hobe Sound"
	},
	{
		"name": "Hollywood"
	},
	{
		"name": "Indialantic"
	},
	{
		"name": "Indian Rocks Beach"
	},
	{
		"name": "Islamorada"
	},
	{
		"name": "Jacksonville Beach"
	},
	{
		"name": "Jensen Beach"
	},
	{
		"name": "Jupiter"
	},
	{
		"name": "Holiday"
	},
	{
		"name": "Howey In The Hills"
	},
	{
		"name": "Inglis"
	},
	{
		"name": "Key West"
	},
	{
		"name": "Kissimmee"
	},
	{
		"name": "Jacksonville"
	},
	{
		"name": "Lady Lake"
	},
	{
		"name": "Key Colony Beach"
	},
	{
		"name": "Lake City"
	},
	{
		"name": "Lakeland"
	},
	{
		"name": "Lake Mary"
	},
	{
		"name": "Lake Panasoffkee"
	},
	{
		"name": "Lake Worth"
	},
	{
		"name": "Largo"
	},
	{
		"name": "Leesburg"
	},
	{
		"name": "Lehigh Acres"
	},
	{
		"name": "Longboat Key"
	},
	{
		"name": "Longwood"
	},
	{
		"name": "Lutz"
	},
	{
		"name": "Maitland"
	},
	{
		"name": "Marathon"
	},
	{
		"name": "Marco Island"
	},
	{
		"name": "Mary Esther"
	},
	{
		"name": "Mayo"
	},
	{
		"name": "Melbourne"
	},
	{
		"name": "Melbourne Beach"
	},
	{
		"name": "Mexico Beach"
	},
	{
		"name": "Merritt Island"
	},
	{
		"name": "Miami"
	},
	{
		"name": "Miami Beach"
	},
	{
		"name": "Middleburg"
	},
	{
		"name": "Milton"
	},
	{
		"name": "Miramar Beach"
	},
	{
		"name": "Montverde"
	},
	{
		"name": "Mulberry"
	},
	{
		"name": "Naples"
	},
	{
		"name": "Navarre"
	},
	{
		"name": "Neptune Beach"
	},
	{
		"name": "New Port Richey"
	},
	{
		"name": "Niceville"
	},
	{
		"name": "Nokomis"
	},
	{
		"name": "North Fort Myers"
	},
	{
		"name": "North Miami Beach"
	},
	{
		"name": "Oldsmar"
	},
	{
		"name": "Old Town"
	},
	{
		"name": "Orange Park"
	},
	{
		"name": "Orlando"
	},
	{
		"name": "Oviedo"
	},
	{
		"name": "Palm Bay"
	},
	{
		"name": "Palm Beach Gardens"
	},
	{
		"name": "Palm Coast"
	},
	{
		"name": "Palm Harbor"
	},
	{
		"name": "Panacea"
	},
	{
		"name": "Panama City"
	},
	{
		"name": "Panama City Beach"
	},
	{
		"name": "Parrish"
	},
	{
		"name": "Pensacola"
	},
	{
		"name": "Pembroke Pines"
	},
	{
		"name": "Perry"
	},
	{
		"name": "Pinellas Park"
	},
	{
		"name": "Polk City"
	},
	{
		"name": "Pompano Beach"
	},
	{
		"name": "Ponte Vedra"
	},
	{
		"name": "Ponte Vedra Beach"
	},
	{
		"name": "Port Charlotte"
	},
	{
		"name": "Port Orange"
	},
	{
		"name": "Port Richey"
	},
	{
		"name": "Port Saint Joe"
	},
	{
		"name": "Port Saint Lucie"
	},
	{
		"name": "Riverview"
	},
	{
		"name": "Rockledge"
	},
	{
		"name": "Ruskin"
	},
	{
		"name": "Safety Harbor"
	},
	{
		"name": "Saint Augustine"
	},
	{
		"name": "Saint Cloud"
	},
	{
		"name": "Saint Petersburg"
	},
	{
		"name": "Sanford"
	},
	{
		"name": "Sanibel"
	},
	{
		"name": "Santa Rosa Beach"
	},
	{
		"name": "Sarasota"
	},
	{
		"name": "Satellite Beach"
	},
	{
		"name": "Satsuma"
	},
	{
		"name": "Sebastian"
	},
	{
		"name": "Seminole"
	},
	{
		"name": "Sorrento"
	},
	{
		"name": "Spring Hill"
	},
	{
		"name": "Stuart"
	},
	{
		"name": "Summerfield"
	},
	{
		"name": "Summerland Key"
	},
	{
		"name": "Sun City Center"
	},
	{
		"name": "Tampa"
	},
	{
		"name": "Tavernier"
	},
	{
		"name": "The Villages"
	},
	{
		"name": "Valrico"
	},
	{
		"name": "Vero Beach"
	},
	{
		"name": "Waldo"
	},
	{
		"name": "Wellington"
	},
	{
		"name": "Wesley Chapel"
	},
	{
		"name": "Windermere"
	},
	{
		"name": "Winter Garden"
	},
	{
		"name": "Winter Park"
	},
	{
		"name": "West Palm Beach"
	},
	{
		"name": "Winter Springs"
	},
	{
		"name": "Winter Haven"
	},
	{
		"name": "Agawam"
	},
	{
		"name": "Allston"
	},
	{
		"name": "Amesbury"
	},
	{
		"name": "Arlington"
	},
	{
		"name": "Amherst"
	},
	{
		"name": "Ashland"
	},
	{
		"name": "Attleboro"
	},
	{
		"name": "Barnstable"
	},
	{
		"name": "Bedford"
	},
	{
		"name": "Belchertown"
	},
	{
		"name": "Beverly"
	},
	{
		"name": "Boston"
	},
	{
		"name": "Braintree"
	},
	{
		"name": "Brewster"
	},
	{
		"name": "Brighton"
	},
	{
		"name": "Brockton"
	},
	{
		"name": "Brookline"
	},
	{
		"name": "Burlington"
	},
	{
		"name": "Buzzards Bay"
	},
	{
		"name": "Cambridge"
	},
	{
		"name": "Charlestown"
	},
	{
		"name": "Charlton"
	},
	{
		"name": "Chelsea"
	},
	{
		"name": "Chestnut Hill"
	},
	{
		"name": "Chilmark"
	},
	{
		"name": "Cummaquid"
	},
	{
		"name": "Dalton"
	},
	{
		"name": "Dedham"
	},
	{
		"name": "Deerfield"
	},
	{
		"name": "Dennis Port"
	},
	{
		"name": "Dorchester"
	},
	{
		"name": "Dorchester Center"
	},
	{
		"name": "Eastham"
	},
	{
		"name": "Easthampton"
	},
	{
		"name": "East Wareham"
	},
	{
		"name": "East Sandwich"
	},
	{
		"name": "Edgartown"
	},
	{
		"name": "Fairhaven"
	},
	{
		"name": "Fall River"
	},
	{
		"name": "Everett"
	},
	{
		"name": "Falmouth"
	},
	{
		"name": "Forestdale"
	},
	{
		"name": "Framingham"
	},
	{
		"name": "Gloucester"
	},
	{
		"name": "Groton"
	},
	{
		"name": "Hanson"
	},
	{
		"name": "Harwich"
	},
	{
		"name": "Harwich Port"
	},
	{
		"name": "Holliston"
	},
	{
		"name": "Hopkinton"
	},
	{
		"name": "Hull"
	},
	{
		"name": "Humarock"
	},
	{
		"name": "Hyde Park"
	},
	{
		"name": "Ipswich"
	},
	{
		"name": "Hyannis"
	},
	{
		"name": "Jamaica Plain"
	},
	{
		"name": "Kingston"
	},
	{
		"name": "Leicester"
	},
	{
		"name": "Lexington"
	},
	{
		"name": "Leverett"
	},
	{
		"name": "Littleton"
	},
	{
		"name": "Lowell"
	},
	{
		"name": "Malden"
	},
	{
		"name": "Lynn"
	},
	{
		"name": "Marblehead"
	},
	{
		"name": "Marshfield"
	},
	{
		"name": "Marstons Mills"
	},
	{
		"name": "Marlborough"
	},
	{
		"name": "Mattapan"
	},
	{
		"name": "Medford"
	},
	{
		"name": "Mattapoisett"
	},
	{
		"name": "Middleboro"
	},
	{
		"name": "Milford"
	},
	{
		"name": "Mill River"
	},
	{
		"name": "Millis"
	},
	{
		"name": "Nahant"
	},
	{
		"name": "Natick"
	},
	{
		"name": "Needham Heights"
	},
	{
		"name": "New Bedford"
	},
	{
		"name": "Newbury"
	},
	{
		"name": "Newburyport"
	},
	{
		"name": "Newton"
	},
	{
		"name": "Newton Center"
	},
	{
		"name": "Newton Highlands"
	},
	{
		"name": "Newton Upper Falls"
	},
	{
		"name": "Newton Lower Falls"
	},
	{
		"name": "Northampton"
	},
	{
		"name": "Northbridge"
	},
	{
		"name": "North Dartmouth"
	},
	{
		"name": "North Easton"
	},
	{
		"name": "North Falmouth"
	},
	{
		"name": "Northfield"
	},
	{
		"name": "North Truro"
	},
	{
		"name": "North Weymouth"
	},
	{
		"name": "Norwood"
	},
	{
		"name": "Oak Bluffs"
	},
	{
		"name": "Onset"
	},
	{
		"name": "Peabody"
	},
	{
		"name": "Pepperell"
	},
	{
		"name": "Pocasset"
	},
	{
		"name": "Revere"
	},
	{
		"name": "Roslindale"
	},
	{
		"name": "Rowley"
	},
	{
		"name": "Roxbury"
	},
	{
		"name": "Roxbury Crossing"
	},
	{
		"name": "Salem"
	},
	{
		"name": "Sandisfield"
	},
	{
		"name": "Sandwich"
	},
	{
		"name": "Scituate"
	},
	{
		"name": "Shrewsbury"
	},
	{
		"name": "Sherborn"
	},
	{
		"name": "Shutesbury"
	},
	{
		"name": "Somerville"
	},
	{
		"name": "Southborough"
	},
	{
		"name": "South Dartmouth"
	},
	{
		"name": "South Dennis"
	},
	{
		"name": "South Hadley"
	},
	{
		"name": "South Hamilton"
	},
	{
		"name": "South Wellfleet"
	},
	{
		"name": "South Yarmouth"
	},
	{
		"name": "Springfield"
	},
	{
		"name": "Sterling"
	},
	{
		"name": "Sturbridge"
	},
	{
		"name": "Sutton"
	},
	{
		"name": "Swansea"
	},
	{
		"name": "Truro"
	},
	{
		"name": "Turners Falls"
	},
	{
		"name": "Tyngsboro"
	},
	{
		"name": "Vineyard Haven"
	},
	{
		"name": "Wakefield"
	},
	{
		"name": "Waltham"
	},
	{
		"name": "Watertown"
	},
	{
		"name": "Wayland"
	},
	{
		"name": "Webster"
	},
	{
		"name": "Wellesley Hills"
	},
	{
		"name": "Wellfleet"
	},
	{
		"name": "Wendell"
	},
	{
		"name": "Wenham"
	},
	{
		"name": "West Barnstable"
	},
	{
		"name": "Westborough"
	},
	{
		"name": "West Brookfield"
	},
	{
		"name": "West Dennis"
	},
	{
		"name": "Westford"
	},
	{
		"name": "West Harwich"
	},
	{
		"name": "West Hyannisport"
	},
	{
		"name": "West Newton"
	},
	{
		"name": "West Roxbury"
	},
	{
		"name": "West Springfield"
	},
	{
		"name": "West Tisbury"
	},
	{
		"name": "West Yarmouth"
	},
	{
		"name": "West Wareham"
	},
	{
		"name": "Winthrop"
	},
	{
		"name": "Woburn"
	},
	{
		"name": "Worcester"
	},
	{
		"name": "Arch Cape"
	},
	{
		"name": "Astoria"
	},
	{
		"name": "Bend"
	},
	{
		"name": "Beaverton"
	},
	{
		"name": "Blachly"
	},
	{
		"name": "Blue River"
	},
	{
		"name": "Brookings"
	},
	{
		"name": "Butte Falls"
	},
	{
		"name": "Camp Sherman"
	},
	{
		"name": "Cannon Beach"
	},
	{
		"name": "Clackamas"
	},
	{
		"name": "Coos Bay"
	},
	{
		"name": "Corvallis"
	},
	{
		"name": "Cottage Grove"
	},
	{
		"name": "Estacada"
	},
	{
		"name": "Eugene"
	},
	{
		"name": "Eagle Point"
	},
	{
		"name": "Forest Grove"
	},
	{
		"name": "Garibaldi"
	},
	{
		"name": "Gladstone"
	},
	{
		"name": "Gold Beach"
	},
	{
		"name": "Gresham"
	},
	{
		"name": "Hammond"
	},
	{
		"name": "Happy Valley"
	},
	{
		"name": "Hillsboro"
	},
	{
		"name": "Hood River"
	},
	{
		"name": "Idleyld Park"
	},
	{
		"name": "Lake Oswego"
	},
	{
		"name": "Langlois"
	},
	{
		"name": "Mill City"
	},
	{
		"name": "Molalla"
	},
	{
		"name": "Newberg"
	},
	{
		"name": "Newport"
	},
	{
		"name": "North Bend"
	},
	{
		"name": "Pendleton"
	},
	{
		"name": "Portland"
	},
	{
		"name": "Rainier"
	},
	{
		"name": "Redmond"
	},
	{
		"name": "Riddle"
	},
	{
		"name": "Rogue River"
	},
	{
		"name": "Roseburg"
	},
	{
		"name": "Saint Helens"
	},
	{
		"name": "Sandy"
	},
	{
		"name": "Scio"
	},
	{
		"name": "Shady Cove"
	},
	{
		"name": "Sherwood"
	},
	{
		"name": "South Beach"
	},
	{
		"name": "Sublimity"
	},
	{
		"name": "Troutdale"
	},
	{
		"name": "Walton"
	},
	{
		"name": "Wasco"
	},
	{
		"name": "West Linn"
	},
	{
		"name": "Wheeler"
	},
	{
		"name": "Yamhill"
	},
	{
		"name": "Alexandria"
	},
	{
		"name": "Ambler"
	},
	{
		"name": "Ardmore"
	},
	{
		"name": "Aspers"
	},
	{
		"name": "Aston"
	},
	{
		"name": "Bellefonte"
	},
	{
		"name": "Benton"
	},
	{
		"name": "Berwyn"
	},
	{
		"name": "Bethel Park"
	},
	{
		"name": "Boalsburg"
	},
	{
		"name": "Brookville"
	},
	{
		"name": "Canadensis"
	},
	{
		"name": "Carlisle"
	},
	{
		"name": "Carnegie"
	},
	{
		"name": "Clifton Heights"
	},
	{
		"name": "Conestoga"
	},
	{
		"name": "Conneaut Lake"
	},
	{
		"name": "Connellsville"
	},
	{
		"name": "Conshohocken"
	},
	{
		"name": "Coraopolis"
	},
	{
		"name": "Cranberry Twp"
	},
	{
		"name": "Delta"
	},
	{
		"name": "Denver"
	},
	{
		"name": "Dingmans Ferry"
	},
	{
		"name": "Drexel Hill"
	},
	{
		"name": "Du Bois"
	},
	{
		"name": "East Earl"
	},
	{
		"name": "East Petersburg"
	},
	{
		"name": "Eighty Four"
	},
	{
		"name": "Enola"
	},
	{
		"name": "Ephrata"
	},
	{
		"name": "Erie"
	},
	{
		"name": "Evans City"
	},
	{
		"name": "Fairless Hills"
	},
	{
		"name": "Flourtown"
	},
	{
		"name": "Friedens"
	},
	{
		"name": "Furlong"
	},
	{
		"name": "Galeton"
	},
	{
		"name": "Gibsonia"
	},
	{
		"name": "Glenside"
	},
	{
		"name": "Greeley"
	},
	{
		"name": "Hanover"
	},
	{
		"name": "Harrisburg"
	},
	{
		"name": "Harrisville"
	},
	{
		"name": "Hershey"
	},
	{
		"name": "Highspire"
	},
	{
		"name": "Hillsgrove"
	},
	{
		"name": "Horsham"
	},
	{
		"name": "Jamison"
	},
	{
		"name": "Jenkintown"
	},
	{
		"name": "Jersey Shore"
	},
	{
		"name": "Kennett Square"
	},
	{
		"name": "Kutztown"
	},
	{
		"name": "Lafayette Hill"
	},
	{
		"name": "Langhorne"
	},
	{
		"name": "Lehighton"
	},
	{
		"name": "Lemoyne"
	},
	{
		"name": "Lewisburg"
	},
	{
		"name": "Lititz"
	},
	{
		"name": "Malvern"
	},
	{
		"name": "Manheim"
	},
	{
		"name": "Mechanicsburg"
	},
	{
		"name": "Millrift"
	},
	{
		"name": "Mill Run"
	},
	{
		"name": "Morton"
	},
	{
		"name": "Mount Gretna"
	},
	{
		"name": "Mountville"
	},
	{
		"name": "Narberth"
	},
	{
		"name": "New Holland"
	},
	{
		"name": "New Providence"
	},
	{
		"name": "New Tripoli"
	},
	{
		"name": "North Wales"
	},
	{
		"name": "Oakmont"
	},
	{
		"name": "Orangeville"
	},
	{
		"name": "Palmerton"
	},
	{
		"name": "Newville"
	},
	{
		"name": "Pennsylvania Furnace"
	},
	{
		"name": "Patton"
	},
	{
		"name": "Philipsburg"
	},
	{
		"name": "Philadelphia"
	},
	{
		"name": "Phoenixville"
	},
	{
		"name": "Pine Grove"
	},
	{
		"name": "Pittsburgh"
	},
	{
		"name": "Port Allegany"
	},
	{
		"name": "Port Matilda"
	},
	{
		"name": "Pottstown"
	},
	{
		"name": "Renfrew"
	},
	{
		"name": "Robesonia"
	},
	{
		"name": "Rockwood"
	},
	{
		"name": "Royersford"
	},
	{
		"name": "Sharon Hill"
	},
	{
		"name": "Shickshinny"
	},
	{
		"name": "Souderton"
	},
	{
		"name": "Spring Mills"
	},
	{
		"name": "Strasburg"
	},
	{
		"name": "State College"
	},
	{
		"name": "Swarthmore"
	},
	{
		"name": "Swiftwater"
	},
	{
		"name": "Tidioute"
	},
	{
		"name": "Upper Darby"
	},
	{
		"name": "Upper Black Eddy"
	},
	{
		"name": "Warren"
	},
	{
		"name": "Washington"
	},
	{
		"name": "Wayne"
	},
	{
		"name": "West Chester"
	},
	{
		"name": "Wickhaven"
	},
	{
		"name": "Willow Street"
	},
	{
		"name": "Wynnewood"
	},
	{
		"name": "York"
	},
	{
		"name": "Zion Grove"
	},
	{
		"name": "Ashland City"
	},
	{
		"name": "Beechgrove"
	},
	{
		"name": "Bell Buckle"
	},
	{
		"name": "Brentwood"
	},
	{
		"name": "Chattanooga"
	},
	{
		"name": "Clarksville"
	},
	{
		"name": "College Grove"
	},
	{
		"name": "Crossville"
	},
	{
		"name": "Decherd"
	},
	{
		"name": "Delano"
	},
	{
		"name": "Del Rio"
	},
	{
		"name": "Fayetteville"
	},
	{
		"name": "Gatlinburg"
	},
	{
		"name": "Goodlettsville"
	},
	{
		"name": "Greenbrier"
	},
	{
		"name": "Greeneville"
	},
	{
		"name": "Harriman"
	},
	{
		"name": "Heiskell"
	},
	{
		"name": "Hendersonville"
	},
	{
		"name": "Hermitage"
	},
	{
		"name": "Hixson"
	},
	{
		"name": "Joelton"
	},
	{
		"name": "Jonesborough"
	},
	{
		"name": "Kingston Springs"
	},
	{
		"name": "Knoxville"
	},
	{
		"name": "La Vergne"
	},
	{
		"name": "Lobelville"
	},
	{
		"name": "Louisville"
	},
	{
		"name": "Martin"
	},
	{
		"name": "Maryville"
	},
	{
		"name": "Memphis"
	},
	{
		"name": "Milan"
	},
	{
		"name": "Mount Juliet"
	},
	{
		"name": "Murfreesboro"
	},
	{
		"name": "Nashville"
	},
	{
		"name": "Nolensville"
	},
	{
		"name": "Oak Ridge"
	},
	{
		"name": "Old Hickory"
	},
	{
		"name": "Pegram"
	},
	{
		"name": "Pigeon Forge"
	},
	{
		"name": "Santa Fe"
	},
	{
		"name": "Savannah"
	},
	{
		"name": "Sequatchie"
	},
	{
		"name": "Sevierville"
	},
	{
		"name": "Sharps Chapel"
	},
	{
		"name": "Smyrna"
	},
	{
		"name": "Soddy Daisy"
	},
	{
		"name": "Sweetwater"
	},
	{
		"name": "Tallassee"
	},
	{
		"name": "Thompsons Station"
	},
	{
		"name": "Townsend"
	},
	{
		"name": "Tullahoma"
	},
	{
		"name": "Unionville"
	},
	{
		"name": "White House"
	},
	{
		"name": "Abilene"
	},
	{
		"name": "Aledo"
	},
	{
		"name": "Alvin"
	},
	{
		"name": "Amarillo"
	},
	{
		"name": "Anahuac"
	},
	{
		"name": "Argyle"
	},
	{
		"name": "Bellaire"
	},
	{
		"name": "Belton"
	},
	{
		"name": "Bridge City"
	},
	{
		"name": "Brownwood"
	},
	{
		"name": "Buda"
	},
	{
		"name": "Burleson"
	},
	{
		"name": "Carrollton"
	},
	{
		"name": "Cedar Hill"
	},
	{
		"name": "Cedar Park"
	},
	{
		"name": "Converse"
	},
	{
		"name": "Coppell"
	},
	{
		"name": "Corpus Christi"
	},
	{
		"name": "Corrigan"
	},
	{
		"name": "Crowley"
	},
	{
		"name": "Denton"
	},
	{
		"name": "Desoto"
	},
	{
		"name": "El Paso"
	},
	{
		"name": "Emory"
	},
	{
		"name": "Flower Mound"
	},
	{
		"name": "Friendswood"
	},
	{
		"name": "Groves"
	},
	{
		"name": "Grapevine"
	},
	{
		"name": "Ingleside"
	},
	{
		"name": "Keller"
	},
	{
		"name": "Elm Mott"
	},
	{
		"name": "Euless"
	},
	{
		"name": "Haslet"
	},
	{
		"name": "Hempstead"
	},
	{
		"name": "Hewitt"
	},
	{
		"name": "Fort Worth"
	},
	{
		"name": "Lone Oak"
	},
	{
		"name": "Frisco"
	},
	{
		"name": "Luling"
	},
	{
		"name": "Industry"
	},
	{
		"name": "Katy"
	},
	{
		"name": "Grand Prairie"
	},
	{
		"name": "Harker Heights"
	},
	{
		"name": "Mc Gregor"
	},
	{
		"name": "La Marque"
	},
	{
		"name": "Highlands"
	},
	{
		"name": "League City"
	},
	{
		"name": "Humble"
	},
	{
		"name": "Houston"
	},
	{
		"name": "Lewisville"
	},
	{
		"name": "Midlothian"
	},
	{
		"name": "Hutto"
	},
	{
		"name": "Hurst"
	},
	{
		"name": "Irving"
	},
	{
		"name": "Joshua"
	},
	{
		"name": "Magnolia"
	},
	{
		"name": "Nolanville"
	},
	{
		"name": "Manvel"
	},
	{
		"name": "Lake Jackson"
	},
	{
		"name": "Laredo"
	},
	{
		"name": "Pilot Point"
	},
	{
		"name": "Ledbetter"
	},
	{
		"name": "Pointblank"
	},
	{
		"name": "Midland"
	},
	{
		"name": "Missouri City"
	},
	{
		"name": "Manor"
	},
	{
		"name": "Pflugerville"
	},
	{
		"name": "Mckinney"
	},
	{
		"name": "Plano"
	},
	{
		"name": "Rowlett"
	},
	{
		"name": "Mesquite"
	},
	{
		"name": "Saint Hedwig"
	},
	{
		"name": "Morgan"
	},
	{
		"name": "San Saba"
	},
	{
		"name": "North Richland Hills"
	},
	{
		"name": "Round Rock"
	},
	{
		"name": "Round Top"
	},
	{
		"name": "San Juan"
	},
	{
		"name": "Port Aransas"
	},
	{
		"name": "Seabrook"
	},
	{
		"name": "Texas City"
	},
	{
		"name": "Silsbee"
	},
	{
		"name": "Richardson"
	},
	{
		"name": "Round Mountain"
	},
	{
		"name": "Stafford"
	},
	{
		"name": "Rogers"
	},
	{
		"name": "Waco"
	},
	{
		"name": "Texarkana"
	},
	{
		"name": "Tomball"
	},
	{
		"name": "Scroggins"
	},
	{
		"name": "Shiner"
	},
	{
		"name": "Sherman"
	},
	{
		"name": "Wichita Falls"
	},
	{
		"name": "Spring"
	},
	{
		"name": "Sugar Land"
	},
	{
		"name": "The Colony"
	},
	{
		"name": "Whitesboro"
	},
	{
		"name": "Carolina"
	},
	{
		"name": "Bayamon"
	},
	{
		"name": "Cidra"
	},
	{
		"name": "Coamo"
	},
	{
		"name": "Garrochales"
	},
	{
		"name": "Juana Diaz"
	},
	{
		"name": "Guaynabo"
	},
	{
		"name": "Ponce"
	},
	{
		"name": "Jayuya"
	},
	{
		"name": "Vega Alta"
	},
	{
		"name": "Punta Santiago"
	},
	{
		"name": "Arlington Heights"
	},
	{
		"name": "Bartlett"
	},
	{
		"name": "Batavia"
	},
	{
		"name": "Belleville"
	},
	{
		"name": "Bloomington"
	},
	{
		"name": "Blue Island"
	},
	{
		"name": "Bolingbrook"
	},
	{
		"name": "Buffalo Grove"
	},
	{
		"name": "Champaign"
	},
	{
		"name": "Chicago"
	},
	{
		"name": "Chicago Ridge"
	},
	{
		"name": "Cicero"
	},
	{
		"name": "Des Plaines"
	},
	{
		"name": "Dolton"
	},
	{
		"name": "Downers Grove"
	},
	{
		"name": "Dekalb"
	},
	{
		"name": "East Dubuque"
	},
	{
		"name": "Elmhurst"
	},
	{
		"name": "Evanston"
	},
	{
		"name": "Forest Park"
	},
	{
		"name": "Glendale Heights"
	},
	{
		"name": "Elmwood Park"
	},
	{
		"name": "Glen Ellyn"
	},
	{
		"name": "Hoffman Estates"
	},
	{
		"name": "Lake Bluff"
	},
	{
		"name": "Highland Park"
	},
	{
		"name": "Herrin"
	},
	{
		"name": "Libertyville"
	},
	{
		"name": "Lake Villa"
	},
	{
		"name": "Lincolnshire"
	},
	{
		"name": "Lake Zurich"
	},
	{
		"name": "Lombard"
	},
	{
		"name": "Malta"
	},
	{
		"name": "Manteno"
	},
	{
		"name": "Melrose Park"
	},
	{
		"name": "Mount Prospect"
	},
	{
		"name": "Normal"
	},
	{
		"name": "Oak Lawn"
	},
	{
		"name": "O Fallon"
	},
	{
		"name": "Morton Grove"
	},
	{
		"name": "Naperville"
	},
	{
		"name": "North Chicago"
	},
	{
		"name": "Ottawa"
	},
	{
		"name": "Palatine"
	},
	{
		"name": "Palos Hills"
	},
	{
		"name": "Peoria Heights"
	},
	{
		"name": "River Forest"
	},
	{
		"name": "Rockton"
	},
	{
		"name": "Rolling Meadows"
	},
	{
		"name": "Savanna"
	},
	{
		"name": "Schaumburg"
	},
	{
		"name": "Schiller Park"
	},
	{
		"name": "Skokie"
	},
	{
		"name": "Stone Park"
	},
	{
		"name": "Streamwood"
	},
	{
		"name": "Urbana"
	},
	{
		"name": "Saint Charles"
	},
	{
		"name": "Vienna"
	},
	{
		"name": "Waukegan"
	},
	{
		"name": "Wilmette"
	},
	{
		"name": "Winfield"
	},
	{
		"name": "Wheeling"
	},
	{
		"name": "Wheaton"
	},
	{
		"name": "Wonder Lake"
	},
	{
		"name": "Zion"
	}
]