//testing

var test = Processor.Exec(0x0000)

if(test === "display_clear"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x000E)

if(test === "return_routine"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x1000)

if(test === "jumpToNNN"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x2000)

if(test === "callFunction"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x3000)

if(test === "skipNIVXeqNN"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x4000)

if(test === "skipNIVXneqNN"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x5000)

if(test === "skipNIVXeqVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}


test = Processor.Exec(0x6000)

if(test === "setRegVXtoNN"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}


test = Processor.Exec(0x7000)

if(test === "addNNtoVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}


test = Processor.Exec(0x8000)

if(test === "setVXtoVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x8001)

if(test === "setVXtoVXorVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x8002)

if(test === "setVXtoVXandVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}


test = Processor.Exec(0x8003)

if(test === "setVXtoVXxorVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}


test = Processor.Exec(0x8004)

if(test === "addVYtoVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x8005)

if(test === "substractVYfromVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x8006)

if(test === "shiftVXRight"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x8007)

if(test === "setVXtoVYminusVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x800E)

if(test === "shiftVXLeft"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0x9000)

if(test === "skipNIVXneqVY"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xA000)

if(test === "setItoAdress"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xB000)

if(test === "jumpToAdressPlusV0"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xC000)

if(test === "setVxToRandomAndNN"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xD000)

if(test === "drawSprite"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF007)

if(test === "setVXtoDR"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF00A)

if(test === "waitForKey"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF015)

if(test === "setDRToVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF018)

if(test === "setSRToVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF01E)

if(test === "setIToLocationOfSpriteFromVX"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF033)

if(test === "storeBCDofVXatI"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF055)

if(test === "storeV0toVXInMemory"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xF065)

if(test === "fillV0toVXWithMemory"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xE09E)

if(test === "skipNIIfKeyInVXPressed"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}

test = Processor.Exec(0xE0A1)

if(test === "skipNIIfKeyInVXNOTPressed"){
	//print test passed
	document.write("Test Passed");
}
else{
	document.write("Test Failed");
}






