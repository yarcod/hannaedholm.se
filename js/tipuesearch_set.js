
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = [ "aderton", "adertonde", "adjö", "aldrig", "alla", "allas", "allt", "alltid", "alltså", "än", "andra", "andras", "annan", "annat", "ännu", "artonde", "arton", "åtminstone", "att", "åtta", "åttio", "åttionde", "åttonde", "av", "även", "båda", "bådas", "bakom", "bara", "bäst", "bättre", "behöva", "behövas", "behövde", "behövt", "beslut", "beslutat", "beslutit", "bland", "blev", "bli", "blir", "blivit", "bort", "borta", "bra", "då", "dag", "dagar", "dagarna", "dagen", "där", "därför", "de", "del", "delen", "dem", "den", "deras", "dess", "det", "detta", "dig", "din", "dina", "dit", "ditt", "dock", "du", "efter", "eftersom", "elfte", "eller", "elva", "en", "enkel", "enkelt", "enkla", "enligt", "er", "era", "ert", "ett", "ettusen", "få", "fanns", "får", "fått", "fem", "femte", "femtio", "femtionde", "femton", "femtonde", "fick", "fin", "finnas", "finns", "fjärde", "fjorton", "fjortonde", "fler", "flera", "flesta", "följande", "för", "före", "förlåt", "förra", "första", "fram", "framför", "från", "fyra", "fyrtio", "fyrtionde", "gå", "gälla", "gäller", "gällt", "går", "gärna", "gått", "genast", "genom", "gick", "gjorde", "gjort", "god", "goda", "godare", "godast", "gör", "göra", "gott", "ha", "hade", "haft", "han", "hans", "har", "här", "heller", "hellre", "helst", "helt", "henne", "hennes", "hit", "hög", "höger", "högre", "högst", "hon", "honom", "hundra", "hundraen", "hundraett", "hur", "i", "ibland", "idag", "igår", "igen", "imorgon", "in", "inför", "inga", "ingen", "ingenting", "inget", "innan", "inne", "inom", "inte", "inuti", "ja", "jag", "jämfört", "kan", "kanske", "knappast", "kom", "komma", "kommer", "kommit", "kr", "kunde", "kunna", "kunnat", "kvar", "länge", "längre", "långsam", "långsammare", "långsammast", "långsamt", "längst", "långt", "lätt", "lättare", "lättast", "legat", "ligga", "ligger", "lika", "likställd", "likställda", "lilla", "lite", "liten", "litet", "man", "många", "måste", "med", "mellan", "men", "mer", "mera", "mest", "mig", "min", "mina", "mindre", "minst", "mitt", "mittemot", "möjlig", "möjligen", "möjligt", "möjligtvis", "mot", "mycket", "någon", "någonting", "något", "några", "när", "nästa", "ned", "nederst", "nedersta", "nedre", "nej", "ner", "ni", "nio", "nionde", "nittio", "nittionde", "nitton", "nittonde", "nödvändig", "nödvändiga", "nödvändigt", "nödvändigtvis", "nog", "noll", "nr", "nu", "nummer", "och", "också", "ofta", "oftast", "olika", "olikt", "om", "oss", "över", "övermorgon", "överst", "övre", "på", "rakt", "rätt", "redan", "så", "sade", "säga", "säger", "sagt", "samma", "sämre", "tvåhundra", "under", "upp", "ur", "ursäkt", "ut", "utan", "utanför", "ute", "vad", "vänster", "vänstra", "var", "vår", "vara", "våra", "varför", "varifrån", "varit", "varken", "värre", "varsågod", "vart", "vårt", "vem", "vems", "verkligen", "vi", "vid", "vidare", "viktig", "viktigare", "viktigast", "viktigt", "vilka", "vilken", "vilket", "vill" ]

// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'https://hannaedholm.se', 'score': 20},
     {'url': 'https://hannaedholm.se/search', 'score': 30},
     {'url': 'https://hannaedholm.se/is', 'score': 10}
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = 'No title';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 result';
var tipuesearch_string_5 = 'results';
var tipuesearch_string_6 = 'Back';
var tipuesearch_string_7 = 'More';
var tipuesearch_string_8 = 'Nothing found.';
var tipuesearch_string_9 = 'Common words are largely ignored.';
var tipuesearch_string_10 = 'Search too short';
var tipuesearch_string_11 = 'Should be one character or more.';
var tipuesearch_string_12 = 'Should be';
var tipuesearch_string_13 = 'characters or more.';
var tipuesearch_string_14 = 'seconds';
var tipuesearch_string_15 = 'Searches related to';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();