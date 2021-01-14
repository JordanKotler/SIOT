# crypto baby

import requests
import json
from pycoingecko import CoinGeckoAPI


cg = CoinGeckoAPI()

def getCrypto():
	btc = cg.get_price(ids='bitcoin', vs_currencies='gbp')
	eth = cg.get_price(ids='ethereum', vs_currencies='gbp')
	bitcoin_rate = btc["bitcoin"]["gbp"]
	ethereum_rate = eth["ethereum"]["gbp"]
	return(bitcoin_rate, ethereum_rate)


