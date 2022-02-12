const logger = require("./logger");

logger.info("==================== start running log ====================");
logger.info("info infomation");
logger.warn("warn information");
logger.debug("debug information");
logger.error("error information");

/*
"1.当run[-script]被 test, start, restart, and stop这四个自带的命令所使用时，它可以被省略（或者说不需要加“run”就可以直接调用），所以我们平时最常输入的npm start实际上相当于npm run start，只不过是为了方便省略了run而已
 

2.当你在package.json的script字段中定义的是除了1中的4个命令外的命令的时候，你就不能省略“run”了"
*/
