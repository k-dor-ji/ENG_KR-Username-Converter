from jamo import h2j, j2hcj, j2h # type: ignore
from krList import NAME_OVERRIDES
from krMappings import COMPOUND_VOWELS, QWERTY
from googletrans import Translator # type: ignore
import time
import logging

logging.basicConfig(
    filename="translation.log",
    filemode='a',
    level=logging.INFO,
    encoding='utf-8',
    format='%(asctime)s - %(levelname)s - %(message)s - %(lineno)d'
)

def fully_decompose(hangul_text):
    """Fully decompose Hangul including compound vowels and standalone Jamo"""
    jamo_list = []
    
    for char in hangul_text:
        # Check if it's a complete Hangul syllable (가-힣)
        if '가' <= char <= '힣':
            # Decompose syllable
            decomposed = list(j2hcj(h2j(char)))
            
            # Further decompose compound vowels
            for jamo in decomposed:
                if jamo in COMPOUND_VOWELS:
                    jamo_list.extend(COMPOUND_VOWELS[jamo])
                else:
                    jamo_list.append(jamo)
        
        # Check if it's already a Jamo character (ㄱ-ㅎ, ㅏ-ㅣ)
        elif ('ㄱ' <= char <= 'ㅎ') or ('ㅏ' <= char <= 'ㅣ'):
            # It's already decomposed, check for compound vowels
            if char in COMPOUND_VOWELS:
                jamo_list.extend(COMPOUND_VOWELS[char])
            else:
                jamo_list.append(char)
    
    return jamo_list

async def convert_any_name(english_name):
    if english_name == "":
        logging.warning("Empty input")
        return {"qwerty":"Nothing entered"}
    name_lower = english_name.lower().strip()

    if name_lower in NAME_OVERRIDES:
        hangul = NAME_OVERRIDES[name_lower]
        total_time = 0
        logging.info(f"Manual override for {hangul} located.")
    else:
        try:
            async with Translator() as translator:
                start = time.time()
                result = await translator.translate(english_name, src='en', dest='ko')
                end = time.time()
                total_time = end-start
                hangul = result.text
                logging.info(f"Auto-translate utilized for entry: {english_name}")
        except Exception as e:
            logging.error(e)
            return {"qwerty":"Translation Error"}
    
    print(f"English: {english_name}")
    print(f"Hangul:  {hangul}")
    jamo = fully_decompose(hangul)
    print(f"Jamo:    {jamo}")
    qwerty = ''.join(QWERTY.get(c,'') for c in jamo)
    print(f"QWERTY:  {qwerty}\n")

    logging.info(f"|{english_name},{hangul},{jamo},{qwerty},{total_time}|")
    return {"qwerty": qwerty, "time": total_time}
