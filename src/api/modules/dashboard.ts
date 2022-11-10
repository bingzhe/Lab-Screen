import service from '@/api/http';

const dashboardApi = {
  // 验证登录实例
  homeDataApi: () => service.get(`/webapi/device/16552595723210menci0001008000012f/detail`),
};

export default dashboardApi;
