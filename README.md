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

  ### dynamisch deel (bijv menu): <!-- deze nog doen --> 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken

  De content van de website in html zetten ging goed met behulp van de breakdown schets. De opdrachten waren handig om kennis weer een beetje op te halen. Verder heb ik de opdrachten opgeslagen zodat ik het later weer kan gebruiken. Nu ik alle content heb ben ik van boven naar beneden bezig met het stijlen van de pagina.

  Het ophalen van de afbeeldingen uit de Primera website lukte niet. De afbeeldingen stonden binnen de before en dan in de css maar kunnen nu wel opgehaald worden. Verder had ik nog wat vragen over de transities. Dit kan veelal met css opgelost worden. Het secondaire menu kan met translate verwijderen en verschijnen.

  <img src="readme-images/ophalen_afbeeldingen.png" alt="screenshot van een geïnspecteerde afbeelding op de site van Primera">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Jared                                                           | student 2          | student 3    | student 4        |
  | ---                                                             | ---                | ---          | ---              |
  | Kan een afbeelding in een form?                                 | ...                | ...          |                  |
  | Kan ik het doorklikken in het menu ook met een transitie doen?  | ...                | ...          | ...              |
  | Hoe kan ik deze afbeeldingen van de site halen?                 | ...                | ...          | ...              |
  | Het geanimeerde in de header, is dat met een list?              | ...                | ...          | ...              |


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
  Ik wilde dat de tekst en de knop in de grid op dezelfde hoogtte zaten dus gebruikte ik hiervoor align-items maar er veranderde niks.

  <img src="/readme-images/code_grid_align.png" alt="screenshot van de code align-items" width="375px">
  <img src="/readme-images/site_grid_align.png" alt="screenshot van de tekst en button op de site" width="375px">

  Dus had ik hulp gevraagd aan Demi die me als tip gaf om gebruik te maken van grid-area. Dit omdat deze code ervoor zorgt dat ik de elementen in de grid kan verplaatsen.

  <img src="/readme-images/menu_kruis.png" alt="screenshot van het woord 'menu' en het kruisje in een grid op dezelfde hoogtte" width="375px">
  <img src="/readme-images/menu_kruis_code.png" alt="screenshot van de code waar grid-area wordt gebruikt" width="375px">

  
  Om een icoontje in de zoekbalk te krijgen heb ik gebruikt gemaakt van een backgroundimage. Ik probeerde het eerst in de input te krijgen met flexbox maar dit werkte niet handig. Dus had ik opgezocht hoe anderen dit doen en kwam ik terecht bij Stackoverflow waar ik zag dat iemand het met een background image deed.

  <img src="/readme-images/zoekbalk_image.png" alt="screenshot van de zoekbalk met een vergrootglas icon erin aan de rechterkant" width="375px">
  <img src="/readme-images/zoekbalk_image_code.png" alt="screenshot van de code waar background image gebruikt voor het icon in de zoekbalk" width="375px">

  
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

</details>





## Voortgang 3 (week 4)

<details open>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  Het opmaken van de cadeaufolder sectie ging erg goed. Ik heb flex en order gerbuikt om de afbeelding bovenaan te zetten. Verder heb ik vooral gebruik gemaakt van padding, font-size en font-family om de sectie op te maken.

  <img src="/readme-images/cadeaufolder_g.png" alt="Een screenshot van de website van een iPhone mockup met tekst en een knop" width="375px">
  <img src="/readme-images/cadeaufolder_code.png" alt="Een screenshot van de code van de opmaak voor de sectie van de cadeaufolder" width="375px">

  De iconen boven aan de pagina wilden nu wel naast elkaar staan, maar de ruimte ertussen verschilde. Ik heb dit probleem proberen op te lossen met justify-content, img padding en width maar geen van deze werkte. Uiteindelijk heb ik niet zo moeilijk gedacht en heb ik text-align center geprobeerd wat werkte.

  <img src="/readme-images/topnavfout.png" alt="screenshot van iconen die naast elkaar staan met ongelijke witruimte ertussen" width="375px">
  <img src="/readme-images/topnavcode.png" alt="screenshot van de code text-align center" width="375px">
  <img src="/readme-images/topnavgoed.png" alt="screenshot van iconen die naast elkaar staan met gelijke witruimte ertussen" width="375px">

  De lijst onder in mijn header moest als uitgestrekte regels naast elkaar staan. Dit wilde ik doen doormiddel van flex en felx-direction. Wanneer ik dit deed kwamen de list items wel naast elkaar te staan, maar de regels waren niet uitgestrekt. Demi zei dat ik dit kon proberen op te lossen met overflow scroll en evt. white-space nowrap dus heb ik dit geprobeerd. Om ze dan naast elkaar te krijgen heb ik gebruik gemaakt van een inline-block dat ervoor zorgt dat de list items niet zomaar meer verticale ruimte innemen.

  <img src="/readme-images/list_header.png" alt="screenshot van list items naast elkaar gepropt" width="375px">
  <img src="/readme-images/list_header_c.png" alt="screenshot van de code overflow, white-space en inline-block" width="375px">
  <img src="/readme-images/list_header_g.png" alt="screenshot van list items gestrekt naast elkaar" width="375px">

  Bij de cadeauzoeker wilde ik het icoontje van het vergrootglas naast de header zetten door middel van een grid. Op CSS tricks zag ik dat hier een manier voor was door de grid een soort van te schetsen. Hiervoor gaf ik eerst met grid-area elk onderdeel wat in de grid zit een eigen naam. Vervolgens heb ik in de sectie waar ik de grid heb geplaatst grid-template-areas gebruikt om de grid te 'schetsen'. Ik gaf een rij aan met aanhalingstekens en in elke column zette ik de naam van het element dat ik daar wilde hebben.

  <img src="/readme-images/cadeauzoeker _icon_fout.png" alt="screenshot van vergrootglas icon dat onder de header staat" width="375px">
  <img src="/readme-images/cadeauzoeker_icon_code.png" alt="screenshot van code waar ik grid-area gebruik" width="375px">
  <img src="/readme-images/cadeauzoeker_icon_goed.png" alt="screenshot van vergrootglas icon dat naast de header staat" width="375px">

  z-index

  <img src="" alt="" width="375px">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. https://css-tricks.com/almanac/properties/f/flex-direction/ over flex-direction
  2. https://stackoverflow.com/questions/63179896/displaying-an-image-in-search-bar-html over image in form
  3. https://mastery.games/post/flexbox-order/ over flex order
  4. https://css-tricks.com/snippets/css/complete-guide-grid/ over centreren in grid fraction
  5. https://css-tricks.com/almanac/properties/z/z-index/ over z-index
  6. https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp over scrollende list
  7. https://developer.mozilla.org/en-US/docs/Web/CSS/white-space over whitespace
  8. https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-template-areas over grid 'schetsen'

</details>