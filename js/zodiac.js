const zodiacSounds = {
    'Capricorn': 'audio/capricorn.mp3',
    'Pisces': 'audio/pisces.mp3',
    'Leo': 'audio/leo.mp3',
    'Taurus': 'audio/taurus.mp3',
    'Cancer': 'audio/cancer.mp3',
    'Sagittarius': 'audio/sagittarius.mp3',
    'Aquarius': 'audio/aquarius.mp3',
    'Virgo': 'audio/Virgo.mp3',
    'Libra': 'audio/libra.mp3',
    'Gemini': 'audio/gemini.mp3',
    'Scorpio': 'audio/scorpio.mp3',
    'Aries': 'audio/aries.mp3'

};
const zodiacDescriptions = {
    'Capricorn': 'Capricorns are known for being responsible, disciplined, and ambitious. They are practical and often have a strong sense of duty. Capricorns are also loyal and reliable friends, but they can sometimes be overly cautious or pessimistic.',
    'Aquarius': 'Aquarians are known for being independent, original, and humanitarian. They are progressive thinkers and value freedom and equality. Aquarians are also friendly and open-minded, but they can sometimes be emotionally detached or unpredictable.',
    'Pisces': 'Pisces are known for being compassionate, intuitive, and artistic. They are empathetic and sensitive to the needs of others, often putting others\' needs before their own. Pisces are also imaginative and dreamy, but they can sometimes be overly idealistic or prone to escapism.',
    'Aries': 'Aries are known for being courageous, energetic, and adventurous. They are natural leaders and enjoy taking initiative. Aries are also passionate and competitive, but they can sometimes be impatient or impulsive.',
    'Taurus': 'Taurus are known for being reliable, patient, and practical. They are grounded and enjoy stability and comfort. Taurus are also loyal and affectionate, but they can sometimes be stubborn or possessive.',
    'Gemini': 'Geminis are known for being adaptable, curious, and sociable. They are intellectually curious and enjoy learning new things. Geminis are also witty and charming, but they can sometimes be indecisive or superficial.',
    'Cancer': 'Cancers are known for being nurturing, emotional, and empathetic. They are deeply connected to their emotions and value family and home life. Cancers are also intuitive and protective, but they can sometimes be moody or overly sensitive.',
    'Leo': 'Leos are known for being confident, generous, and charismatic. They are natural leaders and enjoy being in the spotlight. Leos are also warm-hearted and loyal, but they can sometimes be arrogant or attention-seeking.',
    'Virgo': 'Virgos are known for being practical, analytical, and detail-oriented. They have a strong sense of responsibility and enjoy helping others. Virgos are also modest and reliable, but they can sometimes be overly critical or perfectionistic.',
    'Libra': 'Libras are known for being diplomatic, charming, and romantic. They value harmony and fairness in all aspects of life. Libras are also sociable and cooperative, but they can sometimes be indecisive or prone to avoiding confrontation.',
    'Scorpio': 'Scorpios are known for being passionate, resourceful, and determined. They have a strong sense of purpose and are not afraid to pursue their goals. Scorpios are also loyal and intuitive, but they can sometimes be secretive or controlling.',
    'Sagittarius': 'Sagittarians are known for being optimistic, adventurous, and philosophical. They have a love for freedom and exploration. Sagittarians are also generous and open-minded, but they can sometimes be tactless or prone to taking risks.'
};
function showZodiac(sign) {
    const description = zodiacDescriptions[sign];
    const outputElement = document.getElementById("zodiacOutput");

    outputElement.innerHTML = `
        <p style="color: white;">Your sign is <strong>${sign}</strong>.</p>
        <p style="color: white;">${description}</p>
    `;

    const audioPlayer = document.getElementById(`${sign.toLowerCase()}Audio`);
    audioPlayer.src = zodiacSounds[sign];
    audioPlayer.play();


}
function getZodiac() {
    const inputDate = new Date(document.getElementById('dateInput').value);
    const month = inputDate.getMonth() + 1; 
    const day = inputDate.getDate();

    let zodiacSign = '';

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        zodiacSign = 'Capricorn';
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        zodiacSign = 'Aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiacSign = 'Pisces';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        zodiacSign = 'Aries';
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        zodiacSign = 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiacSign = 'Gemini';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiacSign = 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiacSign = 'Leo';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiacSign = 'Virgo';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiacSign = 'Libra';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
        zodiacSign = 'Scorpio';
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        zodiacSign = 'Sagittarius';
    }

    showZodiac(zodiacSign);
}
