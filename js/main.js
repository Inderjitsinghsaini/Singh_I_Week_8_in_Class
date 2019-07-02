(() => {
	console.log("fired")

	function logKeyCode(event){
		//debugger;
		//event is an object that is generated
		//it contains all of the info about the event
	
		console.log(event.keyCode);
		let currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
			if(!currentKey){
				return;
			}
				currentKey.classList.add('playing');
			
		let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		currentAudioClip.currentTime=0;
		currentAudioClip.play();
	}

	function removePlayingClass(event){
		//listen to the transition to end then remove the playijng class from the current key
		// i need the transition to be happen only once
		if (event.propertyName !== "transform")return;
		event.target.classList.remove('playing');
	}

     const keys = Array.from(document.querySelectorAll('.key'));
     keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
	///reset the audio only if i can find a match
	
	//try to get the keyboard key events
	window.addEventListener("keydown", logKeyCode);
	
})();