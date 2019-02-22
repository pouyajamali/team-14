//testing

var test = Processor.Exec(0x0000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x0000);
	if(temp !== undefined){
		test = temp;
	}
}

document.write(test.name + "<br><br>" );

if(test.name == "display_clear"){
	//print test passed
	document.write("Test Passed BITCH<br>");
}
else{

	document.write("Test Failed<br>");
}

test = Processor.Exec(0x000E);
var temp = test;
while(temp !== undefined){
	temp = temp(0x000E);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "return_routine"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x1000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x1000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "jumpToNNN"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x2000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x2000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "callFunction"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x3000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x3000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIVXeqNN"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x4000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x4000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIVXneqNN"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x5000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x5000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIVXeqVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}


test = Processor.Exec(0x6000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x6000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setRegVXtoNN"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}


test = Processor.Exec(0x7000)
var temp = test;
while(temp !== undefined){
	temp = temp(0x7000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "addNNtoVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}


test = Processor.Exec(0x8000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x8000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x8001)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8001);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoVXorVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x8002)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8002);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoVXandVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}


test = Processor.Exec(0x8003);
var temp = test;
while(temp !== undefined){
	temp = temp(0x8003);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoVXxorVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}


test = Processor.Exec(0x8004)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8004);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "addVYtoVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x8005)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8005);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "substractVYfromVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x8006)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8006);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "shiftVXRight"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x8007)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8007);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoVYminusVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x800E)
var temp = test;
while(temp !== undefined){
	temp = temp(0x800E);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "shiftVXLeft"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0x9000)
var temp = test;
while(temp !== undefined){
	temp = temp(0x9000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIVXneqVY"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xA000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xA000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setItoAdress"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xB000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xB000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "jumpToAdressPlusV0"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xC000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xC000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVxToRandomAndNN"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xD000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xD000);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "drawSprite"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF007)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF007);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setVXtoDR"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF00A)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF00A);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "waitForKey"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF015)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF015);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setDRToVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF018)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF018);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setSRToVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF01E)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF01E);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "setIToLocationOfSpriteFromVX"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF033)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF033);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "storeBCDofVXatI"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF055)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF055);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "storeV0toVXInMemory"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xF065)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF065);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "fillV0toVXWithMemory"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xE09E)
var temp = test;
while(temp !== undefined){
	temp = temp(0xE09E);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIIfKeyInVXPressed"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}

test = Processor.Exec(0xE0A1)
var temp = test;
while(temp !== undefined){
	temp = temp(0xE0A1);
	if(temp !== undefined){
		test = temp;
	}
}

if(test.name === "skipNIIfKeyInVXNOTPressed"){
	//print test passed
	document.write("Test Passed<br>");
}
else{
	document.write("Test Failed<br>");
}











