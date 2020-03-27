function counterDate() {
    var countDate = new Date("Jan 1, 2021 00:00:00").getTime();
    var counter = setInterval(function() {
        var now = new Date().getTime();
        var range = countDate - now;
        var days = Math.floor(range / (1000 * 60 * 60 * 24));
        var hours = Math.floor((range % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((range % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((range % (1000 * 60)) / 1000);
    
        if(days !== 1) {
            document.getElementById("timer").innerHTML = days + " Days " + hours + " Hours "+ minutes + " Minutes " + seconds + " Seconds ";
        } else {
            document.getElementById("timer").innerHTML = days + " Day " + hours + " Hours "+ minutes + " Minutes " + seconds + " Seconds ";
        }
            
        if (range < 0) {
            clearInterval(counter);
            document.getElementById("timer").innerHTML = "HAPPY NEW YEAR!!!!!";
        }
    }, 1000);
}


var mantras = [
    '"You\'re off to great places, today is your day. Your mountain is waiting, so get on your way." - Dr. Seuss',
    '"No one is perfect - that\'s why pencils have erasers." - Wolfgang Riebe',
    '"You always pass failure on the way to success." - Mickey rooney',
    '"We know what we are, but know not what we may be." - William Shakespeare',
    '"In a gentle way, you can shake the world." - Mahatma Gandhi',
    '"It is during our darkest moments that we must focus to see the light." - Aristotle',
    '"You must do the things you cannot do." - Eleanor Roosevelt',
    '"The power of imagination makes us infinite." - John Muir',
    '"Happiness is not something you postpone for the future, it is something you design for the present." - Jim Rohn',
    '"There is nothing impossible to him who will try." - Alexander the Great',
    '"Memories of our lives, of our works and our deeds will continue in others." - Rosa Parks',
    '"If opportunity doesn\'t knock, build a door." - Milton Berle',
    '"One today is worth two tomorrows." - Benjamin Franklin',
    '"Thinking, the talking of the soul with itself." - Plato',
    '"Love is a fruit in season at all times, and withing reach of every hand." - Mother Teresa',
    '"The best way out is always through." - Robert Frost',
    '"Your big opportunity may be right where you are now." - Napoleon Hill',
    '"Cangkang itu ayo kita pecahkan saja." - JKT48',
    '"The grass is greener where you water it." - Neil Barringham',
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Get busy living or get busy dying." - Stephen King',
    '"If you want to live a happy life, tie it to a goal, not to people or things." - Albert Einstein',
    '"Aku tidak takut pada luka sakit, apa yang terjadi ku tak akan gentar." - JKT48',
    '"Turn your wounds into wisdom." - Oprah Winfrey',
    '"I like criticism. It makes you strong." - LeBron James',
    '"Life is a flower of which love is the honey." - Victor Hugo',
    '"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." - Buddha',
    '"The greatest pleasure of life is love." - Euripides',
    '"If you live long enough, you\'ll make mistakes. But if you learn from them, you\'ll be a better person." - Bill Clinton',
    '"When you cease to dream you cease to live." - Malcom Forbes',
    '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." - Buddha',
    '"Taking pains to remove the pains of others is the true essence of generosity." - Abu Bakr (R.A)',
    '"The richest of the rich is the one who is not a prisoner to greed." - Ali Ibn Abi Talib (R.A)',
    '“Be nice to people on the way up, because you may meet them on the way down.” – Jimmy Durante',
    '"When you forget that you need God, He puts you in a situation that causes you to call upon Him. And that\'s for your own good." - Omar Suleiman',
    '“When we strive to become better than we are, everything around us becomes better too.” —  Paulo Coelho',
    '“You can’t put a limit on anything. The more you dream, the farther you get.” – Michael Phelps',
    '“All life is an experiment. The more experiments you make, the better.” – Ralph Waldo Emerson',
    '“Don’t cry because it’s over, smile because it happened.” —Dr. Seuss',
    '“Life is really simple, but men insist on making it complicated.” — Confucius',
    ]
function newMantras() {

    var randomNumber = Math.floor(Math.random() * (mantras.length));
    document.getElementById('mantra').innerHTML = mantras[randomNumber];
}