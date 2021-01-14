import RPi.GPIO as GPIO
import time
import datetime
import serial

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

TRIG = 23
ECHO = 24
LED = 14

GPIO.setup(TRIG,GPIO.OUT)
GPIO.setup(ECHO,GPIO.IN)
GPIO.setup(LED,GPIO.OUT, initial=GPIO.LOW)




def getGas():
	ser = serial.Serial('/dev/ttyACM0', 9600)
	ser.flushInput()

	try:
		b = ser.readline().decode('ascii').strip()
		if b == "" or b == ".00" or b == "0.00" or b == "0.0" or b == " " or b == "00 0": #serial string is sometimes incomplete and throws an error
			b = "0"
			CH4 = b
		else:
			CH4 = b

	except UnicodeDecodeError:
		print(ser.readline())
		CH4 = "0"

	return(CH4)


def date_now():
	today = datetime.datetime.now().strftime("%Y-%m-%d")
	today = str(today)
	return(today)

def time_now():
	now = datetime.datetime.now().strftime("%H:%M:%S")
	now = str(now)
	return(now)

def getDist():
		GPIO.output(TRIG, False)
		GPIO.output(TRIG, True)
		time.sleep(0.00001)
		GPIO.output(TRIG, False)
		pulse_start = time.time()
		pulse_end = time.time()
		
		while GPIO.input(ECHO) == 0:
			pulse_start = time.time()
		while GPIO.input(ECHO) == 1:
			pulse_end = time.time()

		pulse_duration = pulse_end - pulse_start

		distance = pulse_duration * 17150

		if distance <= 40:
			GPIO.output(LED, True)
		else:
			GPIO.output(LED, False)

		distance = round(float(distance),2)

		return(distance)