// 문제
// 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : str
// string 타입의 공백이 있는 알파벳 문자열
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 단어는 공백으로 구분합니다.
// 연속된 공백이 존재할 수 있습니다.
// 빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

function letterCapitalize(str) {
    if(str.length ===0){
      return ''
    }
    let result = str.split(' ')
    
    for(let i = 0; i < result.length; i++){
      //연속된 공백이 존재할 수 있습니다.
      if(result[i].length>0){
        //result[i]가 공백일 경우는 제거한다. 
     result[i] = result[i][0].toUpperCase() + result[i].substr(1)
      // result[i][0].toUpperCase() + result[i].substr(1)의 값을 result[i]에 다시 할당해준다. 
      }
    }
    let bb = result.join(' ')
    // result의 문자열을 ' '(띄어쓰기)로 다시 붙여준다.
    return bb
    // TODO: 여기에 코드를 작성합니다.
  }
  
  
  //split을 사용하면 될 것 같은데 
  
  //substr()
  // 문자열.substr(start, length)
  // 문자열 중 첫번째 인자(start)에서부터 두번째 인자(length)까지의 구간에 해당하는 문자열을 반환합니다. 
  // length를 지정하지 않으면 start에서부터 문자열 전체를 처리구간으로 간주합니다. 
  // start가 양수일 경우, 문자의 길이 보다 작으면 빈문자열이 리턴됩니다. 
  // start가 음수일 경우, start의 index는 문자열의 뒤에서부터 시작됩니다.
  
  // .join(기준)
  // const arr = ['바람', '비', '물'];
  // console.log(arr.join('-'));
  // 바람-비-물