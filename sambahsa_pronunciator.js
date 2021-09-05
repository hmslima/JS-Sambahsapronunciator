/*********************************************************************
**********************************************************************
*** Author: Henrique Matheus da Silva Lima ***************************
*** License: MIT *****************************************************
*** Version: 1.90 ****************************************************
**********************************************************************
*********************************************************************/

// Verifies if the give character is a vowel
function is_it_vowel (character) {
	if (character == 'a' || character == 'ɐ' || character == 'e' || character == 'i' || character == 'o' || character == 'u' || character == 'ů' || character == 'w' || character == 'y' || character == 'ä' || character == 'ɛ' || character == 'ë' || character == 'ə' || character == 'ö' || character == 'ø' || character == 'ü') {
		return true;
	}
	else {
		return false;
	}
}

// Verifies if the give character is a vowel (this one does not consider "w" and "y" as vowels)
function is_it_vowel_without_wy (character) {
	if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
		return true;
	}
	else {
		return false;
	}
}

// Verifies if the give character is a consonant
function is_it_consonant (character) {
	if (character == 'b' || character == 'c' || character == 'ç' || character == 'ʃ' || character == 'd' || character == 'f' || character == 'g' || character == 'h' || character == 'j' || character == 'ʒ' || character == 'k' || character == 'l' || character == 'm' || character == 'n' || character == 'ŋ' || character == 'p' || character == 'q' || character == 'r' || character == 'ř' || character == 'ʀ' || character == 'ʁ' || character == 'ɺ' || character == 's' || character == 't' || character == 'ŧ' || character == '§' || character == 'θ' || character == 'v' || character == 'x' || character == 'z') {
		return true;
	}
	else {
		return false;
	}
}

function is_there_more_than_one_vowel (input)
{
	var word_length = input.length;
	var word = input.split("");
	var vowel = 0;
	
	for (var count = 0; count < word_length ; count++) {
		if (word[count] == 'a' && (word[count + 1] == 'e' || word[count + 1] == 'y' || word[count + 1] == 'i' || word[count + 1] == 'u'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'a') vowel++;
		else if (word[count] == 'e' && (word[count + 1] == 'u' || word[count + 1] == 'i' || word[count + 1] == 'y'))
		{
			vowel++;
			count++;
		}
		// eau
		else if (word[count] == 'e' && word[count + 1] == 'a' && word[count + 2] == 'u')
		{
			vowel++;
			count++;
			count++;
		}
		else if (word[count] == 'e') vowel++;
		else if (word[count] == 'i' && word[count + 1] == 'e' && word[count + 2] == 'a' && word[count + 3] == 'u') vowel++;
		else if (word[count] == 'i' && word[count + 1] == 'e' && word[count + 2] === undefined)
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'i' && word[count + 1] == 'e' && is_it_consonant(word[count + 2]))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'i' && word[count + 1] == 'u')
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'i') vowel++;
		else if (word[count] == 'o' && (word[count + 1] == 'e' || word[count + 1] == 'y' || word[count + 1] == 'i' || word[count + 1] == 'u'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'o') vowel++;
		else if (word[count - 1] == 'q' && word[count] == 'u')
		{
			// It's a semivowel or it's not even pronounced, do nothing
		}
		else if (word[count] == 'u' && (word[count + 1] == 'e' || word[count + 1] == 'y'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'u' && word[count + 1] == 'i')
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'u') vowel++;
		else if ((word[count] == 'y') && (is_it_vowel (word[count - 1]) || is_it_vowel (word[count + 1])))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'y') vowel++;
		else if ((word[count] == 'w') && (word[count - 1] == 'i' && is_it_vowel (word[count - 2]))) vowel++; // in situations like "meiwrnt", the "w" has sound of {u}
		else if ((word[count] == 'w') && (is_it_vowel (word[count - 1]) || is_it_vowel (word[count + 1])))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'w') vowel++;
	}
	if (vowel > 1) return true;
	else return false;
}

function is_there_more_than_one_vowel_ignoring_last_e (input)
{
	var word_length = input.length;
	var word = input.split("");
	var vowel = 0;
	
	for (var count = 0; count < word_length ; count++) {
		if (word[count] == 'a' && (word[count + 1] == 'e' || word[count + 1] == 'y' || word[count + 1] == 'i' || word[count + 1] == 'u'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'a') vowel++;
		else if (word[count] == 'e' && (word[count + 1] == 'u' || word[count + 1] == 'i' || word[count + 1] == 'y'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'e' && word[count + 1] == 'a' && word[count + 2] == 'u')
		{
			vowel++;
			count++;
			count++;
		}
		else if (word[count] == 'e' && word[count + 1] === undefined)
		{
			// we0 || ye0 || gne0
			if (word[count - 1] == 'w' || word[count - 1] == 'y' || (word[count - 2] == 'g' && word[count - 1] == 'n')) {
				vowel++;
			}
			// Cle0 (it's complicated for many people make a pronunciation ignoring this "e")
			else if ((is_it_consonant(word[count - 2]) && word[count - 2] != 'l') && word[count - 1] == 'l') {
				vowel++;
			}
			else {
				// IGNORE!!!!
			}
		}
		// -e(s/t)0
		else if (word[count] == 'e' && (word[count + 1] == 's' || word[count + 1] == 't') && word[count + 2] === undefined)
		{
			// (y/i/w/c/s/gn)e(s/t)0
			if (word[count - 1] == 'y' || word[count - 1] == 'i' || word[count - 1] == 'w' || word[count - 1] == 'c' || word[count - 1] == 's' || (word[count - 2] == 'g' && word[count - 1] == 'n'))
			{
				// In this case the "e" appears; as a {ë}, but it still is a vowel
				vowel++;
			}
			// -Ces
			else if (word[count + 1] == 's' && (word[count - 1] == 'c' || word[count - 1] == 's' || word[count - 1] == 'z' || word[count - 1] == 'g' || word[count - 1] == 'j' || word[count - 1] == 'x' || (is_it_consonant(word[count - 2]) && word[count - 2] != 'r' && word[count - 1] == 'r') || word[count - 1] == 'w' || word[count - 1] == 'y' || (word[count - 3] == 's' && word[count - 2] == 'c' && word[count - 1] == 'h') || (word[count - 2] == 't' && word[count - 1] == 'h') || (word[count - 2] == 'q' && word[count - 1] == 'u') || (!(is_it_vowel(word[count - 3]) && word[count - 2] == 'h') && is_it_consonant(word[count - 2]) && (word[count - 2] != 'l' && word[count - 2] != 'r') && (word[count - 1] == 'l' || (word[count - 2] != 'm' && word[count - 1] == 'm') || (word[count - 2] != 'n' && word[count - 1] == 'n'))) || (word[count - 2] == 'g' && word[count - 1] == 'n') || (word[count - 2] == 'c' && word[count - 1] == 'h') || (word[count - 2] == 's' && word[count - 1] == 'h') || (is_it_vowel(word[count - 3]) && word[count - 2] == 'm' && word[count - 1] == 'n') || (word[count - 2] == 'z' && word[count - 1] == 'n') || (is_it_consonant(word[count - 3]) && is_it_consonant(word[count - 2]) && is_it_consonant(word[count - 1])) || ((word[count - 2] == 's' || word[count - 2] == 'x') && word[count - 1] == 't')))
			{
				// In this case the "e" appears; as a {ë}, but it still is a vowel
				vowel++;
			}
			// -Cet
			else if (word[count + 1] == 't' && (word[count - 1] == 'c' || word[count - 1] == 'z' || word[count - 1] == 'g' || (word[count - 2] == 'g' && word[count - 1] == 'n') || word[count - 1] == 'd' || word[count - 1] == 't' || (word[count - 2] == 'd' && word[count - 1] == 'p') || (is_it_consonant(word[count - 2]) && word[count - 2] != 'r' && word[count - 1] == 'r') || word[count - 1] == 'w' || word[count - 1] == 'y' || (word[count - 2] == 'q' && word[count - 1] == 'u') || (!(is_it_vowel(word[count - 3]) && word[count - 2] == 'h') && is_it_consonant(word[count - 2]) && (word[count - 2] != 'l' && word[count - 2] != 'r') && (word[count - 1] == 'l' || (word[count - 2] != 'm' && word[count - 1] == 'm') || (word[count - 2] != 'n' && word[count - 1] == 'n'))) || (word[count - 2] == 'g' && word[count - 1] == 'n') || (word[count - 3] != 's' && word[count - 2] == 'c' && word[count - 1] == 'h') || (is_it_vowel(word[count - 3]) && word[count - 2] == 'm' && word[count - 1] == 'n') || (word[count - 2] == 'z' && word[count - 1] == 'n') || (is_it_consonant(word[count - 3]) && is_it_consonant(word[count - 2]) && is_it_consonant(word[count - 1]))))
			{
				// In this case the "e" appears; as a {ë}, but it still is a vowel
				vowel++;
			}
			else
			{
				// IGNORE!!!!
			}

		}
		else if (word[count] == 'e') vowel++;
		else if (word[count] == 'i' && word[count + 1] == 'e' && word[count + 2] == 'a' && word[count + 3] == 'u') vowel++;
		else if (word[count] == 'i' && word[count + 1] == 'e' && word[count + 2] === undefined)
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'i' && word[count + 1] == 'e' && is_it_consonant(word[count + 2]))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'i' && word[count + 1] == 'u')
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'i') vowel++;
		else if (word[count] == 'o' && (word[count + 1] == 'e' || word[count + 1] == 'y' || word[count + 1] == 'i' || word[count + 1] == 'u'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'o') vowel++;
		else if (word[count - 1] == 'q' && word[count] == 'u')
		{
			// It's a semivowel or it's not even pronounced, do nothing
		}
		else if (word[count] == 'u' && (word[count + 1] == 'e' || word[count + 1] == 'y'))
		{
			vowel++;
			count++;
		}
		else if (word[count] == 'u' && word[count + 1] == 'i')
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'u') vowel++;
		else if ((word[count] == 'y') && (is_it_vowel (word[count - 1]) || is_it_vowel (word[count + 1])))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'y') vowel++;
		else if ((word[count] == 'w') && (word[count - 1] == 'i' && is_it_vowel (word[count - 2]))) vowel++; // in situations like "meiwrnt", the "w" has sound of {u}
		else if ((word[count] == 'w') && (is_it_vowel (word[count - 1]) || is_it_vowel (word[count + 1])))
		{
			// It's a semivowel, do nothing
		}
		else if (word[count] == 'w') vowel++;		
	}
	if (vowel > 1) {
		return true;
	}
	else {
		return false;
	}
}

