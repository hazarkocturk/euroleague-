let euroLeague = [
    { name: 'Anadolu Efes',
      city: 'Istanbul',
      country: 'Turkey',
      logo: "https://logowik.com/content/uploads/images/anadolu-efes-spor-kulubu7368.jpg",
      championship: 2
},

{name: 'Fenerbahce',
city: 'Istanbul',
country: 'Turkey',
logo: "https://logowik.com/content/uploads/images/fenerbahce-sk9471.logowik.com.webp",
championship: 1
},

{name: 'Panathinaikos',
city: 'Athens',
country: 'Greece',
logo: "https://upload.wikimedia.org/wikipedia/tr/9/9f/Panathinaikos_B.C._logo.png",
championship: 6
},

{name: 'Saski Baskonia',
city: 'Vitoria',
country: 'Spain',
logo: 'https://upload.wikimedia.org/wikipedia/tr/6/6a/Saski_Baskonia.png',
championship: 0
},

{name: 'Maccabi Tel Aviv B.C.',
city: 'Tel Aviv',
country: 'Israel',
logo: 'https://upload.wikimedia.org/wikipedia/tr/4/48/Logo_maccabi.png',
championship: 6
},
{
    name: 'Real Madrid',
    city: 'Madrid',
    country: 'Spain',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/0/0e/Real_Madrid_Baloncesto_logo.png',
    championship: 10
},
{
    name: 'Olympiacos',
    city: 'Piraeus',
    country: 'Greece',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/4/43/Olympiakos_%28basketbol_tak%C4%B1m%C4%B1%29.png',
    championship: 3
},
{
    name: 'Barcelona',
    city: 'Barcelona',
    country: 'Spain',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/1/19/FC_Barcelona_B%C3%A0squet_logo.svg/1280px-FC_Barcelona_B%C3%A0squet_logo.svg.png',
    championship: 2
},
{
    name: 'Žalgiris Kaunas',
    city: 'Kaunas',
    country: 'Lithuania',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/0/0e/BC_%C5%BDalgiris_logo.svg/1280px-BC_%C5%BDalgiris_logo.svg.png',
    championship: 1
},
{
    name: 'Olimpia Milano',
    city: ' Milan',
    country: 'Italy',
    logo: 'https://upload.wikimedia.org/wikipedia/tr/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/1280px-Pallacanestro_Olimpia_Milano_logo.svg.png',
    championship: 3
}
]

let img = document.querySelectorAll('img')
let textDiv =document.querySelectorAll('.text')
euroLeague.forEach(function(e, index){
    img[index].src = e.logo
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    h3.textContent = `${e.name}`
    textDiv[index].appendChild(h3)
    Object.entries(e).forEach(([key, value]) => {
        if (key === 'country'|| key === 'city' || key === 'championship') {
            p.textContent += `${key}: ${value} `;
        }
    });
    textDiv[index].appendChild(p)

})