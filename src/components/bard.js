import { Bard } from "googlebard";

let cookies = `__Secure-1PSID=YwhsD8WZd8EBQe_iovRXTBIjLiN7SYW2Uwv5pG3qrqDwx3R4etGyGEXAmttbU6KV6vVJkA`;
let apiKey = "AIzaSyBZpuWba96GcrAKkT60GudDo1d5Dj_ufqs";
let projectId = "perceptor-393402";
let bot = new Bard(cookies, {
  apiKey,
  projectId,
  inMemory: false,
  savePath: "./conversations.json",
});

let conversationId = bot.getConversationId();
console.log(conversationId);