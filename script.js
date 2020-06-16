var Actors = [
	{ name: "Serj Tankian", position: "Singer, Keyboard", about: "Serj Tankian born August 21, 1967 is an Armenian-American musician, singer, songwriter, record producer, poet, and political activist. He is best known as the lead vocalist, primary songwriter, keyboardist, and occasional rhythm guitarist of the heavy metal band System of a Down, which was formed in 1994"},
    { name: "Daron Malakian", position: "Guitar, Singer", about: "Daron Vartan Malakian, born July 18, 1975 is an American musician, singer, songwriter, multi-instrumentalist, and record producer. He is best known as the guitarist, songwriter and second vocalist of the metal band System of a Down and as the lead vocalist, lead guitarist, multi-instrumentalist, and songwriter of the band Scars on Broadway. Malakian is known for his distinctive playing and is ranked 14th in Loudwire's list of Top 50 Hard Rock + Metal Guitarists of All Time and number 11 in MusicRadar's poll, The 20 Greatest Metal Guitarists Ever. He is placed 30th in Guitar World's list of The 100 Greatest Heavy Metal Guitarists of All Time."},
    { name: "JShavarsh Odadjian", position: "Bass", about: "Shavarsh Odadjian born April 22, 1974 is an Armenian-American musician, songwriter, multi-instrumentalist, music video director, and painter. He is best known as the bassist, backing vocalist and occasional songwriter of the Grammy Award-winning metal band System of a Down. During the band's hiatus from 2006 to 2010, Odadjian collaborated with Wu-Tang Clan founder RZA on a project called AcHoZeN, which contributed a number of songs to the motion picture Babylon A.D. A compilation album was released in 2015. Odadjian is also credited with the musical scoring of the film, alongside The Rza and Hans Zimmer. He originally used Gibson Thunderbird basses, a Fender Jazz Bass, an Ibanez BTB bass guitar, and a Music Man StingRay, but has since moved on to Warwick basses."},
	{ name: "Ontronik Khachaturian", position: "Drums", about: "Ontronik Khachaturian born May 4, 1975 is an Armenian-American musician, producer and DJ. He is known for being the original drummer (1994–1997) of metal band System of a Down and founder/lead vocalist (1999–2002) of the alt-progressive rock band Mt. Helium, as well as the member of his band VoKee. He was also the founder/drummer/keyboardist and backing vocalist of KillMatriarch (2010-2012) and currently is working on his OnTronik™ as his solo project."}];

var name = "Name: ";
var position = "Position: ";
var about = "About: ";

document.getElementById('show_actor1').addEventListener("click", function() {
    document.getElementById('output_actor1').innerHTML = `${name}${Actors[0].name}<br>
    ${position} ${Actors[0].position}<br>
    ${about} ${Actors[0].about}`;
    document.getElementById('output_actor2').innerHTML = "";
    document.getElementById('output_actor3').innerHTML = "";
    document.getElementById('output_actor4').innerHTML = "";

});

document.getElementById('show_actor2').addEventListener("click", function() {
	document.getElementById('output_actor2').innerHTML = `${name}${Actors[1].name}<br>
    ${position} ${Actors[1].position}<br>
    ${about} ${Actors[1].about}`;
    document.getElementById('output_actor1').innerHTML = "";
    document.getElementById('output_actor3').innerHTML = "";
    document.getElementById('output_actor4').innerHTML = "";

});

document.getElementById('show_actor3').addEventListener("click", function() {
    document.getElementById('output_actor3').innerHTML = `${name}${Actors[2].name}<br>
    ${position} ${Actors[2].position}<br>
    ${about} ${Actors[2].about}`;
    document.getElementById('output_actor1').innerHTML = "";
    document.getElementById('output_actor2').innerHTML = "";
    document.getElementById('output_actor4').innerHTML = "";
});

document.getElementById('show_actor4').addEventListener("click", function() {
    document.getElementById('output_actor4').innerHTML = `${name}${Actors[3].name}<br>
    ${position} ${Actors[3].position}<br>
    ${about} ${Actors[3].about}`;
    document.getElementById('output_actor1').innerHTML = "";
    document.getElementById('output_actor2').innerHTML = "";
    document.getElementById('output_actor3').innerHTML = "";
});