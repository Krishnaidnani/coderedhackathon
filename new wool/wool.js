let availablekeywords=[
    'woollentops',
    'hat',
    'sweaters',
    'gloves',
    'shoes',
    'jackets',
    'scarf',
    'bags',
    'threads',
    'decoritems',
  ];
  
  const resultbox = document.querySelector(".result-box");
  const inputbox = document.getElementById("input-box");
  
  inputbox.onkeyup = function () {
      let result = [];
      let input = inputbox.value;
  
      if (input.length) {
          result = availablekeywords.filter((keyword) => {
              return keyword.toLowerCase().includes(input.toLowerCase());
          });
  
          console.log(result);
          display(result);
      }
  
      resultbox.innerHTML = "";
      if (result.length) {
          const content = result.map((list) => {
              return "<li onclick=selectinput(this)>" + list + "</li>";
          });
          resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
      }
  };
  
  function display(result) {
    
  }
  function selectinput(list){
    inputbox.value=list.innerHTML;
    resultbox.innerHTML='';
  }