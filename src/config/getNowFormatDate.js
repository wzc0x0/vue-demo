/**
 * Created by dell、 on 2017/6/11.
 */
export default ()=>{
  let day = new Date();
  let Year = day.getFullYear();
  let Month = day.getMonth()+1;
  let Day = day.getDate();
  let CurrentDate = "";
  CurrentDate += Year + "-";
  if (Month >= 10 )
  {
    CurrentDate += Month + "-";
  }
  else
  {
    CurrentDate += "0" + Month + "-";
  }
  if (Day >= 10 )
  {
    CurrentDate += Day ;
  }
  else
  {
    CurrentDate += "0" + Day ;
  }

  return CurrentDate;
}
