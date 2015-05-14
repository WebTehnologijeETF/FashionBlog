<div class="novost">
	<p><?= $novost["datum"]->format(VRIJEME_FORMAT) ?></p>
	<p><?= $novost["autor"] ?></p>
	<h4><?= $novost["naslov"] ?></h4>
	<img src="<?= $novost["slika"] ?>" ALT="slika" width=700>
	<?= $novost["tekst"] ?>
	<br>

	<?php if ($novost["detaljniTekst"]) { ?> 
		<a href="#" onclick="otvori('detaljno.php?file=<?= urlencode(basename($novost["file"], ".txt")) ?>')">View More Details</a>
	<?php } ?>
</div>