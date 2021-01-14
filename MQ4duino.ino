/* MQ4 Sensor - Analog Output Example
* Prints out methane concentration in PPM to serial monitor
* by R. Pelayo
*
* From TeachMeMicro (www.teachmemicro.com/arduino-mq4-methane-sensor
*
* Date Created: 09/11/2020
*/
#include <movingAvg.h>
const byte MQ4_Pin = A0; //MQ4 A1 pin
const int R_0 = 1015; //Change this to your own R0 measurements
movingAvg CH4(5);
 
void setup() {
   Serial.begin(9600);
   CH4.begin();
   delay(20);
}
 
void loop() {
   Serial.println(getMethanePPM());
}
 
/*
* getMethanePPM returns an int value in avgPPM of methane concentration over a 20 sample window (equivalent to 4 seconds)
*/
int getMethanePPM(){
   float a0 = analogRead(A0); // get raw reading from sensor
   float v_o = a0 * 5 / 1023; // convert reading to volts
   float R_S = (5-v_o) * 1000 / v_o; // apply formula for getting RS
   float PPM = pow(R_S/R_0,-2.95) * 1000; //apply formula for getting PPM
   int avg = CH4.reading(PPM);
   return avg; // return moving average value to calling function
}
