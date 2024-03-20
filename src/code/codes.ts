// 自定义返回格式
export type Code = number;

// 全局 code 码
export const Oka: Code = 2000; // 请求成功
export const Red: Code = 3000; // 登录过期
export const Bad: Code = 4000; // 请求错误
export const Err: Code = 5000; // 系统异常

// Reveal 流露：按特定格式返回数据
export function reveal(
  code: Code,
  resp: Record<string, any>
): Record<string, any> {
  let msg = "success";
  // 如果有 msg 信息则将 resp 中的 msg 移到上层，否则返回默认值
  if (resp.hasOwnProperty("msg")) {
    msg = resp["msg"] as string;
    delete resp["msg"];
  } else if (code >= Bad) {
    msg = "error";
  }
  // 构建返回数据
  return {
    code, // 返回状态码
    msg, // 返回消息
    data: resp, // 返回数据
  };
}
