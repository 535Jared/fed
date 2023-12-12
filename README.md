# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Jared Penner

  #### Je startniveau:
  blauw

  #### Je focus:
  responsive
 
</details>





## Je website

<details>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.primera.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Home pagina <br>
  <img src="readme-images/primera_home.jpeg" width="375px" alt="De homepagna van de Primera website.">

  #### Screenshot(s) van de tweede pagina (small screen):
  Cadeaubox cadeaukaart met tony chocolonely <br>
  <img src="readme-images/primera_product.png" width="375px" alt="Productpagina van Tony Chocolonly cadeaubox.">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

  * De HTML code heeft veel errors.
  * De lijsten in de code zijn niet correct.
  * De buttons worden aangesproken met een span.
  * Support geen dark mode.
  * Kan de text grootte niet aanpassen.
  * De inlog knop wordt door de screenreeder niet erkend.

  <a href="readme-images/wcag_check_primera.pdf">Ingevulde WCAG checklist over de site van Primera.</a>

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>

  ### de hele pagina: 
  <img src="readme-images/breakdown/breakdownschets_home.jpg" width="375px" alt="breakdown van de hele pagina">

  ### de header: 
  <img src="readme-images/breakdown/breakdownschets_home_header.jpg" width="375px" alt="breakdown van de header van de pagina">

  ### de main: 
  <img src="readme-images/breakdown/breakdownschets_home_main_1.jpg" width="375px" alt="breakdown van het eerste deel van de main"><br>
  <img src="readme-images/breakdown/breakdownschets_home_main_2.jpg" width="375px" alt="breakdown van het tweede deel van de main">

  ### de footer: 
  <img src="readme-images/breakdown/breakdownschets_home_footer.jpg" width="375px" alt="breakdown van de footer van de pagina">

  ### dynamisch deel (bijv menu):
  <img src="readme-images/breakdown/breakdownschets_nav.jpg" width="375px" alt="breakdown van het menu">

  ### de tweede pagina: 
  <img src="readme-images/breakdown/breakdownschets_2e_p.jpg" width="375px" alt="breakdown van de gehele tweede pagina">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  De content van de website in html zetten ging goed met behulp van de breakdown schets. De opdrachten waren handig om kennis weer een beetje op te halen. Verder heb ik de opdrachten opgeslagen zodat ik het later weer kan gebruiken. Nu ik alle content heb ben ik van boven naar beneden bezig met het stijlen van de pagina.

  Het ophalen van de afbeeldingen uit de Primera website lukte niet. De afbeeldingen stonden binnen de before en dan in de css maar kunnen nu wel opgehaald worden. Verder had ik nog wat vragen over de transities. Dit kan veelal met css opgelost worden. Het secondaire menu kan met translate verwijderen en verschijnen.

  <img src="readme-images/ophalen_afbeeldingen.png" alt="screenshot van een geïnspecteerde afbeelding op de site van Primera">

  #### Het menu

  Het maken van een menu dat je kan open klappen, heb ik gedaan met de oefening op codepen. Ik heb met translate het menu uit beeld gebracht en heb deze weer terug laten komen met translate. Om het werkend te maken heb ik javascript gebruikt waar ik onclick gebruikte om functies uit te laten voeren.

  <img src="/readme-images/open_menu.png" alt="screenshot van de knop om het menu te openen" width="375px">
  <img src="/readme-images/open_menu_2.png" alt="screenshot van het menu open geklapt" width="375px">
  <img src="/readme-images/open_menu_html.png" alt="screenshot van de html code van de navigatie" width="375px">
  <img src="/readme-images/open_menu_css.png" alt="screenshot van de css die ik heb gebruikt om het menu vorm te geven" width="375px">
  <img src="/readme-images/open_menu_java.png" alt="screenshot van de javascript code met de functies die worden uitgevoerd" width="375px">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Jared                                                                                       | student 2          | student 3    | student 4        |
  | ---                                                                                         | ---                | ---          | ---              |
  | Kan een afbeelding in een form?                                                             | ...                | ...          |                  |
  | Kan ik het doorklikken in het menu ook met een transitie doen?                              | ...                | ...          | ...              |
  | Hoe kan ik deze afbeeldingen van de site halen?                                             | ...                | ...          | ...              |
  | Het geanimeerde in de header, is dat met een list?                                          | ...                | ...          | ...              |


  ### Verslag van meeting

  - De readme is goed ingevuld
  - De code ziet er netjes uit
  - Je kan een afbeelding zeker in de form zetten
  - Net zoals je het menu laat verschijnen kan je ook een secundair menu verschijnen en verwijderen
  - De afbeeldingen staan binnen een before en in de css, hieruit kan je ze halen
  - Ja het geanimeerde kan je doen met een list en dan met translate en animate kan je het laten animeren
  - Ik ben goed op weg

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  #### grid-area
  Ik wilde dat de tekst en de knop in de grid op dezelfde hoogtte zaten dus gebruikte ik hiervoor align-items maar er veranderde niks.

  <img src="/readme-images/code_grid_align.png" alt="screenshot van de code align-items" width="375px">
  <img src="/readme-images/site_grid_align.png" alt="screenshot van de tekst en button op de site" width="375px">

  Dus had ik hulp gevraagd aan Demi die me als tip gaf om gebruik te maken van grid-area. Dit omdat deze code ervoor zorgt dat ik de elementen in de grid kan verplaatsen.

  <img src="/readme-images/menu_kruis.png" alt="screenshot van het woord 'menu' en het kruisje in een grid op dezelfde hoogtte" width="375px">
  <img src="/readme-images/menu_kruis_code.png" alt="screenshot van de code waar grid-area wordt gebruikt" width="375px">

  #### background image
  Om een icoontje in de zoekbalk te krijgen heb ik gebruikt gemaakt van een backgroundimage. Ik probeerde het eerst in de input te krijgen met flexbox maar dit werkte niet handig. Dus had ik opgezocht hoe anderen dit doen en kwam ik terecht bij Stackoverflow waar ik zag dat iemand het met een background image deed.

  <img src="/readme-images/zoekbalk_image.png" alt="screenshot van de zoekbalk met een vergrootglas icon erin aan de rechterkant" width="375px">
  <img src="/readme-images/zoekbalk_image_code.png" alt="screenshot van de code waar background image gebruikt voor het icon in de zoekbalk" width="375px">

  #### flex-directon
  Verder probeerde ik in de navigatie de tekst onder de icoontjes te zetten met flexbox. Maar ook de icons naast elkaar te zetten. Hiervoor gebruikte ik flex-direction column maar dan werden mijn icons verplaatst naar het midden en uitgerekt.

  <img src="/readme-images/tekst_niet_onder_icon.png" alt="screenshot van iconen en tekst naast elkaar" width="375px">
  <img src="/readme-images/text_icon_flex_mislukt.png" alt="screenshot van uitgerekte iconen in het midden van de pagina" width="375px">
  <img src="/readme-images/text_icon_flex_code.png" alt="screenshot van de code waar flex en flex-direction wordt gebruikt" width="375px">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Jared                                                             | student 2          | student 3    | student 4        |
  | ---                                                               | ---                | ---          | ---              |
  | Hoe krijg ik de items bovenaan naast elkaar en de tekst onder de icons?                                 | ...                | ...          |                  |
  | Bij het onderste deel van de header probeer ik de items naast elkaar te zetten en de tekts in een lange regel.   | ...                | ...          | ...              |
  | Hoe zou ik een list scrollbaar kunnen maken?                  | ...                | ...          | ...              |
  | Ik probeerde een tweede sectie aan te spreken maar het werkte niet, waarom?               | ...                | ...          | ...              |
  | Hoe kan ik het beste tekst over een image doen i.p.v. translate? | ...                 | ...          | ...             |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Voor de eerste vraag kan ik proberen de items in een list te zetten en deze met flex-direction naast elkaar te zetten.
  - Tip: gerbuik liever em of rem dan px omdat deze beter werken met responsiveness.
  - Voor de tweede vraag kan ik kijken of overflow: scroll en eventueel white-space: nowrap.
  - Een list kun je scrollbaar maken met overflow: scroll.
  - Ik gebruikte nth-child inplaats van nth-of-type. Dit werkte niet omdat het tweede kind een article was. Bij nth-of-type gaat hij echt op zoek naar het kind van hetzelfde type.
  - Om tekst over een afbeelding te zetten kan je het best gebruik maken van position absolute. Omdat als je translate gebruikt, blijven deze elementen ook zichtbaar als je het menu opent.

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Verbeteringen
  * De HTML code geeft nu maar éen error
  * Voor buttons heb ik het button element gebruikt
  * Viewport zoom is niet disabbeld
  * Voor list items heb ik gebruik gemaakt van ol, ul of li
  * Keyboard focus klopt met de visuele layout

  #### Verbeterpunten
  * Ik ben vergeten een H1 te gerbuiken
  * Er kan nog onder cadeaukaarten iets meer ruimte om te scrollen
  * Darkmode wordt niet gesupport
  * De focusstate is de standaard focusstate ik zou nog een eigen kunnen toevoegen

  <a href="readme-images/wcag_check_2_primera.pdf">Ingevulde WCAG checklist over de site van Primera.</a>

