var ready;

star = "‪                   🤠‬\n‪                🤠 🤠‬\n‪             🤠       🤠‬\n🤠🤠🤠             🤠🤠🤠‬\n‪    🤠                           🤠‬\n‪        🤠       🤠      🤠‬\n‪      🤠     🤠   🤠    🤠‬\n‪    🤠   🤠           🤠  🤠‬\n‪  🤠 🤠                   🤠🤠‬";
boot = "🤠 🤠 🤠 🤠\n 🤠             🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠            🤠\n 🤠              🤠\n🤠                    🤠  \n🤠                          🤠  🤠     \n  🤠                                       🤠\n     🤠🤠🤠🤠🤠🤠🤠🤠";
heart = "       🤠         🤠\n   🤠      🤠      🤠\n🤠                        🤠\n🤠                        🤠\n  🤠                    🤠\n     🤠              🤠\n          🤠     🤠\n               🤠";

function setShape() {
	emoji = document.querySelector('#input').value;
	emojis = emoji.split(/(?![\u200D\uFE0F])([\uD800-\uDBFF][\uDC00-\uDFFF])/).filter(Boolean)

	if (document.querySelector('input[name="shape"]:checked'))
	{
		shape = document.querySelector('input[name="shape"]:checked').value

		newShape = window[shape];

		var length = (newShape.match(/🤠/g) || []).length;

		var i = 0;
		for (var x = 0; x < length; x++)
		{	
			newShape = newShape.replace(/🤠/, emojis[i]);
			if (i == emojis.length-1)
			{
				i = 0;
			}
			else
			{
				i++;
			}
		}


		document.querySelector('#output').value = newShape;
	}
}

ready = function() {

	document.querySelector('#input').addEventListener('input', setShape)
	for (var x = 0; x < document.querySelectorAll('input[name="shape"]').length; x++)
	{
		document.querySelectorAll('input[name="shape"]')[x].addEventListener('click', setShape)
	}
}

document.addEventListener('DOMContentLoaded', ready);
