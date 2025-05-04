/**
 * MonsterCapture
 * By Superwibr
 * 
 * 
 */
(async function () {
	// eval yuck but needed
	(0, eval)(await fetch('https://unpkg.com/browser-id3-writer').then(r => r.text()))

	// get info
	const catalogId = location.pathname.match(/MC[A-Z0-9-]+/g)[0],
		catalog = await fetch(`https://www.monstercat.com/api/catalog/release/${catalogId}`).then(res => res.json()),
		release = catalog.Release,
		releaseId = release.Id;
	console.log("Release Info:", catalogId, releaseId)

	for (const track of catalog.Tracks) {
		// track info
		const trackId = track.Id,
			artists = track?.Artists?.map(x => x.Name) || [track.ArtistsTitle],
			albumName = track.Release.Title,
			albumArtists = (track.Release.Artists || track.Release.ArtistsTitle);
		let name = track.Title
		if (track.Version == "VIP") name = name + " VIP"

		console.log("Track Info:", name, trackId, albumName, artists)

		// get stream & art
		const mpfile = await fetch(`https://www.monstercat.com/api/release/${releaseId}/track-stream/${trackId}`).then(res => res.arrayBuffer()),
			cover = await fetch(`https://www.monstercat.com/release/${catalogId}/cover`).then(res => res.arrayBuffer());

		// tags
		const writer = new ID3Writer(mpfile);
		writer.setFrame('TIT2', name)
			.setFrame('TPE1', artists)
			.setFrame('TPE2', release.ArtistsTitle.split(' & '))
			.setFrame('TALB', albumName)
			.setFrame('TRCK', track.TrackNumber)
			.setFrame('TCON', [track.GenrePrimary, track.GenreSecondary])
			.setFrame('TBPM', track.BPM)
			.setFrame('TPUB', "Monstercat")
			.setFrame('APIC', {
				type: 3,
				data: cover,
				description: 'cover'
			});
		writer.addTag();

		// download
		const url = writer.getURL();
		const dwa = document.createElement('a');
		dwa.href = url;
		dwa.download = name;
		document.body.appendChild(dwa);
		dwa.click();
		document.body.removeChild(dwa);
		setTimeout(writer.revokeURL, 200000); // revoke auto after 200s
	}
})();
