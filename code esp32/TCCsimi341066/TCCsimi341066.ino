String comando = "", resposta = "";
String string;
#define sensorGas 13
#define sensorChama 12

void setup() {
  Serial.begin(9600);
  Serial2.begin(9600, SERIAL_8N1, 4, 2); //PORTAS RX E TX | MUDAR AQUI CASO ESTEJA USANDO OUTRA PORTA OU MICROCONTROLADOR
  pinMode(sensorChama, INPUT);
  pinMode(sensorGas,INPUT);
  Serial2.println("AT");
  delay(5000);
  Serial2.println("AT+JOIN");
  delay(10000);
}

void loop() {
  int valorSensorGas = analogRead(sensorGas); 
  int valorSensorChama = analogRead(sensorChama);

  enviaDados(valorSensorGas,valorSensorChama); 

  while(Serial.available()){
    comando += String(char(Serial.read()));
    delay(25);
  }
  if(comando != ""){
    Serial2.println(comando);
    comando = "";
  }
  while(Serial2.available()){
    resposta += String(char(Serial2.read()));
    delay(25);
  }
  if(resposta != ""){
    Serial.println(resposta);
    resposta = "";
  }
  delay(10000);
}

void enviaDados(int valorGas,int valorChama) { 
  if (valorChama == 4095){
    String mensagem = "AT+SEND=3:" + String(valorGas) +"|OK"; 
    Serial2.println(mensagem);
    Serial.println(valorChama);
  }
  else {
  String mensagem = "AT+SEND=3:" + String(valorGas) +"|C"; 
  Serial2.println(mensagem);
  Serial.println(valorChama);
}
}