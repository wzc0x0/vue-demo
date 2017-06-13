/**
 * Created by dell、 on 2017/6/13.
 */
let jsSHA = require("jssha");
export default (json)=>{
  let shaObj = new jsSHA("SHA-1","TEXT");
  shaObj.update(dicSort(json));
  let res = shaObj.getHash("HEX");
  let product = {
    "sign":res.toUpperCase(),
    "platformNo":"3020",
    "reqData":json
  };
  return  product ;

  //目前不支持嵌套json格式

  function dicSort(json) {
    let addSign = "";
    let dic = Object.keys(json).sort();
    for(let i in dic){
      addSign += dic[i]+json[dic[i]];
    }
    return addSign += "D6E45D1605F34FE00D6231617BE6E5D8";
  }
}