</details>





## Voortgang 3 (week 4)

<details open>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  #### Cadeaufolder
  Het opmaken van de cadeaufolder sectie ging erg goed. Ik heb flex en order gerbuikt om de afbeelding bovenaan te zetten. Verder heb ik vooral gebruik gemaakt van padding, font-size en font-family om de sectie op te maken.

  <img src="/readme-images/cadeaufolder_g.png" alt="Een screenshot van de website van een iPhone mockup met tekst en een knop" width="375px">
  <img src="/readme-images/cadeaufolder_code.png" alt="Een screenshot van de code van de opmaak voor de sectie van de cadeaufolder" width="375px">

  #### Iconen boven aan de pagina
  De iconen boven aan de pagina wilden nu wel naast elkaar staan, maar de ruimte ertussen verschilde. Ik heb dit probleem proberen op te lossen met justify-content, img padding en width maar geen van deze werkte. Uiteindelijk heb ik niet zo moeilijk gedacht en heb ik text-align center geprobeerd wat werkte.

  <img src="/readme-images/topnavfout.png" alt="screenshot van iconen die naast elkaar staan met ongelijke witruimte ertussen" width="375px">
  <img src="/readme-images/topnavcode.png" alt="screenshot van de code text-align center" width="375px">
  <img src="/readme-images/topnavgoed.png" alt="screenshot van iconen die naast elkaar staan met gelijke witruimte ertussen" width="375px">

  #### Geanimeerde lijst
  De lijst onder in mijn header moest als uitgestrekte regels naast elkaar staan. Dit wilde ik doen doormiddel van flex en felx-direction. Wanneer ik dit deed kwamen de list items wel naast elkaar te staan, maar de regels waren niet uitgestrekt. Demi zei dat ik dit kon proberen op te lossen met overflow scroll en evt. white-space nowrap dus heb ik dit geprobeerd. Om ze dan naast elkaar te krijgen heb ik gebruik gemaakt van een inline-block dat ervoor zorgt dat de list items niet zomaar meer verticale ruimte innemen.

  <img src="/readme-images/list_header.png" alt="screenshot van list items naast elkaar gepropt" width="375px">
  <img src="/readme-images/list_header_c.png" alt="screenshot van de code overflow, white-space en inline-block" width="375px">
  <img src="/readme-images/list_header_g.png" alt="screenshot van list items gestrekt naast elkaar" width="375px">

  De lijst heb ik geanimeerd in de css met behulp van Mozilla. Door de animation iteration op infinity te zetten, blijft de animatie zich constant afspelen. Met keyframes heb aangegeven waar de elementen heen moeten animeren. In mijn geval moest de animatie constant naar links verplaatsen. Dit gebeurde echter niet. De animatie scrolde aan het einde weer terug naar rechts om bij het begin te komen. Dit kwam omdat ik de eindpositie van de animatie weer op 0 had gezet. Dus heb ik deze veranderd en ik heb de animation fill mode naar forward gezet. Hierdoor zou de animatie constant voorwaards moeten gaan.

  <img src="/readme-images/animatie_eerst.png" alt="screenshot van de code waar ik de eind positie op 0 is" width="375px">
  <img src="/readme-images/animatie_juist.png" alt="screenshot van de code waar animation fill mode foreward is gebruikt en de animatie niet een eindpositie van 0 heeft" width="375px">

  Nu deed de animatie het goed alleen moest ik er nog voor zorgen dat hij een aantal seconde still bleef staan. Dit heb ik gedaan door de animatie een duur te geven van 20 secondes en de positie tussen 30 procent hetzelfde te houden. Hierdoor blijft de animatie dus een aantal seconde stil staan voor een aantal secondes.

  <img src="/readme-images/animatie_met_pauze.png" alt="screenshot van de code waar ik de positie om de 30 procent gelijk houdt" width="375px"> 

  #### Icon naast tekst
  Bij de cadeauzoeker wilde ik het icoontje van het vergrootglas naast de header zetten door middel van een grid. Op CSS tricks zag ik dat hier een manier voor was door de grid een soort van te schetsen. Hiervoor gaf ik eerst met grid-area elk onderdeel wat in de grid zit een eigen naam. Vervolgens heb ik in de sectie waar ik de grid heb geplaatst grid-template-areas gebruikt om de grid te 'schetsen'. Ik gaf een rij aan met aanhalingstekens en in elke column zette ik de naam van het element dat ik daar wilde hebben.

  <img src="/readme-images/cadeauzoeker _icon_fout.png" alt="screenshot van vergrootglas icon dat onder de header staat" width="375px">
  <img src="/readme-images/cadeauzoeker_icon_code.png" alt="screenshot van code waar ik grid-area gebruik" width="375px">
  <img src="/readme-images/cadeauzoeker_icon_goed.png" alt="screenshot van vergrootglas icon dat naast de header staat" width="375px">

  #### Z-index
  Omdat ik position absolute heb gebruikt om tekst over plaatjes te krijgen, bleef deze tekst ook zichtbaar als ik mijn menu open klapte. Om dit op te lossen heb ik gebruik gemaakt van de z-index. Hiermee zeg ik op welke layer mijn element moet zijn. Door het menu een z-index van één te geven, zeg ik dus dat het menu boven alle andere elementen zichtbaar moet zijn.

  <img src="/readme-images/z_index.png" alt="screenshot van tekst op het uitgeklapte menu" width="375px">
  <img src="/readme-images/z_index_code.png" alt="screenshot van de z-index code in css" width="375px">

  #### Margin-left
  In mijn menu wilde graag de iconen naast de tekst helemaal aan de rechter kant hebben. Dit probeerde ik door gebruikk te maken van justify-content en text-align. Dit werkte niet dus moest ik een andere manier gebruiken. Eerder in de les hadden we een soort gelijk probleem behandeld en deze hadden we opgelost door gebruik te maken van margin auto. Margin auto geeft een zo veel mogelijke margin aan een element. In mijn geval heb ik margin-left gebruikt omdat ik mijn iconen aan de rechterkant wilde hebben.

  <img src="/readme-images/nav_pijl_fout.png" alt="screenshot van het menu waar het icoontje tegen de tekst aan zit" width="375px">
  <img src="/readme-images/nav_pijl_f_code.png" alt="screenshot van de code waar ik justify-content flex-end gebruik" width="375px">
  <img src="/readme-images/nav_pijl_g.png" alt="screenshot van ht menu waar het icoontje aan de rechterkant van het scherm staat" width="375px">
  <img src="/readme-images/nav_pijl_g_code.png" alt="screenshot van de code waar margin-left auto wordt gebruikt" width="375px">

  #### Image in grid
  In de footer van mijn pagina heb ik bij de sectie 'kunnen we helpen' gebruik gemaakt van een grid om de plaatjes naast de tekst te krijgen. Dit lukte alleen de plaatjes zaten tegen de rand van het scherm aan. Dit heb ik makkelijk kunnen oplossen door gebruik te maken van justify-self center.

  <img src="/readme-images/helpen_icons_f.png" alt="screenshot van plaatjes die tegen de rand van de pagina zitten" width="375px">
  <img src="/readme-images/helpen_icons_g.png" alt="screenshot van de plaatjes die meer van de kant af zitten" width="375px">
  <img src="/readme-images/helpen_icons_code.png" alt="screenshot van de code waar justify-self center wordt gebruikt" width="375px">

  #### Screenreader
  Ik ben mijn site gaan testen met een screenreader, dit ging vooral goed het enige probleem is dat de screenreader ook de elementen uit het menu voor las ookal was deze gesloten. Dit heb ik kunnen op lossen door area-hidden te gebruiken. In javascript heb ik dan door middel van een queryselector deze aan of uit laten zetten.

  <img src="/readme-images/menu_voice_html.png" alt="screenshot van de html waar ik area-hidden heb gebruikt" width="375px">
  <img src="/readme-images/java_menu_voice.png" alt="screenshot van de code in javascript waar ik met een function area-hidden op true of false zet" width="375px">

  #### Uitklapbaar menu
  In de footer van mijn site heb ik een uitklapbaar menu gemaakt. Hier wilde ik net als eerder de iconen aan de rechterkant van het scherm en de tekst links. Dit probeerde ik te doen met align-items maar dit werkte niet. Dus ik heb gedaan wat ik eerder ook al heb gedaan en gebruikt gemaakt van margin-left auto en justify-content flex-start. Met margin auto zorgde ik ervoor dat er automatisch zo veel mogelijk ruimte tussen de elementen zit. Met flex-start zorgde ik ervoor dat de tekst aan de linker kant bleef staan.

  <img src="/readme-images/pijltje_fout.png" alt="screenshot waar de icoontjes links tegen de teskt aan staan" width="375px">
  <img src="/readme-images/pijltje_code_fout.png" alt="screenshot van de code waar align items wordt gebruikt" width="375px">
  <img src="/readme-images/pijltje_goed.png" alt="screenshot waar de icoontjes rechts staan en de tekst links staat.t" width="375px">
  <img src="/readme-images/pijltje_code_goed.png" alt="screenshot van de code waar justify content en margin auto wordt gebruikt" width="375px">

  Om het menu dan ook daadwerkelijk uitklapbaar te maken heb ik details en summery. In de detail heb ik per menu de bijbehoorende content gezet en in de summery de heb ik neergezet wat er op het menu moest komen te staan.

  <img src="/readme-images/uitklap_g.png" alt="screenshot van de html waar details en summery wordt gebruikt" width="375px"> 
  <img src="/readme-images/uitgeklapt.png" alt="screenshot van de site waar het menu 'klantenservice' is uitgeklapt." width="375px">

  #### winkelmand
  Om het te laten lijken of er iets in de winkelmand zit, heb ik eerst een bolletje moeten maken waar de gebruiker feedback krijgt van hoeveel er in hun mand zit. Dit heb ik gedaan door bij de html een p element in de a element te zetten met de waarde 0. Dit p element heb ik vervolgens in de css opgemaakt.

  <img src="/readme-images/winkelmand_eerst.png" alt="screenshot van het winkelmand icoon zonder feedback" width="375px">
  <img src="/readme-images/winkelmand_css.png" alt="screenshot van de css van de opmaak van het p element" width="375px">
  <img src="/readme-images/winkelmand_g.png" alt="screenshot van het winkelmand icoon met feedback" width="375px">

  Hierna heb ik er een micro interactie van gemaakt met hulp van javascript. Ik heb dit gedaan met behulp van oefening 3 over animaties van codepen. In de javascript roep ik de button aan dat een functie moet uitvoeren als je erop klikt. In de functie haal ik het p element op en zeg ik dat het aantal in het element moet veranderen naar een nieuw aantal (+1).

  <img src="/readme-images/winkelmand_java.png" alt="screenshot van de javascript dat zorgt voor een werkende micro interactie" width="375px">
  <img src="/readme-images/winkelmand_+1.png" alt="screenshot van het winkelmand icoon na het klikken van de button" width="375px">

  #### Aantal
  Op de tweede pagina kan de gebruiker kiezen hoeveel van dat product ze in hun winkelmand willen doen. Dit kunnen ze doen via het input element. In de html heb ik input type number toegevoegd. Dit is een speciaal input veld voor nummers. Omdat je niet een negatief getal kan toevoegen aan je winkelmand heb ik een minimum waarde toegevoegd. Ook heb ik een value toegevoegd dat als standaard waarde dient.

  <img src="/readme-images/input_number_code.png" alt="screenshot van de code waar de instellingen voor de input staan weergegeven" width="375px">
  <img src="/readme-images/input_number.png" alt="sreenshot van de een inputveld op de site" width="375px">

  Hierna ben ik bezig geweest met de opmaak van het veld. In de html heb ik twee plaatjes toegevoegd. In de css heb ik voor beide de plaatjes en de input een opmaak toegevoegd. Het is me alleen nog niet gelukt om de pijltjes in het veld weg te halen.

  <img src="/readme-images/input_nummer_css.png" alt="screenshot van de css code met de opmaak voor de plaatjes en het input veld" width="375px">
  <img src="/readme-images/input_arrows.png" alt="screenshot van het input veld op de website" width="375px">


  #### responsive cadeaufolder
  Wanneer het scherm groter wordt, moet bij de cadeaufolder de afbeelding naast de tekst en de tekst onder elkaar. Dit wilde ik doen met een grid en gebruikte daarvoor grid-area. Ik snapte niet zo goed waarom het niet werkte.

  <img src="/readme-images/media_folder_css.png" alt="screenshot van de css code waar ik grid area gebruik" width="375px">
  <img src="/readme-images/media_folder.png" alt="screenshot van de elementen die over elkaar heen staan" width="375px">


  #### plaatje veranderen met java
  Ik wilde graag een image veranderen als een details element werd geopend. Dit probeerde ik met javascript en een bron. Helaas werkte dit niet voor mij en bleef het plaatje hetzelfde.

  <img src="/readme-images/plaatje_verander.png" alt="screenshot van javascript waarmee ik een plaatje probeerde te veranderen" width="375px">



  ### Agenda voor meeting
  samen met je groepje opstellen

  | Jared                                                                                       | student 2          | student 3    | student 4        |
  | ---                                                                                         | ---                | ---          | ---              |
  | De fonts doen het niet als ik mijn site open vanuit github                                  | ...                | ...          |                  |
  | Hoe krijg ik in het menu de pijltjes helemaal rechts?                                       | ...                | ...          | ...              |
  | Kan ik niet liever een andere tweede pagina doen?                                           | ...                | ...          | ...              |



  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - De eerste pagina is zo goed als af!
  - De font in github doet het niet omdat ik bij de src niet puntjes voor de slash zette.
  - In het menu kun je margin-left auto gebruiken in plaats van justify content.
  - Het selecteren van de prijs op de tweede pagina kan lastig zijn want het wordt al snel ingewikkeld. Je zou eventueel een iets makkelijkere pagina kunnen doen.
  - Micro animaties en responsiveness moet nog gedaan worden.
  - Verslag wordt goed bijgehouden.

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <a href="readme-images/result.pdf">Pdf van de home pagina</a>
  
  <a href="readme-images/result2.pdf">Pdf van de tweede pagina</a>


  ### Dit ging goed/Heb ik geleerd: 
  Ik heb bij dit vak geleerd hoe je een grid kan gebruiken voor de opmaak van je site. Ook heb ik geleerd dat je een site responsive kan maken door middel van media queries.

  <img src="readme-images/cadeauzoeker_icon_code.png" width="375px" alt="screenshot van gebrik van grid in de css">
  <img src="readme-images/mediaq.png" alt="screenschot van een media query" width="375px">


  ### Dit was lastig/Is niet gelukt:
  De site volledig responsive maken is mij niet gelukt. Ook is het mij niet gelukt om de input number te koppelen aan de micro interactie en is het me niet gelukt om de plaatjes naast de input klikbaar te maken. Ook is het me niet gelukt om een plaatje te veranderen door middel van java script.


  <img src="/readme-images/media_folder.png" alt="screenshot van de elementen die over elkaar heen staan" width="375px">
  <img src="/readme-images/input_nummer_css.png" alt="screenshot van de css code met de opmaak voor de plaatjes en het input veld" width="375px">
  <img src="/readme-images/plaatje_verander.png" alt="screenshot van javascript waarmee ik een plaatje probeerde te veranderen" width="375px">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://css-tricks.com/almanac/properties/f/flex-direction/ over flex-direction
  2. https://stackoverflow.com/questions/63179896/displaying-an-image-in-search-bar-html over een image in form
  3. https://mastery.games/post/flexbox-order/ over flex order
  4. https://css-tricks.com/snippets/css/complete-guide-grid/ over centreren in grid fractions
  5. https://css-tricks.com/almanac/properties/z/z-index/ over z-index
  6. https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp over scrollende list
  7. https://developer.mozilla.org/en-US/docs/Web/CSS/white-space over whitespace
  8. https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas over grid 'schetsen'
  9. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations over animaties
  10. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary over uitklapbaar menu
  11. https://developer.mozilla.org/en-US/docs/Web/CSS/text-underline-offset over texdecoration underline
  12. https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image over list style bullets als foto
  13. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table over tabellen
  14. https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse over tabel border
  15. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number over input number
  16. https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp over input arrows
  17. https://codepen.io/shooft/pen/rNdoWQZ?editors=0110 over winkelwagen micro interactie
  18. https://youtu.be/2KL-z9A56SQ?si=5QAPYaqmd8Hc6Fvz over media queries
  19. https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener over plaatje veranderen met javascript

</details>