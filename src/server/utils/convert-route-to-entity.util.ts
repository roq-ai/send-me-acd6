const mapping: Record<string, string> = {
  items: 'item',
  transactions: 'transaction',
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
