let scores = [
{'name':'철수', 'score':90},
{'name':'영희', 'score':85},
{'name':'민수', 'score':70},
{'name':'형준', 'score':50},
{'name':'기남', 'score':68},
{'name':'동희', 'score':30},
]

for (let i = 0 ; i < scores.length ; i++) {
    if(scores[i]["score"] <70){
        console.log(scores[i]);
    }
}

// 이렇게 하면 리스트 내의 딕셔너리를 하나씩 출력할 수 있고,
