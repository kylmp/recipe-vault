export type SideNavItem = {
  id: string;
  name: string;
  icon?: string;
  route: string;
};

export type AlertPayload = string | { message?: string; timeout?: number; color?: string; };
export type AlertApi = {
  send: (data: AlertPayload) => void;
  success: (data: AlertPayload) => void;
  error: (data: AlertPayload) => void;
  clear: () => void;
};
