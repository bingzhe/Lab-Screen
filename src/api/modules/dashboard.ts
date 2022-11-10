import service from '@/api/http';

const dashboardApi = {
  // 验证登录实例
  homeDataApi: () => service.get(`/webapi/device/166809176018402862a9ff22f0000012e/detail`),
};

export default dashboardApi;
