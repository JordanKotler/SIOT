# failsafe
import smtplib
import sys
import traceback
import time

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


def emailTrace(errmsg):
	fromaddr = "siotfailsafe@gmail.com" 
	toaddr = "kotlerjordan@gmail.com" #receipient email address
	msg = MIMEMultipart()
	msg['From'] = fromaddr
	msg['To'] = toaddr
	msg['Subject'] = "SIOT Pi Guard" #email subject
	body = errmsg #setting body of message to error argument passed into function when exception is raised in code
	msg.attach(MIMEText(body, 'plain'))
	server = smtplib.SMTP('smtp.gmail.com', 587) #setting email server and port
	server.starttls()
	server.login(fromaddr, "YOUR_PASSWORD_HERE") #account login details
	text = msg.as_string()
	server.sendmail(fromaddr, toaddr, text)
	server.quit()



