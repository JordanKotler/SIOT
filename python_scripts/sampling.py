#sampling

import sensordata
import crypto
import failsafe
import gsheets
import time
import datetime
import smtplib
import traceback
import csv
import RPi.GPIO as GPIO
import requests



def date_now():
	today = datetime.datetime.now().strftime("%Y-%m-%d")
	today = str(today)
	return(today)

def time_now():
	now = datetime.datetime.now().strftime("%H:%M:%S")
	now = str(now)
	return(now)

def cryptoCSV():
	cryptoRaw = open('/home/pi/Desktop/cryptoRaw.csv', mode='a')
	crypto_write = csv.writer(cryptoRaw, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
	write_to_log1 = crypto_write.writerow([date_now(),time_now(), crypto.getCrypto()[0], crypto.getCrypto()[1]])
	cryptoRaw.close()

def sensorCSV():
	sensorRaw = open('/home/pi/Desktop/sensorRaw.csv', mode='a')
	sensor_write = csv.writer(sensorRaw, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
	write_to_log2 = sensor_write.writerow([date_now(),time_now(), sensordata.getDist(), sensordata.getGas()]) 
	sensorRaw.close()



def gen_data():
	distance = sensordata.getDist()
	CH4 = sensordata.getGas()
	btc = crypto.getCrypto()[0]
	eth = crypto.getCrypto()[1]
	now = datetime.datetime.now()
	timestamp = ("{0:%Y}-{0:%m}-{0:%d}_{0:%H}.{0:%M}.{0:%S}".format(now))
	cryptoCSV()
	sensorCSV()
	return(timestamp, distance, CH4, btc, eth)

start = time.time()
run_period = 54000



try:
	cloud_data = gsheets.Sheets_Logging()
	while True:
		data = gen_data()
		cloud_data.write_data(data=data)
		time.sleep(15)
		if time.time() > start + run_period :
			exit()



except:
	e = traceback.format_exc()
	failsafe.emailTrace(e)
	GPIO.cleanup()
	print("something went wrong so fix it")