function pronunciator (word, spt_outputDiv, ipa_outputDiv) {
	var spt_word_length = 0; // We may use this variable in the correction phase
	var ipa_word_length = 0; // We may use this variable in the correction phase
	
	var is_there_an_au = false; // It's for correcting "au" words whose "a" must be marked, like in "au" and "daunet"
	var is_there_bizarre_u = false; // For switching "ů" for "u". The letter "w", in some situations, is transcribed as {u}. The problem is that, when in the correction phase, this letter {u} may be stressed, so I created some strategies to prevent it, that was use the letter {ů} instead and later replacing it to {u}
	var is_there_bizarre_r = false; // For switching "ř" for "r". It's because it's impossible to say if the {r} is a [ʀ] or [ʁ], so I may need use it in future
	var is_there_bizarre_t = false; // For switching "ŧʃ" for "t͡ʃ". It's because I was getting a bug with the IPA transcriptions of -ich and 
	
	var word_length = word.length;
	var raw_word = word.split("");
	
	console.log("-------------------------");
	console.log("Word: " + word);	
	
	var stress = false;
	
	var spt_word = "";
	var ipa_word = "";
	
	for (var count = 0; count < word_length ; count++) {
		
		/***************************************************************
		****************************************************************
		******* A
		****************************************************************
		***************************************************************/
	
		if (raw_word[count] == 'a') {
			//aCV(s0/0)
			if (is_it_consonant (raw_word[count + 1]) && is_it_vowel (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aCV(s/0)");
			}
			//aCCV(s0/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aCCV(s/0)");
			}
			//aCCCV(s0/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aCCCV(s/0)");
			}			
			//aCCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aCCCCV(s/0)");
			}
			// aC=C(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aC=C(0/s)");
			}
			// ack(0/s0)
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : ack(0/s)");
			}
			// ah(0/s0)
			else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A:';}
				else {spt_word += 'a:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>ː';}
				else {ipa_word += 'aː';}
				stress = true;
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ah(0/s)");
			}
			// ahC...
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'a:';
				ipa_word += 'aː';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ahC");
			}
			// a(e/y)(0/s0)
			else if ((raw_word[count + 1] == 'e' || raw_word[count + 1] == 'y') && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ay';}
				else {spt_word += 'ay';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>ɪ̯';}
				else {ipa_word += 'aɪ̯';}
				stress = true;
				count++; // For jumping the "e"/"y"
				console.log ("raw_word[" + count + "]" + " : a(e/y)(0/s0)");
			}
			// a(e/y)C
			else if ((raw_word[count + 1] == 'e' || raw_word[count + 1] == 'y') && (is_it_consonant (raw_word[count + 2]) && !(raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				spt_word += 'ay';
				ipa_word += 'aɪ̯';
				count++; // For jumping the "e"/"y"
				console.log ("raw_word[" + count + "]" + " : a(e/y)C");
			}
			// a(e/y)V...
			else if ((raw_word[count + 1] == 'e' || raw_word[count + 1] == 'y') && (is_it_vowel (raw_word[count + 2]))) {
				spt_word += 'ay';
				ipa_word += 'aɪ̯';
				count++; // For jumping the "e"/"y"
				console.log ("raw_word[" + count + "]" + " : a(e/y)C");
			}
			// aC(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && raw_word[count + 1] != 's' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'A';}
				else {spt_word += 'a';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>a</u></strong>';}
				else {ipa_word += 'a';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : aC(0/s0)");
			}
			//ai(s0/0)
			else if ((raw_word[count + 1] == 'i') && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiCV(s/0)");
			}
			//aiCV(s0/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiCV(s/0)");
			}
			//aiCCV(s0/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiCCV(s/0)");
			}
			//aiCCCV(s0/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiCCCV(s/0)");
			}			
			//aiCCCCV(s0/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_consonant (raw_word[count + 5]) && is_it_vowel (raw_word[count + 6]) && (raw_word[count + 7] === undefined || (raw_word[count + 7] == 's' && raw_word[count + 8] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiCCCCV(s/0)");
			}
			// aiC=C(0/s0)
			else if (raw_word[count + 1] == 'i' && is_it_consonant(raw_word[count + 2]) && (raw_word[count + 2] == raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aiC=C(0/s)");
			}
			// aick(0/s0)
			else if (raw_word[count + 1] == 'i' && raw_word[count + 2] == 'c' && raw_word[count + 3] == 'k' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä';}
				else {spt_word += 'ä';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>';}
				else {ipa_word += 'ɛ';}
				stress = true;
				count++; // // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : aick(0/s)");
			}
			//aih(0/s0)
			else if (raw_word[count + 1] == 'i' && raw_word[count + 2] == 'h' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ä:';}
				else {spt_word += 'ä:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ɛ</u></strong>ː';}
				else {ipa_word += 'ɛː';}
				stress = true;
				count++; // For jumping the "i"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : aih(0/s)");
			}
			//aihC...
			else if (raw_word[count + 1] == 'i' && raw_word[count + 2] == 'h' && is_it_consonant (raw_word[count + 3])) {
				spt_word += 'ä:';
				ipa_word += 'ɛː';
				count++; // For jumping the "i"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : aihC");
			}
			//ai
			else if (raw_word[count + 1] == 'i') {
				spt_word += 'ä';
				ipa_word += 'ɛ';
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : ai");
			}
			//auCV(s0/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auCV(s/0)");
			}
			//auCCV(s/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auCCV(s/0)");
			}
			//auCCCV(s/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auCCCV(s/0)");
			}
			//auCCCCV(s/0)
			else if ((raw_word[count + 1] == 'i') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_consonant (raw_word[count + 5]) && is_it_vowel (raw_word[count + 6]) && (raw_word[count + 7] === undefined || (raw_word[count + 7] == 's' && raw_word[count + 8] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auCCCCV(s/0)");
			}
			// auC=C(0/s0)
			else if (raw_word[count + 1] == 'u' && is_it_consonant(raw_word[count + 2]) && (raw_word[count + 2] == raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auC=C(0/s)");
			}
			// auck(0/s0)
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'c' && raw_word[count + 3] == 'k' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				spt_word += 'Ao';
				ipa_word += '<strong><u>a</u></strong>ʊ̯';
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : auck(0/s)");
			}
			//auh(0/s0)
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'h' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				spt_word += 'A:o';
				ipa_word += '<strong><u>a</u></strong>ːʊ̯';
				stress = true;
				count++; // For jumping the "u"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : auh(0/s)");
			}
			//auhC...
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'h' && is_it_consonant (raw_word[count + 3])) {
				spt_word += 'a:o';
				ipa_word += 'aːʊ̯';
				count++; // For jumping the "u"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : auhC");
				is_there_an_au = true;
			}
			//au
			else if (raw_word[count + 1] == 'u') {
				spt_word += 'ao';
				ipa_word += 'aʊ̯';
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : au");
				is_there_an_au = true;
			}
			else {
				spt_word += 'a';
				
				if (count == 0) {ipa_word += 'a';} // This letter "a" is the first letter of the word
				else { // This letter "a" is NOT the first letter of the word
					if (!is_there_more_than_one_vowel_ignoring_last_e (word)) {
						ipa_word += 'a';
					}
					else if (raw_word[count - 1] == 'y' || raw_word[count - 1] == 'w' || raw_word[count - 1] == 'i' || raw_word[count - 1] == 'u') {
						ipa_word += 'a';
					}
					else {
						ipa_word += 'ɐ';
					}				
				}
				console.log ("raw_word[" + count + "]" + " : a");
			}			
		}
		/***************************************************************
		****************************************************************
		******* E
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'e') {
			//eCV(s/0)
			if (is_it_consonant (raw_word[count + 1]) && is_it_vowel_without_wy (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eCV(s/0)")
			}
			//eCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel_without_wy (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eCCV(s/0)");
			}
			//eCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel_without_wy (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eCCCV(s/0)");
			}			
			//eCCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel_without_wy (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eCCCCV(s/0)");
			}
			// eC=C(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eC=C(0/s)");
			}
			// e[C=C]C0 . for words like "succeddt"
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && is_it_consonant(raw_word[count + 3]) && raw_word[count + 4] === undefined) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				count++; // For jumping the following consonant
				console.log ("raw_word[" + count + "]" + " : e[C=C]C0");
			}
			// eck(0/s0)
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eck(0/s)");
			}
			// eckC0
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && is_it_consonant(raw_word[count + 3]) && raw_word[count + 4] === undefined) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : eck(0/s)");
			}
			// ieC(s/0)
			else if (raw_word[count - 1] == 'i' && is_it_consonant (raw_word[count + 1]) && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : ieC(s/0)")
			}
			// ieCC(s/0)
			else if (raw_word[count - 1] == 'i' && is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E';}
				else {spt_word += 'e';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>';}
				else {ipa_word += 'e';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : ieCC(s/0)")
			}
			// eh(0/s0)
			else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'E:';}
				else {spt_word += 'e:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>ː';}
				else {ipa_word += 'eː';}
				stress = true;
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : eh(0/s)");
			}
			// ehC...
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'e:';
				ipa_word += 'eː';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ehC");
			}
			// oCel(0/s0)
			else if (raw_word[count - 2] == 'o' && is_it_consonant (raw_word[count - 1]) && raw_word[count + 1] == 'l' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				spt_word += 'E';
				ipa_word += '<strong><u>e</u></strong>';
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oCel(0/s)");
			}
			// ea(0/s0)
			else if (raw_word[count + 1] == 'a' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ea';}
				else {spt_word += 'ea';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>e</u></strong>ɐ';}
				else {ipa_word += 'eɐ';}
				stress = true;
				count++; // For jumping the "a"
				console.log ("raw_word[" + count + "]" + " : ea(0/s0)");
			}
			// eaC
			else if (raw_word[count + 1] == 'a' && (is_it_consonant (raw_word[count + 2]) && !(raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				spt_word += 'ëa';
				ipa_word += 'əa';
				console.log ("raw_word[" + count + "]" + " : eaC");
				count++; // For jumping the "a"
			}
			// ee(0/s0)
			else if (raw_word[count + 1] == 'e' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				spt_word += 'Eë';
				ipa_word += '<strong><u>e</u></strong>ə';
				stress = true;
				count++; // For jumping the "e"
				console.log ("raw_word[" + count + "]" + " : ee(0/s0)");
			}
			// eeC
			else if (raw_word[count + 1] == 'e' && (is_it_consonant (raw_word[count + 2]) && !(raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				// eeC0
				if (raw_word[count + 3] === undefined) {
					spt_word += 'Eë';
					ipa_word += '<strong><u>e</u></strong>ə';
					stress = true;
				}
				// eeCC0
				else if (is_it_consonant (raw_word[count + 3]) && raw_word[count + 4] === undefined) {
					spt_word += 'Eë';
					ipa_word += '<strong><u>e</u></strong>ə';
					stress = true;
				}
				// eeCCC0
				else if (is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && raw_word[count + 5] === undefined) {
					spt_word += 'Eë';
					ipa_word += '<strong><u>e</u></strong>ə';
					stress = true;
				}
				else {
					spt_word += 'eë';
					ipa_word += 'eə';
				}
				count++; // For jumping the "e"
				console.log ("raw_word[" + count + "]" + " : eeC");
			}
			//eu(s)0
			else if ((raw_word[count + 1] == 'u') && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : eu(s)0");
			}
			//euC0
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && raw_word[count + 3] === undefined) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euC0");
			}
			//euCV(s0/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euCV(s/0)");
			}
			//euCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euCCV(s/0)");
			}
			//euCCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euCCCV(s/0)");
			}
			//euCCCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_consonant (raw_word[count + 5]) && is_it_vowel (raw_word[count + 6]) && (raw_word[count + 7] === undefined || (raw_word[count + 7] == 's' && raw_word[count + 8] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euCCCCV(s/0)");
			}
			// euC=C(0/s0)
			else if (raw_word[count + 1] == 'u' && is_it_consonant(raw_word[count + 2]) && (raw_word[count + 2] == raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euC=C(0/s)");
			}
			// euck(0/s0)
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'c' && raw_word[count + 3] == 'k' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'ö';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>';}
				else {ipa_word += 'ø';}
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : euck(0/s)");
			}
			// euh(0/s0)
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'h' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö:';}
				else {spt_word += 'ö:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>ø</u></strong>ː';}
				else {ipa_word += 'øː';}
				stress = true;
				count++; // For jumping the "u"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : euh(0/s)");
			}
			// euhC...
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'h' && is_it_consonant (raw_word[count + 3])) {
				spt_word += 'ö:';
				ipa_word += 'øː';
				count++; // For jumping the "u"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : euhC");
			}
			// eu
			else if (raw_word[count + 1] == 'u') {
				spt_word += 'ö';
				ipa_word += 'ø';
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : eu");
			}
			// eih
			else if (raw_word[count + 1] == 'i' && raw_word[count + 2] == 'h') {
				// eih0
				if (is_there_more_than_one_vowel_ignoring_last_e (word) && raw_word[count + 3] === undefined){
					spt_word += 'E:y';
					ipa_word += '<strong><u>e</u></strong>ːɪ̯';
					stress = true;
				}
				else{
					spt_word += 'e:y';
					ipa_word += 'eːɪ̯';
				}
				count++; // For jumping the "i"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ei");
			}
			// ei
			else if (raw_word[count + 1] == 'i') {
				spt_word += 'ey';
				ipa_word += 'eɪ̯';
				count++; // For jumping the "i"
				console.log ("raw_word[" + count + "]" + " : ei");
			}
			// eau
			else if (raw_word[count + 1] == 'a' && raw_word[count + 2] == 'u') {
				// It is at the end of the word
				if (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined)) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O:';}
					else {spt_word += 'o:';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>ː';}
					else {ipa_word += 'oː';}
					stress = true;
				}
				else {
					spt_word += 'o:';
					ipa_word += 'oː';
				}
				count++; // For jumping the "a"
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : eau");
			
			}
			// Cye0
			else if (is_it_consonant (raw_word[count - 2]) && raw_word[count - 1] == 'y' && raw_word[count + 1] === undefined) {				
				if (raw_word[count - 3] === undefined) {
					spt_word += 'e';
					ipa_word += 'e';
				}
				else {
					spt_word += 'ë';
					ipa_word += 'ə';
				}
				console.log ("raw_word[" + count + "]" + " : Cye0")
			}
			// Cwe0
			else if (is_it_consonant (raw_word[count - 2]) && raw_word[count - 1] == 'w' && raw_word[count + 1] === undefined) {
				if (raw_word[count - 3] === undefined) {
					spt_word += 'e';
					ipa_word += 'e';
				}
				else {
					spt_word += 'ë';
					ipa_word += 'ə';
				}
				console.log ("raw_word[" + count + "]" + " : Cwe0")
			}
			// The "e" is the first letter of the word
			else if (count == 0) {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : The \"e\" is the first letter of the word")
			}
			// The "e" the last letter of the word, but it is preceded by an "l"
			else if (is_there_more_than_one_vowel_ignoring_last_e (word) && (is_it_consonant(word[count - 2]) && word[count - 2] != 'l') && count == (word_length - 1) && raw_word[count - 1] == 'l') {
				spt_word += 'ë';
				ipa_word += 'ə';
				console.log ("raw_word[" + count + "]" + " : le")
			}
			// The "e" the last letter of the word, does not appears and there is more other vowel
			else if (is_there_more_than_one_vowel (word) && count == (word_length - 1) && !(raw_word[count - 2] == 'g' && raw_word[count - 1] == 'n')) {
				// Do nothing
				console.log ("raw_word[" + count + "]" + " : The \"e\" the last letter of the word, does not appears and there is more other vowel")
			}
			// there is no more other vowel
			else if (!is_there_more_than_one_vowel (word)) {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : e = there is no more other vowel");
			}
			// -CeC(s)0
			else if (is_it_consonant(raw_word[count - 1]) && is_it_consonant(raw_word[count + 1]) && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				console.log ("raw_word[" + count + "]" + " : -CeC(s)0, for now the word is {" + spt_word + "} (spt) and [" + ipa_word + "] (ipa)");
				
				// Visible -Ces
				if (raw_word[count + 1] == 's' && (raw_word[count - 1] == 'c' || raw_word[count - 1] == 's' || raw_word[count - 1] == 'z' || raw_word[count - 1] == 'g' || raw_word[count - 1] == 'j' || raw_word[count - 1] == 'x' || (is_it_consonant(raw_word[count - 2]) && raw_word[count - 2] != 'r' && raw_word[count - 1] == 'r') || raw_word[count - 1] == 'w' || raw_word[count - 1] == 'y' || (raw_word[count - 3] == 's' && raw_word[count - 2] == 'c' && raw_word[count - 1] == 'h') || (raw_word[count - 2] == 't' && raw_word[count - 1] == 'h') || (raw_word[count - 2] == 'q' && raw_word[count - 1] == 'u') || (!(is_it_vowel(raw_word[count - 3]) && raw_word[count - 2] == 'h') && is_it_consonant(raw_word[count - 2]) && (raw_word[count - 2] != 'l' && raw_word[count - 2] != 'r') && (raw_word[count - 1] == 'l' || (raw_word[count - 2] != 'm' && raw_word[count - 1] == 'm') || (raw_word[count - 2] != 'n' && raw_word[count - 1] == 'n'))) || (raw_word[count - 2] == 'g' && raw_word[count - 1] == 'n') || (raw_word[count - 2] == 'c' && raw_word[count - 1] == 'h') || (raw_word[count - 2] == 's' && raw_word[count - 1] == 'h') || (is_it_vowel(raw_word[count - 3]) && raw_word[count - 2] == 'm' && raw_word[count - 1] == 'n') || (raw_word[count - 2] == 'z' && raw_word[count - 1] == 'n') || (is_it_consonant(raw_word[count - 3]) && is_it_consonant(raw_word[count - 2]) && is_it_consonant(raw_word[count - 1])) || ((raw_word[count - 2] == 's' || raw_word[count - 2] == 'x') && raw_word[count - 1] == 't'))) {
					spt_word += 'ë';
					ipa_word += 'ə';
					console.log ("raw_word[" + count + "]" + " : Visible -Ces");
				}
				// Visible -Cet
				else if (raw_word[count + 1] == 't' && (raw_word[count - 1] == 'c' || raw_word[count - 1] == 'z' || raw_word[count - 1] == 'g' || (raw_word[count - 2] == 'g' && raw_word[count - 1] == 'n') || raw_word[count - 1] == 'd' || raw_word[count - 1] == 't' || (raw_word[count - 2] == 'd' && raw_word[count - 1] == 'p') || (is_it_consonant(raw_word[count - 2]) && raw_word[count - 2] != 'r' && raw_word[count - 1] == 'r') || raw_word[count - 1] == 'w' || raw_word[count - 1] == 'y' || (raw_word[count - 2] == 'q' && raw_word[count - 1] == 'u') || (!(is_it_vowel(raw_word[count - 3]) && raw_word[count - 2] == 'h') && is_it_consonant(raw_word[count - 2]) && (raw_word[count - 2] != 'l' && raw_word[count - 2] != 'r') && (raw_word[count - 1] == 'l' || (raw_word[count - 2] != 'm' && raw_word[count - 1] == 'm') || (raw_word[count - 2] != 'n' && raw_word[count - 1] == 'n'))) || (raw_word[count - 2] == 'g' && raw_word[count - 1] == 'n') || (raw_word[count - 3] != 's' && raw_word[count - 2] == 'c' && raw_word[count - 1] == 'h') || (is_it_vowel(raw_word[count - 3]) && raw_word[count - 2] == 'm' && raw_word[count - 1] == 'n') || (raw_word[count - 2] == 'z' && raw_word[count - 1] == 'n') || (is_it_consonant(raw_word[count - 3]) && is_it_consonant(raw_word[count - 2]) && is_it_consonant(raw_word[count - 1])))) {
					spt_word += 'ë';
					ipa_word += 'ə';
					console.log ("raw_word[" + count + "]" + " : Visible -Cet");
				}
				// INvisible_CeC
				else if (raw_word[count + 1] == 's' || raw_word[count + 1] == 't') {
					// Do nothing
					console.log ("raw_word[" + count + "]" + " : INvisible_CeC");
				}
				// visible_CeC
				else {
					spt_word += 'ë';
					ipa_word += 'ə';
					console.log ("raw_word[" + count + "]" + " : visible_CeC");
				}
			}
			// -eC(s)0
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 1] != raw_word[count + 2] && raw_word[count + 3] === undefined))) {
				spt_word += 'ë';
				ipa_word += 'ə';
				console.log ("raw_word[" + count + "]" + " : -eC(s)0");
			}
			// -eCC(s)0
			else if (is_it_consonant(raw_word[count + 1]) && is_it_consonant(raw_word[count + 2]) && raw_word[count + 1] != raw_word[count + 2] && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				spt_word += 'ë';
				ipa_word += 'ə';
				console.log ("raw_word[" + count + "]" + " : -eCC(s)0");
			}
			// (w/y/i)e
			else if (raw_word[count - 1] == 'w' || raw_word[count - 1] == 'y' || raw_word[count - 1] == 'i') {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : (w/y/i)e")
			}
			// eCet(s)0 (invisible last e)
			else if (is_it_consonant(raw_word[count + 1]) && raw_word[count + 2] == 'e' && raw_word[count + 3] == 't' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined)) && !(raw_word[count + 1] == 'c' || raw_word[count + 1] == 'z' || raw_word[count + 1] == 'g' || raw_word[count + 1] == 'n' || raw_word[count + 1] == 'd' || raw_word[count + 1] == 't' || raw_word[count + 1] == 'w' || raw_word[count + 1] == 'y')) {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : eCet(s)0 (invisible last e)")
			}
			// eCCet(s)0 (invisible last e)
			else if (is_it_consonant(raw_word[count + 1]) && (is_it_consonant(raw_word[count + 2]) || (raw_word[count + 1] == 'q' && raw_word[count + 2] == 'u')) && raw_word[count + 3] == 'e' && raw_word[count + 4] == 't' && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined)) && !((is_it_consonant(raw_word[count + 1]) && raw_word[count + 2] == 'r') || (raw_word[count + 1] == 'q' && raw_word[count + 2] == 'u') || (raw_word[count + 1] == 'g' && raw_word[count + 2] == 'n') || (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'h') || (is_it_vowel(raw_word[count + 1]) && raw_word[count + 2] == 'm' && raw_word[count + 3] == 'n'))) {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : eCCet(s)0 (invisible last e)")
			}
			// -eC=CV
			else if ((is_it_consonant(raw_word[count + 1]) && is_it_consonant(raw_word[count + 2]) && is_it_vowel(raw_word[count + 3])) && ((raw_word[count + 1] == raw_word[count + 2]) || (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k'))) {
				spt_word += 'e';
				ipa_word += 'e';
				console.log ("raw_word[" + count + "]" + " : -eC=CV");
			}
			// -eque0
			else if (is_there_more_than_one_vowel_ignoring_last_e (word) && raw_word[count + 1] == 'q' && raw_word[count + 2] == 'u' && raw_word[count + 3] == 'e' && raw_word[count + 4] === undefined) {
				spt_word += 'E';
				ipa_word += '<strong><u>e</u></strong>';
				stress = true;
				console.log ("raw_word[" + count + "]" + " : -eque0");
			}
			// else
			else {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {
					spt_word += 'ë';
					ipa_word += 'ə';
					console.log ("raw_word[" + count + "]" + " : generic ë/ə");
				}
				else
				{
					spt_word += 'e';
					ipa_word += 'e';
					console.log ("raw_word[" + count + "]" + " : generic e");
				}
			}
			
		}
		
		/***************************************************************
		****************************************************************
		******* I
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'i') {
			//iCV(s/0)
			if (is_it_consonant (raw_word[count + 1]) && is_it_vowel (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCV(s/0)")
			}
			//iCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCCV(s/0)");
			}
			//iCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCCCV(s/0)");
			}			
			//iCCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCCCCV(s/0)");
			}
			// iCeC(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && raw_word[count + 2] == 'e' && is_it_consonant (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined && raw_word[count + 3] != 's'))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCeC(s/0)")
			}
			// iCCeC(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && raw_word[count + 3] == 'e' && is_it_consonant (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined && raw_word[count + 4] != 's'))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCCeC(s/0)")
			}
			// iCCCeC(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && raw_word[count + 4] == 'e' && is_it_consonant (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined && raw_word[count + 5] != 's'))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iCCCeC(s/0)")
			}
			// iC=C(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : iC=C(0/s)");
			}
			// ick(0/s0)
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : ick(0/s)");
			}
			//ih(0/s0)
			else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I:';}
				else {spt_word += 'i:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>ː';}
				else {ipa_word += 'iː';}
				stress = true;
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ih(0/s)");
			}
			//ihC...
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'i:';
				ipa_word += 'iː';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ihC");
			}
			// in(0/s0)
			else if (raw_word[count + 1] == 'n' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : in(0/s)");
			}
			// inC(0/s0)
			else if (raw_word[count + 1] == 'n' && is_it_consonant(raw_word[count + 2]) && raw_word[count + 2] != 'g' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : inC(0/s)");
			}
			// inCC(0/s0)
			else if (raw_word[count + 1] == 'n' && is_it_consonant(raw_word[count + 2]) && is_it_consonant(raw_word[count + 3]) && raw_word[count + 2] != 'g' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I';}
				else {spt_word += 'i';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>';}
				else {ipa_word += 'i';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : inCC(0/s)");
			}
			// ie0
			else if (is_there_more_than_one_vowel_ignoring_last_e (word) && raw_word[count + 1] == 'e' && raw_word[count + 2] === undefined ) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'I:';}
				else {spt_word += 'i:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>i</u></strong>ː';}
				else {ipa_word += 'iː';}
				stress = true;
				count++; // For jumping the "e"
				console.log ("raw_word[" + count + "]" + " : ie0");
			}
			// (0/C)yi...
			/*else if ((is_it_consonant(raw_word[count - 2]) || raw_word[count - 2] === undefined) && raw_word[count - 1] == 'y' && raw_word[count + 1] !== undefined) {
				// Do nothing
				console.log ("raw_word[" + count + "]" + " : (0/C)yi...");
			}*/
			// Vi(a/e/o/u)
			else if (!((raw_word[count - 2] == 'q' || raw_word[count - 2] == 'g') && raw_word[count - 1] == 'u') && !(raw_word[count - 1] == 'w' || raw_word[count - 1] == 'y') && is_it_vowel(raw_word[count - 1]) && (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'e' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u')) {
				spt_word += 'y';
				ipa_word += 'ɪ̯';
				console.log ("raw_word[" + count + "]" + " : Vi(a/e/o/u)");
			}
			// i(a/e/o/u)
			else if (!((raw_word[count - 2] == 'q' || raw_word[count - 2] == 'g') && raw_word[count - 1] == 'u') && (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'e' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u')) {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : i(a/e/o/u)");
			}
			// -ique0
			else if (is_there_more_than_one_vowel_ignoring_last_e (word) && raw_word[count + 1] == 'q' && raw_word[count + 2] == 'u' && raw_word[count + 3] == 'e' && raw_word[count + 4] === undefined) {
				spt_word += 'I';
				ipa_word += '<strong><u>i</u></strong>';
				stress = true;
				console.log ("raw_word[" + count + "]" + " : -ique0");
			}
			else {
				spt_word += 'i';
				ipa_word += 'i';
				console.log ("raw_word[" + count + "]" + " : i");
			}
			
		}
		
		/***************************************************************
		****************************************************************
		******* O
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'o') {
			//oCV(s/0)
			if (is_it_consonant (raw_word[count + 1]) && is_it_vowel (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oCV(s/0)");
			}
			//oCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oCCV(s/0)");
			}
			//oCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oCCCV(s/0)");
			}			
			//oCCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oCCCCV(s/0)");
			}
			// oC=C(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oC=C(0/s)");
			}
			// ock(0/s0)
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : ock(0/s)");
			}
			//oh(0/s0)
			else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O:';}
				else {spt_word += 'o:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>ː';}
				else {ipa_word += 'oː';}
				stress = true;
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : oh(0/s)");
			}
			//ohC...
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'o:';
				ipa_word += 'oː';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ohC");
			}
			// oC(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && raw_word[count + 1] != 's' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'O';}
				else {spt_word += 'o';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>o</u></strong>';}
				else {ipa_word += 'o';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : oC(0/s0)");
			}
			//ouCV(s0/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouCV(s/0)");
			}
			//ouCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouCCV(s/0)");
			}
			//ouCCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouCCCV(s/0)");
			}
			//ouCCCCV(s/0)
			else if ((raw_word[count + 1] == 'u') && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_consonant (raw_word[count + 5]) && is_it_vowel (raw_word[count + 6]) && (raw_word[count + 7] === undefined || (raw_word[count + 7] == 's' && raw_word[count + 8] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouCCCCV(s/0)");
			}
			// ouC=C(0/s0)
			else if (raw_word[count + 1] == 'u' && is_it_consonant(raw_word[count + 2]) && (raw_word[count + 2] == raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouC=C(0/s)");
			}
			// ouck(0/s0)
			else if (raw_word[count + 1] == 'u' && raw_word[count + 2] == 'c' && raw_word[count + 3] == 'k' && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ö';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ouck(0/s)");
			}
			// ou
			else if (raw_word[count + 1] == 'u') {
				spt_word += 'u:';
				ipa_word += 'uː';
				count++; // For jumping the "u"
				console.log ("raw_word[" + count + "]" + " : ou");
			}
			// o(e/i/y)
			else if (raw_word[count + 1] == 'e' || raw_word[count + 1] == 'i' || raw_word[count + 1] == 'y') {
				spt_word += 'oy';
				ipa_word += 'oɪ̯';
				count++; // For jumping the following vowel
				console.log ("raw_word[" + count + "]" + " : o(e/i/y)");
			}
			else {
				spt_word += 'o';
				ipa_word += 'o';				
			}			
		}
		
		/***************************************************************
		****************************************************************
		******* U
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'u') {
			// uCe
			if ((is_it_consonant (raw_word[count + 1]) || raw_word[count + 1] == 'w') && (raw_word[count + 2] == 'e')) {
				//ule(s)0
				if (raw_word[count + 1] == 'l' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					spt_word += 'ü';
					ipa_word += 'y';
					console.log ("raw_word[" + count + "]" + " : ule(s)0");
				}
				// uCe(s)0
				else if ((raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					stress = true;
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {
						spt_word += 'Ü';
						ipa_word += '<strong><u>y</u></strong>';	
					}
					else {
						spt_word += 'ü';
						ipa_word += 'y';	
					}
					console.log ("raw_word[" + count + "]" + " : uCe(s)0");			
				}
				// uCeC(s)0
				else if (is_it_consonant (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
					stress = true;
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {
						spt_word += 'Ü';
						ipa_word += '<strong><u>y</u></strong>';	
					}
					else {
						spt_word += 'ü';
						ipa_word += 'y';	
					}
					console.log ("raw_word[" + count + "]" + " : uCeC(s)0");
				}
				// uCeCC(s)0
				else if (is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && ((raw_word[count + 3] != raw_word[count + 4]) && !(raw_word[count + 3] == 'c' && raw_word[count + 4] == 'k')) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
					stress = true;
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {
						spt_word += 'Ü';
						ipa_word += '<strong><u>y</u></strong>';	
					}
					else {
						spt_word += 'ü';
						ipa_word += 'y';	
					}
					console.log ("raw_word[" + count + "]" + " : uCeCC(s)0");
				}
				// uCe...
				else {
					spt_word += 'ü';
					ipa_word += 'y';	
				}							
				console.log ("raw_word[" + count + "]" + " : uCe...");
			}
			//uCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_vowel (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uCV(s/0)");
			}
			//uCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uCCV(s/0)");
			}
			//uCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uCCCV(s/0)");
			}			
			//uCCCCV(s/0)
			else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uCCCCV(s/0)");
			}
			// uC=C(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uC=C(0/s)");
			}
			// uck(0/s0)
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
				else {spt_word += 'u';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
				else {ipa_word += 'u';}
				stress = true;
				console.log ("raw_word[" + count + "]" + " : uck(0/s)");
			}
			//uh(0/s0)
			else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U:';}
				else {spt_word += 'u:';}
				if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>ː';}
				else {ipa_word += 'uː';}
				stress = true;
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : uh(0/s)");
			}
			//uhC...
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'u:';
				ipa_word += 'uː';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : uhC");
			}
			// uC(0/s0)
			else if (is_it_consonant(raw_word[count + 1]) && raw_word[count + 1] != 's' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				if (raw_word[count + 1] == 'm') {
					// Words like "territorium" are not stressed in the "-(i)um"
					spt_word += 'u';
					ipa_word += 'u';
				}
				else {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'U';}
					else {spt_word += 'u';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>u</u></strong>';}
					else {ipa_word += 'u';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : uC(0/s0)");
				}
			}
			// u(a/o/i)
			else if (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'i') {
				spt_word += 'w';
				if (raw_word[count - 1] == 'g') {
					ipa_word += 'ʷ';
				}
				else {
					ipa_word += 'w';
				}
				console.log ("raw_word[" + count + "]" + " : u(a/o/i)");
			}
			// ueu
			else if (raw_word[count - 1] != 'q' && raw_word[count + 1] == 'e' && raw_word[count + 2] == 'u') {	
				spt_word += 'ü:';
				ipa_word += 'y';
				console.log ("raw_word[" + count + "]" + " : this is the first \"u\" of \"ueu\"");
			}			
			// ue
			else if (raw_word[count - 1] != 'q' && raw_word[count + 1] == 'e') {				
				console.log ("raw_word[" + count + "]" + " : ue");
				if (is_there_more_than_one_vowel_ignoring_last_e (word) && raw_word[count + 1] == 'e' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
				}
				// ueC(s)0
				else if (is_there_more_than_one_vowel_ignoring_last_e (word) && is_it_consonant(raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
					console.log ("raw_word[" + count + "]" + " : ueC(s)0");
				}
				// ueCC(s)0
				else if (is_there_more_than_one_vowel_ignoring_last_e (word) && is_it_consonant(raw_word[count + 2]) && is_it_consonant(raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
					console.log ("raw_word[" + count + "]" + " : ueCC(s)0");
				}
				// ueCV(s)0
				else if (is_there_more_than_one_vowel_ignoring_last_e (word) && is_it_consonant(raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
					console.log ("raw_word[" + count + "]" + " : ueCV(s)0");
				}
				// ueCCV(s)0
				else if (is_there_more_than_one_vowel_ignoring_last_e (word) && is_it_consonant(raw_word[count + 2]) && is_it_consonant(raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
					console.log ("raw_word[" + count + "]" + " : ueCCV(s)0");
				}
				// ueCCCV(s)0
				else if (is_there_more_than_one_vowel_ignoring_last_e (word) && is_it_consonant(raw_word[count + 2]) && is_it_consonant(raw_word[count + 3]) && is_it_consonant(raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
					spt_word += 'Ü:';
					ipa_word += '<strong><u>y</u></strong>ː';
					stress = true;
					console.log ("raw_word[" + count + "]" + " : ueCCCV(s)0");
				}
				else {
					spt_word += 'üː';
					ipa_word += 'y:';
				}
				count++; // For jumping the "e"
			}
			else {
				spt_word += 'u';
				ipa_word += 'u';			
			}
			
		}
		
		/***************************************************************
		****************************************************************
		******* W
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'w') {
			// CwC
			if (is_it_consonant (raw_word[count - 1]) && is_it_consonant (raw_word[count + 1])) {
				spt_word += 'ů'; // For programming reasons, I am using "ů" instead "u". It's because words like "mensclyekwrnt" were returning {mënsklyekUrnt} instead {mënsklyEkurnt}
					is_there_bizarre_u = true;
				ipa_word += 'ʊ';
				console.log ("raw_word[" + count + "]" + " : CwC");
			}
			// (0/C)wV
			else if ((raw_word[count - 1] === undefined || is_it_consonant(raw_word[count - 1])) && is_it_vowel (raw_word[count + 1]) && !(raw_word[count + 1] == 'i' && is_it_vowel(raw_word[count + 2]))) {
				spt_word += 'w';
				if (raw_word[count - 1] == 'k' || raw_word[count - 1] == 'g') {
					ipa_word += 'ʷ';
				}
				else {
					ipa_word += 'w';
				}
				console.log ("raw_word[" + count + "]" + " : (0/C)wV");
			}
			// Vw0
			else if (is_it_vowel (raw_word[count - 1]) && raw_word[count + 1] === undefined) {
				spt_word += 'w';
				ipa_word += 'ʊ̯';
				console.log ("raw_word[" + count + "]" + " : Vw0");
			}
			// VwyV
			else if (is_it_vowel (raw_word[count - 1]) && raw_word[count + 1] == 'y' && is_it_vowel (raw_word[count + 2])) {
				spt_word += 'w';
				ipa_word += 'ʊ̯';
				console.log ("raw_word[" + count + "]" + " : VwyV");
			}
			// VwwV
			else if (is_it_vowel (raw_word[count - 1]) && raw_word[count + 1] == 'w' && is_it_vowel (raw_word[count + 2])) {
				spt_word += 'w';
				ipa_word += 'ʊ̯';
				console.log ("raw_word[" + count + "]" + " : VwwV");
			}
			// VwV
			else if (is_it_vowel (raw_word[count - 1]) && is_it_vowel (raw_word[count + 1])) {
				spt_word += 'w';
				ipa_word += 'w';
				console.log ("raw_word[" + count + "]" + " : VwV");
			}
			// VwC
			else if (is_it_vowel (raw_word[count - 1]) && is_it_consonant (raw_word[count + 1])) {
				spt_word += 'w';
				ipa_word += 'ʊ̯';
				console.log ("raw_word[" + count + "]" + " : VwC");
			}
			else {
				spt_word += 'w';
				ipa_word += 'ʊ';
				console.log ("raw_word[" + count + "]" + " : w");		
			}
			
		}
		
		/***************************************************************
		****************************************************************
		******* Y
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'y') {
			// CyC...
			if (is_it_consonant(raw_word[count - 1]) && is_it_consonant(raw_word[count + 1]) && !(raw_word[count + 1] == 's' && raw_word[count + 2] === undefined)) {
				console.log ("raw_word[" + count + "]" + " : CyC...");
				//yCV(s/0)
				if (is_it_consonant (raw_word[count + 1]) && is_it_vowel (raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : CyCV(s/0)");
				}
				//yCCV(s/0)
				else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_vowel (raw_word[count + 3]) && (raw_word[count + 4] === undefined || (raw_word[count + 4] == 's' && raw_word[count + 5] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : CyCCV(s/0)");
				}
				//yCCCV(s/0)
				else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_vowel (raw_word[count + 4]) && (raw_word[count + 5] === undefined || (raw_word[count + 5] == 's' && raw_word[count + 6] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : CyCCCV(s/0)");
				}			
				//yCCCCV(s/0)
				else if (is_it_consonant (raw_word[count + 1]) && is_it_consonant (raw_word[count + 2]) && is_it_consonant (raw_word[count + 3]) && is_it_consonant (raw_word[count + 4]) && is_it_vowel (raw_word[count + 5]) && (raw_word[count + 6] === undefined || (raw_word[count + 6] == 's' && raw_word[count + 7] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : CyCCCCV(s/0)");
				}
				// yC=C(0/s0)
				else if (is_it_consonant(raw_word[count + 1]) && (raw_word[count + 1] == raw_word[count + 2]) && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : CyC=C(0/s)");
				}
				// yck(0/s0)
				else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'k' && (raw_word[count + 3] === undefined || (raw_word[count + 3] == 's' && raw_word[count + 4] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü';}
					else {spt_word += 'ü';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>';}
					else {ipa_word += 'y';}
					stress = true;
					console.log ("raw_word[" + count + "]" + " : Cyck(0/s)");
				}
				//yh(0/s0)
				else if (raw_word[count + 1] == 'h' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {spt_word += 'Ü:';}
					else {spt_word += 'ü:';}
					if (is_there_more_than_one_vowel_ignoring_last_e (word)) {ipa_word += '<strong><u>y</u></strong>ː';}
					else {ipa_word += 'yː';}
					stress = true;
					count++; // For jumping the "h"
					console.log ("raw_word[" + count + "]" + " : Cyh(0/s)");
				}
				//yhC...
				else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
					spt_word += 'ü:';
					ipa_word += 'yː';
					count++; // For jumping the "h"
					console.log ("raw_word[" + count + "]" + " : CyhC");
				}
				else {
					spt_word += 'ü';
					ipa_word += 'y';
				}
			}
			// Cy(0/s0)
			else if (is_it_consonant (raw_word[count - 1]) && (raw_word[count + 1] === undefined || (raw_word[count + 1] == 's' && raw_word[count + 2] === undefined))) {
				spt_word += 'i';
				ipa_word += 'ɪ';
				console.log ("raw_word[" + count + "]" + " : Cy(0/s0)");
			}
			// kwyC
			else if (raw_word[count - 2] == 'k' && raw_word[count - 1] == 'w' && is_it_consonant (raw_word[count + 1])) {
				spt_word += 'ü';
				ipa_word += 'y';
				console.log ("raw_word[" + count + "]" + " : kwyC");
			}
			// quyC
			else if (raw_word[count - 2] == 'q' && raw_word[count - 1] == 'u' && is_it_consonant (raw_word[count + 1])) {
				spt_word += 'ü';
				ipa_word += 'y';
				console.log ("raw_word[" + count + "]" + " : quyC");
			}
			// VyC
			else if (is_it_vowel (raw_word[count - 1]) && is_it_consonant (raw_word[count + 1])) {
				spt_word += 'y';
				ipa_word += 'ɪ̯';
				console.log ("raw_word[" + count + "]" + " : VyC");
			}
			// CyV
			else if (is_it_consonant (raw_word[count - 1]) && is_it_vowel (raw_word[count + 1])) {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : CyV");
			}
			// Vwy(a/e/o/u) except when the fist V is an "i"
			else if (is_it_vowel(raw_word[count - 2]) && raw_word[count - 1] == 'w' && (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'e' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u')) {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : Vy(a/e/o/u)");
			}
			// Vy(a/e/o/u) except when the fist V is an "i"
			else if (is_it_vowel(raw_word[count - 1]) && raw_word[count - 1] != 'i' && (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'e' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u')) {
				spt_word += 'y';
				if (raw_word[count - 1] != 'y') {ipa_word += 'ɪ̯';}
				else {ipa_word += 'j';}
				console.log ("raw_word[" + count + "]" + " : Vy(a/e/o/u)");
			}
			// 0y(a/e/o/u)
			else if (raw_word[count - 1] === undefined && (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'e' || raw_word[count + 1] == 'i' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u')) {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : 0y(a/e/o/u)");
			}
			// This one is only to prevent that the next one will return ɪ̯ (so iɪ̯) if the previous vowel is "i"
			/*else if (raw_word[count - 1] == 'i') {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : prevent iɪ̯");
			}*/
			// (a/o)(u/w)y
			else if ((raw_word[count - 2] == 'a' || raw_word[count - 2] == 'o') && (raw_word[count - 1] == 'u' || raw_word[count - 1] == 'w')) {
				spt_word += 'y';
				ipa_word += 'j';
				console.log ("raw_word[" + count + "]" + " : (a/o)(u/w)y");
			}
			else {
				spt_word += 'y';
				ipa_word += 'ɪ̯';
				console.log ("raw_word[" + count + "]" + " : else y");		
			}
			
		}
		
		/***************************************************************
		****************************************************************
		******* B
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'b') {
			spt_word += 'b';
			ipa_word += 'b';
			
			// If it's "bh"
			if (raw_word[count + 1] == 'h') {
					count++; // For jumping the "h"
			}
			else if (raw_word[count + 1] == 'b') {
					count++; // For jumping the "b"
			}
		}
		
		/***************************************************************
		****************************************************************
		******* C
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'c') {
			// c(a/o/u)
			if (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u') {
				spt_word += 'k';
				ipa_word += 'k';
				console.log ("raw_word[" + count + "]" + " : c(a/o/u)");
			}
			// c(e/i/y)
			else if (raw_word[count + 1] == 'e' || raw_word[count + 1] == 'i' || raw_word[count + 1] == 'y') {
				spt_word += 'ts';
				ipa_word += 't͡s';
				console.log ("raw_word[" + count + "]" + " : c(e/i/y)");
			}
			// chC
			else if (raw_word[count + 1] == 'h' && is_it_consonant (raw_word[count + 2])) {
				spt_word += 'k';
				ipa_word += 'k';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : chC");
			}
			// ch(V/0)
			else if (raw_word[count + 1] == 'h') {
				spt_word += 'tc';
				if (raw_word[count + 2] === undefined) { // It seems redundant, but if I allow this even for -chV- words, this "ŧʃ" will mess everything
					ipa_word += 'ŧʃ';
						is_there_bizarre_t = true;					
				}
				else {
					ipa_word += 't͡ʃ';
				}
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : ch(V/0)");
			}
			// ck
			else if (raw_word[count + 1] == 'k') {
				spt_word += 'k';
				ipa_word += 'k';
				count++; // For jumping the "k"
				console.log ("raw_word[" + count + "]" + " : ck");
			}
			// cc(a/o/u/C)
			else if (raw_word[count + 1] == 'c' && (raw_word[count + 2] == 'a' || raw_word[count + 2] == 'o' || raw_word[count + 2] == 'u' || is_it_consonant(raw_word[count + 2]))) {
				spt_word += 'k';
				ipa_word += 'k';
				count++; // For jumping the "c"
				console.log ("raw_word[" + count + "]" + " : cc(a/o/u/C)");
			}
			else {
				spt_word += 'k';
				ipa_word += 'k';
				console.log ("raw_word[" + count + "]" + " : else c");
			}
		}
		/***************************************************************
		****************************************************************
		******* D
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'd') {
			spt_word += 'd';
			ipa_word += 'd';
			
			// If it's "dh"
			if (raw_word[count + 1] == 'h') {
					count++; // For jumping the "h"
			}
			// If it's "dd"
			else if (raw_word[count + 1] == 'd') {
					count++; // For jumping the "d"
			}
		}
		
		/***************************************************************
		****************************************************************
		******* F
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'f') {
			spt_word += 'f';
			ipa_word += 'f';
			
			// If it's "ff"
			if (raw_word[count + 1] == 'f') {
					count++; // For jumping the "f"
			}
		}
		/***************************************************************
		****************************************************************
		******* G
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'g') {
			// g(a/o/u)
			if (raw_word[count + 1] == 'a' || raw_word[count + 1] == 'o' || raw_word[count + 1] == 'u') {
				spt_word += 'g';
				ipa_word += 'g';
			}
			// g(e/i/y)
			else if (raw_word[count + 1] == 'e' || raw_word[count + 1] == 'i' || raw_word[count + 1] == 'y') {
				spt_word += 'dj';
				ipa_word += 'd͡ʒ';
			}
			// gnC. For words like "kohgnt" whose pronunciation is {kO:nyët}
			else if (raw_word[count + 1] == 'n' && is_it_consonant(raw_word[count + 2])) {
				spt_word += 'nyë';
				ipa_word += 'njə';
				count++; // For jumping the "n"
			}
			// gn
			else if (raw_word[count + 1] == 'n') {
				spt_word += 'ny';
				ipa_word += 'nj';
				count++; // For jumping the "n"
			}
			// gh
			else if (raw_word[count + 1] == 'h') {
				spt_word += 'g';
				ipa_word += 'g';
				count++; // For jumping the "h"
			}
			// gg(a/o/u/C/0)
			else if (raw_word[count + 1] == 'g' && (raw_word[count + 2] == 'a' || raw_word[count + 2] == 'o' || raw_word[count + 2] == 'u' || is_it_consonant(raw_word[count + 2]) || raw_word[count + 2] === undefined)) {
				spt_word += 'g';
				ipa_word += 'g';
				count++; // For jumping the "g"
				console.log ("raw_word[" + count + "]" + " : gg(a/o/u/C/0)");
			}
			else {
				spt_word += 'g';
				ipa_word += 'g';
			}
		}
		
		/***************************************************************
		****************************************************************
		******* H
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'h') {
			// VhC
			if (is_it_vowel (raw_word[count - 1]) && is_it_consonant (raw_word[count + 1])) {
				spt_word += ':';
				ipa_word += 'ː';
				console.log ("raw_word[" + count + "]" + " : VhC");
			}
			// Vhe(s)0
			else if (is_it_vowel (raw_word[count - 1]) && raw_word[count + 1] == 'e' && (raw_word[count + 2] === undefined || (raw_word[count + 2] == 's' && raw_word[count + 3] === undefined))) {
				spt_word += ':';
				ipa_word += 'ː';
				console.log ("raw_word[" + count + "]" + " : Vhe0");
			}
			else {
				spt_word += 'h';
				ipa_word += 'h';
				console.log ("raw_word[" + count + "]" + " : ordinary h");
			}
		}
		
		/***************************************************************
		****************************************************************
		******* J
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'j') {
			spt_word += 'j';
			ipa_word += 'ʒ';			
		}
		
		/***************************************************************
		****************************************************************
		******* K
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'k') {
			// kh
			if (raw_word[count + 1] == 'h') {
				spt_word += 'q';
				ipa_word += 'x';
				count++; // For jumping the "h"
			}
			else {
				spt_word += 'k';
				ipa_word += 'k';
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* L
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'l') {
			spt_word += 'l';
			ipa_word += 'l';
			
			// If it's "ll"
			if (raw_word[count + 1] == 'l') {
					count++; // For jumping the "l"
			}
		}
		
		/***************************************************************
		****************************************************************
		******* M
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'm') {
			spt_word += 'm';
			ipa_word += 'm';
			
			// If it's "mm"
			if (raw_word[count + 1] == 'm') {
					count++; // For jumping the "m"
			}
		}
		
		/***************************************************************
		****************************************************************
		******* N
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'n') {
			// IPA nk
			if (raw_word[count + 1] == 'k') {
				spt_word += 'n';
				ipa_word += 'ŋ';
			}
			// IPA ng(0/a/o/u)
			else if (raw_word[count + 1] == 'g' && (raw_word[count + 2] === undefined || is_it_consonant(raw_word[count + 2]) || raw_word[count + 2] == 'a' || raw_word[count + 2] == 'o' || raw_word[count + 2] == 'u')) {
				spt_word += 'n';
				ipa_word += 'ŋ';
			}
			// nn
			else if (raw_word[count + 1] == 'n') {
				spt_word += 'n';
				ipa_word += 'n';
				count++; // For jumping the "n"
			}
			else {
				spt_word += 'n';
				ipa_word += 'n';
			}			
		}
		
		/***************************************************************
		****************************************************************
		******* P
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'p') {
			// kh
			if (raw_word[count + 1] == 'h') {
				spt_word += 'f';
				ipa_word += 'f';
				count++; // For jumping the "h"
			}
			// pp
			else if (raw_word[count + 1] == 'p') {
				spt_word += 'p';
				ipa_word += 'p';
				count++; // For jumping the "p"
			}
			else {
				spt_word += 'p';
				ipa_word += 'p';
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* Q
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'q') {
			// qu(a/o/u)
			if (raw_word[count + 1] == 'u' && (raw_word[count + 2] == 'a' || raw_word[count + 2] == 'o' || raw_word[count + 2] == 'u')) {
				spt_word += 'kw';
				ipa_word += 'kʷ';
				count++; // For jumping the "u"
			}
			// qu(e/i/y)
			else if (raw_word[count + 1] == 'u' && (raw_word[count + 2] == 'e' || raw_word[count + 2] == 'i' || raw_word[count + 2] == 'y')) {
				spt_word += 'k';
				ipa_word += 'k';
				count++; // For jumping the "u"
			}
			else {
				spt_word += '#ERROR#'; // For showing an error, probably caused by incorrect input
				ipa_word += '#ERROR#'; // For showing an error, probably caused by incorrect input
				stress = true; // For preventing that this word enters the phase of correction
				count++; // For jumping the "u"
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* R
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'r') {
			// rV
			if (is_it_vowel (raw_word[count + 1])) {
				spt_word += 'ř';
					is_there_bizarre_r = true;
				ipa_word += 'ʀ';
				console.log ("raw_word[" + count + "]" + " : rV");
			}
			// rrh
			else if (raw_word[count + 1] == 'r' && raw_word[count + 2] == 'h') {
				spt_word += 'řř';
					is_there_bizarre_r = true;
				ipa_word += 'r';
				count++; // For jumping the "r"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : rrh");
			}
			// rr
			else if (raw_word[count + 1] == 'r') {
				spt_word += 'řř';
					is_there_bizarre_r = true;
				ipa_word += 'r';
				count++; // For jumping the "r"
				console.log ("raw_word[" + count + "]" + " : rr");
			}
			// rh
			else if (!(is_it_vowel(raw_word[count - 1])) && raw_word[count + 1] == 'h') {
				spt_word += 'řř';
					is_there_bizarre_r = true;
				ipa_word += 'r';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : rh");
			}
			// Vrh0
			else if (is_it_vowel(raw_word[count - 1]) && raw_word[count + 1] == 'h' && raw_word[count + 2] === undefined) {
				spt_word += 'řř';
					is_there_bizarre_r = true;
				ipa_word += 'r';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : Vrh0");
			}
			// rl
			else if (raw_word[count + 1] == 'l') {
				spt_word += 'rl';
				console.log ("raw_word[" + count + "]" + " : rl");
				if (raw_word[count - 1] === undefined || is_it_consonant (raw_word[count - 1])) { // If it is the first letter of the word or is just after a consonant, it cannot sound like /ʁ/
					// Vhrl
					if (is_it_vowel(raw_word[count - 2]) && raw_word[count - 1] == 'h') {
						ipa_word += 'ʁl';
					}
					// The rest
					else {
						ipa_word += 'ɺ';
					}
				}
				else {
					ipa_word += 'ʁl';
				}				
				count++; // For jumping the "l"				
			}
			// buggy -Vrr0
			else if (is_it_vowel(raw_word[count - 2]) && raw_word[count - 1] == 'r' && raw_word[count + 1] === undefined) {
				spt_word += 'řř';
					is_there_bizarre_r = true;
				ipa_word += 'ʀ';
				console.log ("raw_word[" + count + "]" + " : buggy -Vrr0");
			}
			else {
				console.log ("raw_word[" + count + "]" + " : r");
				// Vhr
				if (is_it_vowel(raw_word[count - 2]) && raw_word[count - 1] == 'h') {
					spt_word += 'r';
					ipa_word += 'ʁ';
				}
				// If it is the first letter of the word or is just after a consonant, it cannot sound like /ʁ/
				else if (raw_word[count - 1] === undefined || is_it_consonant (raw_word[count - 1])) {
					spt_word += 'ř';
						is_there_bizarre_r = true;
					ipa_word += 'ʀ';
				}				
				else {
					spt_word += 'r';
					ipa_word += 'ʁ';
				}
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* S
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 's') {
			// VsV
			if ((is_it_vowel_without_wy (raw_word[count - 1]) || ((is_it_consonant(raw_word[count - 2]) || raw_word[count - 2] == undefined) && raw_word[count - 1] == 'y')) && (is_it_vowel_without_wy (raw_word[count + 1]) || (raw_word[count + 1] == 'y' && (is_it_consonant(raw_word[count + 2]) || raw_word[count + 2] == undefined)))) {
				spt_word += 'z';
				ipa_word += 'z';
				console.log ("raw_word[" + count + "]" + " : VsV");
			}
			// ss
			else if (raw_word[count + 1] == 's') {
				spt_word += 's';
				ipa_word += 's';
				count++; // For jumping the "s"
				console.log ("raw_word[" + count + "]" + " : ss");
			}
			// sh
			else if ((raw_word[count + 1] == 'h')) {
				spt_word += 'x';
				ipa_word += 'ç';
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : sh");
			}
			// sc(a/o/u)
			else if (raw_word[count + 1] == 'c' && (raw_word[count + 2] == 'a' || raw_word[count + 2] == 'o' || raw_word[count + 2] == 'u')) {
				spt_word += 'sk';
				ipa_word += 'sk';
				count++; // For jumping the "c"
				console.log ("raw_word[" + count + "]" + " : sc(a/o/u)");
			}
			// sc(e/i/y)
			else if (raw_word[count + 1] == 'c' && (raw_word[count + 2] == 'e' || raw_word[count + 2] == 'i' || raw_word[count + 2] == 'y')) {
				spt_word += 's';
				ipa_word += 's';
				count++; // For jumping the "c"
				console.log ("raw_word[" + count + "]" + " : sc(e/i/y)");
			}
			// sch
			else if (raw_word[count + 1] == 'c' && raw_word[count + 2] == 'h') {
				spt_word += 'c';
				ipa_word += 'ʃ';
				count++; // For jumping the "c"
				count++; // For jumping the "h"
				console.log ("raw_word[" + count + "]" + " : sch");
			}
			// Vs0
			else if (is_it_vowel (raw_word[count - 1]) && (raw_word[count + 2] === undefined)) {
				spt_word += 's';
				ipa_word += 's';
				console.log ("raw_word[" + count + "]" + " : Vs0");
			}
			// s(w/y)(s)0
			else if ((raw_word[count + 1] == 'w' || raw_word[count + 1] == 'y') && ((raw_word[count + 2] == 's' && raw_word[count + 3] === undefined) || raw_word[count + 2] === undefined))
			{
				spt_word += 'z';
				ipa_word += 'z';
				console.log ("raw_word[" + count + "]" + " : s(w/y)(s)0");
			}
			// (b/g/d)s0
			else if ((raw_word[count - 1] == 'b' || raw_word[count - 1] == 'g' || raw_word[count - 1] == 'd') && raw_word[count + 1] === undefined)
			{
				spt_word += 'z';
				ipa_word += 'z';
				console.log ("raw_word[" + count + "]" + " : (b/g/d)s");
			}
			// xs0
			else if (raw_word[count - 1] == 'x' && raw_word[count + 1] === undefined)
			{
				// Do nothing
				console.log ("raw_word[" + count + "]" + " : xs");
			}
			else {
				spt_word += 's';
				ipa_word += 's';
				console.log ("raw_word[" + count + "]" + " : else s");
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* T
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 't') {
			// th
			if (raw_word[count + 1] == 'h') {
				// (s/c/j)th
				if (raw_word[count - 1] == 's' || raw_word[count - 1] == 'c' || raw_word[count - 1] == 'j') {
					spt_word += 't';
					ipa_word += 't';
					console.log ("raw_word[" + count + "]" + " : (s/c/j)th");
				}
				// ths
				else if (raw_word[count + 2] == 's' && raw_word[count + 3] !== undefined) {
					spt_word += 'ts';
					ipa_word += 't͡s';
					count++; // For jumping the "s". The jumping of the "h" already will be made after this chain of conditions
					console.log ("raw_word[" + count + "]" + " : ths");
				}
				// Ordinary "th"
				else {
					spt_word += '§';
					ipa_word += 'θ';
					console.log ("raw_word[" + count + "]" + " : Ordinary \"th\"");
				}
				count++; // For jumping the "h"
			}
			// tt
			else if (raw_word[count + 1] == 't') {
				spt_word += 't';
				ipa_word += 't';
				count++; // For jumping the "t"
			}
			// Ordinary "t"
			else {
				spt_word += 't';
				ipa_word += 't';
				console.log ("raw_word[" + count + "]" + " : t");
			}					
		}
		
		/***************************************************************
		****************************************************************
		******* V
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'v') {
			// vv
			if (raw_word[count + 1] == 'v') {
				spt_word += 'v';
				ipa_word += 'v';
				count++; // For jumping the "v"
			}
			else {
				spt_word += 'v';
				ipa_word += 'v';
			}
		}
		
		/***************************************************************
		****************************************************************
		******* X
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'x') {
			spt_word += 'ks';
			ipa_word += 'ks';
		}
		
		/***************************************************************
		****************************************************************
		******* Z
		****************************************************************
		***************************************************************/
	
		else if (raw_word[count] == 'z') {
			spt_word += 'dz';
			ipa_word += 'dz';
			
			// If it's "zz"
			if (raw_word[count + 1] == 'z') {
					count++; // For jumping the "z"
			}
		}
		
		/***************************************************************
		****************************************************************
		******* FALLBACK
		****************************************************************
		***************************************************************/
		
		else {
			spt_word += "";
		}
		
		// console.log ("> raw_word[" + count + "]" + " = the value of stress is " + stress);
	}
	
	if (!stress) {console.log(word + " has no stressed vowel");}
	if (is_there_more_than_one_vowel_ignoring_last_e (word)) {console.log(word + " DO has more than one vowel ignoring last non pronounced e");}
	else {console.log(word + " has NO more than one vowel ignoring last non pronounced e");}
	
	// Let's remove any "ů" from our SPT transcription
	if (is_there_bizarre_u && !(!(stress) && ((is_there_more_than_one_vowel_ignoring_last_e (word)) || is_there_an_au))) {
		console.log ("#> spt_word " + spt_word + " has an ů and will not go to the correction phase");
		spt_word_length = spt_word.length;
		spt_word = spt_word.split("");
		for (var count = 0; count <= (spt_word_length - 1) ; count++) {
			if (spt_word[count] == 'ů') {
				spt_word[count] = 'u';
			}
		}
		is_there_bizarre_u = false;
		spt_word = spt_word.join("");
	}
	
	// Let's remove any "ř" from our SPT transcription
	if (is_there_bizarre_r && !(!(stress) && ((is_there_more_than_one_vowel_ignoring_last_e (word)) || is_there_an_au))) {
		console.log ("#> spt_word " + spt_word + " has an ř and will not go to the correction phase");
		spt_word_length = spt_word.length;
		spt_word = spt_word.split("");
		for (var count = 0; count <= (spt_word_length - 1) ; count++) {
			if (spt_word[count] == 'ř') {
				spt_word[count] = 'r';
			}
		}
		is_there_bizarre_u = false;
		spt_word = spt_word.join("");
	}
	
	
	/***************************************************************
	****************************************************************
	****************************************************************
	******* CORRECTION PHASE
	****************************************************************
	****************************************************************
	***************************************************************/
	
	if (!(stress) && ((is_there_more_than_one_vowel_ignoring_last_e (word)) || is_there_an_au))
	{
		console.log ("## The word " + word + " entered the correction phase ##");
		spt_word_length = spt_word.length;
		ipa_word_length = ipa_word.length;		
		
		/***************************************************************
		****************************************************************
		******* SPT_WORD
		****************************************************************
		***************************************************************/
		
		spt_word = spt_word.split(""); // We need to split the variable "spt_word"
		console.log ("It\'s current SPT name is " + spt_word + " whose length is " + spt_word_length);
		
		for (var count = (spt_word_length - 1); count >= 0 ; count--) {
			
			if (is_it_vowel(spt_word[count]) && (spt_word[count + 1] === undefined || (spt_word[count + 1] == 's' && spt_word[count + 2] === undefined))) {
				console.log ("spt_word[" + count + "]" + " : this is the last vowel of the word");
				// Do nothing
			}
			else {
				if (spt_word[count] == 'a' && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'A';
					console.log ("#Correction: spt_word[" + count + "]" + " : A");
					break;
				}
				else if (spt_word[count] == 'ä' && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'Ä';
					console.log ("#Correction: spt_word[" + count + "]" + " : Ä");
					break;
				}
				else if (spt_word[count] == 'e' && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'E';
					console.log ("#Correction: spt_word[" + count + "]" + " : E");
					break;
				}
				else if (spt_word[count] == 'ë' && /*en(s)0*/!(spt_word[count + 1] == 'n' && (spt_word[count + 2] === undefined || (spt_word[count + 2] == 's' && spt_word[count + 3] === undefined))) && !(spt_word[count + 1] == ')' && /*0/s0*/(spt_word[count + 2] === undefined || (spt_word[count + 2] == 's' && spt_word[count + 3] === undefined))) && /*s0*/!(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && /*-Cw0*/!(is_it_consonant(spt_word[count + 1]) && spt_word[count + 2] == 'w' && spt_word[count + 3] === undefined) && /*-CCw0*/!(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && spt_word[count + 3] == 'w' && spt_word[count + 4] === undefined) && /*-CCCw0*/!(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && is_it_consonant(spt_word[count + 3]) && spt_word[count +4] == 'w' && spt_word[count + 5] === undefined) && /*eC(s)0*/!(is_it_consonant(spt_word[count + 1]) && (spt_word[count + 1] != spt_word[count + 2] /*to avoid -ess*/) && (spt_word[count + 2] === undefined || ((spt_word[count + 2] == 's' || ((spt_word[count + 1] == 'b' || spt_word[count + 1] == 'g' || spt_word[count + 1] == 'd') && spt_word[count + 2] == 'z')) && spt_word[count + 3] === undefined))) && /*eCC(s)0*/!(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && (spt_word[count + 1] != spt_word[count + 2]) && (spt_word[count + 3] === undefined || ((spt_word[count + 3] == 's' || ((spt_word[count + 2] == 'b' || spt_word[count + 2] == 'g' || spt_word[count + 2] == 'd') && spt_word[count + 3] == 'z')) && spt_word[count + 4] === undefined))) && /*eCCC(s)0*/!(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && is_it_consonant(spt_word[count + 3]) && !(spt_word[count + 1] == spt_word[count + 2] || spt_word[count + 2] == spt_word[count + 3]) && (spt_word[count + 4] === undefined || ((spt_word[count + 4] == 's' || ((spt_word[count + 3] == 'b' || spt_word[count + 3] == 'g' || spt_word[count + 3] == 'd') && spt_word[count + 4] == 'z')) && spt_word[count + 5] === undefined))) && /*et(s)0*/!(spt_word[count + 1] == 't' && (spt_word[count + 2] === undefined || (spt_word[count + 3] === 's' && spt_word[count + 4] === undefined))) && /*er(s)0*/!(spt_word[count + 1] == 'r' && (spt_word[count + 2] === undefined || (spt_word[count + 2] == 's' && spt_word[count + 3] === undefined))) && /*el(s)0*/!(spt_word[count + 1] == 'l' && (spt_word[count + 2] === undefined || (spt_word[count + 2] == 's' && spt_word[count + 3] === undefined))) && /*ew(s)0*/!(spt_word[count + 1] == 'w' && (spt_word[count + 2] === undefined || (spt_word[count + 2] == 's' && spt_word[count + 3] === undefined))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'E';
					console.log ("#Correction: spt_word[" + count + "]" + " : ë->E");
					break;
				}
				else if (spt_word[count] == 'i' && !(spt_word[count - 1] == 'a') && !(spt_word[count + 1] == 'n' && spt_word[count + 2] == 'g') && !(is_it_consonant(spt_word[count + 1]) && spt_word[count + 2] === undefined) && !(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && spt_word[count + 3] === undefined) && !(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && is_it_consonant(spt_word[count + 3]) && spt_word[count + 4] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'I';
					console.log ("#Correction: spt_word[" + count + "]" + " : I");
					break;
				}
				else if (spt_word[count] == 'o' && !(spt_word[count - 1] == 'e') && !(spt_word[count - 1] == 'a') && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'O';
					console.log ("#Correction: spt_word[" + count + "]" + " : O");
					break;
				}
				else if (spt_word[count] == 'ö' && !(spt_word[count - 1] == 'e') && !(spt_word[count - 1] == 'a') && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'Ö';
					console.log ("#Correction: spt_word[" + count + "]" + " : Ö");
					break;
				}
				else if (spt_word[count] == 'u' && !(spt_word[count - 1] == 'a') && !(spt_word[count - 1] == 'e') && !(spt_word[count - 1] == 'o') && !(spt_word[count + 1] == 'm' && spt_word[count + 2] === undefined) && !(spt_word[count + 1] == 's' && spt_word[count + 2] === undefined) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'U';
					console.log ("#Correction: spt_word[" + count + "]" + " : U");
					break;
				}
				else if (spt_word[count] == 'ü' && !(spt_word[count - 1] == 'a') && !(is_it_consonant(spt_word[count + 1]) && spt_word[count + 2] === undefined) && !(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && spt_word[count + 3] === undefined) && !(is_it_consonant(spt_word[count + 1]) && is_it_consonant(spt_word[count + 2]) && is_it_consonant(spt_word[count + 3]) && spt_word[count + 4] === undefined) && !(spt_word[count + 1] == 'm' && (spt_word[count + 3] == 'n' || spt_word[count + 4] == 'n') && (spt_word[count + 4] == 't' || spt_word[count + 5] == 't') && (((spt_word[count + 5] == 's' || spt_word[count + 6] == 's') && (spt_word[count + 6] === undefined || spt_word[count + 7] === undefined)) || (spt_word[count + 4] === undefined || spt_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(spt_word[count - 2]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 4]))) && /*-ment*/ !((is_it_vowel(spt_word[count - 5]) || is_it_vowel(spt_word[count - 4]) || is_it_vowel(spt_word[count - 3]) || is_it_vowel(spt_word[count - 2])) && (spt_word[count + 1] == 'm' || spt_word[count + 1] == 'w') && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n' && spt_word[count + 4] == 't' && (spt_word[count + 5] === undefined || (spt_word[count + 5] == 's' && spt_word[count + 6] === undefined))))
				{
					spt_word[count] = 'Ü';
					console.log ("#Correction: spt_word[" + count + "]" + " : Ü");
					break;
				}
				// For -uwen words
				else if (spt_word[count] == 'ü' && spt_word[count + 1] == 'w' && spt_word[count + 2] == 'ë' && spt_word[count + 3] == 'n')
				{
					spt_word[count] = 'Ü';
					console.log ("#Correction: spt_word[" + count + "]" + " : ...uwen...");
					break;
				}
				else
				{
					spt_word[count] = spt_word[count];
				}
			}			
		}
		
		// Let's remove any "ů" from our SPT transcription
		if (is_there_bizarre_u) {
			console.log ("#> spt_word " + spt_word + " has an ů");
			spt_word = spt_word.join("");
			spt_word_length = spt_word.length;
			spt_word = spt_word.split("");
			for (var count = 0; count <= (spt_word_length - 1) ; count++) {
				if (spt_word[count] == 'ů') {
					spt_word[count] = 'u';
				}
			}
		}
		
		// Let's remove any "ř" from our SPT transcription
		if (is_there_bizarre_r) {
			console.log ("#> spt_word " + spt_word + " has an ř");
			spt_word = spt_word.join("");
			spt_word_length = spt_word.length;
			spt_word = spt_word.split("");
			for (var count = 0; count <= (spt_word_length - 1) ; count++) {
				if (spt_word[count] == 'ř') {
					spt_word[count] = 'r';
				}
			}
		}
		
		//Now we join back the variable "spt_word"
		spt_word = spt_word.join("");
		
		/***************************************************************
		****************************************************************
		******* IPA_WORD
		****************************************************************
		***************************************************************/
		
		ipa_word = ipa_word.split(""); // We need to split the variable "spt_word"
		console.log ("It\'s current IPA name is " + ipa_word + " whose length is " + ipa_word_length);
		
		for (var count = (ipa_word_length - 1); count >= 0 ; count--) {
			
			if (is_it_vowel(ipa_word[count]) && (ipa_word[count + 1] === undefined || (ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined))) {
				console.log ("ipa_word[" + count + "]" + " : this is the last vowel of the word");
				// Do nothing
			}
			else {
				if ((ipa_word[count] == 'a' || ipa_word[count] == 'ɐ') && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>a</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : a");
					break;
				}
				else if ((ipa_word[count] == 'ɛ') && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>ɛ</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : ɛ");
					break;
				}
				else if (ipa_word[count] == 'e' && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>e</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : e");
					break;
				}
				else if (ipa_word[count] == 'ə' && /*en(s)0*/!(ipa_word[count + 1] == 'n' && (ipa_word[count + 2] === undefined || (ipa_word[count + 2] == 's' && ipa_word[count + 3] === undefined))) && /*)(s)*/!(ipa_word[count + 1] == ')' && (ipa_word[count + 2] === undefined || (ipa_word[count + 2] == 's' && ipa_word[count + 3] === undefined))) && /*s*/!(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined)  && /*-Cw0*/!(is_it_consonant(ipa_word[count + 1]) && (ipa_word[count + 2] == 'ʊ' && raw_word[word_length - 1] == 'w') && ipa_word[count + 3] === undefined) && /*-CCw0*/!(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && (ipa_word[count + 3] == 'ʊ' && raw_word[word_length - 1] == 'w') && ipa_word[count + 4] === undefined) && /*-CCCw0*/!(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && is_it_consonant(ipa_word[count + 3]) && (ipa_word[count + 4] == 'ʊ' && raw_word[word_length - 1] == 'w') && ipa_word[count + 5] === undefined) && /*eC(s)0*/!(is_it_consonant(ipa_word[count + 1]) && (ipa_word[count + 1] != ipa_word[count + 2] /*to avoid -ess*/) && (ipa_word[count + 2] === undefined || ((ipa_word[count + 2] == 's' || ((ipa_word[count + 1] == 'b' || ipa_word[count + 1] == 'g' || ipa_word[count + 1] == 'd') && ipa_word[count + 2] == 'z')) && ipa_word[count + 3] === undefined))) && /*eCC(s)0*/!(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && (ipa_word[count + 1] != ipa_word[count + 2]) && (ipa_word[count + 3] === undefined || ((ipa_word[count + 3] == 's' || ((ipa_word[count + 2] == 'b' || ipa_word[count + 2] == 'g' || ipa_word[count + 2] == 'd') && ipa_word[count + 3] == 'z')) && ipa_word[count + 4] === undefined))) && /*eCCC(s)0*/!(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && is_it_consonant(ipa_word[count + 3]) && !(ipa_word[count + 1] == ipa_word[count + 2] || ipa_word[count + 2] == ipa_word[count + 3]) && (ipa_word[count + 4] === undefined || ((ipa_word[count + 4] == 's' || ((ipa_word[count + 3] == 'b' || ipa_word[count + 3] == 'g' || ipa_word[count + 3] == 'd') && ipa_word[count + 4] == 'z')) && ipa_word[count + 5] === undefined))) && /*et(s)0*/!(ipa_word[count + 1] == 't' && (ipa_word[count + 2] === undefined || (ipa_word[count + 3] === 's' && ipa_word[count + 4] === undefined))) && /*er(s)0*/!(ipa_word[count + 1] == 'ʁ' && (ipa_word[count + 2] === undefined || (ipa_word[count + 2] == 's' && ipa_word[count + 3] === undefined))) && /*el(s)0*/!(ipa_word[count + 1] == 'l' && (ipa_word[count + 2] === undefined || (ipa_word[count + 2] == 's' && ipa_word[count + 3] === undefined))) && /*ew(s)0*/!((raw_word[word_length - 1] == "w" && (count == (ipa_word_length - 3))) || (raw_word[word_length - 2] == "w" && raw_word[word_length - 1] == "s")) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>e</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : ə->e");
					break;
				}
				else if (ipa_word[count] == 'i' && !(ipa_word[count - 1] == 'a') && !(ipa_word[count + 1] == 'n' && ipa_word[count + 2] == 'g') && !(is_it_consonant(ipa_word[count + 1]) && ipa_word[count + 2] === undefined) && !(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && ipa_word[count + 3] === undefined) && !(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && is_it_consonant(ipa_word[count + 3]) && ipa_word[count + 4] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>i</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : I");
					break;
				}
				else if (ipa_word[count] == 'o' && !(ipa_word[count - 1] == 'e') && !(ipa_word[count - 1] == 'a') && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>o</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : o");
					break;
				}
				else if (ipa_word[count] == 'ø' && !(ipa_word[count - 1] == 'e') && !(ipa_word[count - 1] == 'a') && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>ø</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : ø");
					break;
				}
				else if (ipa_word[count] == 'u' && !(ipa_word[count - 1] == 'a') && !(ipa_word[count - 1] == 'e') && !(ipa_word[count - 1] == 'o') && !(ipa_word[count + 1] == 'm' && ipa_word[count + 2] === undefined) && !(ipa_word[count + 1] == 's' && ipa_word[count + 2] === undefined) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>u</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : u");
					break;
				}
				else if (ipa_word[count] == 'y' && !(ipa_word[count - 1] == 'a') && !(is_it_consonant(ipa_word[count + 1]) && ipa_word[count + 2] === undefined) && !(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && ipa_word[count + 3] === undefined) && !(is_it_consonant(ipa_word[count + 1]) && is_it_consonant(ipa_word[count + 2]) && is_it_consonant(ipa_word[count + 3]) && ipa_word[count + 4] === undefined) && !(ipa_word[count + 1] == 'm' && (ipa_word[count + 3] == 'n' || ipa_word[count + 4] == 'n') && (ipa_word[count + 4] == 't' || ipa_word[count + 5] == 't') && (((ipa_word[count + 5] == 's' || ipa_word[count + 6] == 's') && (ipa_word[count + 6] === undefined || ipa_word[count + 7] === undefined)) || (ipa_word[count + 4] === undefined || ipa_word[count + 6] === undefined)) && ((raw_word[raw_word.strlen - 4] == 'm' && raw_word[raw_word.strlen - 3] == 'e' && raw_word[raw_word.strlen - 2] == 'n' && raw_word[raw_word.strlen - 1] == 't') || (raw_word[raw_word.strlen - 5] == 'm' && raw_word[raw_word.strlen - 4] == 'e' && raw_word[raw_word.strlen - 3] == 'n' && raw_word[raw_word.strlen - 2] == 't' && raw_word[raw_word.strlen - 1] == 's')) && (is_it_vowel(ipa_word[count - 2]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 4]))) && /*-ment*/ !((is_it_vowel(ipa_word[count - 5]) || is_it_vowel(ipa_word[count - 4]) || is_it_vowel(ipa_word[count - 3]) || is_it_vowel(ipa_word[count - 2])) && (ipa_word[count + 1] == 'm' || ipa_word[count + 1] == 'w') && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n' && ipa_word[count + 4] == 't' && (ipa_word[count + 5] === undefined || (ipa_word[count + 5] == 's' && ipa_word[count + 6] === undefined))))
				{
					ipa_word[count] = '<strong><u>y</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : y");
					break;
				}
				// For -uwen words
				else if (ipa_word[count] == 'y' && ipa_word[count + 1] == 'w' && ipa_word[count + 2] == 'ə' && ipa_word[count + 3] == 'n')
				{
					ipa_word[count] = '<strong><u>y</u></strong>';
					console.log ("#Correction: ipa_word[" + count + "]" + " : ...uwen...");
					break;
				}
				else
				{
					ipa_word[count] = ipa_word[count];
				}
			}			
		}
		
		// Let's remove any "ŧʃ" from our SPT transcription
		if (is_there_bizarre_t) {
			console.log ("#> ipa_word " + ipa_word + " has an ŧʃ");
			ipa_word = ipa_word.join("");
			ipa_word_length = ipa_word.length;
			ipa_word = ipa_word.split("");
			for (var count = 0; count <= (ipa_word_length - 1) ; count++) {
				if (ipa_word[count] == 'ŧ' && ipa_word[count + 1] == 'ʃ') {
					ipa_word[count + 1] = '\0';
					ipa_word[count] = '\0';
					ipa_word = ipa_word.join("");
					ipa_word += "t͡ʃ";
					ipa_word = ipa_word.split("");
				}
			}
		}
		
		//Now we join back the variable "ipa_word"
		ipa_word = ipa_word.join("");
	}
	
	/***************************************************************
	****************************************************************
	******* MANUAL CORRECTIONS
	****************************************************************
	***************************************************************/
	
	if (word == "abghend") {
	console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
	spt_word = "abgEnd";
	ipa_word = "abg<strong><u>e</u></strong>nd";
	}
	else if (word == "abghends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "abgEndz";
		ipa_word = "abg<strong><u>e</u></strong>ndz";
	}
	else if (word == "abghens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "abgEns";
		ipa_word = "abg<strong><u>e</u></strong>ns";
	}
	else if (word == "abject") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "abjEkt";
		ipa_word = "abʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "absect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "abzEkt";
		ipa_word = "abz<strong><u>e</u></strong>kt";
	}
	else if (word == "absent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "absEnt";
		ipa_word = "abs<strong><u>e</u></strong>nt";
	}
	else if (word == "absents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "absEnts";
		ipa_word = "abs<strong><u>e</u></strong>nts";
	}
	else if (word == "addic") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "adIk";
		ipa_word = "ad<strong><u>i</u></strong>k";
	}
	else if (word == "addics") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "adIks";
		ipa_word = "ad<strong><u>i</u></strong>ks";
	}
	else if (word == "addict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "adIkt";
		ipa_word = "ad<strong><u>i</u></strong>kt";
	}
	else if (word == "adhes") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "adEs";
		ipa_word = "ad<strong><u>e</u></strong>s";
	}
	else if (word == "adhest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "adEst";
		ipa_word = "ad<strong><u>e</u></strong>st";
	}
	else if (word == "affec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "afEk";
		ipa_word = "af<strong><u>e</u></strong>k";
	}
	else if (word == "affecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "afEks";
		ipa_word = "af<strong><u>e</u></strong>ks";
	}
	else if (word == "affect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "afEkt";
		ipa_word = "af<strong><u>e</u></strong>kt";
	}
	else if (word == "aflics") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aflIks";
		ipa_word = "afl<strong><u>i</u></strong>ks";
	}
	else if (word == "aflict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aflIkt";
		ipa_word = "afl<strong><u>i</u></strong>kt";
	}
	else if (word == "aflig") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aflIg";
		ipa_word = "afl<strong><u>i</u></strong>g";
	}
	else if (word == "africa") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Afrika";
		ipa_word = "<strong><u>a</u></strong>fʀɪkɐ";
	}
	else if (word == "africas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Afrikas";
		ipa_word = "<strong><u>a</u></strong>fʀɪkɐs";
	}
	else if (word == "agrement") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "agrEmënt";
		ipa_word = "agʀ<strong><u>e</u></strong>mənt";
	}
	else if (word == "agrements") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "agrEmënts";
		ipa_word = "agʀ<strong><u>e</u></strong>mənts";
	}
	else if (word == "alecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "alEks";
		ipa_word = "al<strong><u>e</u></strong>ks";
	}
	else if (word == "alect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "alEkt";
		ipa_word = "al<strong><u>e</u></strong>kt";
	}
	else if (word == "aleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "alEg";
		ipa_word = "al<strong><u>e</u></strong>g";
	}
	else if (word == "allus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "alUs";
		ipa_word = "al<strong><u>u</u></strong>s";
	}
	else if (word == "america") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "amErika";
		ipa_word = "am<strong><u>e</u></strong>ʀikɐ";
	}
	else if (word == "americas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "amErikas";
		ipa_word = "am<strong><u>e</u></strong>ʀikɐs";
	}
	else if (word == "americas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "amErikas";
		ipa_word = "am<strong><u>e</u></strong>ʀikɐs";
	}
	else if (word == "annect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "anEkt";
		ipa_word = "an<strong><u>e</u></strong>kt";
	}
	else if (word == "annects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "anEkts";
		ipa_word = "an<strong><u>e</u></strong>kts";
	}
	else if (word == "annex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "anEks";
		ipa_word = "an<strong><u>e</u></strong>ks";
	}
	else if (word == "antigen") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "antidjEn";
		ipa_word = "antid͡ʒ<strong><u>e</u></strong>n";
	}
	else if (word == "antigens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "antidjEns";
		ipa_word = "antid͡ʒ<strong><u>e</u></strong>ns";
	}
	else if (word == "antichrist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "antikrIst";
		ipa_word = "antikʀ<strong><u>i</u></strong>st";
	}
	else if (word == "antichrists") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "antikrIsts";
		ipa_word = "antikʀ<strong><u>i</u></strong>sts";
	}
	else if (word == "anvers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "anvErs";
		ipa_word = "anv<strong><u>e</u></strong>ʁs";
	}
	else if (word == "anverst") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "anvErst";
		ipa_word = "anv<strong><u>e</u></strong>ʁst";
	}
	else if (word == "arguments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "argÜmënts";
		ipa_word = "aʁg<strong><u>y</u></strong>mənts";
	}
	else if (word == "arrest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "arrEst";
		ipa_word = "ar<strong><u>e</u></strong>st";
	}
	else if (word == "arrests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "arrEsts";
		ipa_word = "ar<strong><u>e</u></strong>sts";
	}
	else if (word == "ascend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asEnd";
		ipa_word = "as<strong><u>e</u></strong>nd";
	}
	else if (word == "ascends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asEndz";
		ipa_word = "as<strong><u>e</u></strong>ndz";
	}
	else if (word == "ascens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asEns";
		ipa_word = "as<strong><u>e</u></strong>ns";
	}
	else if (word == "aspercs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aspErks";
		ipa_word = "asp<strong><u>e</u></strong>rks";
	}
	else if (word == "asperg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aspErg";
		ipa_word = "asp<strong><u>e</u></strong>rg";
	}
	else if (word == "aspers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "aspErs";
		ipa_word = "asp<strong><u>e</u></strong>rs";
	}
	else if (word == "assist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asIst";
		ipa_word = "as<strong><u>i</u></strong>st";
	}
	else if (word == "assortiment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asortImënt";
		ipa_word = "asoʁt<strong><u>i</u></strong>mənt";
	}
	else if (word == "assortiments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "asortImënts";
		ipa_word = "asoʁt<strong><u>i</u></strong>mənts";
	}
	else if (word == "autobus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Aotobus";
		ipa_word = "<strong><u>a</u></strong>ʊ̯tobus";
	}
	else if (word == "b") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "be";
		ipa_word = "be";
	}
	else if (word == "bahia") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "baIa";
		ipa_word = "ba<strong><u>i</u></strong>a";
	}
	else if (word == "bahian") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bayAn";
		ipa_word = "baɪ̯<strong><u>a</u></strong>n";
	}
	else if (word == "bahias") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "baIas";
		ipa_word = "ba<strong><u>i</u></strong>as";
	}
	else if (word == "bayghtiwent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bAygtiwënt";
		ipa_word = "b<strong><u>a</u></strong>ɪ̯gtiwənt";
	}
	else if (word == "becep") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëtsEp";
		ipa_word = "bət͡s<strong><u>e</u></strong>p";
	}
	else if (word == "beceps") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëtsEps";
		ipa_word = "bət͡s<strong><u>e</u></strong>ps";
	}
	else if (word == "becept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëtsEpt";
		ipa_word = "bət͡s<strong><u>e</u></strong>pt";
	}
	else if (word == "beklas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëklAs";
		ipa_word = "bəkl<strong><u>a</u></strong>s";
	}
	else if (word == "beethoven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bE:tho:fën";
		ipa_word = "b<strong><u>e</u></strong>ːthoːfən";
	}
	else if (word == "beethovens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bE:tho:fëns";
		ipa_word = "b<strong><u>e</u></strong>ːthoːfəns";
	}
	else if (word == "befrect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëfrEkt";
		ipa_word = "bəfʀ<strong><u>e</u></strong>kt";
	}
	else if (word == "befrects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëfrEkts";
		ipa_word = "bəfʀ<strong><u>e</u></strong>kts";
	}
	else if (word == "befrex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëfrEks";
		ipa_word = "bəfʀ<strong><u>e</u></strong>ks";
	}
	else if (word == "beghsses") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëgsEs";
		ipa_word = "bəgs<strong><u>e</u></strong>s";
	}
	else if (word == "bellzebub") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "beldzëbUb";
		ipa_word = "beldzəb<strong><u>u</u></strong>b";
	}
	else if (word == "bemild") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëmIld";
		ipa_word = "bəm<strong><u>i</u></strong>ld";
	}
	else if (word == "bemilds") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëmIldz";
		ipa_word = "bəm<strong><u>i</u></strong>ldz";
	}
	else if (word == "bemils") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëmIls";
		ipa_word = "bəm<strong><u>i</u></strong>ls";
	}
	else if (word == "bepelp") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëpElp";
		ipa_word = "bəp<strong><u>e</u></strong>lp";
	}
	else if (word == "bepelps") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëpElps";
		ipa_word = "bəp<strong><u>e</u></strong>lps";
	}
	else if (word == "berect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bërEkt";
		ipa_word = "bəʀ<strong><u>e</u></strong>kt";
	}
	else if (word == "bergwntia") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bErguntya";
		ipa_word = "b<strong><u>e</u></strong>ʁgʊntja";
	}
	else if (word == "bergwntias") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bErguntyas";
		ipa_word = "b<strong><u>e</u></strong>ʁgʊntjas";
	}
	else if (word == "birmingham") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bËrmingëm";
		ipa_word = "b<strong><u>ɜ</u></strong>ʁmɪŋəm";
	}
	else if (word == "birminghams") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bËrmingëms";
		ipa_word = "b<strong><u>ɜ</u></strong>ʁmɪŋəms";
	}
	else if (word == "beursindex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bÖrsindëks";
		ipa_word = "b<strong><u>ø</u></strong>ʁsindəks";
	}
	else if (word == "bevid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëvId";
		ipa_word = "bəv<strong><u>i</u></strong>d";
	}
	else if (word == "bevids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëvIdz";
		ipa_word = "bəv<strong><u>i</u></strong>dz";
	}
	else if (word == "bevidt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëvIdt";
		ipa_word = "bəv<strong><u>i</u></strong>dt";
	}
	else if (word == "bevis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bëvIs";
		ipa_word = "bəv<strong><u>i</u></strong>s";
	}
	else if (word == "bingen") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bIngën";
		ipa_word = "b<strong><u>i</u></strong>ngən";
	}
	else if (word == "bip") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "be i pe";
		ipa_word = "be i pe";
	}
	else if (word == "boston") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bOstën";
		ipa_word = "b<strong><u>ɔ</u></strong>stən";
	}
	else if (word == "bostons") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bOstëns";
		ipa_word = "b<strong><u>ɔ</u></strong>stəns";
	}
	else if (word == "budapest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bUdapäct";
		ipa_word = "b<strong><u>u</u></strong>dɐpɛʃt";
	}
	else if (word == "budapests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "bUdapäcts";
		ipa_word = "b<strong><u>u</u></strong>dɐpɛʃts";
	}
	else if (word == "c") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tse";
		ipa_word = "t͡se";
	}
	else if (word == "canada") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kAnada";
		ipa_word = "k<strong><u>a</u></strong>nɐdɐ";
	}
	else if (word == "canadas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kAnadas";
		ipa_word = "k<strong><u>a</u></strong>nɐdɐs";
	}
	else if (word == "circumven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tsirkumvEn";
		ipa_word = "t͡siʁkumv<strong><u>e</u></strong>n";
	}
	else if (word == "circumvens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tsirkumvEns";
		ipa_word = "t͡siʁkumv<strong><u>e</u></strong>ns";
	}
	else if (word == "circumvent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tsirkumvEnt";
		ipa_word = "t͡siʁkumv<strong><u>e</u></strong>nt";
	}
	else if (word == "coincid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "koyntsId";
		ipa_word = "koɪ̯nt͡s<strong><u>i</u></strong>d";
	}
	else if (word == "coincids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "koyntsIdz";
		ipa_word = "koɪ̯nt͡s<strong><u>i</u></strong>dz";
	}
	else if (word == "coincidt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "koyntsIdt";
		ipa_word = "koɪ̯nt͡s<strong><u>i</u></strong>dt";
	}
	else if (word == "coincis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "koyntsIs";
		ipa_word = "koɪ̯nt͡s<strong><u>i</u></strong>s";
	}
	else if (word == "collecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kolEks";
		ipa_word = "kol<strong><u>e</u></strong>ks";
	}
	else if (word == "collect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kolEkt";
		ipa_word = "kol<strong><u>e</u></strong>kt";
	}
	else if (word == "colleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kolEg";
		ipa_word = "kol<strong><u>e</u></strong>g";
	}
	else if (word == "complement") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komplEmënt";
		ipa_word = "kompl<strong><u>e</u></strong>mənt";
	}
	else if (word == "complements") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komplEmënts";
		ipa_word = "kompl<strong><u>e</u></strong>mənts";
	}
	else if (word == "compliment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komplImënt";
		ipa_word = "kompl<strong><u>i</u></strong>mənt";
	}
	else if (word == "compliments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komplImënts";
		ipa_word = "kompl<strong><u>i</u></strong>mənts";
	}
	else if (word == "comprehend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komprëhEnd";
		ipa_word = "kompʀəh<strong><u>e</u></strong>nd";
	}
	else if (word == "comprehends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komprëhEnds";
		ipa_word = "kompʀəh<strong><u>e</u></strong>nds";
	}
	else if (word == "comprehendt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komprëhEndt";
		ipa_word = "kompʀəh<strong><u>e</u></strong>ndt";
	}
	else if (word == "comprehens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "komprëhEns";
		ipa_word = "kompʀəh<strong><u>e</u></strong>ns";
	}
	else if (word == "concept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kon(t)sEpt";
		ipa_word = "kont͡s<strong><u>e</u></strong>pt";
	}
	else if (word == "concepts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kon(t)sEpts";
		ipa_word = "kont͡s<strong><u>e</u></strong>pts";
	}
	else if (word == "concern") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontsErn";
		ipa_word = "kont͡s<strong><u>e</u></strong>ʁn";
	}
	else if (word == "concerns") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontsErns";
		ipa_word = "kont͡s<strong><u>e</u></strong>ʁns";
	}
	else if (word == "conclus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konklUs";
		ipa_word = "konkl<strong><u>u</u></strong>s";
	}
	else if (word == "concil") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontsIl";
		ipa_word = "kont͡s<strong><u>i</u></strong>l";
	}
	else if (word == "concils") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontsIls";
		ipa_word = "kont͡s<strong><u>i</u></strong>ls";
	}
	else if (word == "condiment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kondImënt";
		ipa_word = "kond<strong><u>i</u></strong>mənt";
	}
	else if (word == "condiments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kondImënts";
		ipa_word = "kond<strong><u>i</u></strong>mənts";
	}
	else if (word == "confer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konfEr";
		ipa_word = "konf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "confers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konfErs";
		ipa_word = "konf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "confert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konfErt";
		ipa_word = "konf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "conflict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konflIkt";
		ipa_word = "konfl<strong><u>i</u></strong>kt";
	}
	else if (word == "conflicts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konflIkts";
		ipa_word = "konfl<strong><u>i</u></strong>kts";
	}
	else if (word == "confus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konfUs";
		ipa_word = "konf<strong><u>u</u></strong>s";
	}
	else if (word == "connecticut") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kënÄtikët";
		ipa_word = "kən<strong><u>ɛ</u></strong>tɪkət";
	}
	else if (word == "connecticuts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kënÄtikëts";
		ipa_word = "kən<strong><u>ɛ</u></strong>tɪkəts";
	}
	else if (word == "connex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "konEks";
		ipa_word = "kon<strong><u>e</u></strong>ks";
	}
	else if (word == "contradic") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontradIk";
		ipa_word = "kontʀɐd<strong><u>i</u></strong>k";
	}
	else if (word == "contradics") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontradIks";
		ipa_word = "kontʀɐd<strong><u>i</u></strong>ks";
	}
	else if (word == "contradict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontradIkt";
		ipa_word = "kontʀɐd<strong><u>i</u></strong>kt";
	}
	else if (word == "contraven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontravEn";
		ipa_word = "kontʀɐv<strong><u>e</u></strong>n";
	}
	else if (word == "contravens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontravEns";
		ipa_word = "kontʀɐv<strong><u>e</u></strong>ns";
	}
	else if (word == "contravent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontravEnt";
		ipa_word = "kontʀɐv<strong><u>e</u></strong>nt";
	}
	else if (word == "controvers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kontrovErs";
		ipa_word = "kontʀov<strong><u>e</u></strong>ʁs";
	}
	else if (word == "correcs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "korrEks";
		ipa_word = "kor<strong><u>e</u></strong>ks";
	}
	else if (word == "correct") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "korrEkt";
		ipa_word = "kor<strong><u>e</u></strong>kt";
	}
	else if (word == "correg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "korrEg";
		ipa_word = "kor<strong><u>e</u></strong>g";
	}
	else if (word == "d") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "de";
		ipa_word = "de";
	}
	else if (word == "dakruwent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dAkrüwënt";
		ipa_word = "d<strong><u>a</u></strong>kʀuwənt";
	}
	else if (word == "decent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsEnt";
		ipa_word = "dət͡s<strong><u>e</u></strong>nt";
	}
	else if (word == "decep") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsEp";
		ipa_word = "dət͡s<strong><u>e</u></strong>p";
	}
	else if (word == "deceps") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsEps";
		ipa_word = "dət͡s<strong><u>e</u></strong>ps";
	}
	else if (word == "decept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsEpt";
		ipa_word = "dət͡s<strong><u>e</u></strong>pt";
	}
	else if (word == "decid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsId";
		ipa_word = "dət͡s<strong><u>i</u></strong>d";
	}
	else if (word == "decids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsIdz";
		ipa_word = "dət͡s<strong><u>i</u></strong>dz";
	}
	else if (word == "decidt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsIdt";
		ipa_word = "dət͡s<strong><u>i</u></strong>dt";
	}
	else if (word == "decis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtsIs";
		ipa_word = "dət͡s<strong><u>i</u></strong>s";
	}
	else if (word == "decret") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëkrEt";
		ipa_word = "dəkʀ<strong><u>e</u></strong>t";
	}
	else if (word == "decrets") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëkrEts";
		ipa_word = "dəkʀ<strong><u>e</u></strong>ts";
	}
	else if (word == "defect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEkt";
		ipa_word = "dəf<strong><u>e</u></strong>kt";
	}
	else if (word == "defects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEkts";
		ipa_word = "dəf<strong><u>e</u></strong>kts";
	}
	else if (word == "defend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEnd";
		ipa_word = "dəf<strong><u>e</u></strong>nd";
	}
	else if (word == "defends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEnds";
		ipa_word = "dəf<strong><u>e</u></strong>nds";
	}
	else if (word == "defendt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEndt";
		ipa_word = "dəf<strong><u>e</u></strong>ndt";
	}
	else if (word == "defens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEns";
		ipa_word = "dəf<strong><u>e</u></strong>ns";
	}
	else if (word == "defer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfEr";
		ipa_word = "dəf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "defers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfErs";
		ipa_word = "dəf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "defert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëfErt";
		ipa_word = "dəf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "deflecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëflEks";
		ipa_word = "dəfl<strong><u>e</u></strong>ks";
	}
	else if (word == "deflect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëflEkt";
		ipa_word = "dəfl<strong><u>e</u></strong>kt";
	}
	else if (word == "defleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëflEg";
		ipa_word = "dəfl<strong><u>e</u></strong>g";
	}
	else if (word == "dement") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëmEnt";
		ipa_word = "dəm<strong><u>e</u></strong>nt";
	}
	else if (word == "dements") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëmEnts";
		ipa_word = "dəm<strong><u>e</u></strong>nts";
	}
	else if (word == "depend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëpEnd";
		ipa_word = "dəp<strong><u>e</u></strong>nd";
	}
	else if (word == "depends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëpEndz";
		ipa_word = "dəp<strong><u>e</u></strong>ndz";
	}
	else if (word == "depens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëpEns";
		ipa_word = "dəp<strong><u>e</u></strong>ns";
	}
	else if (word == "derid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dërId";
		ipa_word = "dəʀ<strong><u>i</u></strong>d";
	}
	else if (word == "derids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dërIdz";
		ipa_word = "dəʀ<strong><u>i</u></strong>dz";
	}
	else if (word == "deridt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dërIdt";
		ipa_word = "dəʀ<strong><u>i</u></strong>dt";
	}
	else if (word == "deris") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dërId";
		ipa_word = "dəʀ<strong><u>i</u></strong>s";
	}
	else if (word == "desaddic") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzadIk";
		ipa_word = "dəzad<strong><u>i</u></strong>k";
	}
	else if (word == "desaddics") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzadIks";
		ipa_word = "dəzad<strong><u>i</u></strong>ks";
	}
	else if (word == "desaddict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzadIkt";
		ipa_word = "dəzad<strong><u>i</u></strong>kt";
	}
	else if (word == "descend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dësEnd";
		ipa_word = "dəs<strong><u>e</u></strong>nd";
	}
	else if (word == "descends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dësEndz";
		ipa_word = "dəs<strong><u>e</u></strong>ndz";
	}
	else if (word == "descens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dësEns";
		ipa_word = "dəs<strong><u>e</u></strong>ns";
	}
	else if (word == "describ") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëskrIb";
		ipa_word = "dəskʀ<strong><u>i</u></strong>b";
	}
	else if (word == "descrips") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëskrIps";
		ipa_word = "dəskʀ<strong><u>i</u></strong>ps";
	}
	else if (word == "descript") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëskrIpt";
		ipa_word = "dəskʀ<strong><u>i</u></strong>pt";
	}
	else if (word == "deser") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzEr";
		ipa_word = "dəz<strong><u>e</u></strong>ʁ";
	}
	else if (word == "desers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzErs";
		ipa_word = "dəz<strong><u>e</u></strong>ʁs";
	}
	else if (word == "desert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzErt";
		ipa_word = "dəz<strong><u>e</u></strong>ʁt";
	}
	else if (word == "deserts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëzErts";
		ipa_word = "dəz<strong><u>e</u></strong>ʁts";
	}
	else if (word == "desmemberment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dësmEmbërmënt";
		ipa_word = "dəsm<strong><u>e</u></strong>mbəʁmənt";
	}
	else if (word == "desmemberments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dësmEmbërmënts";
		ipa_word = "dəsm<strong><u>e</u></strong>mbəʁmənts";
	}
	else if (word == "detecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEks";
		ipa_word = "dət<strong><u>e</u></strong>ks";
	}
	else if (word == "detect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEkt";
		ipa_word = "dət<strong><u>e</u></strong>kt";
	}
	else if (word == "deteg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEg";
		ipa_word = "dət<strong><u>e</u></strong>g";
	}
	else if (word == "deten") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEn";
		ipa_word = "dət<strong><u>e</u></strong>n";
	}
	else if (word == "detens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEns";
		ipa_word = "dət<strong><u>e</u></strong>ns";
	}
	else if (word == "detent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtEnt";
		ipa_word = "dət<strong><u>e</u></strong>nt";
	}
	else if (word == "detriment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtrImënt";
		ipa_word = "dətʀ<strong><u>i</u></strong>mənt";
	}
	else if (word == "detriments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dëtrImënts";
		ipa_word = "dətʀ<strong><u>i</u></strong>mənts";
	}
	else if (word == "differ") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "difEr";
		ipa_word = "dif<strong><u>e</u></strong>ʁ";
	}
	else if (word == "differs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "difErs";
		ipa_word = "dif<strong><u>e</u></strong>ʁs";
	}
	else if (word == "differt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "difErt";
		ipa_word = "dif<strong><u>e</u></strong>ʁt";
	}
	else if (word == "digest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "didjEst";
		ipa_word = "did͡ʒ<strong><u>e</u></strong>st";
	}
	else if (word == "digests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "didjEsts";
		ipa_word = "did͡ʒ<strong><u>e</u></strong>sts";
	}
	else if (word == "direcs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dirEks";
		ipa_word = "diʀ<strong><u>e</u></strong>ks";
	}
	else if (word == "direct") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dirEkt";
		ipa_word = "diʀ<strong><u>e</u></strong>kt";
	}
	else if (word == "directs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dirEkts";
		ipa_word = "diʀ<strong><u>e</u></strong>kts";
	}
	else if (word == "direg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dirEg";
		ipa_word = "diʀ<strong><u>e</u></strong>g";
	}
	else if (word == "discern") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disErn";
		ipa_word = "dis<strong><u>e</u></strong>ʁn";
	}
	else if (word == "discerns") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disErns";
		ipa_word = "dis<strong><u>e</u></strong>ʁns";
	}
	else if (word == "discernt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disErnt";
		ipa_word = "dis<strong><u>e</u></strong>ʁnt";
	}
	else if (word == "disrespex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disrëspEks";
		ipa_word = "disʀəsp<strong><u>e</u></strong>ks";
	}
	else if (word == "dissecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disEks";
		ipa_word = "dis<strong><u>e</u></strong>ks";
	}
	else if (word == "dissect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disEkt";
		ipa_word = "dis<strong><u>e</u></strong>kt";
	}
	else if (word == "disseg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "disEg";
		ipa_word = "dis<strong><u>e</u></strong>g";
	}
	else if (word == "dissuas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "diswAs";
		ipa_word = "disw<strong><u>a</u></strong>s";
	}
	else if (word == "distincs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distInks";
		ipa_word = "dist<strong><u>i</u></strong>nks";
	}
	else if (word == "distinct") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distInkt";
		ipa_word = "dist<strong><u>i</u></strong>nkt";
	}
	else if (word == "disting") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distIng";
		ipa_word = "dist<strong><u>i</u></strong>ŋ";
	}
	else if (word == "distule") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distÜl";
		ipa_word = "dist<strong><u>y</u></strong>l";
	}
	else if (word == "distules") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distÜls";
		ipa_word = "dist<strong><u>y</u></strong>ls";
	}
	else if (word == "distulet") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "distÜlt";
		ipa_word = "dist<strong><u>y</u></strong>lt";
	}
	else if (word == "divers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "divErs";
		ipa_word = "div<strong><u>e</u></strong>ʁs";
	}
	else if (word == "divid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "divId";
		ipa_word = "div<strong><u>i</u></strong>d";
	}
	else if (word == "divids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "divIdz";
		ipa_word = "div<strong><u>i</u></strong>dz";
	}
	else if (word == "dividt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "divIdt";
		ipa_word = "div<strong><u>i</u></strong>dt";
	}
	else if (word == "divis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "divIs";
		ipa_word = "div<strong><u>i</u></strong>s";
	}
	else if (word == "diwid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "diwId";
		ipa_word = "diw<strong><u>i</u></strong>d";
	}
	else if (word == "dna") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "de en a";
		ipa_word = "de en a";
	}
	else if (word == "dusrig") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dusrIg";
		ipa_word = "dusʀ<strong><u>i</u></strong>g";
	}
	else if (word == "ecgs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "e tse dje es";
		ipa_word = "e t͡se d͡ʒe es";
	}
	else if (word == "elect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "elEkt";
		ipa_word = "el<strong><u>e</u></strong>kt";
	}
	else if (word == "elecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "elEks";
		ipa_word = "el<strong><u>e</u></strong>ks";
	}
	else if (word == "eleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "elEg";
		ipa_word = "el<strong><u>e</u></strong>g";
	}
	else if (word == "emercs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "emErks";
		ipa_word = "em<strong><u>e</u></strong>ʁks";
	}
	else if (word == "emerg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "emErg";
		ipa_word = "em<strong><u>e</u></strong>ʁg";
	}
	else if (word == "enderghend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërgEnd";
		ipa_word = "endəʁg<strong><u>e</u></strong>nd";
	}
	else if (word == "enderghends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërgEndz";
		ipa_word = "endəʁg<strong><u>e</u></strong>ndz";		
	}
	else if (word == "enderghens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërgEns";
		ipa_word = "endəʁg<strong><u>e</u></strong>ns";
	}
	else if (word == "endermercs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërmErks";
		ipa_word = "endəʁm<strong><u>e</u></strong>ʁks";	
	}
	else if (word == "endermerg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërmErg";
		ipa_word = "endəʁm<strong><u>e</u></strong>ʁg";	
	}
	else if (word == "endermers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endërmErs";
		ipa_word = "endəʁm<strong><u>e</u></strong>ʁs";	
	}
	else if (word == "endu") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endU";
		ipa_word = "end<strong><u>u</u></strong>";	
	}
	else if (word == "endum") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endUm";
		ipa_word = "end<strong><u>u</u></strong>m";	
	}
	else if (word == "endus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endUs";
		ipa_word = "end<strong><u>u</u></strong>s";
	}
	else if (word == "enebghir") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Enëbgir";
		ipa_word = "<strong><u>e</u></strong>nəbgiʁ";
	}
	else if (word == "engep") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endjEp";
		ipa_word = "end͡ʒ<strong><u>e</u></strong>p";
	}
	else if (word == "engeps") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endjEps";
		ipa_word = "end͡ʒ<strong><u>e</u></strong>ps";
	}
	else if (word == "engept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "endjEpt";
		ipa_word = "end͡ʒ<strong><u>e</u></strong>pt";
	}
	else if (word == "england") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "England";
		ipa_word = "<strong><u>e</u></strong>ngland";
	}
	else if (word == "englands") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Englandz";
		ipa_word = "<strong><u>e</u></strong>nglandz";
	}
	else if (word == "engweu") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "engwÖ";
		ipa_word = "eng<strong><u>ø</u></strong>";
	}
	else if (word == "engweus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "engwÖs";
		ipa_word = "eng<strong><u>ø</u></strong>s";
	}
	else if (word == "enkrew") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "enkrEw";
		ipa_word = "eŋkʀ<strong><u>e</u></strong>ʊ̯";
	}
	else if (word == "enkrews") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "enkrEws";
		ipa_word = "eŋkʀ<strong><u>e</u></strong>ʊ̯s";
	}
	else if (word == "eros") { // Prev participle ios verb "erod"
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Eros <sup>(sei tod est id proper nam)</sup> / erOs <sup>(sei tod est id prev participle ex \"erod\")</sup>";
		ipa_word = "<strong><u>e</u></strong>ʀos <sup>(sei tod est id proper nam)</sup> / eʀ<strong><u>o</u></strong>s <sup>(sei tod est id prev participle ex \"erod\")</sup>";
	}
	else if (word == "establishment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "estAblixmënt";
		ipa_word = "est<strong><u>a</u></strong>bliçmənt";
	}
	else if (word == "establishments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "estAblixmënts";
		ipa_word = "est<strong><u>a</u></strong>bliçmənts";
	}
	else if (word == "etc") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "etsëtEra";
		ipa_word = "et͡sət<strong><u>e</u></strong>ʀɐ";
	}
	else if (word == "eu") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "e u";
		ipa_word = "e u";
	}
	else if (word == "evas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "evAs";
		ipa_word = "ev<strong><u>a</u></strong>s";
	}
	else if (word == "exclus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "eksklUs";
		ipa_word = "ekskl<strong><u>u</u></strong>s";
	}
	else if (word == "exist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "eksIst";
		ipa_word = "eks<strong><u>i</u></strong>st";
	}
	else if (word == "exists") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "eksIsts";
		ipa_word = "eks<strong><u>i</u></strong>sts";
	}
	else if (word == "expremt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "eksprEmt";
		ipa_word = "ekspʀ<strong><u>e</u></strong>mt";
	}
	else if (word == "exprems") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "eksprEms";
		ipa_word = "ekspʀ<strong><u>e</u></strong>ms";
	}
	else if (word == "extend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ekstEnd";
		ipa_word = "ekst<strong><u>e</u></strong>nd";
	}
	else if (word == "extends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ekstEndz";
		ipa_word = "ekst<strong><u>e</u></strong>ndz";
	}
	else if (word == "extens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ekstEns";
		ipa_word = "ekst<strong><u>e</u></strong>ns";
	}
	else if (word == "extrovers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ekstrovErs";
		ipa_word = "ekstʀov<strong><u>e</u></strong>ʁs";
	}
	else if (word == "f") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ef";
		ipa_word = "ef";
	}
	else if (word == "faq") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ef a ku";
		ipa_word = "ef a ku";
	}
	else if (word == "florida") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "flOrida";
		ipa_word = "fl<strong><u>ɔ</u></strong>ʀidɐ";
	}
	else if (word == "floridas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "flOridas";
		ipa_word = "fl<strong><u>ɔ</u></strong>ʀidɐs";
	}
	else if (word == "forest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "forEst";
		ipa_word = "foʀ<strong><u>e</u></strong>st";
	}
	else if (word == "forests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "forEsts";
		ipa_word = "foʀ<strong><u>e</u></strong>sts";
	}
	else if (word == "fuego") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "fwEgo";
		ipa_word = "fw<strong><u>e</u></strong>go";
	}
	else if (word == "g") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dje";
		ipa_word = "d͡ʒe";
	}
	else if (word == "h") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "hatc";
		ipa_word = "hat͡ʃ";
	}
	else if (word == "hamburg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "hAmburk";
		ipa_word = "h<strong><u>a</u></strong>mbʊʁk";
	}
	else if (word == "hamburgs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "hAmburks";
		ipa_word = "h<strong><u>a</u></strong>mbʊʁks";
	}
	else if (word == "iawos") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yawOs";
		ipa_word = "jɐw<strong><u>o</u></strong>s";
	}
	else if (word == "illus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ilUs";
		ipa_word = "il<strong><u>u</u></strong>s";
	}
	else if (word == "immix") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "imIks";
		ipa_word = "im<strong><u>i</u></strong>ks";
	}
	else if (word == "immixs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "imIks";
		ipa_word = "im<strong><u>i</u></strong>ks";
	}
	else if (word == "immixt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "imIkst";
		ipa_word = "im<strong><u>i</u></strong>kst";
	}
	else if (word == "impediment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "impedImënt";
		ipa_word = "impəd<strong><u>i</u></strong>mənt";
	}
	else if (word == "impediments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "impedImënts";
		ipa_word = "impəd<strong><u>i</u></strong>mənts";
	}
	else if (word == "incel") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsEl";
		ipa_word = "int͡s<strong><u>e</u></strong>l";
	}
	else if (word == "incels") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsEls";
		ipa_word = "int͡s<strong><u>e</u></strong>ls";
	}
	else if (word == "incest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsEst";
		ipa_word = "int͡s<strong><u>e</u></strong>st";
	}
	else if (word == "incests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsEsts";
		ipa_word = "int͡s<strong><u>e</u></strong>sts";
	}
	else if (word == "incid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsId";
		ipa_word = "int͡s<strong><u>i</u></strong>d";
	}
	else if (word == "incids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsIdz";
		ipa_word = "int͡s<strong><u>i</u></strong>dz";
	}
	else if (word == "incidt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsIdt";
		ipa_word = "int͡s<strong><u>i</u></strong>dt";
	}
	else if (word == "incis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intsIs";
		ipa_word = "int͡s<strong><u>i</u></strong>s";
	}
	else if (word == "inclus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inklUs";
		ipa_word = "inkl<strong><u>u</u></strong>s";
	}
	else if (word == "index") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "indEks";
		ipa_word = "ind<strong><u>e</u></strong>ks";
	}
	else if (word == "indirect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "indirEkt";
		ipa_word = "indiʀ<strong><u>e</u></strong>kt";
	}
	else if (word == "indirects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "indirEkts";
		ipa_word = "indiʀ<strong><u>e</u></strong>kts";
	}
	else if (word == "inept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inEpt";
		ipa_word = "in<strong><u>e</u></strong>pt";
	}
	else if (word == "inepts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inEpts";
		ipa_word = "in<strong><u>e</u></strong>pts";
	}
	else if (word == "inert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inErt";
		ipa_word = "in<strong><u>e</u></strong>ʁt";
	}
		else if (word == "inerts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inErts";
		ipa_word = "in<strong><u>e</u></strong>ʁts";
	}
	else if (word == "infec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infEk";
		ipa_word = "inf<strong><u>e</u></strong>k";
	}
	else if (word == "infecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infEks";
		ipa_word = "inf<strong><u>e</u></strong>ks";
	}
	else if (word == "infect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infEkt";
		ipa_word = "inf<strong><u>e</u></strong>kt";
	}
	else if (word == "infer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infEr";
		ipa_word = "inf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "infers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infErs";
		ipa_word = "inf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "infert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infErt";
		ipa_word = "inf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "inflect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflEkt";
		ipa_word = "infl<strong><u>e</u></strong>kt";
	}
	else if (word == "inflects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflEkts";
		ipa_word = "infl<strong><u>e</u></strong>kts";
	}
	else if (word == "inflex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflEks";
		ipa_word = "infl<strong><u>e</u></strong>ks";
	}
	else if (word == "inflics") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflIks";
		ipa_word = "infl<strong><u>i</u></strong>ks";
	}
	else if (word == "inflict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflIkt";
		ipa_word = "infl<strong><u>i</u></strong>kt";
	}
	else if (word == "inflig") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "inflIg";
		ipa_word = "infl<strong><u>i</u></strong>g";
	}
	else if (word == "infreg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infrEg";
		ipa_word = "infʀ<strong><u>e</u></strong>g";
	}
	else if (word == "infrecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "infrEks";
		ipa_word = "infʀ<strong><u>e</u></strong>ks";
	}
	else if (word == "ingest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "indjEst";
		ipa_word = "ind͡ʒ<strong><u>e</u></strong>st";
	}
	else if (word == "ingests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "indjEsts";
		ipa_word = "ind͡ʒ<strong><u>e</u></strong>sts";
	}
	else if (word == "injec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "injEk";
		ipa_word = "inʒ<strong><u>e</u></strong>k";
	}
	else if (word == "injecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "injEks";
		ipa_word = "inʒ<strong><u>e</u></strong>ks";
	}
	else if (word == "inject") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "injEkt";
		ipa_word = "inʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "insect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insEkt";
		ipa_word = "ins<strong><u>e</u></strong>kt";
	}
	else if (word == "insects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insEkts";
		ipa_word = "ins<strong><u>e</u></strong>kts";
	}
	else if (word == "inser") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insEr";
		ipa_word = "ins<strong><u>e</u></strong>ʁ";
	}
	else if (word == "insers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insErs";
		ipa_word = "ins<strong><u>e</u></strong>ʁs";
	}
	else if (word == "insert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insErt";
		ipa_word = "ins<strong><u>e</u></strong>ʁt";
	}
	else if (word == "insist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insIst";
		ipa_word = "ins<strong><u>i</u></strong>st";
	}
	else if (word == "insists") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insIsts";
		ipa_word = "ins<strong><u>i</u></strong>sts";
	}
	else if (word == "instrument") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "instrÜmënt";
		ipa_word = "instʀ<strong><u>y</u></strong>mənt";
	}
	else if (word == "instruments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "instrÜmënts";
		ipa_word = "instʀ<strong><u>y</u></strong>mənts";
	}
	else if (word == "intrus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intrUs";
		ipa_word = "intʀ<strong><u>u</u></strong>s";
	}
	else if (word == "insurrecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insurrEks";
		ipa_word = "insur<strong><u>e</u></strong>ks";
	}
	else if (word == "insurrect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insurrEks";
		ipa_word = "insur<strong><u>e</u></strong>kt";
	}
	else if (word == "insurreg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "insurrEg";
		ipa_word = "insur<strong><u>e</u></strong>g";
	}
	else if (word == "intent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intEnt";
		ipa_word = "int<strong><u>e</u></strong>nt";
	}
	else if (word == "intents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intEnts";
		ipa_word = "int<strong><u>e</u></strong>nts";
	}
	else if (word == "interfer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërfEr";
		ipa_word = "intəʁf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "interfers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërfErs";
		ipa_word = "intəʁf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "interfert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërfErt";
		ipa_word = "intəʁf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "internet") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërnEt";
		ipa_word = "intəʁn<strong><u>e</u></strong>t";
	}
	else if (word == "internets") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërnEts";
		ipa_word = "intəʁn<strong><u>e</u></strong>ts";
	}
	else if (word == "interven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërvEn";
		ipa_word = "intəʁv<strong><u>e</u></strong>n";
	}
	else if (word == "intervens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërvEns";
		ipa_word = "intəʁv<strong><u>e</u></strong>ns";
	}
	else if (word == "intervent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "intërvEnt";
		ipa_word = "intəʁv<strong><u>e</u></strong>nt";
	}
	else if (word == "introvers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "introvErs";
		ipa_word = "intʀov<strong><u>e</u></strong>ʁs";
	}
	else if (word == "invent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invEnt";
		ipa_word = "inv<strong><u>e</u></strong>nt";
	}
	else if (word == "invents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invEnts";
		ipa_word = "inv<strong><u>e</u></strong>nts";
	}
	else if (word == "invas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invAs";
		ipa_word = "inv<strong><u>a</u></strong>s";
	}
	else if (word == "invers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invErs";
		ipa_word = "inv<strong><u>e</u></strong>ʁs";
	}
	else if (word == "invert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invErt";
		ipa_word = "inv<strong><u>e</u></strong>ʁt";
	}
	else if (word == "inverts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invErts";
		ipa_word = "inv<strong><u>e</u></strong>ʁts";
	}
	else if (word == "invest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invEst";
		ipa_word = "inv<strong><u>e</u></strong>st";
	}
	else if (word == "invests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "invEsts";
		ipa_word = "inv<strong><u>e</u></strong>sts";
	}
	else if (word == "iowa") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Ayëwë";
		ipa_word = "<strong><u>a</u></strong>ɪ̯əwə";
	}
	else if (word == "iowas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Ayëwës";
		ipa_word = "<strong><u>a</u></strong>ɪ̯əwəs";
	}
	else if (word == "izhar") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "idz(h)Ar";
		ipa_word = "idz(h)<strong><u>a</u></strong>ʁ";
	}
	else if (word == "j") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "jye";
		ipa_word = "ʒje";
	}
	else if (word == "jc") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "jye tse";
		ipa_word = "ʒje t͡se";
	}
	else if (word == "jersey") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "djËrzi";
		ipa_word = "dʒ<strong><u>ə</u></strong>ʁzi";
	}
	else if (word == "jerseys") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "djËrzis";
		ipa_word = "dʒ<strong><u>ə</u></strong>ʁzis";
	}
	else if (word == "johannesburg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "djowhAnisbärg";
		ipa_word = "dʒoʊ̯h<strong><u>a</u></strong>nɪsbɜʁɡ";
	}
	else if (word == "johannesburgs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "djowhAnisbärgs";
		ipa_word = "dʒoʊ̯h<strong><u>a</u></strong>nɪsbɜʁɡs";
	}
	else if (word == "k") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ka";
		ipa_word = "ka";
	}
	else if (word == "kaapstad") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kA:pstad";
		ipa_word = "k<strong><u>a</u></strong>ːpstɐd";
	}
	else if (word == "kaapstads") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kA:pstadz";
		ipa_word = "k<strong><u>a</u></strong>ːpstɐdz";
	}
	else if (word == "kharkov") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "qArkov";
		ipa_word = "x<strong><u>a</u></strong>ʁkov";
	}
	else if (word == "kharkovs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "qArkovs";
		ipa_word = "x<strong><u>a</u></strong>ʁkovs";
	}
	else if (word == "kiwi") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kiwI";
		ipa_word = "kiw<strong><u>i</u></strong>";
	}
	else if (word == "kiwis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kiwIs";
		ipa_word = "kiw<strong><u>i</u></strong>s";
	}
	else if (word == "km") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ka em";
		ipa_word = "ka em";
	}
	else if (word == "kmehwent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "kmE:wënt";
		ipa_word = "km<strong><u>e</u></strong>ːwənt";
	}
	else if (word == "l") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "el";
		ipa_word = "el";
	}
	else if (word == "london") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "lOndon";
		ipa_word = "l<strong><u>o</u></strong>ndon";
	}
	else if (word == "londons") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "lOndons";
		ipa_word = "l<strong><u>o</u></strong>ndons";
	}
	else if (word == "m") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "em";
		ipa_word = "em";
	}
	else if (word == "massachusetts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "masëtcUsits";
		ipa_word = "mɐsət͡ʃ<strong><u>u</u></strong>ːsits";
	}
	else if (word == "madrid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "madrId";
		ipa_word = "mɐdʀ<strong><u>i</u></strong>d";
	}
	else if (word == "madrids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "madrIdz";
		ipa_word = "mɐdʀ<strong><u>i</u></strong>dz";
	}
	else if (word == "maine") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "meyn";
		ipa_word = "meɪn";
	}
	else if (word == "maines") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "meyns";
		ipa_word = "meɪns";
	}
	else if (word == "menscenrect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mEnsënrëkt";
		ipa_word = "m<strong><u>e</u></strong>nsənʀəkt";
	}
	else if (word == "menscenrects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mEnsënrëkts";
		ipa_word = "m<strong><u>e</u></strong>nsənʀəkts";
	}
	else if (word == "michigan") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mIcigën";
		ipa_word = "m<strong><u>i</u></strong>ʃiɡən";
	}
	else if (word == "michigans") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mIcigëns";
		ipa_word = "m<strong><u>i</u></strong>ʃiɡəns";
	}
	else if (word == "ministernconcil") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "minIstërnkontsil";
		ipa_word = "min<strong><u>i</u></strong>stəʁnkont͡sil";
	}
	else if (word == "ministernconcils") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "minIstërnkontsils";
		ipa_word = "min<strong><u>i</u></strong>stəʁnkont͡sils";
	}
	else if (word == "missouri") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mizU:ri";
		ipa_word = "miz<strong><u>u</u></strong>ːʀi";
	}
	else if (word == "missouris") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "mizU:ris";
		ipa_word = "miz<strong><u>u</u></strong>ːʀis";
	}
	else if (word == "n") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "en";
		ipa_word = "en";
	}
	else if (word == "negleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nëglEg";
		ipa_word = "nəgl<strong><u>e</u></strong>g";
	}
	else if (word == "neglecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nëglEks";
		ipa_word = "nəgl<strong><u>e</u></strong>ks";
	}
	else if (word == "neglect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nëglEkt";
		ipa_word = "nəgl<strong><u>e</u></strong>kt";
	}
	else if (word == "niebtreb") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nyebtrEb";
		ipa_word = "njebtʀ<strong><u>e</u></strong>b";
	}
	else if (word == "niebtrebs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nyebtrEbs";
		ipa_word = "njebtʀ<strong><u>e</u></strong>bs";
	}
	else if (word == "niklas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "niklAs";
		ipa_word = "nikl<strong><u>a</u></strong>s";
	}
	else if (word == "nilent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nilEnt";
		ipa_word = "nil<strong><u>e</u></strong>nt";
	}
	else if (word == "nilents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "nilEnts";
		ipa_word = "nil<strong><u>e</u></strong>nts";
	}
	else if (word == "niscrib") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "niskrIb";
		ipa_word = "niskʀ<strong><u>i</u></strong>b";
	}
	else if (word == "niscrips") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "niskrIps";
		ipa_word = "niskʀ<strong><u>i</u></strong>ps";
	}
	else if (word == "objec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "objEk";
		ipa_word = "obʒ<strong><u>e</u></strong>k";
	}
	else if (word == "objecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "objEks";
		ipa_word = "obʒ<strong><u>e</u></strong>ks";
	}
	else if (word == "object") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "objEkt";
		ipa_word = "obʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "objects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "objEkts";
		ipa_word = "obʒ<strong><u>e</u></strong>kts";
	}
	else if (word == "obten") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "obtEn";
		ipa_word = "obt<strong><u>e</u></strong>n";
	}
	else if (word == "obtens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "obtEns";
		ipa_word = "obt<strong><u>e</u></strong>ns";
	}
	else if (word == "obtent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "obtEnt";
		ipa_word = "obt<strong><u>e</u></strong>nt";
	}
	else if (word == "offend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ofEnd";
		ipa_word = "of<strong><u>e</u></strong>nd";
	}
	else if (word == "offends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ofEndz";
		ipa_word = "of<strong><u>e</u></strong>ndz";
	}
	else if (word == "offens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ofEnd";
		ipa_word = "of<strong><u>e</u></strong>ns";
	}
	else if (word == "ohio") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "owhAyow";
		ipa_word = "oʊ̯h<strong><u>a</u></strong>ɪ̯oʊ̯";
	}
	else if (word == "ohios") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "owhAyows";
		ipa_word = "oʊ̯h<strong><u>a</u></strong>ɪ̯oʊ̯s";
	}
	else if (word == "oiscrib") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyskrIb";
		ipa_word = "oɪ̯skʀ<strong><u>i</u></strong>b";
	}
	else if (word == "oiscrips") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyskrIps";
		ipa_word = "oɪ̯skʀ<strong><u>i</u></strong>ps";
	}
	else if (word == "oiscript") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyskrIpt";
		ipa_word = "oɪ̯skʀ<strong><u>i</u></strong>pt";
	}
	else if (word == "oiscrisc") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyskrIsk";
		ipa_word = "oɪ̯skʀ<strong><u>i</u></strong>sk";
	}
	else if (word == "oiscriscs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyskrIsks";
		ipa_word = "oɪ̯skʀ<strong><u>i</u></strong>sks";
	}
	else if (word == "oisdu") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysdU";
		ipa_word = "oɪ̯sd<strong><u>u</u></strong>";
	}
	else if (word == "oisdus") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysdUs";
		ipa_word = "oɪ̯sd<strong><u>u</u></strong>s";
	}
	else if (word == "oisghend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysgEnd";
		ipa_word = "oɪ̯sg<strong><u>e</u></strong>nd";
	}
	else if (word == "oisghends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysgEnds";
		ipa_word = "oɪ̯sg<strong><u>e</u></strong>nds";
	}
	else if (word == "oisghens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysgEns";
		ipa_word = "oɪ̯sg<strong><u>e</u></strong>ns";
	}
	else if (word == "oisklas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oysklAs";
		ipa_word = "oɪ̯skl<strong><u>a</u></strong>s";
	}
	else if (word == "oiswind") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyswInd";
		ipa_word = "oɪ̯sw<strong><u>i</u></strong>nd";
	}
	else if (word == "oiswinds") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyswInds";
		ipa_word = "oɪ̯sw<strong><u>i</u></strong>nds";
	}
	else if (word == "oiswins") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "oyswIns";
		ipa_word = "oɪ̯sw<strong><u>i</u></strong>ns";
	}
	else if (word == "oppos") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "opOs";
		ipa_word = "op<strong><u>o</u></strong>s";
	}
	else if (word == "oregon") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Origën";
		ipa_word = "<strong><u>ɔ</u></strong>ʀiɡən";
	}
	else if (word == "oregons") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Origëns";
		ipa_word = "<strong><u>ɔ</u></strong>ʀiɡəns";
	}
	else if (word == "orpiment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "orpImënt";
		ipa_word = "oʁp<strong><u>i</u></strong>mənt";
	}
	else if (word == "orpiments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "orpImënts";
		ipa_word = "oʁp<strong><u>i</u></strong>mənts";
	}
	else if (word == "ostend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ostEnd";
		ipa_word = "ost<strong><u>e</u></strong>nd";
	}
	else if (word == "ostends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ostEnds";
		ipa_word = "ost<strong><u>e</u></strong>nds";
	}
	else if (word == "ostens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ostEns";
		ipa_word = "ost<strong><u>e</u></strong>ns";
	}
	else if (word == "oxford") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Oksfërd";
		ipa_word = "<strong><u>o</u></strong>ːksfəʁd";
	}
	else if (word == "oxfords") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "Oksfërdz";
		ipa_word = "<strong><u>o</u></strong>ːksfəʁdz";
	}
	else if (word == "p") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pe";
		ipa_word = "pe";
	}
	else if (word == "paris") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pAris <sup>(mythologia)</sup> / parIs <sup>(sei tod est id land)</sup>";
		ipa_word = "p<strong><u>a</u></strong>ʀis <sup>(mythologia)</sup> / pɐʀ<strong><u>i</u></strong>s <sup>(sei tod est id land)</sup>";
	}
	else if (word == "percent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përtsEnt";
		ipa_word = "pəʁt͡s<strong><u>e</u></strong>nt";
	}
	else if (word == "percents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përtsEnt";
		ipa_word = "pəʁt͡s<strong><u>e</u></strong>nts";
	}
	else if (word == "perfect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përfEkt";
		ipa_word = "pəʁf<strong><u>e</u></strong>kt";
	}
	else if (word == "perfects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përfEkts";
		ipa_word = "pəʁf<strong><u>e</u></strong>kts";
	}
	else if (word == "perhvdi") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pEr(h)vdi";
		ipa_word = "p<strong><u>e</u></strong>ʁ(h)vdi";
	}
	else if (word == "perigleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përiglEg";
		ipa_word = "pəʀɪgl<strong><u>e</u></strong>g";
	}
	else if (word == "periglecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përiglEks";
		ipa_word = "pəʀɪgl<strong><u>e</u></strong>ks";
	}
	else if (word == "periglect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përiglEkt";
		ipa_word = "pəʀɪgl<strong><u>e</u></strong>kt";
	}
	else if (word == "peripuwen") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përipÜwën";
		ipa_word = "pəʀɪp<strong><u>y</u></strong>wən";
	}
	else if (word == "peripuwens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përipÜwëns";
		ipa_word = "pəʀɪp<strong><u>y</u></strong>wəns";
	}
	else if (word == "peristyl") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përistÜl";
		ipa_word = "pəʀɪst<strong><u>y</u></strong>l";
	}
	else if (word == "peristyls") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përistÜls";
		ipa_word = "pəʀɪst<strong><u>y</u></strong>sl";
	}
	else if (word == "pehrnargument") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pe:rnargÜmënt";
		ipa_word = "peːʁnɐʁg<strong><u>y</u></strong>mənt";
	}
	else if (word == "pehrnarguments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pe:rnargÜmënts";
		ipa_word = "peːʁnɐʁg<strong><u>y</u></strong>mənts";
	}
	else if (word == "perplex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përplEks";
		ipa_word = "pəʁpl<strong><u>e</u></strong>ks";
	}
	else if (word == "persist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përsIst";
		ipa_word = "pəʁs<strong><u>i</u></strong>st";
	}
	else if (word == "persists") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përsIsts";
		ipa_word = "pəʁs<strong><u>i</u></strong>sts";
	}
	else if (word == "persuas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përswAs";
		ipa_word = "pəʁsw<strong><u>a</u></strong>s";
	}
	else if (word == "pervert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përvErt";
		ipa_word = "pəʁv<strong><u>e</u></strong>ʁt";
	}
	else if (word == "pervers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përvErs";
		ipa_word = "pəʁv<strong><u>e</u></strong>ʁs";
	}
	else if (word == "perverts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "përvErts";
		ipa_word = "pəʁv<strong><u>e</u></strong>ʁts";
	}
	else if (word == "pinocchio") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pinOkyo";
		ipa_word = "pin<strong><u>o</u></strong>kjo";
	}
	else if (word == "pipend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pipEnd";
		ipa_word = "pɪp<strong><u>e</u></strong>nd";
	}
	else if (word == "pipends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pipEndz";
		ipa_word = "pɪp<strong><u>e</u></strong>ndz";
	}
	else if (word == "pipens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pipEns";
		ipa_word = "pɪp<strong><u>e</u></strong>ns";
	}
	else if (word == "precept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtsEpt";
		ipa_word = "pʀət͡s<strong><u>e</u></strong>pt";
	}
	else if (word == "precepts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtsEpts";
		ipa_word = "pʀət͡s<strong><u>e</u></strong>pts";
	}
	else if (word == "precid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtsId";
		ipa_word = "pʀət͡s<strong><u>i</u></strong>d";
	}
	else if (word == "precids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtsIdz";
		ipa_word = "pʀət͡s<strong><u>i</u></strong>dz";
	}
	else if (word == "precis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtsIs";
		ipa_word = "pʀət͡s<strong><u>i</u></strong>s";
	}
	else if (word == "preemptive") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëEmptiv";
		ipa_word = "pʀə<strong><u>e</u></strong>mptɪv";
	}
	else if (word == "prefect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëfEkt";
		ipa_word = "pʀəf<strong><u>e</u></strong>kt";
	}
	else if (word == "prefects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëfEkts";
		ipa_word = "pʀəf<strong><u>e</u></strong>kts";
	}
	else if (word == "prefer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëfEr";
		ipa_word = "pʀəf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "prefers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëfErs";
		ipa_word = "pʀəf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "prefert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëfErt";
		ipa_word = "pʀəf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "preghes") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëgEs";
		ipa_word = "pʀəg<strong><u>e</u></strong>s";
	}
	else if (word == "present") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëzEnt";
		ipa_word = "pʀəz<strong><u>e</u></strong>nt";
	}
	else if (word == "presents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëzEnts";
		ipa_word = "pʀəz<strong><u>e</u></strong>nts";
	}
	else if (word == "pretend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtEnd";
		ipa_word = "pʀət<strong><u>e</u></strong>nd";
	}
	else if (word == "pretends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtEndz";
		ipa_word = "pʀət<strong><u>e</u></strong>ndz";
	}
	else if (word == "pretens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëtEns";
		ipa_word = "pʀət<strong><u>e</u></strong>ns";
	}
	else if (word == "preterit") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "preterIt";
		ipa_word = "pʀətəʀ<strong><u>i</u></strong>t";
	}
	else if (word == "preven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvEn";
		ipa_word = "pʀəv<strong><u>e</u></strong>n";
	}
	else if (word == "prevens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvEns";
		ipa_word = "pʀəv<strong><u>e</u></strong>ns";
	}
	else if (word == "prevent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvEnt";
		ipa_word = "pʀəv<strong><u>e</u></strong>nt";
	}
	else if (word == "previd") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvId";
		ipa_word = "pʀəv<strong><u>i</u></strong>d";
	}
	else if (word == "previds") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvIds";
		ipa_word = "pʀəv<strong><u>i</u></strong>dz";
	}
	else if (word == "previdt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvIdt";
		ipa_word = "pʀəv<strong><u>i</u></strong>dt";
	}
	else if (word == "previs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prëvIs";
		ipa_word = "pʀəv<strong><u>i</u></strong>s";
	}
	else if (word == "prisindex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prIzindëks";
		ipa_word = "pʀ<strong><u>i</u></strong>zindəks";
	}
	else if (word == "probeprist") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prObeprist";
		ipa_word = "pʀ<strong><u>o</u></strong>bepʀɪst";
	}
	else if (word == "probeprists") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prObeprists";
		ipa_word = "pʀ<strong><u>o</u></strong>bepʀɪsts";
	}
	else if (word == "procent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protsEnt";
		ipa_word = "pʀot͡s<strong><u>e</u></strong>nt";
	}
	else if (word == "procents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protsEnts";
		ipa_word = "pʀot͡s<strong><u>e</u></strong>nts";
	}
	else if (word == "projec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "projEk";
		ipa_word = "pʀoʒ<strong><u>e</u></strong>k";
	}
	else if (word == "projecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "projEks";
		ipa_word = "pʀoʒ<strong><u>e</u></strong>ks";
	}
	else if (word == "project") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "projEkt";
		ipa_word = "pʀoʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "projects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "projEkts";
		ipa_word = "pʀoʒ<strong><u>e</u></strong>kts";
	}
	else if (word == "prokrustes") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prokrUstës";
		ipa_word = "pʀokʀ<strong><u>u</u></strong>stəs";
	}
	else if (word == "prophet") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "profEt";
		ipa_word = "pʀof<strong><u>e</u></strong>t";
	}
	else if (word == "prophets") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "profEts";
		ipa_word = "pʀof<strong><u>e</u></strong>ts";
	}
	else if (word == "propos") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "propOs";
		ipa_word = "pʀop<strong><u>o</u></strong>s";
	}
	else if (word == "prospec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prospEk";
		ipa_word = "pʀosp<strong><u>e</u></strong>k";
	}
	else if (word == "prospecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prospEks";
		ipa_word = "pʀosp<strong><u>e</u></strong>ks";
	}
	else if (word == "prospect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prospEkt";
		ipa_word = "pʀosp<strong><u>e</u></strong>kt";
	}
	else if (word == "prospects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "prospEkts";
		ipa_word = "pʀosp<strong><u>e</u></strong>kts";
	}
	else if (word == "protecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protEks";
		ipa_word = "pʀot<strong><u>e</u></strong>ks";
	}
	else if (word == "protect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protEkt";
		ipa_word = "pʀot<strong><u>e</u></strong>kt";
	}
	else if (word == "proteg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protEg";
		ipa_word = "pʀot<strong><u>e</u></strong>g";
	}
	else if (word == "protest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protEst";
		ipa_word = "pʀot<strong><u>e</u></strong>st";
	}
	else if (word == "protests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "protEsts";
		ipa_word = "pʀot<strong><u>e</u></strong>sts";
	}
	else if (word == "proverb") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provErb";
		ipa_word = "pʀov<strong><u>e</u></strong>ʁb";
	}
	else if (word == "proverbs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provErbs";
		ipa_word = "pʀov<strong><u>e</u></strong>ʁbs";
	}
	else if (word == "provid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provId";
		ipa_word = "pʀov<strong><u>i</u></strong>d";
	}
	else if (word == "provids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provIdz";
		ipa_word = "pʀov<strong><u>i</u></strong>dz";
	}
	else if (word == "providt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provIdt";
		ipa_word = "pʀov<strong><u>i</u></strong>dt";
	}
	else if (word == "provis") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "provIs";
		ipa_word = "pʀov<strong><u>i</u></strong>s";
	}
	else if (word == "puerto") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "pwErto";
		ipa_word = "pw<strong><u>e</u></strong>ʁto";
	}
	else if (word == "q") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ku";
		ipa_word = "ku";
	}
	else if (word == "r") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "er";
		ipa_word = "eʁ";
	}
	else if (word == "recent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëtsEnt";
		ipa_word = "ʀət͡s<strong><u>e</u></strong>nt";
	}
	else if (word == "recep") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëtsEp";
		ipa_word = "ʀət͡s<strong><u>e</u></strong>p";
	}
	else if (word == "receps") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëtsEps";
		ipa_word = "ʀət͡s<strong><u>e</u></strong>ps";
	}
	else if (word == "recept") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëtsEp";
		ipa_word = "ʀət͡s<strong><u>e</u></strong>pt";
	}
	else if (word == "recepts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëtsEpts";
		ipa_word = "ʀət͡s<strong><u>e</u></strong>pts";
	}
	else if (word == "recule") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëkÜl";
		ipa_word = "ʀək<strong><u>y</u></strong>l";
	}
	else if (word == "recules") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëkÜls";
		ipa_word = "ʀək<strong><u>y</u></strong>ls";
	}
	else if (word == "regret") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëgrEt";
		ipa_word = "ʀəgʀ<strong><u>e</u></strong>t";
	}
	else if (word == "regrets") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëgrEts";
		ipa_word = "ʀəgʀ<strong><u>e</u></strong>ts";
	}
	else if (word == "refer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëfEr";
		ipa_word = "ʀəf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "refers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëfErs";
		ipa_word = "ʀəf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "refert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëfErt";
		ipa_word = "ʀəf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "reflect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëflEkt";
		ipa_word = "ʀəfl<strong><u>e</u></strong>kt";
	}
	else if (word == "reflects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëflEkts";
		ipa_word = "ʀəfl<strong><u>e</u></strong>kts";
	}
	else if (word == "reflecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëflEks";
		ipa_word = "ʀəfl<strong><u>e</u></strong>ks";
	}
	else if (word == "refleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëflEg";
		ipa_word = "ʀəfl<strong><u>e</u></strong>g";
	}
	else if (word == "reflex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëflEks";
		ipa_word = "ʀəfl<strong><u>e</u></strong>ks";
	}
	else if (word == "rejec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rejEk";
		ipa_word = "ʀəʒ<strong><u>e</u></strong>k";
	}
	else if (word == "rejecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëjEks";
		ipa_word = "ʀəʒ<strong><u>e</u></strong>ks";
	}
	else if (word == "reject") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëjEktt";
		ipa_word = "ʀəʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "remix") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëmIks";
		ipa_word = "ʀəm<strong><u>i</u></strong>ks";
	}
	else if (word == "remixs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëmIks";
		ipa_word = "ʀəm<strong><u>i</u></strong>ks";
	}
	else if (word == "remixt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëmIkst";
		ipa_word = "ʀəm<strong><u>i</u></strong>kst";
	}
	else if (word == "reper") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëpEr";
		ipa_word = "ʀəp<strong><u>e</u></strong>ʁ";
	}
	else if (word == "repers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëpErs";
		ipa_word = "ʀəp<strong><u>e</u></strong>ʁs";
	}
	else if (word == "repert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëpErt";
		ipa_word = "ʀəp<strong><u>e</u></strong>ʁt";
	}
	else if (word == "resid") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzId";
		ipa_word = "ʀəz<strong><u>i</u></strong>d";		
	}
	else if (word == "resids") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzIds";
		ipa_word = "ʀəz<strong><u>i</u></strong>dz";	
	}
	else if (word == "residt") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzIdt";
		ipa_word = "ʀəz<strong><u>i</u></strong>dt";	
	}
	else if (word == "respect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëspEkt";
		ipa_word = "ʀəsp<strong><u>e</u></strong>kt";
	}
	else if (word == "respects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëspEkts";
		ipa_word = "ʀəsp<strong><u>e</u></strong>kts";
	}
	else if (word == "respex") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëspEks";
		ipa_word = "ʀəsp<strong><u>e</u></strong>ks";
	}
	else if (word == "ressentiment") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "resëntImënt";
		ipa_word = "ʀesənt<strong><u>i</u></strong>mənt";
	}
	else if (word == "ressentiments") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "resëntImënts";
		ipa_word = "ʀesənt<strong><u>i</u></strong>mənts";
	}
	else if (word == "restrict") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëstrIkt";
		ipa_word = "ʀəstʀ<strong><u>i</u></strong>kt";
	}
	else if (word == "restricts") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëstrIkts";
		ipa_word = "ʀəstʀ<strong><u>i</u></strong>kts";
	}
	else if (word == "resurrecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzurrEks";
		ipa_word = "ʀəzur<strong><u>e</u></strong>ks";
	}
	else if (word == "resurrect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzurrEkt";
		ipa_word = "ʀəzur<strong><u>e</u></strong>kt";
	}
	else if (word == "resurreg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëzurrEg";
		ipa_word = "ʀəzur<strong><u>e</u></strong>g";
	}
	else if (word == "revers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "rëvErs";
		ipa_word = "ʀəv<strong><u>e</u></strong>ʁs";
	}
	else if (word == "rna") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "er en a";
		ipa_word = "eʁ en a";
	}
	else if (word == "s") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "es";
		ipa_word = "es";
	}
	else if (word == "sars") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "es a er es";
		ipa_word = "es a eʁ es";
	}
	else if (word == "secret") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëkrEt";
		ipa_word = "səkʀ<strong><u>e</u></strong>t";
	}
	else if (word == "secrets") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëkrEts";
		ipa_word = "səkʀ<strong><u>e</u></strong>ts";
	}
	else if (word == "selecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëlEks";
		ipa_word = "səl<strong><u>e</u></strong>ks";
	}
	else if (word == "select") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëlEkt";
		ipa_word = "səl<strong><u>e</u></strong>kt";
	}
	else if (word == "seleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëlEg";
		ipa_word = "səl<strong><u>e</u></strong>g";
	}
	else if (word == "seloswent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sEloswënt";
		ipa_word = "s<strong><u>e</u></strong>loswənt";
	}
	else if (word == "seloswents") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sEloswënts";
		ipa_word = "s<strong><u>e</u></strong>loswənts";
	}
	else if (word == "semject") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëmjEkt";
		ipa_word = "səmʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "semjects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sëmjEkts";
		ipa_word = "səmʒ<strong><u>e</u></strong>kts";
	}
	else if (word == "suaodent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "swaOdënt";
		ipa_word = "swɐ<strong><u>o</u></strong>dənt";
	}
	else if (word == "suapit") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "swapIt";
		ipa_word = "swɐp<strong><u>i</u></strong>t";
	}
	else if (word == "subject") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "subjEkt";
		ipa_word = "subʒ<strong><u>e</u></strong>kt";
	}
	else if (word == "subjects") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "subjEkts";
		ipa_word = "subʒ<strong><u>e</u></strong>kts";
	}
	else if (word == "submerg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "submErg";
		ipa_word = "subm<strong><u>e</u></strong>ʁg";
	}
	else if (word == "submercs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "submErks";
		ipa_word = "subm<strong><u>e</u></strong>ʁs";
	}
	else if (word == "submerct") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "submErkt";
		ipa_word = "subm<strong><u>e</u></strong>ʁt";
	}
	else if (word == "submers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "submErs";
		ipa_word = "subm<strong><u>e</u></strong>ʁs";
	}
	else if (word == "subven") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "subvEn";
		ipa_word = "subv<strong><u>e</u></strong>n";
	}
	else if (word == "subvens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "subvEns";
		ipa_word = "subv<strong><u>e</u></strong>ns";
	}
	else if (word == "subvent") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "subvEnt";
		ipa_word = "subv<strong><u>e</u></strong>nt";
	}
	else if (word == "suspend") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEnd";
		ipa_word = "susp<strong><u>e</u></strong>nd";
	}
	else if (word == "suspends") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEndz";
		ipa_word = "susp<strong><u>e</u></strong>ndz";
	}
	else if (word == "suspens") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEns";
		ipa_word = "susp<strong><u>e</u></strong>ns";
	}
	else if (word == "suggest") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sugdjEst";
		ipa_word = "sugd͡ʒ<strong><u>e</u></strong>st";
	}
	else if (word == "suggests") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sugdjEsts";
		ipa_word = "sugd͡ʒ<strong><u>e</u></strong>sts";
	}
	else if (word == "supoglecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "supoglEks";
		ipa_word = "supogl<strong><u>e</u></strong>ks";
	}
	else if (word == "supoglect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "supoglEkt";
		ipa_word = "supogl<strong><u>e</u></strong>kt";
	}
	else if (word == "supogleg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "supoglEg";
		ipa_word = "supogl<strong><u>e</u></strong>g";
	}
	else if (word == "surrecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "surrEks";
		ipa_word = "sur<strong><u>e</u></strong>ks";
	}
	else if (word == "surrect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "surrEkt";
		ipa_word = "sur<strong><u>e</u></strong>kt";
	}
	else if (word == "surreg") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "surrEg";
		ipa_word = "sur<strong><u>e</u></strong>g";
	}
	else if (word == "suspec") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEk";
		ipa_word = "susp<strong><u>e</u></strong>k";
	}
	else if (word == "suspecs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEks";
		ipa_word = "susp<strong><u>e</u></strong>ks";
	}
	else if (word == "suspect") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "suspEkt";
		ipa_word = "susp<strong><u>e</u></strong>kt";
	}
	else if (word == "sydney") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sIdni";
		ipa_word = "s<strong><u>i</u></strong>dni";
	}
	else if (word == "sydneys") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "sIdnis";
		ipa_word = "s<strong><u>i</u></strong>dnis";
	}
	else if (word == "t") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "te";
		ipa_word = "te";
	}
	else if (word == "tennessee") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tänësI";
		ipa_word = "tɛnəs<strong><u>i</u></strong>";
	}
	else if (word == "tennessees") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "tänësIs";
		ipa_word = "tɛnəs<strong><u>i</u></strong>s";
	}
	else if (word == "transfer") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transfEr";
		ipa_word = "tʀansf<strong><u>e</u></strong>ʁ";
	}
	else if (word == "transfers") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transfErs";
		ipa_word = "tʀansf<strong><u>e</u></strong>ʁs";
	}
	else if (word == "transfert") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transfErt";
		ipa_word = "tʀansf<strong><u>e</u></strong>ʁt";
	}
	else if (word == "transcrib") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transkrIb";
		ipa_word = "tʀɐnskʀ<strong><u>i</u></strong>b";
	}
	else if (word == "transcrips") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transkrIps";
		ipa_word = "tʀɐnskʀ<strong><u>i</u></strong>ps";
	}
	else if (word == "transcript") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "transkrIpt";
		ipa_word = "tʀɐnskʀ<strong><u>i</u></strong>pt";
	}
	else if (word == "tv") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "te ve";
		ipa_word = "te ve";
	}
	else if (word == "ubklas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ubklAs";
		ipa_word = "ubkl<strong><u>a</u></strong>s";
	}
	else if (word == "uperklas") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "üpërklAs";
		ipa_word = "ypəʁkl<strong><u>a</u></strong>s";
	}
	else if (word == "v") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ve";
		ipa_word = "ve";
	}
	else if (word == "vhs") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ve hatc es";
		ipa_word = "ve hat͡ʃ es";
	}
	else if (word == "w") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "we";
		ipa_word = "we";
	}
	else if (word == "washington") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wOcingtën";
		ipa_word = "w<strong><u>ɔ</u></strong>ʃɪŋtən";
	}
	else if (word == "washingtons") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wOcingtëns";
		ipa_word = "w<strong><u>ɔ</u></strong>ʃɪŋtəns";
	}
	else if (word == "wc") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "we tse";
		ipa_word = "we t͡se";
	}
	else if (word == "wisconsin") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wëskAnsën";
		ipa_word = "wəsk<strong><u>a</u></strong>nsən";
	}
	else if (word == "wisconsins") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wëskAnsëns";
		ipa_word = "wəsk<strong><u>a</u></strong>nsəns";
	}
	else if (word == "wyoming") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wayOwming";
		ipa_word = "waɪ̯<strong><u>o</u></strong>ʊ̯mɪŋ";
	}
	else if (word == "wyomings") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "wayOwmings";
		ipa_word = "waɪ̯<strong><u>o</u></strong>ʊ̯mɪŋs";
	}
	else if (word == "x") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "iks";
		ipa_word = "iks";
	}
	else if (word == "y") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "ü";
		ipa_word = "y";
	}
	else if (word == "yeleck") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yëlEk";
		ipa_word = "jəl<strong><u>e</u></strong>k";
	}
	else if (word == "yelecks") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yëlEks";
		ipa_word = "jəl<strong><u>e</u></strong>ks";
	}
	else if (word == "yoinkjiae") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yoynkjiAy";
		ipa_word = "joɪ̯ŋkʒi<strong><u>a</u></strong>ɪ̯";
	}
	else if (word == "yoinkjiaes") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yoynkjiAys";
		ipa_word = "joɪ̯ŋkʒi<strong><u>a</u></strong>ɪ̯s";
	}
	else if (word == "yui") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "yuI";
		ipa_word = "ju<strong><u>i</u></strong>";
	}
	else if (word == "z") {
		console.log ("%% The word \"" + word + "\" needed a ready made transcription %%");
		spt_word = "dzed";
		ipa_word = "dzed";
	}
	
	/***************************************************************
	****************************************************************
	******* FINAL PART
	****************************************************************
	***************************************************************/
		
	// Now we finally insert the result in the divs
	document.getElementById(spt_outputDiv).innerHTML += spt_word;
	document.getElementById(ipa_outputDiv).innerHTML += ipa_word;
	
	// Nor forget to clear the variables
	spt_word = "";
	ipa_word = "";
}

