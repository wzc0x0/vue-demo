/**
 * Created by dell、 on 2017/6/8.
 */
let Url = "";

if(process.env.NODE_ENV == 'development'){
  Url = "http://10.1.20.113:8096/ordersys/v2/";//开发环境
}else if(process.env.NODE_ENV == 'production'){
  Url = "http://10.1.20.113:8096/ordersys/v1/";
}

export {
  Url
}
