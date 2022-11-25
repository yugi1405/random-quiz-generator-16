function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem161(){
	var inputData = [
		{
            'monthly1': 4000,
            'monthly2': 6000,
            'monthly3': 3000
            },{
                'monthly1': 3000,
                'monthly2': 000,
                'monthly3': 3000
                },{
                    'monthly1': 4000,
                    'monthly2': 5000,
                    'monthly3': 2000
                    },{
                        'monthly1': 4000,
                        'monthly2': 5000,
                        'monthly3': 7000
                        },{
                            'monthly1': 9000,
                            'monthly2': 6000,
                            'monthly3': 5000
                            }],
		randomIndex = getRandomNumber(inputData.length),
		monthly1= inputData[randomIndex]['monthly1'],
		monthly2= inputData[randomIndex]['monthly2'],
        monthly3 = inputData[randomIndex]['monthly3'],
        
        
		p,
		question = {};

	p=((monthly1*2+monthly2*2+monthly3*2)/2-(monthly3*2));

	question = {
		'type': 'single',
		'id': '161',
		'question': 'The average monthly income of p and q is '+monthly1+' the average, monthly income q and r ' + monthly +
                'the average of p and r '+ monthly3 +' the monthly income of p is:'
		'options': {
			'A': p,
			'B': p - parseInt(Math.random()*10),
			'C': p + parseInt(Math.random()*10),
			'D': p - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '161'
	}
	
	return question;
	
}

function problem2(){
	
}

function problem3(){
	
}