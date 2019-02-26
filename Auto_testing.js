//testing




//gets final fuction being executed
var test = Processor.Exec(0x0000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x0000);
	if(temp !== undefined){
		test = temp;
	}
}
//store previous values
var procPC = Processor.PC;
var drawFlag = Processor.DRAW_FLAG;
//execute opcode function
test(0x0000);
//check states after execution
if(test.name === "display_clear" && drawFlag === true && Processor.PC == procPC+2){
	document.write("Test 1 Passed <br>");	
}
else{

	document.write("Test 1 Failed<br>");
}
//repeat above for rest of test checking states after execution

test = Processor.Exec(0x000E);
var temp = test;
while(temp !== undefined){
	temp = temp(0x000E);
	if(temp !== undefined){
		test = temp;
	}
}
var procSP = Processor.SP;
test(0x000E);
if(test.name === "return_routine" && Processor.SP === procSP-1){
	
	//print test passed
	document.write("Test 2 Passed<br>");
}
else{
	document.write("Test 2 Failed<br>");
}

test = Processor.Exec(0x1000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x1000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = 0x1000 & 0x0FFF;
test(0x1000);

if(test.name === "jumpToNNN" && Processor.PC === procPC){
	//print test passed
	document.write("Test 3 Passed<br>");
}
else{
	document.write(" Test 3 Failed<br>");
}

test = Processor.Exec(0x2000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x2000);
	if(temp !== undefined){
		test = temp;
	}
}
procSP = Processor.SP;
test(0x2000);

if(test.name === "callFunction" && Processor.SP === procSP+1){
	//print test passed
	document.write("Test 4 Passed<br>");
}
else{
	document.write("Test 4 Failed<br>");
}

test = Processor.Exec(0x3000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x3000);
	if(temp !== undefined){
		test = temp;
	}
}

procPC = Processor.PC;
test(0x3000);

if(test.name === "skipNIVXeqNN" && (Processor.PC = procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 5 Passed<br>");
}
else{
	document.write("Test 5 Failed<br>");
}

test = Processor.Exec(0x4000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x4000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x4000);

if(test.name === "skipNIVXneqNN" && (Processor.PC = procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 6 Passed<br>");
}
else{
	document.write("Test 6 Failed<br>");
}

test = Processor.Exec(0x5000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x5000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x5000);

if(test.name === "skipNIVXeqVY" && (Processor.PC === procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 7 Passed<br>");
}
else{
	document.write("Test 7 Failed<br>");
}


test = Processor.Exec(0x6000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x6000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x6000);

if(test.name === "setRegVXtoNN" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 8 Passed<br>");
}
else{
	document.write("Test 8 Failed<br>");
}


test = Processor.Exec(0x7000)
var temp = test;
while(temp !== undefined){
	temp = temp(0x7000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x7000);

if(test.name === "addNNtoVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 9 Passed<br>");
}
else{
	document.write("Test 9 Failed<br>");
}


test = Processor.Exec(0x8000);
var temp = test;
while(temp !== undefined){
	temp = temp(0x8000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8000);

if(test.name === "setVXtoVY" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 10 Passed<br>");
}
else{
	document.write("Test 10 Failed<br>");
}

test = Processor.Exec(0x8001)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8001);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8001);

if(test.name === "setVXtoVXorVY" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 11 Passed<br>");
}
else{
	document.write("Test 11 Failed<br>");
}

test = Processor.Exec(0x8002)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8002);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8002);

if(test.name === "setVXtoVXandVY" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 12 Passed<br>");
}
else{
	document.write("Test 12 Failed<br>");
}


test = Processor.Exec(0x8003);
var temp = test;
while(temp !== undefined){
	temp = temp(0x8003);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8003);

if(test.name === "setVXtoVXxorVY" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 13 Passed<br>");
}
else{
	document.write("Test 13 Failed<br>");
}


test = Processor.Exec(0x8004)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8004);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8004);

if(test.name === "addVYtoVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 14 Passed<br>");
}
else{
	document.write("Test 14 Failed<br>");
}

test = Processor.Exec(0x8005)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8005);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8005);

if(test.name === "substractVYfromVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 15 Passed<br>");
}
else{
	document.write("Test 15 Failed<br>");
}

test = Processor.Exec(0x8006)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8006);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8006);

if(test.name === "shiftVXRight" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 16 Passed<br>");
}
else{
	document.write("Test 16 Failed<br>");
}

test = Processor.Exec(0x8007)
var temp = test;
while(temp !== undefined){
	temp = temp(0x8007);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x8007);

