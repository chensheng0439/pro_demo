import { Toast } from "vant";

export function openLoading(text: string) {
  Toast.loading({
    message: text || '',
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    overlay: true,
    loadingType: 'spinner'  //默认 circular
  });
}

export function closeLoading() {
  Toast.clear()
}

export const VantToast = Toast