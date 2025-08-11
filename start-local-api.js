const server = require('netease-cloud-music-api-alger/server');

async function startLocalApi() {
  console.log('🚀 启动本地网易云音乐 API 服务...');
  
  try {
    await server.serveNcmApi({
      port: 30488
    });
    
    console.log('✅ 本地音乐 API 服务启动成功！');
    console.log('🌐 服务地址: http://localhost:30488');
    console.log('📱 可以开始使用本地服务进行开发了');
  } catch (error) {
    console.error('❌ 启动失败:', error);
  }
}

startLocalApi(); 