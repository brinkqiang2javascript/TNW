import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "TNW 极速开发微信公众号 Nest.js Demo <a href='https://javen.blog.csdn.net'>By Javen</a> <br/><br/> " +
      "交流群：<a href='https://github.com/Javen205/shang.qq.com/wpa/qunwpa?idkey=a1e4fd8c71008961bd4fc8eeea224e726afd5e5eae7bf1d96d3c77897388bf24'>114196246</a><br/><br/>" +
      "开源推荐：<br/>" +
      "1、IJPay 让支付触手可及：<a href=\"https://gitee.com/javen205/IJPay\">https://gitee.com/javen205/IJPay</a><br/>" +
      "2、SpringBoot 微服务高效开发 mica 工具集：<a href=\"https://gitee.com/596392912/mica\">https://gitee.com/596392912/mica</a><br/>" +
      "3、pig 宇宙最强微服务（架构师必备）：<a href=\"https://gitee.com/log4j/pig\">https://gitee.com/log4j/pig</a><br/>" +
      "4、SpringBlade 完整的线上解决方案（企业开发必备）：<a href=\"https://gitee.com/smallc/SpringBlade\">https://gitee.com/smallc/SpringBlade</a><br/>" +
      "5、Avue 一款基于 vue 可配置化的神奇框架：<a href=\"https://gitee.com/smallweigit/avue\">https://gitee.com/smallweigit/avue</a> ";
  }
}