function is_it_valid_char (character) {
	if (character == 'A' || character == 'a') {return true;}
	else if (character == 'B' || character == 'b') {return true;}
	else if (character == 'C' || character == 'c') {return true;}
	else if (character == 'D' || character == 'd') {return true;}
	else if (character == 'E' || character == 'e') {return true;}
	else if (character == 'F' || character == 'f') {return true;}
	else if (character == 'G' || character == 'g') {return true;}
	else if (character == 'H' || character == 'h') {return true;}
	else if (character == 'I' || character == 'i') {return true;}
	else if (character == 'J' || character == 'j') {return true;}
	else if (character == 'K' || character == 'k') {return true;}
	else if (character == 'L' || character == 'l') {return true;}
	else if (character == 'M' || character == 'm') {return true;}
	else if (character == 'N' || character == 'n') {return true;}
	else if (character == 'O' || character == 'o') {return true;}
	else if (character == 'P' || character == 'p') {return true;}
	else if (character == 'Q' || character == 'q') {return true;}
	else if (character == 'R' || character == 'r') {return true;}
	else if (character == 'S' || character == 's') {return true;}
	else if (character == 'T' || character == 't') {return true;}
	else if (character == 'U' || character == 'u') {return true;}
	else if (character == 'V' || character == 'v') {return true;}
	else if (character == 'W' || character == 'w') {return true;}
	else if (character == 'X' || character == 'x') {return true;}
	else if (character == 'Y' || character == 'y') {return true;}
	else if (character == 'Z' || character == 'z') {return true;}
	else {return false;}	
}

