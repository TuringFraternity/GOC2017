$(function() {
	var KYZN = function() {
		var gameStarted = 0;
		var timeouts = function() {
			// Animation
			setTimeout(function() {
				$('html').addClass('appeared');
			}, 100);
		},

		flushKeyboard = function() {
			var keys = document.querySelectorAll('.key');
			for (var i = 0, flushKey; flushKey = keys[i++];) {
				$(flushKey).removeClass('key-pressed');
			}
			// Removes pressed class from all keys
		},

		checkKey = function(e) {
			var key = '.key' + e.which;
			$(key).addClass('key-pressed');
			setTimeout(function(){ flushKeyboard() }, 400);
		},

		showStats = function(wrong, correct, total, time) {
			time = parseFloat(time);
			total = parseFloat(total);
			var accuracy = ((correct/total)*100).toFixed(0) + "%",
			cpm = ((total/time)*60).toFixed(0),
			wpm = ((parseFloat(cpm)/7)).toFixed(0);

			$('.l1').addClass('hide-text-item');

			var statsHtml = [
				"<div class='stats'>",
				"<div class='stats-given'>",
				"<div><span>Correct Characters: </span>",
				correct,
				"</div><div><span>Wrong Characters: </span>",
				wrong,
				"</div><div><span>Total Characters: </span>",
				total,
				"</div><div><span>Time Taken: </span>",
				time,
				"s</div><div class='stats-calculated'>",
				"</div><div><span>Accuracy: </span>",
				accuracy,
				"</div><div><span>Characters Per Minute: </span>",
				cpm,
				"</div><div><span>Words Per Minute: </span>",
				wpm,
				"</div></div></div>"
			].join('');

			$('.l1-stats').html(statsHtml);

			$('.text').height('18em');
		},

		startTheGame = function () {
			var time = 0,
			$timer = $('.l1 .js-timer');

			$timer.innerHTML = "00";

			$timer.removeClass('instructions').addClass('timer');

			var typeTime = setInterval(function() {
				time++;
				$timer.html(time / 100);
			}, 10);

			var textContent = $('.l1 .text-level').html().split(''); // Text as an array


			for (var i = 0; i >= textContent.length; i++) {
				textContent[i] = "<span>" + textContent[i] + "</span>";
			}

			var inputNumber = 0,
			correctChars = 0,
			wrongChars = 0,
			totalChars = textContent.length;

			$(window).on('keypress', function(e) {
				var input = e.which.toString();

				if (input === textContent[inputNumber].charCodeAt().toString()) {
					textContent[inputNumber] = "<span class='l-text-correct'>" + textContent[inputNumber] + "</span>";
					$('.text-level').html(textContent.join(''));
					correctChars++;

				} else {
					textContent[inputNumber] = "<span class='l-text-wrong'>" + textContent[inputNumber] + "</span>";

					$('.text-level').html(textContent.join(''));

					wrongChars++;
				}

				inputNumber++;

				if ( input == '8' ) {
					e.preventDefault();
				}

				if (inputNumber == textContent.length ) {
					showStats(wrongChars, correctChars, totalChars, $timer.html());
					clearInterval(typeTime);
					$(window).off('keypress');
					return;
				}

			});
		},

		pressStartToGo = function () {
			$('.body-text').css('margin-top', '-13em');
			$('.keyboard').addClass('keyboard--show');

			$(window).on('keypress', function(e) {
				console.log(e.which);
				if ( e.which == "13" && !gameStarted ) {
					gameStarted = 1;
					startTheGame();
				} 
			});
		},

		initKeyboard = function() {
			// Keyboard 
			var keyboard = "q w e r t y u i o p /a s d f g h j k l /z x c v b n m .".split(' '),
			keyboardHTML = "";

			for (var i = 0, key; key = keyboard[i++];) {
				if (key.indexOf('/') !== -1) {
					key = key.substr(1); // Removes / from line-break characters
					keyClass = 'key' + key.charCodeAt(); // Converts alphabet to key+alphabet char code
					keyboardHTML += "<br><span class='key key-break " + keyClass +"'>" + key + "</span>";
				} else {
					keyClass = 'key' + key.charCodeAt();
					keyboardHTML += "<span class='key " + keyClass +"'>" + key + "</span>";
				}
			}

			// keyboardHTML += "<span class='key dot " + key + "'>.</span>"
			keyboardHTML += "<span class='key space-key key32'></span>"
			$('.keyboard').html(keyboardHTML);
		},

		UIBindings = function() {
			$('.js-play-one').on('click', function() { pressStartToGo() });
			$(window).on('keypress', checkKey);
		},

		init = function() {
			timeouts();
			initKeyboard();
			UIBindings();
		};

		return {
			init: init
		}
	}


	KYZN().init();


})