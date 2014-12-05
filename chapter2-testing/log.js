function log(message) {

	try {
		console.log.apply(console, arguments);
	} catch (e) {
		try	{
			opera.postError.apply(opera, arguments);
		} catch (e) {
			alert(message);
		}
	}

}

log('Logging ok...');