function getWords (inputDiv, spt_outputDiv, ipa_outputDiv, which_divs) {
	// Hides any previous cont in the Divs
	document.getElementById(spt_outputDiv).style.display = "none";
	document.getElementById(ipa_outputDiv).style.display = "none";	
	
	// Clears any previous cont in the Divs
	document.getElementById(spt_outputDiv).innerHTML = "";
	document.getElementById(ipa_outputDiv).innerHTML = "";
	
	// Gets the text
	var input_text = document.getElementById(inputDiv).value;
	var input_text_lenght = input_text.length;
	
	// Creates the variable where words will be stored
	var word = "";
	
	// This loop is for separating the words
	var char_array = input_text.split("");
	for (var count = 0; count <= input_text_lenght; count++) {
		if (is_it_valid_char (char_array[count])) {
			word += char_array[count]			
		}
		else {
			if (count > 0) { // To avoid that a space is added at the beginning of the Div
				document.getElementById(spt_outputDiv).innerHTML += ' &diams; ';
				document.getElementById(ipa_outputDiv).innerHTML += ' &diams; ';
			}
			
			pronunciator (word.toLowerCase(), spt_outputDiv, ipa_outputDiv);
			word = ""; // Cleans the string
		}
	}
	
	if (which_divs == 2 || which_divs == 0) {
		document.getElementById(spt_outputDiv).style.display = "block";
	}
	if (which_divs == 2 || which_divs == 1) {
		document.getElementById(ipa_outputDiv).style.display = "block";
	}
}
