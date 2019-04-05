var ready;

star = "‪                   😀‬\n‪                😀 😀‬\n‪             😀       😀‬\n😀😀😀             😀😀😀‬\n‪    😀                           😀‬\n‪        😀       😀      😀‬\n‪      😀     😀   😀    😀‬\n‪    😀   😀           😀  😀‬\n‪  😀 😀                   😀😀‬";
boot = "😃 😃 😃 😃\n 😃             😃\n 😃            😃\n 😃            😃\n 😃            😃\n 😃            😃\n 😃            😃\n 😃              😃\n😃                    😃  \n😃                          😃  😃     \n  😃                                       😃\n     😃😃😃😃😃😃😃😃";
heart = "       🤠         🤠\n   🤠      🤠      🤠\n🤠                        🤠\n🤠                        🤠\n  🤠                    🤠\n     🤠              🤠\n          🤠     🤠\n               🤠";

function setShape() {

	emoji = document.querySelector('#input').value;
	document.querySelector('#output').value = star;
}

ready = function() {

	document.querySelector('#input').addEventListener('input', setShape)

}

document.addEventListener('DOMContentLoaded', ready);
