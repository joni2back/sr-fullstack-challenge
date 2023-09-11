import database from '../database'; //data mock

export async function fetchDeliveries(attrs: any): Promise<any[]> {
  return database.deliveries;
}

export async function fetchDelivery(attrs: any): Promise<any> {
  return database.deliveries.find(i => i.id == attrs.id);
}

export async function fetchItems(attrs: any): Promise<any[]> {
  return database.items;
}

export async function fetchItem(attrs: any): Promise<any> {
  return database.items.find(i => i.id == attrs.id);
}
