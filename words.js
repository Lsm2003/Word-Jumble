$(document).ready(function(){
    var words = [
        "abandon", "ability", "able", "abortion", "about", "above", "abroad", "absence", "absolute", "absolutely", "absorb", "abuse", "academic", "accept", "access", "accident", "accompany", "accomplish", "according", "account", "accurate", "accuse", "achieve", 
        "achievement", "acid", "acknowledge", "acquire", "across", "act", "action", "active", "activist", "activity", "actor", "actress", "actual", "actually", "ad", "adapt", "add", "addition", "additional", "address", "adequate", "adjust", "adjustment", 
        "administration", "administrator", "admire", "admission", "admit", "adolescent", "adopt", "adult", "advance", "advanced", "advantage", "adventure", "advertising", "advice", "advise", "adviser", "advocate", "affair", "affect", "afford", "afraid", "African", 
        "African-American", "after", "afternoon", "again", "against", "age", "agency", "agenda", "agent", "aggressive", "ago", "agree", "agreement", "agricultural", "ah", "ahead", "aid", "aide", "AIDS", "aim", "air", "aircraft", "airline", "airport", "album", 
        "alcohol", "alive", "all", "alliance", "allow", "ally", "almost", "alone", "along", "already", "also", "alter", "alternative", "although", "always", "AM", "amazing", "American", "among", "amount", "analysis", "analyst", "analyze", "ancient", "and", "anger", 
        "angle", "angry", "animal", "anniversary", "announce", "annual", "another", "answer", "anticipate", "anxiety", "any", "anybody", "anymore", "anyone", "anything", "anyway", "anywhere", "apart", "apartment", "apparent", "apparently", "appeal", "appear", 
        "appearance", "apple", "application", "apply", "appoint", "appointment", "appreciate", "approach", "appropriate", "approval", "approve", "approximately", "Arab", "architect", "area", "argue", "argument", "arise", "arm", "armed", "army", "around", "arrange", 
        "arrangement", "arrest", "arrival", "arrive", "art", "article", "artist", "artistic", "as", "Asian", "aside", "ask", "asleep", "aspect", "assault", "assert", "assess", "assessment", "asset", "assign", "assignment", "assist", "assistance", "assistant", 
        "associate", "association", "assume", "assumption", "assure", "at", "athlete", "athletic", "atmosphere", "attach", "attack", "attempt", "attend", "attention", "attitude", "attorney", "attract", "attractive", "attribute", "audience", "author", "authority", 
        "auto", "available", "average", "avoid", "award", "aware", "awareness", "away", "awful", "baby", "back", "background", "bad", "badly", "bag", "bake", "balance", "ball", "ban", "band", "bank", "bar", "barely", "barrel", "barrier", "base", "baseball", 
        "basic", "basically", "basis", "basket", "basketball", "bathroom", "battery", "battle", "be", "beach", "bean", "bear", "beat", "beautiful", "beauty", "because", "become", "bed", "bedroom", "beer", "before", "begin", "beginning", "behavior", "behind", 
        "being", "belief", "believe", "bell", "belong", "below", "belt", "bench", "bend", "beneath", "benefit", "beside", "besides", "best", "bet", "better", "between", "beyond", "Bible", "big", "bike", "bill", "billion", "bind", "biological", "bird", "birth", 
        "birthday", "bit", "bite", "black", "blade", "blame", "blanket", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bomb", "bombing", "bond", "bone", "book", "boom", "boot", "border", "born", "borrow", "boss", "both", "bother", "bottle", 
        "bottom", "boundary", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brand", "bread", "break", "breakfast", "breast", "breath", "breathe", "brick", "bridge", "brief", "briefly", "bright", "brilliant", "bring", "British", "broad", "broken", 
        "brother", "brown", "brush", "buck", "budget", "build", "building", "bullet", "bunch", "burden", "burn", "bury", "bus", "business", "busy", "but", "butter", "button", "buy", "buyer", "by", "cabin", "cabinet", "cable", "cake", "calculate", "call", "camera", 
        "camp", "campaign", "campus", "can", "Canadian", "cancer", "candidate", "cap", "capability", "capable", "capacity", "capital", "captain", "capture", "car", "carbon", "card", "care", "career", "careful", "carefully", "carrier", "carry", "case", "cash", 
        "cast", "cat", "catch", "category", "Catholic", "cause", "ceiling", "celebrate", "celebration", "celebrity", "cell", "center", "central", "century", "CEO", "ceremony", "certain", "certainly", "chain", "chair", "chairman", "challenge", "chamber", "champion", 
        "championship", "chance", "change", "changing", "channel", "chapter", "character", "characteristic", "characterize", "charge", "charity", "chart", "chase", "cheap", "check", "cheek", "cheese", "chef", "chemical", "chest", "chicken", "chief", "child", 
        "childhood", "Chinese", "chip", "chocolate", "choice", "cholesterol", "choose", "Christian", "Christmas", "church", "cigarette", "circle", "circumstance", "cite", "citizen", "city", "civil", "civilian", "claim", "class", "classic", "classroom", "clean", 
        "clear", "clearly", "client", "climate", "climb", "clinic", "clinical", "clock", "close", "closely", "closer", "clothes", "clothing", "cloud", "club", "clue", "cluster", "coach", "coal", "coalition", "coast", "coat", "code", "coffee", "cognitive", "cold", 
        "collapse", "colleague", "collect", "collection", "collective", "college", "colonial", "color", "column", "combination", "combine", "come", "comedy", "comfort", "comfortable", "command", "commander", "comment", "commercial", "commission", "commit", 
        "commitment", "committee", "common", "communicate", "communication", "community", "company", "compare", "comparison", "compete", "competition", "competitive", "competitor", "complain", "complaint", "complete", "completely", "complex", "complicated", 
        "component", "compose", "composition", "comprehensive", "computer", "concentrate", "concentration", "concept", "concern", "concerned", "concert", "conclude", "conclusion", "concrete", "condition", "conduct", "conference", "confidence", "confident", 
        "confirm", "conflict", "confront", "confusion", "Congress", "congressional", "connect", "connection", "consciousness", "consensus", "consequence", "conservative", "consider", "considerable", "consideration", "consist", "consistent", "constant", 
        "constantly", "constitute", "constitutional", "construct", "construction", "consultant", "consume", "consumer", "consumption", "contact", "contain", "container", "contemporary", "content", "contest", "context", "continue", "continued", "contract", 
        "contrast", "contribute", "contribution", "control", "controversial", "controversy", "convention", "conventional", "conversation", "convert", "conviction", "convince", "cook", "cookie", "cooking", "cool", "cooperation", "cop", "cope", "copy", "core", 
        "corn", "corner", "corporate", "corporation", "correct", "correspondent", "cost", "cotton", "couch", "could", "council", "counselor", "count", "counter", "country", "county", "couple", "courage", "course", "court", "cousin", "cover", "coverage", "cow", 
        "crack", "craft", "crash", "crazy", "cream", "create", "creation", "creative", "creature", "credit", "crew", "crime", "criminal", "crisis", "criteria", "critic", "critical", "criticism", "criticize", "crop", "cross", "crowd", "crucial", "cry", "cultural", 
        "culture", "cup", "curious", "current", "currently", "curriculum", "custom", "customer", "cut", "cycle", "dad", "daily", "damage", "dance", "danger", "dangerous", "dare", "dark", "darkness", "data", "date", "daughter", "day", "dead", "deal", "dealer", "dear", "death", "debate", "debt", "decade", "decide", "decision", "deck", "declare", "decline", "decrease", "deep", "deeply", "deer", "defeat", "defend", "defendant", "defense", "defensive", "deficit", "define", "definitely", "definition", "degree", "delay", "deliver", "delivery", "demand", "democracy", "Democrat", "democratic", "demonstrate", "demonstration", "deny", "department", "depend", "dependent", "depending", "depict", "depression", "depth", "deputy", "derive", "describe", "description", "desert", "deserve", "design", "designer", "desire", "desk", "desperate", "despite", "destroy", "destruction", "detail", "detailed", "detect", "determine", "develop", "developing", "development", "device", "devote", "dialogue", "die", "diet", "differ", "difference", "different", "differently", "difficult", "difficulty", "dig", "digital", "dimension", "dining", "dinner", "direct", "direction", "directly", "director", "dirt", "dirty", "disability", "disagree", "disappear", "disaster", "discipline", "discourse", "discover", "discovery", "discrimination", "discuss", "discussion", "disease", "dish", "dismiss", "disorder", "display", "dispute", "distance", "distant", "distinct", "distinction", "distinguish", "distribute", "distribution", "district", "diverse", "diversity"
    ];

    var wins = 0;
    var lose = 0;


    function updateWin(){
        $("#win").text(wins);
    }

    function updateLose() {
        $("#lose").text(lose);
    }

    function randWord(){
        return words[Math.floor(Math.random() * words.length)];
    }

    function scramble(word){
        //generates a random number for each comparison and sorts the array based on the difference between 0.5 and the generated random number. This shuffles the letters.(0.5-Math.random was found through research)
        var scrambled = word.split('').sort(function(){
            return 0.5-Math.random()
        }).join('')
        return scrambled;
    }


    function start(){
        $("#yes").hide();
        $("#no").hide();
        $("#ask").hide();
        $("#result").text("")
        $("#result").show()
        var currentWord = randWord();
        var jumbledWord = scramble(currentWord);
        $("#scram").text(jumbledWord);

        var count = 120;
        timer = setInterval(function(){
            count --;
            $("#time").text(count);
            if (count === 0){
                clearInterval(timer);
                lose++;
                updateLose();
                playAgain();
                $("#result").text("You ran out of time, you lose")
            }
        }, 1000);

        $("#submit").click(function(){
            var guess = $("#guess").val().trim();
            if (guess == currentWord){
                clearInterval(timer);
                wins++;
                updateWin();
                $("#result").text("You got it right!");
                playAgain();
            } else {
                clearInterval(timer);
                lose++;
                updateLose();
                $("#result").text("You got it wrong :(");
                playAgain();
            }
        });

        $("#quit").click(function(){
            clearInterval(timer)
            lose++;
            updateLose();
            $("#result").text("you quit")
            playAgain();
        });

        $("#yes").click(function(){
            $("#guess").val("");
            $("#scram").text("");
            $("#yes").hide();
            $("#no").hide();
            $("#submit").show()
            $("#quit").show()
            $("#ask").hide()
            $("#result").hide()
            clearInterval(timer);
            start();
        });


        //removes the click handler as it was adding multiple losses per loss due to multiple event listeners, probably a better way to do this
        $("#submit").off("click").click(function(){
            var guess = $("#guess").val().trim();
            if (guess == currentWord){
                clearInterval(timer);
                wins++;
                updateWin();
                $("#result").text("You got it right!");
                playAgain();
            } else {
                clearInterval(timer);
                lose++;
                updateLose();
                $("#result").text("You got it wrong :(");
                playAgain();
            }
        });

        $("#quit").off("click").click(function(){
            clearInterval(timer);
            lose++;
            updateLose();
            $("#result").text("you quit");
            playAgain();
        });
        
    }


    function playAgain(){
        $("#ask").show();
        $("#yes").show();
        $("#no").show();
        $("#submit").hide();
        $("#quit").hide();
    }

    start();
});
