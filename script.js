var ready;

star = "‪                   🤠‬\n‪                🤠 🤠‬\n‪             🤠       🤠‬\n🤠🤠🤠             🤠🤠🤠‬\n‪    🤠                           🤠‬\n‪        🤠       🤠      🤠‬\n‪      🤠     🤠   🤠    🤠‬\n‪    🤠   🤠           🤠  🤠‬\n‪  🤠 🤠                   🤠🤠‬";
boot = "🤠 🤠 🤠 🤠\n 🤠             🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠              🤠\n🤠                    🤠  \n🤠                          🤠  🤠     \n  🤠                                       🤠\n     🤠🤠🤠🤠🤠🤠🤠🤠";
heart = "       🤠         🤠\n   🤠      🤠      🤠\n🤠                        🤠\n🤠                        🤠\n  🤠                    🤠\n     🤠              🤠\n          🤠     🤠\n               🤠";

function setShape() {
	emoji = document.querySelector('#input').value;

	if (document.querySelector('input[name="shape"]:checked'))
	{
		shape = document.querySelector('input[name="shape"]:checked').value

		newShape = window[shape].replace(/🤠/g, emoji);

		document.querySelector('#output').value = newShape;
	}
}

ready = function() {

	document.querySelector('#input').addEventListener('input', setShape)
	for (x = 0; x < document.querySelectorAll('input[name="shape"]').length; x++)
	{
		document.querySelectorAll('input[name="shape"]')[x].addEventListener('click', setShape)
	}
}

document.addEventListener('DOMContentLoaded', ready);