if(test.name === "setVXtoVYminusVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 17 Passed<br>");
}
else{
	document.write("Test 17 Failed<br>");
}

test = Processor.Exec(0x800E)
var temp = test;
while(temp !== undefined){
	temp = temp(0x800E);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x800E);

if(test.name === "shiftVXLeft" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 18 Passed<br>");
}
else{
	document.write("Test 18 Failed<br>");
}

test = Processor.Exec(0x9000)
var temp = test;
while(temp !== undefined){
	temp = temp(0x9000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0x9000);

if(test.name === "skipNIVXneqVY" && (Processor.PC === procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 19 Passed<br>");
}
else{
	document.write("Test 19 Failed<br>");
}

test = Processor.Exec(0xA000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xA000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xA000);

if(test.name === "setItoAdress" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 20 Passed<br>");
}
else{
	document.write("Test 20 Failed<br>");
}

test = Processor.Exec(0xB000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xB000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xB000);

if(test.name === "jumpToAdressPlusV0"){
	if(Processor.PC === (0xB000 & 0x0FFF) + Processor.REGISTER_SET[0]){
		document.write("Test 21 Passed<br>");
	}
	else{
		document.write("Test 21 Failed<br>");
	}
	
}
else{
	document.write("Test 21 Failed<br>");
}

test = Processor.Exec(0xC000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xC000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xC000);

if(test.name === "setVxToRandomAndNN" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 22 Passed<br>");
}
else{
	document.write("Test 22 Failed<br>");
}

test = Processor.Exec(0xD000)
var temp = test;
while(temp !== undefined){
	temp = temp(0xD000);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xD000);

if(test.name === "drawSprite" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 23 Passed<br>");
}
else{
	document.write("Test 23 Failed<br>");
}

test = Processor.Exec(0xF007)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF007);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF007);

if(test.name === "setVXtoDR" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 24 Passed<br>");
}
else{
	document.write("Test 24 Failed<br>");
}

test = Processor.Exec(0xF00A)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF00A);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF00A);

if(test.name === "waitForKey" && Processor.PC === procPC){
	//print test passed
	document.write("Test 25 Passed<br>");
}
else{
	document.write("Test 25 Failed<br>");
}

test = Processor.Exec(0xF015)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF015);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF015);

if(test.name === "setDRToVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 26 Passed<br>");
}
else{
	document.write("Test 26 Failed<br>");
}

test = Processor.Exec(0xF018)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF018);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF018);

if(test.name === "setSRToVX" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 27 Passed<br>");
}
else{
	document.write("Test 27 Failed<br>");
}

test = Processor.Exec(0xF01E)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF01E);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF01E);

if(test.name === "addVXtoI" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 28 Passed<br>");
}
else{
	document.write("Test 28 Failed<br>");
}



test = Processor.Exec(0xF029)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF029);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF029);

if(test.name === "setIToLocationOfSpriteFromVX" && Processor.PC === procPC+2 ){
	//print test passed
	document.write("Test 29 Passed<br>");
}
else{
	document.write(procPC+2)
	document.write(" Test 29 Failed<br>");
}

test = Processor.Exec(0xF033)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF033);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF033);

if(test.name === "storeBCDofVXatI" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 30 Passed<br>");
}
else{
	document.write("Test 30 Failed<br>");
}

test = Processor.Exec(0xF055)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF055);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF055);

if(test.name === "storeV0toVXInMemory" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 31 Passed<br>");
}
else{
	document.write("Test 31 Failed<br>");
}

test = Processor.Exec(0xF065)
var temp = test;
while(temp !== undefined){
	temp = temp(0xF065);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xF065);

if(test.name === "fillV0toVXWithMemory" && Processor.PC === procPC+2){
	//print test passed
	document.write("Test 32 Passed<br>");
}
else{
	document.write("Test 32 Failed<br>");
}

test = Processor.Exec(0xE09E)
var temp = test;
while(temp !== undefined){
	temp = temp(0xE09E);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xE09E);

if(test.name === "skipNIIfKeyInVXPressed" && (Processor.PC === procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 33 Passed<br>");
}
else{
	document.write("Test 33 Failed<br>");
}

test = Processor.Exec(0xE0A1)
var temp = test;
while(temp !== undefined){
	temp = temp(0xE0A1);
	if(temp !== undefined){
		test = temp;
	}
}
procPC = Processor.PC;
test(0xE0A1);

if(test.name === "skipNIIfKeyInVXNOTPressed" && (Processor.PC === procPC+2 || Processor.PC === procPC+4)){
	//print test passed
	document.write("Test 34 Passed<br>");
}
else{
	document.write("Test 34 Failed<br>");
}
